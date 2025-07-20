import ReactPaginate from "react-paginate";
import { handleResize, paging } from "../redux/action/AllMoviesAction";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";

const Paginateion = () => {
    const dispatch = useDispatch();
    const PageClick = (change) => {
        dispatch(paging(change.selected + 1))
    };
    const [screenWidth, setScreenWidth] = useState();
    useEffect(() => {
        const onResize = () => setScreenWidth(window.innerWidth);
        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize);
    }, []);
    return (
        <ReactPaginate
            onPageChange={PageClick}
            pageRangeDisplayed={handleResize(screenWidth)}
            marginPagesDisplayed='1'
            breakLabel="..."
            previousLabel="Previous"
            nextLabel="Next"
            pageCount={500}

            containerClassName={'Pagination d-flex justify-content-center p-4'}
            pageClassName={'page-item'}
            pageLinkClassName='page-link'
            previousClassName={'page-item'}
            previousLinkClassName={'page-link'}
            nextClassName='page-item'
            nextLinkClassName={'page-link'}
            breakClassName={'page-item'}
            breakLinkClassName={'page-link'}
            activeClassName={'active'}
        />
    );
};
export default Paginateion;