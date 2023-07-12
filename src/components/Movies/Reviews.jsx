import { useParams } from 'react-router-dom';

const Reviews = () => {
	const { movieId } = useParams();

	return (
		<section>
			<h3>Movie #{movieId}: Reviews</h3>
			<ul>
				<li>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora
					molestias commodi quod dignissimos optio, dolorem nostrum perspiciatis
					suscipit et molestiae modi odio aspernatur incidunt quam, aliquid
					culpa eligendi, officia dolores.
				</li>
				<li>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora
					molestias commodi quod dignissimos optio, dolorem nostrum perspiciatis
					suscipit et molestiae modi odio aspernatur incidunt quam, aliquid
					culpa eligendi, officia dolores.
				</li>
				<li>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora
					molestias commodi quod dignissimos optio, dolorem nostrum perspiciatis
					suscipit et molestiae modi odio aspernatur incidunt quam, aliquid
					culpa eligendi, officia dolores.
				</li>
			</ul>
		</section>
	);
};

export default Reviews;
