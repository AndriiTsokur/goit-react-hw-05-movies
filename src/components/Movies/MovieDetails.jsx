import { NavLink, Outlet, useParams } from 'react-router-dom';

const MovieDetails = () => {
	const { movieId } = useParams();

	return (
		<main>
			<article>
				<h2>Movie #{movieId} Details</h2>
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
		</main>
	);
};

export default MovieDetails;
