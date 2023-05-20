import { Link } from 'react-router-dom';
import cart from '../../resources/img/cart.svg';
import user from '../../resources/img/user.svg';


import './appHeader.scss';
import { useAppSelector } from '../../hooks/reduxHook';


const AppHeader: React.FC = () => {

	const { totalPrice } = useAppSelector(state => state.cart)

	console.log('totalPrice', totalPrice)

	return (
		<>
			<header className="header">
				<div className="header__left">
					<div className="header__info">
						<h3>Shop</h3>
						<p>best shop</p>
					</div>
				</div>
				<ul className="header__right">
					<li>
						<Link to='/cart'><img width={18} height={18} src={cart} alt="cart" /></Link>
						<span>{totalPrice} $</span>
						
					</li>
					<li>
						<img width={18} height={18} src={user} alt="user" />
					</li>
				</ul>
			</header>
		</>
	)
}

export default AppHeader;