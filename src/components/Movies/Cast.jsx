import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import fetchData, { PICTS_BASE_URL } from 'utils/api';
import css from './Cast.module.css';

const Cast = () => {
	const { movieId } = useParams();
	const [cast, setCast] = useState([]);
	const [errorMsg, setErrorMsg] = useState(null);

	useEffect(() => {
		const getData = async (option, selector) => {
			try {
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
			}
		};

		getData('credits', movieId);
	}, [movieId, errorMsg]);

	return (
		<section>
			<h3 className={css.cast__title}>Starring:</h3>

			{errorMsg !== null && (
				<p>Something wrong. An error occured: {errorMsg}</p>
			)}

			{cast.length !== 0 && (
				<ul className={css.cast__list}>
					{cast.map(({ id, profile_path, name, character }) => {
						return (
							<li key={id} className={css.cast__item}>
								<img
									className={css.cast__pict}
									src={PICTS_BASE_URL + profile_path}
									alt={name}
								/>
								<div>
									<p className={css.cast__name}>{name}</p>
									<p className={css.cast__character}>
										<b>Character:</b>
										<br />
										{character}
									</p>
								</div>
							</li>
						);
					})}
				</ul>
			)}

			{cast.length === 0 && <p>Sorry, this information is unavailable yet</p>}
		</section>
	);
};

export default Cast;
