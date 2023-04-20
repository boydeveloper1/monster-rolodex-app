import "./search-box.styles.css";

const SearchBox = ({ onChangeHandler, placeholder, ClassName }) => {

    return (
        <input
            className={`search-box ${ClassName}`}
            type="search"
            placeholder={placeholder}
            onChange={onChangeHandler}
        />
    )

}

export default SearchBox;