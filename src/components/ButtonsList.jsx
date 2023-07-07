import { v4 as uuidv4 } from 'uuid';
import { MdDoneOutline } from 'react-icons/md';
import { BsFillTrash3Fill } from 'react-icons/bs';
import { IoMdReturnLeft } from 'react-icons/io';
import { FaBookReader } from 'react-icons/fa';
import ActionButton from './ui/ActionButton';
import {
    TO_READ_CATEGORY,
    IN_PROGRESS_CATEGORY,
    DONE_CATEGORY,
    DELETED_CATEGORY,
} from '../constants';

const ButtonsList = ({ category, id }) => {
    const listOfAvailableButtons = [
        {
            newBookCategory: IN_PROGRESS_CATEGORY,
            buttonCategories: [TO_READ_CATEGORY],
            icon: <FaBookReader className="btn__icon" />,
            id: uuidv4(),
        },
        {
            newBookCategory: TO_READ_CATEGORY,
            buttonCategories: [IN_PROGRESS_CATEGORY, DONE_CATEGORY, DELETED_CATEGORY],
            icon: <IoMdReturnLeft className="btn__icon" />,
            id: uuidv4(),
        },
        {
            newBookCategory: DONE_CATEGORY,
            icon: <MdDoneOutline className="btn__icon" />,
            buttonCategories: [IN_PROGRESS_CATEGORY],
            id: uuidv4(),
        },
        {
            newBookCategory: DELETED_CATEGORY,
            buttonCategories: [
                TO_READ_CATEGORY,
                IN_PROGRESS_CATEGORY,
                DONE_CATEGORY,
                DELETED_CATEGORY,
            ],
            icon: <BsFillTrash3Fill className="btn__icon" />,
            id: uuidv4(),
        },
    ];

    return (
        <div className="list__buttons">
            {listOfAvailableButtons.map((button) => (
                <ActionButton key={button.id} {...button} id={id} category={category} />
            ))}
        </div>
    );
};

export default ButtonsList;
