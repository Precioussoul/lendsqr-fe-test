import React from "react"
import styles from "./sidebar.module.scss"
import Image from "next/image"
import logo from "@/assets/svgs/Lendsqr_logo.svg"
import closeMenu from "@/assets/svgs/close-menu.svg"

interface SidebarProps {
  onSidebarMenuClick?: () => void
}

const Sidebar = ({onSidebarMenuClick}: SidebarProps) => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebarHeader}>
        <Image src={logo} alt='Logo' width={150} height={50} />
        <Image src={closeMenu} alt='Close Menu' width={30} height={30} onClick={onSidebarMenuClick} />
      </div>
      <div className={styles.sidebarContainer}></div>
    </div>
  )
}

export default Sidebar
