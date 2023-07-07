const ListMessage = ({ searchedBook, filteredBooks }) => {
    let message;

    if (!searchedBook.length && filteredBooks.length) {
        message = 'No match found.';
    } else if (!searchedBook.length) {
        message = 'List is empty';
    }

    return <>{message && <h2 className="empty-list">{message}</h2>}</>;
};

export default ListMessage;
