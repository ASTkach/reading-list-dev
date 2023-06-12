import ornamentList from './data/ornamentList';
import OrnamentItem from './OrnamentItem';

const Ornament = () => {
    return (
        <div className="ornament">
            {ornamentList.map((item) => {
                return <OrnamentItem key={item.id} {...item} />;
            })}
        </div>
    );
};

export default Ornament;
