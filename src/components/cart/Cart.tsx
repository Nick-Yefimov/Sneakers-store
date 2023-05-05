import { Link } from 'react-router-dom';

import './cart.scss';
const Cart: React.FC = () => {
    return (
        <>
            <div className='cart'>
                <h2 className='cart__title'>
                    Cart is empty :c !
                </h2>
                <Link to='/'>
                    <button className='cart__btn'>
                        Back to main page
                    </button>
                </Link>
            </div>
        </>
    )
}
export default Cart;