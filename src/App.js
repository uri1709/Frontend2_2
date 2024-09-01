import './App.css';
import styles from './app.module.css';
import data from './data.json';
import { useState } from 'react';

export const App = () => {
	// Можно задать 2 состояния — steps и activeIndex
	const steps = [...data];
	let [activeIndex, setActiveIndex] = useState(0);

	// И определить 3 обработчика: Клик назад, Клик вперед, Начать сначала
	const butBack = () => {
		// console.log('Клик назад');
		setActiveIndex((activeIndex) => (activeIndex - 1 >= 0 ? activeIndex - 1 : 0));
	};

	const butNext = () => {
		// console.log('Клик вперед');
		setActiveIndex((activeIndex) =>
			activeIndex + 1 < steps.length ? activeIndex + 1 : steps.length - 1,
		);
	};

	const butStart = () => {
		// console.log('Начать сначала');
		setActiveIndex(0);
	};

	// И 2 переменных-флага — находимся ли мы на первом шаге, и находимся ли на последнем

	return (
		<div className={styles.container}>
			<div className={styles.card}>
				<h1>Инструкция по готовке пельменей</h1>
				<div className={styles.steps}>
					<div className={styles['steps-content']}>
						{steps[activeIndex].content}
					</div>
					{/* Шаги */}
					<ul className={styles['steps-list']}>
						{steps.map((item, index) => (
							<li
								key={item.id}
								className={
									styles['steps-item'] +
									' ' +
									styles.done +
									(activeIndex < index ? styles.active : '')
								}
							>
								<button
									className={styles['steps-item-button']}
									onClick={() => setActiveIndex(index)}
								>
									{index + 1}
								</button>
								{item.title}
							</li>
						))}
					</ul>
					{/* кнопки Назад, Вперед и Начать сначала */}
					<div className={styles['buttons-container']}>
						<button className={styles.button} onClick={butBack}>
							Назад
						</button>
						<button
							className={styles.button}
							onClick={activeIndex < steps.length - 1 ? butNext : butStart}
						>
							{activeIndex < steps.length - 1 ? 'Далее' : 'Начать сначала'}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
