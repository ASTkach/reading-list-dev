import { useState } from 'react';
import { RiAddBoxFill } from 'react-icons/ri';

const ReadingForm = ({ addBook }) => {
    const [author, setAuthor] = useState('');
    const [book, setBook] = useState('');

    const onSubmitHandler = (event) => {
        event.preventDefault();

        const clearInputValues = () => {
            setAuthor('');
            setBook('');
        };

        if (author.trim() === '' && book.trim() === '') {
            clearInputValues();
        } else if (author.trim() === '') {
            setAuthor('');
        } else if (book.trim() === '') {
            setBook('');
        } else {
            addBook(author, book);
            clearInputValues();
        }
    };

    return (
        <form className="form" onSubmit={onSubmitHandler}>
            <div className="form__inputs">
                <label>
                    <input
                        type="text"
                        className="form__input form__input--author"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                        placeholder="Author"
                        required
                    />
                </label>
                <label>
                    <input
                        type="text"
                        value={book}
                        className="form__input form__input--book"
                        onChange={(e) => setBook(e.target.value)}
                        placeholder="Book"
                        required
                    />
                </label>
            </div>
            <button className="form__button">
                <RiAddBoxFill className="form__icon" />
            </button>
        </form>
    );
};

export default ReadingForm;
