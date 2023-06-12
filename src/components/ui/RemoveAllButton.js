const RemoveAllButton = ({ removeBooks, searchedBook }) => {
    return (
        <button
            onClick={() => removeBooks('isDeleted')}
            className={
                searchedBook.length ? 'btn btn--remove-all' : 'btn btn--remove-all deactivated'
            }
        >
            Remove All
        </button>
    );
};

export default RemoveAllButton;
