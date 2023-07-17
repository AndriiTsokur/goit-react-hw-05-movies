import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Loader from 'components/Loader/Loader';
import fetchData from 'utils/api';
import scrollSectionToTop from 'utils/scrollSectionToTop';
import css from './Reviews.module.css';

const Reviews = () => {
	const { movieId } = useParams();

	const [reviews, setReviews] = useState([]);
	const [errorMsg, setErrorMsg] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	const [resultIsVisible, setResultIsVisible] = useState(true);

	useEffect(() => {
		const getData = async (option, selector) => {
			try {
				setIsLoading(true);
				setResultIsVisible(false);

				const movieReviews = await fetchData(option, selector);
				setReviews(movieReviews.results);
			} catch (error) {
				setErrorMsg(error.message);
				console.log(errorMsg);
			} finally {
				setIsLoading(false);
				setResultIsVisible(true);
			}
		};

		getData('reviews', movieId);
	}, [movieId, errorMsg]);

	useEffect(() => {
		!isLoading && scrollSectionToTop();
	}, [isLoading]);

	return (
		<section>
			<h3 className={css.reviews__title}>Reviews:</h3>

			{errorMsg !== null && (
				<p>Something wrong. An error occured: {errorMsg}</p>
			)}

			{isLoading && <Loader />}

			{reviews.length !== 0 ? (
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
			) : (
				resultIsVisible && (
					<p>There are no comments for this movie yet. Come back later.</p>
				)
			)}
		</section>
	);
};

export default Reviews;
