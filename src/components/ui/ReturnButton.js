import { IoMdReturnLeft } from 'react-icons/io';

const ReturnButton = ({ id, changeCategory }) => {
    return (
        <button className="btn btn--category" onClick={() => changeCategory(id, 'isToRead')}>
            <IoMdReturnLeft className="btn__icon" />
        </button>
    );
};

export default ReturnButton;
