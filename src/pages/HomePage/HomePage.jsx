import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import fetchData from 'utils/api';

const HomePage = () => {
	const [trending, setTrending] = useState([]);
	const [errorMsg, setErrorMsg] = useState(null);

	useEffect(() => {
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
				<h1>Trending Today</h1>

				{errorMsg !== null && (
					<p>Something wrong. An error occured: {errorMsg}</p>
				)}

				{trending.length > 0 && (
					<ul>
						{trending.map(({ id, original_title: title }) => {
							return (
								<li key={id}>
									<Link to={`/movies/${id}`}>{title}</Link>
								</li>
							);
						})}
					</ul>
				)}
			</section>
		</main>
	);
};

export default HomePage;
