"use client"

import React, {useState, useMemo} from "react"
import Image from "next/image"
import styles from "./Table.module.scss"
import {User, UserStatus, UserTableHeader} from "@/types/user"
import FilterIcon from "@/assets/svgs/filter-results.svg"
import VerticalMoreIcon from "@/assets/svgs/moreVerticalIcon.svg"
import ChevronDownIcon from "@/assets/svgs/chevron-down.svg"

interface TableProps {
  headers: UserTableHeader[]
  data: User[]
  onRowClick?: (user: User) => void
  onStatusChange?: (userId: string, status: UserStatus) => void
}

const Table: React.FC<TableProps> = ({headers, data, onRowClick, onStatusChange}) => {
  const [sortConfig, setSortConfig] = useState<{key: keyof User; direction: "asc" | "desc"} | null>(null)
  const [filters, setFilters] = useState<{[key: string]: string}>({})
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  const sortedAndFilteredData = useMemo(() => {
    let result = [...data]

    // Apply filters
    if (Object.keys(filters).length > 0) {
      result = result.filter((item) => {
        return Object.entries(filters).every(([key, value]) => {
          if (!value) return true
          return String(item[key as keyof User])
            .toLowerCase()
            .includes(value.toLowerCase())
        })
      })
    }

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
  }, [data, sortConfig, filters])

  const requestSort = (key: keyof User) => {
    let direction: "asc" | "desc" = "asc"
    if (sortConfig && sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc"
    }
    setSortConfig({key, direction})
  }

  const handleFilterChange = (key: string, value: string) => {
    setFilters({
      ...filters,
      [key]: value,
    })
  }

  const toggleDropdown = (userId: string) => {
    setActiveDropdown(activeDropdown === userId ? null : userId)
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
                      <Image src={FilterIcon} alt='Filter' width={16} height={16} />
                      <input
                        type='text'
                        placeholder={`Filter ${header.label}`}
                        className={styles.filterInput}
                        value={filters[header.key] || ""}
                        onChange={(e) => handleFilterChange(header.key, e.target.value)}
                      />
                    </div>
                  )}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sortedAndFilteredData.map((user) => (
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
      {sortedAndFilteredData.length === 0 && <div className={styles.noData}>No users found matching the current filters</div>}
    </div>
  )
}

export default Table
