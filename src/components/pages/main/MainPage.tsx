import AppHeader from '../../appHeader/AppHeader';
import AppProducts from '../../appProducts/AppProducts';

const MainPage: React.FC = () => {
    return (
        <div className='wrapper'>
            <AppHeader />
            <AppProducts />
        </div>
    )
}
export default MainPage;