import React from 'react';
import ReactPaginate from 'react-paginate';

import { useDispatch } from 'react-redux';
import { changePage } from '../../../redux/slices/pageSlice';

import styles from './Pagination.module.scss';

const Pagination = () => {
  const dispatch = useDispatch();

  return (
    <ReactPaginate
      className={styles.main}
      breakLabel="..."
      previousLabel="<"
      nextLabel=">"
      onPageChange={(event) => dispatch(changePage(event.selected + 1))} // текущий индекс страницы + 1 (получится номер страницы)
      pageRangeDisplayed={8}
      pageCount={3} // пока хардкожим 3, так как mockapi не возвращает данные о количестве страниц
      renderOnZeroPageCount={null}
    />
  );
};

export default Pagination;
