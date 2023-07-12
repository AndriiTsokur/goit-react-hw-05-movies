import { Link } from 'react-router-dom';

const MoviesPage = () => {
	return (
		<main>
			<section>
				<h1>Movies Page</h1>
				<ul>
					{[1, 2, 3, 4, 5].map(movie => {
						return (
							<li key={movie}>
								<Link to={`${movie}`}>Movie {movie}</Link>
							</li>
						);
					})}
				</ul>
			</section>
		</main>
	);
};

export default MoviesPage;
