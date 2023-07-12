import { useParams } from 'react-router-dom';

const Cast = () => {
	const { movieId } = useParams();
	return (
		<section>
			<h3>Movie #{movieId}: Cast</h3>
			<p>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
				voluptate sapiente ab, commodi veniam a dolores aut reprehenderit rem ut
				omnis, cum quisquam excepturi soluta consequatur eos natus vitae facere.
			</p>
		</section>
	);
};

export default Cast;
