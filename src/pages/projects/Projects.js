import { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './Projects.module.css';

const Projects = ({ images }) => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	};
	return (
		<div className={styles.projectPage}>
			<div className={styles.tag}>
				<p>Just a few bits and pieces...</p>
			</div>
			<div className={styles.imgslider}>
				<Slider {...settings}>
					{images.map(item => (
						<div key={item.id}>
							<p>{item.description}</p>
							<img
								className={styles.projectImg}
								src={item.src}
								alt={item.alt}
							/>
						</div>
					))}
				</Slider>
			</div>
		</div>
	);
};

export default Projects;
