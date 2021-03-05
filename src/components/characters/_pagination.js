const Pagination = ({ page, onChange }) =>  {
    const allowPrevious = (page > 1);
    const allowNext = (page < 9);

    const updatePagination = (value) => {
        onChange(value);
    }

    return (
        <div>
            <button disabled={ !allowPrevious } onClick={ () => updatePagination(-1) }> Previous </button>
            <button disabled={ !allowNext } onClick={ () => updatePagination(+1) }> Next </button>
        </div>
    );
}

export default Pagination;