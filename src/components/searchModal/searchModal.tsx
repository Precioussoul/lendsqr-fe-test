"use client"
import React, {useState, useEffect, useRef} from "react"
import styles from "./searchModal.module.scss"
import Image from "next/image"
import SearchIcon from "@/assets/svgs/search.svg"
import CloseIcon from "@/assets/svgs/close-menu.svg"

interface SearchModalProps {
  isOpen: boolean
  onClose: () => void
}

const SearchModal: React.FC<SearchModalProps> = ({isOpen, onClose}) => {
  const [searchQuery, setSearchQuery] = useState("")
  const [recentSearches, setRecentSearches] = useState<string[]>([])
  const modalRef = useRef<HTMLDivElement>(null)

  // Load recent searches from localStorage on component mount
  useEffect(() => {
    const savedSearches = localStorage.getItem("recentSearches")
    if (savedSearches) {
      setRecentSearches(JSON.parse(savedSearches))
    }

    // Handle click outside to close
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose()
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [onClose])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (!searchQuery.trim()) return

    // Add to recent searches
    const updatedSearches = [searchQuery, ...recentSearches.filter((item) => item !== searchQuery)].slice(0, 5)
    setRecentSearches(updatedSearches)
    localStorage.setItem("recentSearches", JSON.stringify(updatedSearches))

    // TODO: Implement search functionality
    console.log("Searching for:", searchQuery)
  }

  const clearRecentSearches = () => {
    setRecentSearches([])
    localStorage.removeItem("recentSearches")
  }

  if (!isOpen) return null

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal} ref={modalRef}>
        <div className={styles.modalHeader}>
          <h3>Search</h3>
          <button onClick={onClose} className={styles.closeButton}>
            <Image src={CloseIcon} alt='Close' width={20} height={20} />
          </button>
        </div>

        <form onSubmit={handleSearch} className={styles.searchForm}>
          <div className={styles.searchInputContainer}>
            <Image src={SearchIcon} alt='Search' width={18} height={18} className={styles.searchIcon} />
            <input
              type='text'
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder='Search for anything...'
              className={styles.searchInput}
              autoFocus
            />
          </div>
        </form>

        {recentSearches.length > 0 && (
          <div className={styles.recentSearches}>
            <div className={styles.recentSearchesHeader}>
              <span>Recent Searches</span>
              <button onClick={clearRecentSearches} className={styles.clearButton}>
                Clear all
              </button>
            </div>
            <ul className={styles.recentSearchesList}>
              {recentSearches.map((search, index) => (
                <li key={index} className={styles.recentSearchItem} onClick={() => setSearchQuery(search)}>
                  <Image src={SearchIcon} alt='Search' width={16} height={16} />
                  <span>{search}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}

export default SearchModal
