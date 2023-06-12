import { MdDoneOutline } from 'react-icons/md';
import { BsFillTrash3Fill } from 'react-icons/bs';
import { FaBook, FaBookReader } from 'react-icons/fa';

const NavItem = ({ id, title, isActive, addActiveClass, filterCurrentBooks, windowWidth }) => {
    const navIcon = (id) => {
        if (windowWidth < 611) {
            switch (id) {
                case 'isToRead':
                    return <FaBook className="nav__icon" />;
                case 'isInProgress':
                    return <FaBookReader className="nav__icon" />;
                case 'isDone':
                    return <MdDoneOutline className="nav__icon" />;
                case 'isDeleted':
                    return <BsFillTrash3Fill className="nav__icon" />;
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
                    filterCurrentBooks(id);
                }}
            >
                {navIcon(id)}
                <span className="nav__button-title">{title}</span>
            </button>
        </li>
    );
};

export default NavItem;
