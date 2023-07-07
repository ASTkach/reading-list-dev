import { useEffect } from 'react';
import NavItem from './NavItem';
import {
    TO_READ_CATEGORY,
    IN_PROGRESS_CATEGORY,
    DONE_CATEGORY,
    DELETED_CATEGORY,
    INITIAL_DELAY,
} from '../../constants';

const NavBar = ({ activeNavItem, setActiveNavItem, setSearchMessage }) => {
    const navItems = [
        { id: TO_READ_CATEGORY, title: 'To Read' },
        { id: IN_PROGRESS_CATEGORY, title: 'In Progress' },
        { id: DONE_CATEGORY, title: 'Done' },
        { id: DELETED_CATEGORY, title: 'Deleted' },
    ];

    useEffect(() => {
        setTimeout(() => {
            setActiveNavItem(TO_READ_CATEGORY);
        }, INITIAL_DELAY);
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
                        />
                    );
                })}
            </ul>
        </nav>
    );
};

export default NavBar;
