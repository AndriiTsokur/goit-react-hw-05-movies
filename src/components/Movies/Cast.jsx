import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loader from 'components/Loader/Loader';
import fetchData, { PICTS_THUMB_BASE_URL } from 'utils/api';
import scrollSectionToTop from 'utils/scrollSectionToTop';
import css from './Cast.module.css';

const Cast = () => {
	const { movieId } = useParams();
	const [cast, setCast] = useState([]);
	const [errorMsg, setErrorMsg] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	const [resultIsVisible, setResultIsVisible] = useState(true);
	let counter = 0;

	useEffect(() => {
		const getData = async (option, selector) => {
			try {
				setIsLoading(true);
				setResultIsVisible(false);

				const movieCredits = await fetchData(option, selector);
				setCast(
					movieCredits.cast.filter(({ profile_path, character }) => {
						return (
							character?.length > 0 &&
							!character.includes('voice') &&
							!character.includes('uncredited') &&
							profile_path !== null
						);
					})
				);
			} catch (error) {
				setErrorMsg(error.message);
				console.log(errorMsg);
			} finally {
				setIsLoading(false);
				setResultIsVisible(true);
			}
		};

		getData('credits', movieId);
	}, [movieId, errorMsg]);

	useEffect(() => {
		!isLoading && scrollSectionToTop();
	}, [isLoading]);

	return (
		<section>
			<h3 className={css.cast__title}>Starring:</h3>

			{errorMsg !== null && (
				<p>Something wrong. An error occured: {errorMsg}</p>
			)}

			{isLoading && <Loader />}

			{cast.length !== 0 ? (
				<ul className={css.cast__list}>
					{cast.map(({ id, profile_path, name, character }) => {
						// The counter was added to avoid having the same keys appear when one actor plays multiple roles
						counter++;

						return (
							<li key={id + counter} className={css.cast__item}>
								<div>
									<img
										className={css.cast__pict}
										src={PICTS_THUMB_BASE_URL + profile_path}
										alt={name}
									/>
									<p className={css.cast__name}>{name}</p>
								</div>

								<p className={css.cast__character}>
									<b>Character:</b>
									<br />
									{character}
								</p>
							</li>
						);
					})}
				</ul>
			) : (
				resultIsVisible && <p>Sorry, this information is unavailable yet</p>
			)}
		</section>
	);
};

export default Cast;
