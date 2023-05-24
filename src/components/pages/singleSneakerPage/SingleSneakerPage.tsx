import AppHeader from '../../appHeader/AppHeader'
import { Link } from 'react-router-dom';

import './singlePage.scss';


const SingleSneakerPage: React.FC = (): JSX.Element => {
    return (
        <>
            <AppHeader/>
            <div className='singlePage'>
                <h1>Not information about this sneakers</h1>
                <Link to='/'>
                    <button className='cart__btn'>
                        Back to main page
                    </button>
                </Link>
            </div>
        </>
    )
}

export default SingleSneakerPage;