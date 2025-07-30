import React from "react"
import styles from "./searchInput.module.scss"
import Image from "next/image"
import SearchIcon from "@/assets/svgs/search.svg"

interface InputProps {
  id: string
}

const SearchInput = () => {
  return (
    <div className=''>
      <div className={styles.searchContainer}>
        <div className={styles.inputContainer}>
          <input type={"text"} id={"search"} name='search' placeholder='Search for anything' className={styles.input} />
        </div>
        <div className={styles.iconContainer}>
          <Image src={SearchIcon} alt='Search Icon' width={15} height={15} />
        </div>
      </div>
    </div>
  )
}

export default SearchInput
