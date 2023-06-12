import { useState } from 'react';
import { MdArrowBackIosNew } from 'react-icons/md';
import Footer from './Footer';
import Logo from './Logo';
import NavBar from './NavBar';
import SearchBar from './SearchBar';

const Menu = ({
    filterCurrentBooks,
    filteredBooks,
    setSearchedBook,
    setSearchInput,
    searchInput,
    hiddenClass,
    windowWidth,
}) => {
    const [showAllMenu, setShowAllMenu] = useState('');
    const [rotateNavIcon, setRotateNavIcon] = useState('');
    const [activeNavItem, setActiveNavItem] = useState('');
    const [searchMessage, setSearchMessage] = useState('');

    const showMenuHandler = () => {
        if (!showAllMenu) {
            setShowAllMenu('show');
            setRotateNavIcon('rotate');
        } else {
            setShowAllMenu('');
            setRotateNavIcon('');
        }
    };

    return (
        <div className={`${'menu ' + showAllMenu + hiddenClass}`}>
            <div className="menu__body">
                <Logo setActiveNavItem={setActiveNavItem} filterCurrentBooks={filterCurrentBooks} />
                {windowWidth < 611 && (
                    <MdArrowBackIosNew
                        className={`${'menu__icon ' + rotateNavIcon}`}
                        onClick={() => showMenuHandler()}
                    />
                )}
                <NavBar
                    activeNavItem={activeNavItem}
                    setActiveNavItem={setActiveNavItem}
                    filterCurrentBooks={filterCurrentBooks}
                    windowWidth={windowWidth}
                    setSearchMessage={setSearchMessage}
                />
                <SearchBar
                    filteredBooks={filteredBooks}
                    setSearchedBook={setSearchedBook}
                    setSearchInput={setSearchInput}
                    searchInput={searchInput}
                    showMenuHandler={showMenuHandler}
                    windowWidth={windowWidth}
                    searchMessage={searchMessage}
                    setSearchMessage={setSearchMessage}
                />
                <Footer />
            </div>
        </div>
    );
};

export default Menu;
