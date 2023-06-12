import { useRef, useLayoutEffect } from 'react';
import Title from './Title';
import ReadingForm from './ReadingForm';
import RemoveAllButton from './ui/RemoveAllButton';
import ListMessage from './ListMessage';
import BookList from './BookList';

const Content = ({
    filteredBooks,
    showForm,
    showRemoveAllButton,
    addBook,
    removeBooks,
    searchedBook,
    changeCategory,
    windowWidth,
    windowHeight,
}) => {
    const contentRef = useRef(null);

    useLayoutEffect(() => {
        const content = contentRef.current;
        if (windowHeight < 576) {
            content.style.height = 'auto';
        } else {
            content.style.height = '100vh';
        }
    }, [windowHeight]);

    let actionText;

    const filteredBooksCount = filteredBooks.filter((book) => {
        if (book.category === 'isInProgress') {
            actionText = 'are reading';
            return book.category === 'isInProgress';
        } else if (book.category === 'isDone') {
            actionText = 'have read';
            return book.category === 'isDone';
        }
    }).length;

    return (
        <div className="content" ref={contentRef}>
            <Title />
            {showForm && <ReadingForm addBook={addBook} />}
            {showRemoveAllButton && (
                <RemoveAllButton removeBooks={removeBooks} searchedBook={searchedBook} />
            )}
            {filteredBooksCount > 0 && (
                <h2 className="content__action-text">
                    {`You ${actionText} `}
                    <span className="content__book-count">
                        {`${filteredBooksCount} ${filteredBooksCount > 1 ? 'books' : 'book'}`}
                    </span>
                </h2>
            )}
            <ListMessage searchedBook={searchedBook} filteredBooks={filteredBooks} />
            <BookList
                changeCategory={changeCategory}
                searchedBook={searchedBook}
                windowWidth={windowWidth}
            />
        </div>
    );
};

export default Content;
