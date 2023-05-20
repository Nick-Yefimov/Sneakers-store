import AppHeader from '../../appHeader/AppHeader';
import AppProducts from '../../appProducts/AppProducts';
import AppSearch from '../../appSearch/AppSearch';

const MainPage: React.FC = () => {

    return (
        <div>
            <AppHeader />
            <AppSearch />
            <AppProducts />
        </div>
    )
}
export default MainPage;