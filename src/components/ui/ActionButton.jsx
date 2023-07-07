import { useContext, useMemo, useEffect, useState } from 'react';
import { PageContext } from '../Page';

const ActionButton = ({ id, category, icon, newBookCategory, buttonCategories }) => {
    const { changeCategoryHandler } = useContext(PageContext);
    // const [displayByn, setDisplayBtn] = useState(false)
    // let res;

    // useEffect(() => {
    //     res = displayButton();
    // }, [buttonCategories]);

    const displayButton = () => {
        return buttonCategories.some((btnCateg) => btnCateg === category);
    };

    const res = useMemo(() => displayButton(), [category]);
    // console.log('aaaa');
    return (
        <>
            {console.log(category)}
            {console.log('dfdf')}
            {res && (
                <button
                    className="btn btn--category"
                    onClick={() => changeCategoryHandler(id, newBookCategory)}
                >
                    {icon}
                </button>
            )}
        </>
    );
};

export default ActionButton;
