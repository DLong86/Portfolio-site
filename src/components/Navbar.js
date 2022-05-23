import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
	const [menu, setMenu] = useState(false);
	const showLinks = () => setMenu(!menu);

	return (
		<nav className='nav'>
			<h1 className='logo'>
				<Link to='/'>DLong</Link>
			</h1>
			<div className='menu-wrap'>
				<ul className={'links' && menu ? 'links open' : 'links'}>
					<li>
						<Link to='/about'>About</Link>
					</li>
					<li>
						<Link to='/projects'>Projects</Link>
					</li>
					<li>
						<Link to='/contact'>Contact</Link>
					</li>
					<li>
						<a href='https://github.com/DLong86'>GitHub</a>
					</li>
					<li>
						<a href='https://codepen.io/your-work'>Codepen</a>
					</li>
				</ul>
				{/* Responsive Nav Menu */}
				<div
					className={'burger' && menu ? 'burger open' : 'burger'}
					onClick={showLinks}
				>
					<span></span>
					<span></span>
					<span></span>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
