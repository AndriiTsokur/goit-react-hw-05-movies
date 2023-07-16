import { NavLink, Outlet } from 'react-router-dom';
import clearFocus from 'utils/clearFocus';
import css from './SharedLayout.module.css';

const SharedLayout = () => {
	return (
		<>
			<header>
				<div className="container">
					<nav>
						<ul className={css.nav_list}>
							<li className={css.nav_item}>
								<NavLink to="/" onClick={clearFocus}>
									Home
								</NavLink>
							</li>
							<li>
								<NavLink to="/movies" onClick={clearFocus}>
									Movies
								</NavLink>
							</li>
						</ul>
					</nav>
				</div>
			</header>
			<Outlet />
		</>
	);
};

export default SharedLayout;
