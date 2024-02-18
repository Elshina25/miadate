/**
 * Компонент отображает поисковую строку
 */

const Search = () => {
    return (
        <div className="search-string">
            <input type="text" className="search-input" placeholder="например, зеленоглазые"/>
            <button className="search-button"></button>
        </div>
    )
}

export default Search;