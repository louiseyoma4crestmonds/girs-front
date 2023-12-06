import Image from "next/image";
import { useState } from "react";
import styles from "./Pagination.module.css";

type PaginationProps = {
  newNotes: any;
  notesPerPage: number;
  currentPage: number;
  setCurrentPage: (arg: any) => void;
};

function Pagination(props: PaginationProps) {
  const { newNotes, notesPerPage, setCurrentPage, currentPage } = props;

  const [pageNumberLimit] = useState(3);
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(3);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);

  const totalPages = Math.ceil(newNotes.length / notesPerPage);

  const pages = [];
  for (let i = 1; i <= totalPages; i += 1) {
    pages.push(i);
  }
  // for (let i = 1; i <= Math.ceil(newNotes.length / notesPerPage); i += 1) {
  //   pages.push(i);
  // }
  const mappedPages = pages.slice(0, pages.length - 1);
  // const handlePage = (event: any) => {
  //   const selectedPag = Number(event.target.id);
  //   if (currentPage === totalPages) {
  //     console.log("currentPage", currentPage);
  //     console.log("totlapage", totalPages);
  //     console.log("e", Number(event.target.id));
  //     setCurrentPage(selectedPag);
  //   } else {
  //     console.log("e", Number(event.target.id));
  //     setCurrentPage(selectedPag);
  //   }
  // };

  console.log("currentPage", currentPage);
  console.log("totlapage", totalPages);

  const handlePage = (event: any) => {
    if (currentPage === totalPages) {
      setCurrentPage(Number(event.target.id));
    } else {
      setCurrentPage(Number(event.target.id));
    }
  };

  // function that handle next page
  const handleNextBtnPage = () => {
    setCurrentPage(currentPage + 1);

    if (currentPage + 1 > maxPageNumberLimit) {
      setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };

  const handlePrevBtnPage = () => {
    setCurrentPage(currentPage - 1);

    if ((currentPage - 1) % pageNumberLimit === 0) {
      setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };

  const pageLastNumber = pages[pages.length - 1];

  let pageIncrementBtn = null;
  if (pages.length > maxPageNumberLimit) {
    pageIncrementBtn = (
      <div
        className={styles.paginationDiv}
        onClick={handleNextBtnPage}
        onKeyDown={() => {}}
        role="button"
        tabIndex={0}
      >
        {" "}
        &hellip;{" "}
      </div>
    );
  }

  return (
    <div className={styles.paginationFrame}>
      <button
        type="button"
        className={styles.paginationDivBtn}
        onClick={handlePrevBtnPage}
        disabled={currentPage === mappedPages[0]}
        // disabled={currentPage === 1}
      >
        {" "}
        <Image src="/icons/chevronLeft.svg" width={25} height={20} />{" "}
      </button>
      {mappedPages.map((pageNumber: any) => {
        if (
          pageNumber < maxPageNumberLimit + 1 &&
          pageNumber > minPageNumberLimit
        ) {
          return (
            <div
              key={pageNumber}
              id={pageNumber}
              onClick={handlePage}
              onKeyDown={() => {}}
              role="button"
              tabIndex={0}
              className={`${
                currentPage === pageNumber
                  ? `${styles.paginationDivActive}`
                  : `${styles.paginationDiv}`
              } `}
            >
              {" "}
              {pageNumber}{" "}
            </div>
          );
        }

        return null;
      })}
      {pageIncrementBtn}
      <button
        className={`${
          currentPage === pageLastNumber
            ? `${styles.paginationDivActive}`
            : `${styles.paginationDiv}`
        } `}
        id={pageLastNumber.toString()}
        onClick={handlePage}
      >
        {pageLastNumber}
      </button>
      <button
        type="button"
        className={styles.paginationDivBtn}
        onClick={handleNextBtnPage}
        // disabled={currentPage === pages[pages.length - 1]}
        disabled={currentPage === pageLastNumber}
        // disabled={currentPage === mappedPages[mappedPages.length - 1]}
      >
        {" "}
        <Image src="/icons/chevronRight.svg" width={25} height={20} />{" "}
      </button>
    </div>
  );
}

export default Pagination;
