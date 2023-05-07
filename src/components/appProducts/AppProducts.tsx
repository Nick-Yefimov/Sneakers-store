import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHook';

import Spinner from '../spinner/Loader';


import plus from '../../resources/img/plus.svg';

import './appProducts.scss';
import { fetchSneakers } from '../features/apiSlice';

const AppProducts: React.FC = () => {
	const dispatch = useAppDispatch();
	const { data, status } = useAppSelector(state => state.sneakers);

	useEffect(() => {
		dispatch(fetchSneakers());
	}, []);


	const spinner = [...new Array(12)].map((i: number) => <Spinner key={i} />)
	const products = data.map(({ id, title, image, price }) => {
		return (
			<div className="card" key={id}>
				<img width={133} height={112} src={image} alt={title} />
				<p>Мужские Кроссовки Nike Blazer Mid Suede</p>
				<div className="card__bottom">
					<div className="card__inner">
						<p className="card__price">price:</p>
						<b>{price}$</b>
					</div>
					<button className="card__btn">
						<img src={plus} width={11} height={11} alt="plus" />
					</button>
				</div>
			</div>
		)
	})

	return (
		<div>
			<div className="sneakers">
				{status ? spinner : products}
			</div>
		</div>
	)
}

export default AppProducts;