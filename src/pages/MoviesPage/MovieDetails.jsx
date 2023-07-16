import { useEffect, useState } from 'react';
import {
	Link,
	NavLink,
	Outlet,
	useLocation,
	useParams,
} from 'react-router-dom';
import fetchData, { PICTS_BASE_URL } from 'utils/api';
import clearFocus from 'utils/clearFocus';
import css from './MovieDetails.module.css';
import posterAbsent from '../../img/poster_absent.jpg';

const MovieDetails = () => {
	const [details, setDetails] = useState({});
	const [errorMsg, setErrorMsg] = useState(null);
	const { movieId } = useParams();
	const location = useLocation();

	useEffect(() => {
		const getData = async (option, selector) => {
			try {
				const movieDetails = await fetchData(option, selector);
				setDetails(movieDetails);
			} catch (error) {
				setErrorMsg(error.message);
				console.log(errorMsg);
			}
		};

		getData('details', movieId);
	}, [movieId, errorMsg]);

	const {
		poster_path,
		title,
		release_date: year,
		vote_average,
		vote_count,
		overview,
		genres,
	} = details;

	const extractGenres = genres => {
		return genres.length > 0
			? genres.reduce((acc, genre) => [...acc, genre.name], []).join(' | ')
			: 'N/A';
	};

	return (
		<main>
			<div className="container">
				<Link to={location.state?.from}>
					<button className={css.button_back} type="button">
						Go Back
					</button>
				</Link>

				{errorMsg !== null && (
					<p>Something wrong. An error occured: {errorMsg}</p>
				)}

				{Object.keys(details).length > 0 && (
					<article>
						<h2>
							{title + ' '}
							{year && (
								<span className={css.movie_year}>({year.slice(0, 4)})</span>
							)}
						</h2>
						<div className={css.movie_info__wrapper}>
							<img
								src={poster_path ? PICTS_BASE_URL + poster_path : posterAbsent}
								width="300"
								alt={title}
							/>
							<div>
								<p className={css.movie__overview}>{overview}</p>
								<p>
									<b>User score:</b>{' '}
									{vote_count > 0
										? `${Math.round(
												vote_average * 10
										  )}% (based on ${vote_count.toLocaleString(
												'de-DE'
										  )} voices)`
										: 'N/A'}
								</p>
								<p>
									<b>Genres:</b> {extractGenres(genres)}
								</p>
							</div>
						</div>

						<div className={css.additional__wrapper}>
							<p className={css.additional__title}>Additional Information:</p>
							<ul className={css.additional__nav_list}>
								<li>
									<NavLink
										to="cast"
										state={{ from: location.state?.from }}
										onClick={clearFocus}
									>
										Cast
									</NavLink>
								</li>
								<li>
									<NavLink
										to="reviews"
										state={{ from: location.state?.from }}
										onClick={clearFocus}
									>
										Reviews
									</NavLink>
								</li>
							</ul>
						</div>
						<Outlet />
					</article>
				)}
			</div>
		</main>
	);
};

export default MovieDetails;
