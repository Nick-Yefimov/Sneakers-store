import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import '../../style/style.scss';

import MainPage from '../pages/main/MainPage';
import CartPage from '../pages/cartPage/CartPage';

const App: React.FC = () => {
	return (
		<Router>
			<div  className='wrapper'>
				<Routes>
					<Route path='/' element={<MainPage />} />
					<Route path='/cart' element={<CartPage />} />
				</Routes>
			</div>
		</Router>
	)
};

export default App;
