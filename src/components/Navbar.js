import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
	const [menu, setMenu] = useState(false);
	const showLinks = () => setMenu(!menu);

	const handleClick = () => setMenu(false);

	return (
		<nav className='nav'>
			<h1 className='logo'>
				<Link to='/'>DLong</Link>
			</h1>
			<div className='menu-wrap'>
				<ul className={'links' && menu ? 'links open' : 'links'}>
					<li>
						<Link className='home-active' onClick={handleClick} to='/'>
							Home
						</Link>
					</li>
					<li>
						<Link onClick={handleClick} to='/about'>
							About
						</Link>
					</li>
					<li>
						<Link onClick={handleClick} to='/projects'>
							Projects
						</Link>
					</li>
					<li>
						<Link onClick={handleClick} to='/contact'>
							Contact
						</Link>
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
