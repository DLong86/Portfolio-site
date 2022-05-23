import styles from './About.module.css';

const About = () => {
	return (
		<div className={styles['about-main']}>
			<div className={styles.profile}></div>
			<div className={styles['about-container']}>
				<h1>Hey, I'm Dave, a Web Developer</h1>
				<h1>
					from London, living in Tokyo<span>.</span>
				</h1>
				<div className={styles.section1}>
					<p>Apart from copying and pasting things from Stack Overflow,</p>
					<p>I also enjoy skateboarding, cycling trips with friends, Hiking,</p>
					<p>video games, and loads more.</p>
				</div>
				{/* Remove this break later */}
				<br />
				<div className={styles.section2}>
					<p>I now have a few years experience coding, building pet projects</p>
					<p>as well as helping code for design companies like Sane & Able </p>
					<p>And Kaori Ito Photography.</p>
					<p>
						So far, I've mostly been using HTML, CSS, JavaScript, React.js,
						Firebase,
					</p>
					<p>
						and have a basic understanding of Node.js, MongoDB, React Native and
						Tailwind.
					</p>
				</div>
				{/* Remove this break later */}
				<br />
				<div className={styles.section3}>
					<p>
						Before fully commiting to turning my hobby of coding into a full
						time career,
					</p>
					<p>I worked for 11 years as a hairdresser in London,</p>
					<p>
						up until moving to Japan, where I've spent the past 5 years as an
						English teacher.
					</p>
				</div>
			</div>
		</div>
	);
};

export default About;
