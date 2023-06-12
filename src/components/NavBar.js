import { useEffect } from 'react';
import NavItem from './NavItem';

const NavBar = ({
    activeNavItem,
    setActiveNavItem,
    filterCurrentBooks,
    windowWidth,
    setSearchMessage,
}) => {
    const navItems = [
        { id: 'isToRead', title: 'To Read' },
        { id: 'isInProgress', title: 'In Progress' },
        { id: 'isDone', title: 'Done' },
        { id: 'isDeleted', title: 'Deleted' },
    ];

    useEffect(() => {
        setTimeout(() => {
            setActiveNavItem('isToRead');
        }, 4700);
    }, []);

    const addActiveClassHandler = (id) => {
        setActiveNavItem(id);
        setSearchMessage('');
    };

    return (
        <nav className="nav">
            <ul className="nav__list">
                {navItems.map((item) => {
                    return (
                        <NavItem
                            key={item.id}
                            {...item}
                            isActive={activeNavItem === item.id}
                            addActiveClass={addActiveClassHandler}
                            filterCurrentBooks={filterCurrentBooks}
                            windowWidth={windowWidth}
                        />
                    );
                })}
            </ul>
        </nav>
    );
};

export default NavBar;
