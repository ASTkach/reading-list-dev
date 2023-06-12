import { BsSearch } from 'react-icons/bs';

const SearchBar = ({
    filteredBooks,
    setSearchedBook,
    setSearchInput,
    searchInput,
    windowWidth,
    showMenuHandler,
    searchMessage,
    setSearchMessage,
}) => {
    const searchHandler = (e) => {
        const searchResults = e.target.value;
        setSearchInput(searchResults);

        if (!e.target.value) {
            setSearchedBook(filteredBooks);
        }

        let resultsArray = filteredBooks.filter(
            (book) =>
                book.author.toLowerCase().includes(searchResults.toLowerCase()) ||
                book.bookTitle.toLowerCase().includes(searchResults.toLowerCase())
        );

        setSearchedBook(resultsArray);

        if (resultsArray.length === filteredBooks.length) {
            setSearchMessage('');
            resultsArray = [];
        } else if (!resultsArray.length && windowWidth < 611) {
            setSearchMessage(<span className="search__message">No match</span>);
        } else if (resultsArray.length && windowWidth < 611) {
            setSearchMessage(<span className="search__message">There is match</span>);
        }
    };

    return (
        <div className="search">
            <BsSearch
                className="search__icon"
                onClick={() => {
                    if (windowWidth < 611) {
                        showMenuHandler();
                    }
                }}
            />
            <input
                value={searchInput}
                onChange={searchHandler}
                className="search__input"
                type="text"
            />
            {searchMessage}
        </div>
    );
};

export default SearchBar;
