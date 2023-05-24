import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHook';
import { fetchSneakers } from '../../features/apiSlice';
import { Sneakers } from '../../models/sneakers';

import Spinner from '../spinner/Loader';

import './appProducts.scss';
import SingleProduct from '../singleSneaker/SingleSneaker';



const AppProducts: React.FC = () => {
	const dispatch = useAppDispatch();
	const { sneaker, status  } = useAppSelector(state => state.sneakers);

	useEffect(() => {
		dispatch(fetchSneakers());
	}, []);

	const spinner: JSX.Element[] = [...new Array(12)].map((i: number) => <Spinner key={i} />)

	const sneakerProducts: JSX.Element[] = sneaker.map((sneakerCard: Sneakers): JSX.Element => {
		return (
				<SingleProduct
					{...sneakerCard}
					key={sneakerCard.id}
				/>
		)
	})


	return (
		<div>
			<div className="sneakers">
				{status ? spinner : sneakerProducts}
			</div>
		</div>
	)
}

export default AppProducts;