import { useState, useEffect } from 'react';
import styles from './Projects.module.css';

const Projects = ({ images }) => {
	return (
		<div className={styles.projects}>
			<div className={styles['image-section']}>
				<div className={styles['image-box']}>
					<h3>Skate Gallery</h3>
					<small>App for skateboarders to upload photos</small>
					<div className={styles['image1']}></div>
				</div>
				<div className={styles['image-box']}>
					<h3>Sane & Able</h3>
					<p>deanpiper.com</p>
					<div className={styles['image2']}></div>
				</div>
				<div className={styles['image-box']}>
					<h3>F1 Driver List</h3>
					<small>Driver list and stats for 2022 season</small>
					<div className={styles['image3']}></div>
				</div>
				<div className={styles['image-box']}>
					<h3>Ends</h3>
					<p>Home page</p>
					<small>website for a clothing company</small>
					<div className={styles['image4']}></div>
				</div>
				<div className={styles['image-box']}>
					<h3>Ends</h3>
					<small>Photo gallery page</small>
					<div className={styles['image5']}></div>
				</div>
			</div>
		</div>
	);
};

export default Projects;
