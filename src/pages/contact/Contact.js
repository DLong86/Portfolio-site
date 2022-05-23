import styles from './Contact.module.css';

const Contact = () => {
	return (
		<div className={styles['contact-main']}>
			<div className={styles['contact-container']}>
				<h1>Thanks for checking out my site</h1>
				<h2>If you fancy a chat then get in touch at...</h2>
				<h3 className={styles.address}>
					<a href='mailto:daveallenlong@gmail.com'>daveallenlong@gmail.com</a>
				</h3>
				<ul className={styles['contact-links']}>
					<li className={styles.link}>
						<a href='https://www.linkedin.com/in/dave-long-9970b3225/'>
							<i className='fa-brands fa-linkedin'></i>
						</a>
					</li>
					<li className={styles.link}>
						<a href=''>
							<i className='fa-brands fa-instagram'></i>
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Contact;
