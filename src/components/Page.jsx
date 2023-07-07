import { useEffect, useState, createContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import '../styles/App.css';
import Ornament from './Ornament';
import Aside from './Aside';
import Content from './Content';
import {
    TO_READ_CATEGORY,
    IN_PROGRESS_CATEGORY,
    DONE_CATEGORY,
    DELETED_CATEGORY,
    REMOVE_PERMANENTLY,
    INITIAL_DELAY,
    TABLET_WIDTH,
    ONE_PERCENT_COEFFICIENT,
} from '../constants';

export const PageContext = createContext(null);

let vh = window.innerHeight * ONE_PERCENT_COEFFICIENT;
document.documentElement.style.setProperty('--vh', `${vh}px`);

function Page() {
    const [books, setBooks] = useState([]);
    const [filteredBooks, setFilteredBooks] = useState([]);
    const [searchedBook, setSearchedBook] = useState([]);
    const [searchInput, setSearchInput] = useState('');
    const [showForm, setShowForm] = useState(true);
    const [showRemoveAllButton, setShowRemoveAllButton] = useState('');
    const [hiddenClass, setHiddenClass] = useState('hidden');
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [windowHeight, setWindowHeight] = useState(window.innerHeight);

    useEffect(() => {
        getLocalBooks();

        setTimeout(() => {
            setHiddenClass('');
        }, INITIAL_DELAY);
    }, []);

    useEffect(() => {
        window.addEventListener('resize', setWindowDimension);
        return () => {
            window.removeEventListener('resize', setWindowDimension);
        };
    }, [windowWidth, windowHeight]);

    useEffect(() => {
        saveLocalBooks();
    }, [filteredBooks, books]);

    const setWindowDimension = () => {
        setWindowWidth(window.innerWidth);

        if (windowWidth < TABLET_WIDTH) {
            setWindowHeight(window.innerHeight);
        }
    };

    const addBookHandler = (author, bookTitle) => {
        const newBook = {
            author,
            bookTitle,
            category: TO_READ_CATEGORY,
            id: uuidv4(),
            date: '',
        };
        setBooks([newBook, ...books]);
        setFilteredBooks([newBook, ...filteredBooks]);
        setSearchedBook([newBook, ...filteredBooks]);
    };

    const removeBooksHandler = (category) => {
        setBooks(books.filter((book) => book.category !== category));
        setFilteredBooks(filteredBooks.filter((book) => book.category !== category));
        setSearchedBook(searchedBook.filter((book) => book.category !== category));
    };

    const filterBooksHandler = (category) => {
        setSearchInput('');

        const currentBooks = () =>
            books
                .filter((book) => book.category === category)
                .sort((prev, next) => next.date - prev.date);

        if (category === REMOVE_PERMANENTLY) {
            removeBooksHandler(category);
        } else {
            setFilteredBooks(currentBooks());
            setSearchedBook(currentBooks());
        }

        if (category === TO_READ_CATEGORY) {
            setShowForm(true);
        } else {
            setShowForm('');
        }

        if (category === DELETED_CATEGORY || category === REMOVE_PERMANENTLY) {
            setShowRemoveAllButton(true);
        } else {
            setShowRemoveAllButton('');
        }
    };

    const changeCategoryHandler = (id, category) => {
        filteredBooks.map((book) => {
            if (book.id === id) {
                book.date = Date.now();

                switch (category) {
                    case TO_READ_CATEGORY:
                        if (book.category === IN_PROGRESS_CATEGORY) {
                            book.category = TO_READ_CATEGORY;
                            filterBooksHandler(IN_PROGRESS_CATEGORY);
                        } else if (book.category === DONE_CATEGORY) {
                            book.category = TO_READ_CATEGORY;
                            filterBooksHandler(DONE_CATEGORY);
                        } else if (book.category === DELETED_CATEGORY) {
                            book.category = TO_READ_CATEGORY;
                            filterBooksHandler(DELETED_CATEGORY);
                        }
                        break;
                    case IN_PROGRESS_CATEGORY:
                        book.category = category;
                        filterBooksHandler(TO_READ_CATEGORY);
                        break;
                    case DONE_CATEGORY:
                        book.category = category;
                        filterBooksHandler(IN_PROGRESS_CATEGORY);
                        break;
                    case DELETED_CATEGORY:
                        if (book.category === TO_READ_CATEGORY) {
                            book.category = DELETED_CATEGORY;
                            filterBooksHandler(TO_READ_CATEGORY);
                        } else if (book.category === IN_PROGRESS_CATEGORY) {
                            book.category = DELETED_CATEGORY;
                            filterBooksHandler(IN_PROGRESS_CATEGORY);
                        } else if (book.category === DONE_CATEGORY) {
                            book.category = DELETED_CATEGORY;
                            filterBooksHandler(DONE_CATEGORY);
                        } else if (book.category === DELETED_CATEGORY) {
                            book.category = REMOVE_PERMANENTLY;
                            filterBooksHandler(REMOVE_PERMANENTLY);
                        }
                        break;
                    default:
                        break;
                }
            }
        });
    };

    const getLocalBooks = () => {
        if (localStorage.getItem('books') === null) {
            localStorage.setItem('books', JSON.stringify([]));
        } else {
            let booksLocal = JSON.parse(localStorage.getItem('books'));
            setBooks(booksLocal);
            setFilteredBooks(booksLocal.filter((book) => book.category === TO_READ_CATEGORY));
            setSearchedBook(booksLocal.filter((book) => book.category === TO_READ_CATEGORY));
        }
    };

    const saveLocalBooks = () => {
        localStorage.setItem('books', JSON.stringify(books));
    };

    return (
        <PageContext.Provider value={{ windowWidth, filterBooksHandler, changeCategoryHandler }}>
            <div className="page">
                <Ornament />
                <Aside
                    hiddenClass={hiddenClass}
                    filteredBooks={filteredBooks}
                    setSearchedBook={setSearchedBook}
                    searchInput={searchInput}
                    setSearchInput={setSearchInput}
                    windowWidth={windowWidth}
                />
                <Content
                    showForm={showForm}
                    showRemoveAllButton={showRemoveAllButton}
                    windowHeight={windowHeight}
                    filteredBooks={filteredBooks}
                    addBook={addBookHandler}
                    removeBooks={removeBooksHandler}
                    searchedBook={searchedBook}
                    hiddenClass={hiddenClass}
                />
            </div>
        </PageContext.Provider>
    );
}

export default Page;
