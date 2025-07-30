import React from "react"
import styles from "./pagination.module.scss"
import {getPageNumbers} from "@/utils"
import {User} from "@/types/user"

interface PaginationProps {
  itemsPerPage: number
  handleItemsPerPageChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
  currentPage: number
  totalPages: number
  handlePageChange: (page: number) => void
  data: User[]
}

const Pagination: React.FC<PaginationProps> = ({itemsPerPage, handleItemsPerPageChange, currentPage, totalPages, handlePageChange, data}) => {
  return (
    <div className={styles.paginationContainer}>
      <div className={styles.paginationInfo}>
        <span>Showing </span>
        <select value={itemsPerPage} onChange={handleItemsPerPageChange} className={styles.pageSizeSelect}>
          {[10, 20, 50, 100, 200].map((size) => (
            <option key={size} value={size}>
              {size}
            </option>
          ))}
        </select>
        <span> out of {data.length}</span>
      </div>

      <div className={styles.paginationButtons}>
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`${styles.pageButton} ${currentPage === 1 ? styles.disabled : ""}`}
        >
          &larr; Prev
        </button>

        <div className={styles.pageNumbers}>
          {getPageNumbers(currentPage, totalPages).map((page, index) =>
            page === "ellipsis" ? (
              <span key={`ellipsis-${index}`} className={styles.ellipsis}>
                ...
              </span>
            ) : (
              <button
                key={page}
                onClick={() => handlePageChange(page as number)}
                className={`${styles.pageButton} ${currentPage === page ? styles.active : ""}`}
              >
                {page}
              </button>
            )
          )}
        </div>

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages || totalPages === 0}
          className={`${styles.pageButton} ${currentPage === totalPages || totalPages === 0 ? styles.disabled : ""}`}
        >
          Next &rarr;
        </button>
      </div>
    </div>
  )
}

export default Pagination
