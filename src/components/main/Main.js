import React, { useContext, useState } from "react";
import OneCard from "../oneCard/OneCard";
import Filter from "./../filter/Filter";
import ReactPaginate from "react-paginate";

import { Context } from "../context/Context";

export default function Main() {
  const { maindata, handleBasket, serachData } = useContext(Context);

  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 8;

  const endOffset = itemOffset + itemsPerPage;

  const currentItems = serachData.length
    ? serachData.slice(itemOffset, endOffset)
    : maindata.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(
    serachData.length
      ? serachData.length / itemsPerPage
      : maindata.length / itemsPerPage
  );

  const handlePageClick = (event) => {
    const newOffset =
      (event.selected * itemsPerPage) %
      (serachData.length ? serachData.length : maindata.length);

    setItemOffset(newOffset);
  };

  return (
    <>
      <div className="content">
        <div className="filter">
          <Filter />
        </div>
        <div className="main">
          {currentItems.map((item) => {
            return (
              <OneCard
                key={item.id}
                {...item}
                maindata={maindata}
                handleBasket={handleBasket}
              />
            );
          })}
        </div>
      </div>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        containerClassName="pagination"
        pageLinkClassName="page-num"
        previousClassName="page-num"
        nextLinkClassName="page-num"
        activeLinkClassName="active"
      />
    </>
  );
}
