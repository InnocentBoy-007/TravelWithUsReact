import Pagination from 'react-bootstrap/Pagination';

const PaginationComponent = function () {
    let active = 1;
    let items = [];
    for (let number = 1; number <= 6; number++) {
        items.push(
            <Pagination.Item key={number} active={number === active}>
                {number}
            </Pagination.Item>,
        );
    }

    return (
        <div className='px-3'>
            <Pagination>{items}</Pagination>
            <br />
        </div>
    );
};


export default PaginationComponent;