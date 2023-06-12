import { useEffect, useRef } from 'react';
import Book from './Book';

const BookList = ({ changeCategory, searchedBook, windowWidth }) => {
    const listRef = useRef(null);

    useEffect(() => {
        const currentList = listRef.current;
        const scrollWidth = currentList.offsetWidth - currentList.clientWidth;

        if (currentList.clientHeight < currentList.scrollHeight) {
            currentList.style.marginLeft = scrollWidth + 'px';
        } else {
            currentList.style.marginLeft = null;
        }
    }, [windowWidth]);

    return (
        <ul ref={listRef} className="list">
            {searchedBook.map((book) => (
                <Book
                    {...book}
                    key={book.id}
                    changeCategory={changeCategory}
                    windowWidth={windowWidth}
                />
            ))}
        </ul>
    );
};

export default BookList;
