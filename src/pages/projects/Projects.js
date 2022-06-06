import { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './Projects.module.css';

const Projects = ({ images }) => {
	return (
		<div className={styles.projects}>
			<div className={styles['image-section']}>
				<div className={styles['image-box']}>
					<h3>Sane & Able</h3>
					<p>Landing Page</p>
					<div className={styles['image1']}></div>
				</div>
				<div className={styles['image-box']}>
					<h3>Sane & Able</h3>
					<p>Landing Page</p>
					<div className={styles['image2']}></div>
				</div>
				<div className={styles['image-box']}>
					<h3>Sane & Able</h3>
					<p>Landing Page</p>
					<div className={styles['image3']}></div>
				</div>
				<div className={styles['image-box']}>
					<h3>Sane & Able</h3>
					<p>Landing Page</p>
					<div className={styles['image3']}></div>
				</div>
				<div className={styles['image-box']}>
					<h3>Sane & Able</h3>
					<p>Landing Page</p>
					<div className={styles['image3']}></div>
				</div>
			</div>
		</div>
	);
};

export default Projects;

