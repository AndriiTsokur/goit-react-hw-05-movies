import { useEffect, useState } from 'react';
import { NavLink, Outlet, useParams } from 'react-router-dom';
import fetchData, { POSTER_BASE_URL } from 'utils/api';

const MovieDetails = () => {
	const [details, setDetails] = useState({});
	const [errorMsg, setErrorMsg] = useState(null);
	const [genresList, setGenresList] = useState('');
	const { movieId } = useParams();

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

		getData('movieDetails', movieId);
	});

	const {
		poster_path,
		original_title: title,
		release_date: year,
		vote_average: vote,
		overview,
		genres,
	} = details;

	useEffect(() => {
		if (!genres) return;

		const extractGenres = genres => {
			// setGenresList(
			// 	genres.reduce((arr, genre) => arr.push(genre.name), []).join(' | ')
			// );

			const arr = [];

			for (const genre of genres) {
				arr.push(genre.name);
			}

			setGenresList(arr.join(' | '));
		};

		extractGenres(genres);
	}, [genres, genresList.length]);

	return (
		<main>
			{errorMsg !== null && (
				<p>Something wrong. An error occured: {errorMsg}</p>
			)}

			{Object.keys(details).length > 0 && (
				<article>
					<h2>
						{title} ({year.slice(0, 4)}) id: {movieId}
					</h2>
					<p>User score: {Math.round(vote * 10)}%</p>

					<h3>Overview:</h3>
					<p>{overview}</p>

					<p>
						<b>Genres:</b> {genresList}
					</p>

					<img src={POSTER_BASE_URL + poster_path} width="300" alt={title} />

					<h4>Additional Information:</h4>
					<ul>
						<li>
							<NavLink to="cast">Cast</NavLink>
						</li>
						<li>
							<NavLink to="reviews">Reviews</NavLink>
						</li>
					</ul>
					<Outlet />
				</article>
			)}
		</main>
	);
};

export default MovieDetails;
