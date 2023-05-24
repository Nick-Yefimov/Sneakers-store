import { Sneakers } from '../../models/sneakers';
import { useAppDispatch } from '../../hooks/reduxHook';
import { addItemsInCart } from '../../features/cartSlice';
import { Link } from 'react-router-dom';

import plus from '../../resources/img/plus.svg';

const SingleProduct = (sneakerCard: Sneakers): JSX.Element => {
  
    const dispatch = useAppDispatch();

    const addItemsToCart = (sneaker: Sneakers): void =>  {
		dispatch(addItemsInCart(sneaker))
	}

    return ( 
        <div className='card' key={sneakerCard.id}>
            <Link 
                className='link'
				to={`/singleProduct/${sneakerCard.id}`}
				key={sneakerCard.id}
            >
                <img width={133} height={112} src={sneakerCard.image} alt={sneakerCard.title} />
            </Link>
            <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
            <div className='card__bottom'>
                <div className='card__inner'>
                    <p className='card__price'>price:</p>
                    <b>{sneakerCard.price}$</b>
                </div>
                <button 
					onClick={() => addItemsToCart(sneakerCard)}
                    className='card__btn' >
                    <img src={plus} width={11} height={11} alt='plus' />
                </button>
            </div>
        </div>
    )
}


export default SingleProduct;