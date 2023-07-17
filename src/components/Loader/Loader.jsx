import { RotatingSquare } from 'react-loader-spinner';
import css from './Loader.module.css';

const Loader = () => {
	return (
		<div className={css.loader}>
			<RotatingSquare
				height="100"
				width="100"
				color="#808080"
				ariaLabel="rotating-square-loading"
				strokeWidth="4"
				wrapperStyle={{}}
				wrapperClass=""
				visible={true}
			/>
		</div>
	);
};

export default Loader;
