import { useEffect, useRef } from 'react';
import ButtonsList from './ButtonsList';

const Book = ({ author, bookTitle, id, category, changeCategory, windowWidth }) => {
    const authorRef = useRef(null);
    const titleRef = useRef(null);

    useEffect(() => {
        toggleListTextAttribute(authorRef.current, author, 'Author');
        toggleListTextAttribute(titleRef.current, bookTitle, 'Book');
    }, [windowWidth]);

    const toggleListTextAttribute = (item, content, title) => {
        if (item.offsetWidth < item.scrollWidth) {
            item.setAttribute('data-tooltip', `${content}`);
            item.setAttribute('data-tooltip-title', `${title}`);
        } else {
            item.removeAttribute('data-tooltip', `${content}`);
            item.removeAttribute('data-tooltip-title', `${title}`);
        }
    };

    const showTooltip = (item) => {
        if (item.hasAttribute('data-tooltip')) {
            item.classList.add('show-tooltip');
        } else {
            return;
        }
    };

    const hideTooltip = (item) => item.classList.remove('show-tooltip');

    return (
        <li className="list__item">
            <p
                ref={authorRef}
                onTouchStart={() => showTooltip(authorRef.current)}
                onTouchEnd={() => hideTooltip(authorRef.current)}
                className={`${'list__text list__text-author '}`}
            >
                {author}
            </p>
            <p
                ref={titleRef}
                onTouchStart={() => showTooltip(titleRef.current)}
                onTouchEnd={() => hideTooltip(titleRef.current)}
                className={`${'list__text list__text-title '}`}
            >
                {bookTitle}
            </p>
            <ButtonsList id={id} category={category} changeCategory={changeCategory} />
        </li>
    );
};

export default Book;
