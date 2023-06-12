import { FaBookReader } from 'react-icons/fa';

const StartButton = ({ id, changeCategory }) => {
    return (
        <button className="btn btn--category" onClick={() => changeCategory(id, 'isInProgress')}>
            <FaBookReader className="btn__icon" />
        </button>
    );
};

export default StartButton;
