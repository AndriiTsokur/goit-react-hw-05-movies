const fetchOptions = {
	method: 'GET',
	headers: {
		accept: 'application/json',
		Authorization:
			'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YzY2MGMwMDU0YjI4ZjIwYzM1YWU0Y2Q2ZTJiY2QzZCIsInN1YiI6IjY0NzhiMzc4ZTMyM2YzMDEyNzUwNjViYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XxeUNkXEoMs695LCPek5urTS4foOswzKTDFZe1nIx0E',
	},
};

const API_URL = 'https://api.themoviedb.org/3';
export const PICTS_BASE_URL = 'https://image.tmdb.org/t/p/original';

const queries = {
	trending: `${API_URL}/trending/movie/day?language=en-US`,
	// trending: API_URL + 'trending/movie/day?language=en-US',
	search: `${API_URL}/search/movie`,
	other: `${API_URL}/movie/`,
	// other: API_URL + 'movie/',
};

const fetchData = async (option, id) => {
	let resp = '';

	switch (option) {
		case 'trending':
			resp = await fetch(queries[option], fetchOptions);
			break;

		case 'details':
			resp = await fetch(queries.other + id, fetchOptions);
			break;

		case 'search':
			resp = await fetch(`${queries[option]}?query=${id}`, fetchOptions);
			break;

		default:
			resp = await fetch(queries.other + id + `/${option}`, fetchOptions);
			break;
	}

	return resp.json();
};

export default fetchData;

// Trending Movies - https://api.themoviedb.org/3/trending/movie/
// Movie Details - https://api.themoviedb.org/3/movie/
// Movie Reviews - https://api.themoviedb.org/3/movie/{movie_id}/reviews
// Movie Credits - https://api.themoviedb.org/3/movie/{movie_id}/credits
// Search Movie - https://api.themoviedb.org/3/search/movie
