import { useContext } from 'react';
import { MdDoneOutline } from 'react-icons/md';
import { BsFillTrash3Fill } from 'react-icons/bs';
import { FaBook, FaBookReader } from 'react-icons/fa';
import { PageContext } from '../Page';
import {
    TO_READ_CATEGORY,
    IN_PROGRESS_CATEGORY,
    DONE_CATEGORY,
    DELETED_CATEGORY,
    MOBILE_WIDTH,
} from '../../constants';

const NavItem = ({ id, title, isActive, addActiveClass }) => {
    const { windowWidth, filterBooksHandler } = useContext(PageContext);

    const navIcon = (id) => {
        if (windowWidth < MOBILE_WIDTH) {
            switch (id) {
                case TO_READ_CATEGORY:
                    return <FaBook className="nav__icon" />;
                case IN_PROGRESS_CATEGORY:
                    return <FaBookReader className="nav__icon" />;
                case DONE_CATEGORY:
                    return <MdDoneOutline className="nav__icon" />;
                case DELETED_CATEGORY:
                    return <BsFillTrash3Fill className="nav__icon" />;
                default:
                    return;
            }
        } else {
            return '';
        }
    };

    return (
        <li className="nav__item">
            <button
                className={isActive ? 'nav__button active' : 'nav__button'}
                onClick={() => {
                    addActiveClass(id);
                    filterBooksHandler(id);
                }}
            >
                {navIcon(id)}
                <span className="nav__button-title">{title}</span>
            </button>
        </li>
    );
};

export default NavItem;
