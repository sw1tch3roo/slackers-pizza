import React from 'react';
import ReactPaginate from 'react-paginate';

import styles from './Pagination.module.scss';

const Pagination = ({ onChangePage }) => {
  return (
    <ReactPaginate
      className={styles.main}
      breakLabel="..."
      previousLabel="<"
      nextLabel=">"
      onPageChange={(event) => onChangePage(event.selected + 1)} // текущий индекс страницы + 1 (получится номер страницы)
      pageRangeDisplayed={8}
      pageCount={3} // пока хардкожим 3, так как mockapi не возвращает данные о количестве страниц
      renderOnZeroPageCount={null}
    />
  );
};

export default Pagination;
