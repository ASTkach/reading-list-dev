import { useEffect, useRef } from 'react';
import Book from './Book';

const BookList = ({ searchedBook, addBook }) => {
    const listRef = useRef(null);

    useEffect(() => {
        const currentList = listRef.current;
        const scrollWidth = currentList.offsetWidth - currentList.clientWidth;

        if (currentList.clientHeight < currentList.scrollHeight) {
            currentList.style.marginLeft = scrollWidth + 'px';
        } else {
            currentList.style.marginLeft = null;
        }
    }, [addBook]);

    return (
        <ul ref={listRef} className="list">
            {searchedBook.map((book) => (
                <Book {...book} key={book.id} />
            ))}
        </ul>
    );
};

export default BookList;
