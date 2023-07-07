import { useState } from 'react';
import { MdArrowBackIosNew } from 'react-icons/md';
import Footer from './Footer';
import Logo from './ui/Logo';
import NavBar from './ui/NavBar';
import SearchBar from './ui/SearchBar';
import { MOBILE_WIDTH } from '../constants';

const Aside = ({
    filteredBooks,
    setSearchedBook,
    setSearchInput,
    searchInput,
    hiddenClass,
    windowWidth,
}) => {
    const [expandAside, setExpandAside] = useState('');
    const [rotateNavIcon, setRotateNavIcon] = useState('');
    const [activeNavItem, setActiveNavItem] = useState('');
    const [searchMessage, setSearchMessage] = useState('');

    const expandAsideHandler = () => {
        if (!expandAside) {
            setExpandAside('expand');
            setRotateNavIcon('rotate');
        } else {
            setExpandAside('');
            setRotateNavIcon('');
        }
    };

    return (
        <aside className={`${'aside ' + expandAside + hiddenClass}`}>
            <div className="aside__body">
                <Logo setActiveNavItem={setActiveNavItem} />
                {windowWidth < MOBILE_WIDTH && (
                    <MdArrowBackIosNew
                        className={`${'aside__icon ' + rotateNavIcon}`}
                        onClick={() => expandAsideHandler()}
                    />
                )}
                <NavBar
                    activeNavItem={activeNavItem}
                    setActiveNavItem={setActiveNavItem}
                    setSearchMessage={setSearchMessage}
                />
                <SearchBar
                    filteredBooks={filteredBooks}
                    setSearchedBook={setSearchedBook}
                    setSearchInput={setSearchInput}
                    searchInput={searchInput}
                    expandAside={expandAsideHandler}
                    windowWidth={windowWidth}
                    searchMessage={searchMessage}
                    setSearchMessage={setSearchMessage}
                />
                <Footer />
            </div>
        </aside>
    );
};

export default Aside;
