import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import fetchData from 'utils/api';
import css from './Reviews.module.css';

const Reviews = () => {
	const { movieId } = useParams();

	const [reviews, setReviews] = useState([]);
	const [errorMsg, setErrorMsg] = useState(null);

	useEffect(() => {
		const getData = async (option, selector) => {
			try {
				const movieReviews = await fetchData(option, selector);
				setReviews(movieReviews.results);
			} catch (error) {
				setErrorMsg(error.message);
				console.log(errorMsg);
			}
		};

		getData('reviews', movieId);
	}, [movieId, errorMsg]);

	return (
		<section>
			<h3 className={css.reviews__title}>Reviews:</h3>

			{errorMsg !== null && (
				<p>Something wrong. An error occured: {errorMsg}</p>
			)}

			{reviews.length !== 0 && (
				<ul className={css.reviews__list}>
					{reviews.map(({ id, author, content }) => {
						return (
							<li key={id}>
								<p className={css.review__author}>{author}:</p>
								<p className={css.review__text}>{content}</p>
							</li>
						);
					})}
				</ul>
			)}

			{reviews.length === 0 && (
				<p>There are no comments for this movie yet. Come back later.</p>
			)}
		</section>
	);
};

export default Reviews;
