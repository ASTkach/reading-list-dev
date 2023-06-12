const ListMessage = ({ searchedBook, filteredBooks }) => {
    let message;

    if (!searchedBook.length && filteredBooks.length) {
        message = <h2 className="empty-list">No match found.</h2>;
    } else if (!searchedBook.length) {
        message = <h2 className="empty-list">List is empty.</h2>;
    }

    return <>{message}</>;
};

export default ListMessage;
