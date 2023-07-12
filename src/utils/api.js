const fetchOptions = {
	method: 'GET',
	headers: {
		accept: 'application/json',
		Authorization:
			'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YzY2MGMwMDU0YjI4ZjIwYzM1YWU0Y2Q2ZTJiY2QzZCIsInN1YiI6IjY0NzhiMzc4ZTMyM2YzMDEyNzUwNjViYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XxeUNkXEoMs695LCPek5urTS4foOswzKTDFZe1nIx0E',
	},
};

const API_URL = 'https://api.themoviedb.org/3/';
export const POSTER_BASE_URL = 'https://image.tmdb.org/t/p/original';

const queries = {
	trending: API_URL + 'trending/movie/day?language=en-US',
	movieDetails: API_URL + 'movie/',
};

const fetchData = async (option, id) => {
	const resp = await fetch(queries[option] + id, fetchOptions);
	return resp.json();
};

export default fetchData;

// https://api.themoviedb.org/3/trending/movie/
// https://api.themoviedb.org/3/movie/
