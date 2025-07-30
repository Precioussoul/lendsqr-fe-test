/**
 * Formats a number with commas as thousand separators
 * @param num - The number to format
 * @returns Formatted number as string with thousand separators
 */
export const formatNumber = (num: number): string => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}

/****
 *  client side pagination because of static data
 * @param currentPage - The current page number
 * @param totalPages - The total number of pages
 * @returns Array of page numbers to display
 */

export const getPageNumbers = (currentPage: number, totalPages: number) => {
  const pages: (number | string)[] = []
  const maxPagesToShow = 3

  if (totalPages <= maxPagesToShow + 2) {
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i)
    }
  } else {
    pages.push(1)

    let startPage = Math.max(2, currentPage - Math.floor(maxPagesToShow / 2))
    let endPage = Math.min(totalPages - 1, startPage + maxPagesToShow - 1)

    if (currentPage <= Math.ceil(maxPagesToShow / 2)) {
      startPage = 2
      endPage = Math.min(startPage + maxPagesToShow - 1, totalPages - 1)
    } else if (currentPage >= totalPages - Math.floor(maxPagesToShow / 2)) {
      endPage = totalPages - 1
      startPage = Math.max(2, endPage - maxPagesToShow + 1)
    }

    if (startPage > 2) {
      pages.push("ellipsis")
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i)
    }

    if (endPage < totalPages - 1) {
      pages.push("ellipsis")
    }

    if (totalPages > 1) {
      pages.push(totalPages)
    }
  }

  return pages
}
