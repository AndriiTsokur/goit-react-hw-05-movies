import { Routes, Route } from 'react-router-dom';
import SharedLayout from './SharedLayout/SharedLayout';
import HomePage from 'pages/HomePage';
import MoviesPage from 'pages/MoviesPage/MoviesPage';
import MovieDetails from 'pages/MoviesPage/MovieDetails';
import Cast from './Movies/Cast';
import Reviews from './Movies/Reviews';

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<SharedLayout />}>
				<Route index element={<HomePage />} />
				<Route path="/movies" element={<MoviesPage />} />
				<Route path="/movies/:movieId" element={<MovieDetails />}>
					<Route path="cast" element={<Cast />} />
					<Route path="reviews" element={<Reviews />} />
				</Route>
				<Route path="*" element={<HomePage />} />
			</Route>
		</Routes>
	);
};

export default App;
