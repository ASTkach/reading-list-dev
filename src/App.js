import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import Wrapper from './components/Wrapper';
import Container from './components/Container';
import Ornament from './components/Ornament';
import Menu from './components/Menu';
import Content from './components/Content';

let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

function App() {
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
        }, 4700);
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

        if (windowWidth < 1025) {
            setWindowHeight(window.innerHeight);
        }
    };

    const addBookHandler = (author, bookTitle) => {
        const newBook = {
            author,
            bookTitle,
            category: 'isToRead',
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

    const filterHandler = (category) => {
        setSearchInput('');

        const currentBooks = () =>
            books
                .filter((book) => book.category === category)
                .sort((prev, next) => next.date - prev.date);

        if (category === 'isRemoved') {
            removeBooksHandler(category);
        } else {
            setFilteredBooks(currentBooks());
            setSearchedBook(currentBooks());
        }

        if (category === 'isToRead') {
            setShowForm(true);
        } else {
            setShowForm('');
        }

        if (category === 'isDeleted' || category === 'isRemoved') {
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
                    case 'isToRead':
                        if (book.category === 'isInProgress') {
                            book.category = 'isToRead';
                            filterHandler('isInProgress');
                        } else if (book.category === 'isDone') {
                            book.category = 'isToRead';
                            filterHandler('isDone');
                        } else if (book.category === 'isDeleted') {
                            book.category = 'isToRead';
                            filterHandler('isDeleted');
                        }
                        break;
                    case 'isInProgress':
                        book.category = category;
                        filterHandler('isToRead');
                        break;
                    case 'isDone':
                        book.category = category;
                        filterHandler('isInProgress');
                        break;
                    case 'isDeleted':
                        if (book.category === 'isToRead') {
                            book.category = 'isDeleted';
                            filterHandler('isToRead');
                        } else if (book.category === 'isInProgress') {
                            book.category = 'isDeleted';
                            filterHandler('isInProgress');
                        } else if (book.category === 'isDone') {
                            book.category = 'isDeleted';
                            filterHandler('isDone');
                        } else if (book.category === 'isDeleted') {
                            book.category = 'isRemoved';
                            filterHandler('isRemoved');
                        }
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
            setFilteredBooks(booksLocal.filter((book) => book.category === 'isToRead'));
            setSearchedBook(booksLocal.filter((book) => book.category === 'isToRead'));
        }
    };

    const saveLocalBooks = () => {
        localStorage.setItem('books', JSON.stringify(books));
    };

    return (
        <div className="App">
            <Wrapper>
                <Ornament />
                <Menu
                    hiddenClass={hiddenClass}
                    filterCurrentBooks={filterHandler}
                    filteredBooks={filteredBooks}
                    setSearchedBook={setSearchedBook}
                    searchInput={searchInput}
                    setSearchInput={setSearchInput}
                    windowWidth={windowWidth}
                />
                <Container hiddenClass={hiddenClass}>
                    <Content
                        showForm={showForm}
                        showRemoveAllButton={showRemoveAllButton}
                        changeCategory={changeCategoryHandler}
                        windowWidth={windowWidth}
                        windowHeight={windowHeight}
                        filteredBooks={filteredBooks}
                        addBook={addBookHandler}
                        removeBooks={removeBooksHandler}
                        searchedBook={searchedBook}
                    />
                </Container>
            </Wrapper>
        </div>
    );
}

export default App;
