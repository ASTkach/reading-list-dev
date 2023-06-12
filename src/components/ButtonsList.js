import RemoveButton from './ui/RemoveButton';
import StartButton from './ui/StartButton';
import DoneButton from './ui/DoneButton';
import ReturnButton from './ui/ReturnButton';

const ButtonsList = ({ category, id, changeCategory }) => {
    return (
        <div className="list__buttons">
            {category === 'isToRead' && <StartButton id={id} changeCategory={changeCategory} />}
            {category !== 'isToRead' && <ReturnButton id={id} changeCategory={changeCategory} />}
            {category === 'isInProgress' && <DoneButton id={id} changeCategory={changeCategory} />}
            <RemoveButton id={id} changeCategory={changeCategory} />
        </div>
    );
};

export default ButtonsList;
