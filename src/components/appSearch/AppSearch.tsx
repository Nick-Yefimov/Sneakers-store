import search from '../../resources/img/search.svg';
import './appSearch.scss';

const AppSearch = () => {
    return (
        <div className="content">
            <h1 className="content__title">all sneakers</h1>
            <div className="content__block">
                <img src={search} alt="search" />
                <input className="content__search" type="text" placeholder='search...' />
            </div>
        </div>
    )
}

export default AppSearch;