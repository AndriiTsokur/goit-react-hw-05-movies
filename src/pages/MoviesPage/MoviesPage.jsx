import { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import Loader from 'components/Loader/Loader';
import fetchData from 'utils/api';
import css from './MoviesPage.module.css';

const MoviesPage = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	const [searchResults, setSerachResults] = useState([]);
	const [errorMsg, setErrorMsg] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	const [resultIsVisible, setResultIsVisible] = useState(true);
	const query = searchParams.get('query');
	const location = useLocation();

	useEffect(() => {
		if (!query ?? query === '') return;

		const getData = async (option, selector) => {
			try {
				setIsLoading(true);
				setResultIsVisible(false);

				const { results } = await fetchData(option, selector);
				setSerachResults(results);
			} catch (error) {
				setErrorMsg(error.message);
				console.log(errorMsg);
			} finally {
				setIsLoading(false);
				setResultIsVisible(true);
			}
		};

		getData('search', query);
	}, [query, errorMsg]);

	const handleSubmit = e => {
		e.preventDefault();
		const form = e.currentTarget;

		setSearchParams({ query: form.elements.query.value.trim() });
		form.reset();
	};

	return (
		<main>
			<section>
				<div className="container">
					<h1>Search For Movies</h1>

					<form onSubmit={handleSubmit}>
						<input
							name="query"
							type="text"
							placeholder="Enter your query"
							minLength="2"
							required
						/>
						<button type="submit">Search</button>
					</form>

					{errorMsg !== null && (
						<p>Something wrong. An error occured: {errorMsg}</p>
					)}

					{isLoading && <Loader />}

					{resultIsVisible && query && searchResults.length === 0 ? (
						<p>Requested movie "{query}" is absent in the database</p>
					) : (
						<ul>
							{searchResults.map(({ id, title, release_date: year }) => {
								return (
									<li key={id} className={css.movies_item}>
										<Link to={`/movies/${id}`} state={{ from: location }}>
											{title}{' '}
											{year && (
												<span className={css.movie_year}>
													({year.slice(0, 4)})
												</span>
											)}
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

export default MoviesPage;
