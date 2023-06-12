import { MdDoneOutline } from 'react-icons/md';

const DoneButton = ({ id, changeCategory }) => {
    return (
        <button className="btn btn--category" onClick={() => changeCategory(id, 'isDone')}>
            <MdDoneOutline className="btn__icon" />
        </button>
    );
};

export default DoneButton;
