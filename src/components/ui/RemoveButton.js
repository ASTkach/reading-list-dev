import { BsFillTrash3Fill } from 'react-icons/bs';

const RemoveButton = ({ id, changeCategory }) => {
    return (
        <button
            className="btn btn--category"
            onClick={() => {
                changeCategory(id, 'isDeleted');
            }}
        >
            <BsFillTrash3Fill className="btn__icon" />
        </button>
    );
};

export default RemoveButton;
