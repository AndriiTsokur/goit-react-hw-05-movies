import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import fetchData from 'utils/api';
import css from './HomePage.module.css';

const HomePage = () => {
	const [trending, setTrending] = useState([]);
	const [errorMsg, setErrorMsg] = useState(null);
	const location = useLocation();

	useEffect(() => {
		if (trending.length !== 0) return;

		const getData = async option => {
			try {
				const { results } = await fetchData(option);
				setTrending(results);
			} catch (error) {
				setErrorMsg(error.message);
				console.log(errorMsg);
			}
		};

		getData('trending');
	});

	return (
		<main>
			<section>
				<div className="container">
					<h1>Trending Today</h1>

					{errorMsg !== null && (
						<p>Something wrong. An error occured: {errorMsg}</p>
					)}

					{trending.length > 0 && (
						<ul>
							{trending.map(({ id, title, release_date: year }) => {
								return (
									<li key={id} className={css.movies_item}>
										<Link to={`/movies/${id}`} state={{ from: location }}>
											{title}{' '}
											<span className={css.movie_year}>
												({year.slice(0, 4)})
											</span>
										</Link>
									</li>
								);
							})}
						</ul>
					)}
				</div>
			</section>
		</main>
	);
};

export default HomePage;
