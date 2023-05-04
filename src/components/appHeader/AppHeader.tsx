import cart from '../../resources/img/cart.svg';
import user from '../../resources/img/user.svg';

import './appHeader.scss';

const AppHeader: React.FC = () => {
	return (
		<div className="wrapper">
			<header className="header">
				<div className="header__left">
					<div className="header__info">
						<h3>Shop</h3>
						<p>best shop</p>
					</div>
				</div>
				<ul className="header__right">
					<li>
						<img width={18} height={18} src={cart} alt="cart" />
						<span>1000 uah</span>
					</li>
					<li>
						<img width={18} height={18} src={user} alt="user" />
					</li>
				</ul>
			</header>
		</div>
	)
}

export default AppHeader;