import { useState, useEffect } from 'react';
import styles from './Home.module.css';

const Home = () => {
	const [greeting, setGreeting] = useState('Hello');

	let today = new Date();
	let hours = today.getHours();

	useEffect(() => {
		if (hours > 0 && hours < 12) {
			setGreeting('Morning');
		} else if (hours > 12 && hours < 18) {
			setGreeting('Afternoon');
		} else if (hours > 18 && hours <= 0) {
			setGreeting('Evening');
		}
	}, [hours]);
	return (
		<div className={styles['home-main']}>
			<div className={styles['home-container']}>
				<h1>{greeting},</h1>
				<h1>
					I'm <span className={styles.name}>Dave</span>,
				</h1>
				<h1>
					a Web Developer<span className={styles.dot}>.</span>
				</h1>
			</div>
		</div>
	);
};

export default Home;
