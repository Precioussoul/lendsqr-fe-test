"use client"

import React, {useState, useMemo} from "react"
import Image from "next/image"
import styles from "./Table.module.scss"
import {User, UserStatus, UserTableHeader} from "@/types/user"
import FilterIcon from "@/assets/svgs/filter-results.svg"
import VerticalMoreIcon from "@/assets/svgs/moreVerticalIcon.svg"
import ViewDetailIcon from "@/assets/svgs/np_view_detail.svg"
import BlacklistIcon from "@/assets/svgs/np_blacklist.svg"
import ActivateUserIcon from "@/assets/svgs/activate_user.svg"
import ChevronDownIcon from "@/assets/svgs/chevron-down.svg"
import FilterForm from "@/components/filterform/filter-form"
import Pagination from "../pagination/pagination"

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

  const sortedAscDscData = useMemo(() => {
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

  const totalPages = Math.ceil(sortedAscDscData.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentItems = sortedAscDscData.slice(startIndex, endIndex)

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
  }

  const handleItemsPerPageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setItemsPerPage(Number(e.target.value))
    setCurrentPage(1)
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
                          <Image src={ViewDetailIcon} alt='View Details' width={16} height={16} />
                          View Details
                        </button>
                        <button className={styles.dropdownItem} onClick={() => onStatusChange?.(user.id, "blacklisted")}>
                          <Image src={BlacklistIcon} alt='Blacklist User' width={16} height={16} />
                          Blacklist User
                        </button>
                        <button className={styles.dropdownItem} onClick={() => onStatusChange?.(user.id, "active")}>
                          <Image src={ActivateUserIcon} alt='Activate User' width={16} height={16} />
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
        <Pagination
          itemsPerPage={itemsPerPage}
          handleItemsPerPageChange={handleItemsPerPageChange}
          currentPage={currentPage}
          totalPages={totalPages}
          handlePageChange={handlePageChange}
          data={data}
        />
      )}
    </div>
  )
}

export default Table
