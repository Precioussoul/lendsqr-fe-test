"use client"

import React, {useState, useMemo} from "react"
import Image from "next/image"
import styles from "./Table.module.scss"
import {User, UserStatus, UserTableHeader} from "@/types/user"
import FilterIcon from "@/assets/svgs/filter-results.svg"
import VerticalMoreIcon from "@/assets/svgs/moreVerticalIcon.svg"
import ChevronDownIcon from "@/assets/svgs/chevron-down.svg"
import FilterForm from "@/components/filterform/filter-form"

interface TableProps {
  headers: UserTableHeader[]
  data: User[]
  onRowClick?: (user: User) => void
  onStatusChange?: (userId: string, status: UserStatus) => void
}

const ITEMS_PER_PAGE = 10

const Table: React.FC<TableProps> = ({headers, data, onRowClick, onStatusChange}) => {
  const [sortConfig, setSortConfig] = useState<{key: keyof User; direction: "asc" | "desc"} | null>(null)
  const [activeFilter, setActiveFilter] = useState<string | null>(null)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(ITEMS_PER_PAGE)

  const sortedAndFilteredData = useMemo(() => {
    let result = [...data]

    // Apply sorting
    if (sortConfig !== null) {
      result.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === "asc" ? -1 : 1
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === "asc" ? 1 : -1
        }
        return 0
      })
    }

    return result
  }, [data, sortConfig])

  const requestSort = (key: keyof User) => {
    let direction: "asc" | "desc" = "asc"
    if (sortConfig && sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc"
    }
    setSortConfig({key, direction})
  }

  const toggleDropdown = (userId: string) => {
    setActiveDropdown(activeDropdown === userId ? null : userId)
  }

  const handleFilterChange = (key: string) => {
    setActiveFilter(activeFilter === key ? null : key)
  }

  // Pagination calculations
  const totalPages = Math.ceil(sortedAndFilteredData.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentItems = sortedAndFilteredData.slice(startIndex, endIndex)
  const showingStart = sortedAndFilteredData.length > 0 ? startIndex + 1 : 0
  const showingEnd = Math.min(endIndex, sortedAndFilteredData.length)

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
  }

  const handleItemsPerPageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setItemsPerPage(Number(e.target.value))
    setCurrentPage(1) // Reset to first page when changing items per page
  }

  // Generate page numbers to show with ellipsis for large numbers of pages
  const getPageNumbers = () => {
    const pages: (number | string)[] = []
    const maxPagesToShow = 3 // Maximum number of page numbers to show around current page

    if (totalPages <= maxPagesToShow + 2) {
      // Show all pages if not too many
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i)
      }
    } else {
      // Always show first page
      pages.push(1)

      // Calculate range around current page
      let startPage = Math.max(2, currentPage - Math.floor(maxPagesToShow / 2))
      let endPage = Math.min(totalPages - 1, startPage + maxPagesToShow - 1)

      // Adjust if we're at the start or end
      if (currentPage <= Math.ceil(maxPagesToShow / 2)) {
        startPage = 2
        endPage = Math.min(startPage + maxPagesToShow - 1, totalPages - 1)
      } else if (currentPage >= totalPages - Math.floor(maxPagesToShow / 2)) {
        endPage = totalPages - 1
        startPage = Math.max(2, endPage - maxPagesToShow + 1)
      }

      // Add ellipsis after first page if needed
      if (startPage > 2) {
        pages.push("ellipsis")
      }

      // Add page numbers in range
      for (let i = startPage; i <= endPage; i++) {
        pages.push(i)
      }

      // Add ellipsis before last page if needed
      if (endPage < totalPages - 1) {
        pages.push("ellipsis")
      }

      // Always show last page if there is more than one page
      if (totalPages > 1) {
        pages.push(totalPages)
      }
    }

    return pages
  }

  const renderStatusBadge = (status: UserStatus) => {
    const statusClasses = {
      active: styles.statusActive,
      inactive: styles.statusInactive,
      pending: styles.statusPending,
      blacklisted: styles.statusBlacklisted,
    }

    return <span className={`${styles.statusBadge} ${statusClasses[status]}`}>{status.charAt(0).toUpperCase() + status.slice(1)}</span>
  }

  return (
    <div className={styles.tablePaginationWrapper}>
      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              {headers.map((header) => (
                <th key={header.key} className={styles.tableHeader}>
                  <div className={styles.headerContent}>
                    <span>{header.label}</span>
                    {header.sortable && (
                      <button onClick={() => header.key !== "actions" && requestSort(header.key as keyof User)} className={styles.sortButton}>
                        <Image src={ChevronDownIcon} alt='Sort' width={12} height={12} />
                      </button>
                    )}
                    {header.filterable && (
                      <div className={styles.filterContainer}>
                        <Image src={FilterIcon} alt='Filter' width={16} height={16} onClick={() => handleFilterChange(header.key)} />
                        {activeFilter === header.key && (
                          <div className={styles.dropdownFilter}>
                            <FilterForm />
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {currentItems.map((user) => (
              <tr key={user.id} className={styles.tableRow}>
                <td>{user.organization}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.phoneNumber}</td>
                <td>{user.dateJoined}</td>
                <td>{renderStatusBadge(user.status)}</td>
                <td className={styles.actionsCell}>
                  <div className={styles.dropdownContainer}>
                    <button className={styles.moreButton} onClick={() => toggleDropdown(user.id)}>
                      <Image src={VerticalMoreIcon} alt='Actions' width={20} height={20} />
                    </button>
                    {activeDropdown === user.id && (
                      <div className={styles.dropdownMenu}>
                        <button className={styles.dropdownItem} onClick={() => onRowClick?.(user)}>
                          View Details
                        </button>
                        <button className={styles.dropdownItem} onClick={() => onStatusChange?.(user.id, "blacklisted")}>
                          Blacklist User
                        </button>
                        <button className={styles.dropdownItem} onClick={() => onStatusChange?.(user.id, "active")}>
                          Activate User
                        </button>
                      </div>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {currentItems.length === 0 ? (
        <div className={styles.noData}>No users found matching the current filters</div>
      ) : (
        <div className={styles.paginationContainer}>
          <div className={styles.paginationInfo}>
            <span>Showing </span>
            <select value={itemsPerPage} onChange={handleItemsPerPageChange} className={styles.pageSizeSelect}>
              {[10, 20, 50, 100].map((size) => (
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
              &larr; Previous
            </button>

            <div className={styles.pageNumbers}>
              {getPageNumbers().map((page, index) =>
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
      )}
    </div>
  )
}

export default Table
