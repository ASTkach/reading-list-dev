import { useRef, useLayoutEffect } from 'react';
import ReadingForm from './ui/ReadingForm';
import RemoveAllButton from './ui/RemoveAllButton';
import ListMessage from './ListMessage';
import BookList from './BookList';
import { IN_PROGRESS_CATEGORY, DONE_CATEGORY, MIN_CONTENT_HEIGHT } from '../constants';

const Content = ({
    filteredBooks,
    showForm,
    showRemoveAllButton,
    addBook,
    removeBooks,
    searchedBook,
    windowHeight,
    hiddenClass,
}) => {
    const contentRef = useRef(null);

    useLayoutEffect(() => {
        const content = contentRef.current;
        if (windowHeight < MIN_CONTENT_HEIGHT) {
            content.style.height = 'auto';
        } else {
            content.style.height = '100vh';
        }
    }, [windowHeight]);

    let actionText;

    const filteredBooksCount = filteredBooks.filter((book) => {
        if (book.category === IN_PROGRESS_CATEGORY) {
            actionText = 'are reading';
            return book.category === IN_PROGRESS_CATEGORY;
        } else if (book.category === DONE_CATEGORY) {
            actionText = 'have read';
            return book.category === DONE_CATEGORY;
        }
    });

    return (
        <div className={`${'content ' + hiddenClass}`} ref={contentRef}>
            <h1 className="title">Reading List</h1>
            {showForm && <ReadingForm addBook={addBook} />}
            {showRemoveAllButton && (
                <RemoveAllButton removeBooks={removeBooks} searchedBook={searchedBook} />
            )}
            {filteredBooksCount.length > 0 && (
                <h2 className="content__action-text">
                    {`You ${actionText} `}
                    <span className="content__book-count">
                        {`${filteredBooksCount.length} ${
                            filteredBooksCount.length > 1 ? 'books' : 'book'
                        }`}
                    </span>
                </h2>
            )}
            <ListMessage searchedBook={searchedBook} filteredBooks={filteredBooks} />
            <BookList searchedBook={searchedBook} addBook={addBook} />
        </div>
    );
};

export default Content;
