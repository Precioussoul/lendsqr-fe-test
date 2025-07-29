"use client"
import React from "react"
import styles from "./sidebar.module.scss"
import Image from "next/image"
import logo from "@/assets/svgs/Lendsqr_logo.svg"
import closeMenu from "@/assets/svgs/close-menu.svg"
import SidebarItem from "../sidebarItem/sidebaritem"
import BriefcaseIcon from "@/assets/svgs/briefcase 1.svg"
import HomeIcon from "@/assets/svgs/home.svg"
import ChevronIcon from "@/assets/svgs/chevron_outline.svg"
import DocIcon from "@/assets/svgs/docs-temp-icon.svg"
import {sidebarMenuData} from "./data"
import {usePathname, useRouter} from "next/navigation"

interface SidebarProps {
  onSidebarMenuClick?: () => void
  isSidebarOpen?: boolean
}

const Sidebar = ({onSidebarMenuClick, isSidebarOpen}: SidebarProps) => {
  const pathname = usePathname()
  const router = useRouter()

  const handleClick = (path: string) => {
    router.push(path)
  }

  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebarHeader}>
        <Image src={logo} alt='Logo' width={150} height={50} />
        <Image src={closeMenu} alt='Close Menu' width={30} height={30} onClick={onSidebarMenuClick} />
      </div>
      <div className={styles.sidebarContainer}>
        {/* pinned menu */}
        <ul className={styles.sidebarPinnedMenu}>
          <SidebarItem title='Switch Organization' icon={BriefcaseIcon} extraIcon={ChevronIcon} />
          {isSidebarOpen && <SidebarItem title='Documentation' icon={DocIcon} />}
          <SidebarItem title='Dashboard' icon={HomeIcon} />
        </ul>
        <div className={styles.sidebarMenu}>
          {sidebarMenuData.map((menu) => (
            <div key={menu.title} className={styles.sidebarContent}>
              <h1 className={styles.sidebarHeaderTitle}>{menu.title}</h1>
              <ul className={styles.sidebarList}>
                {menu.items.map((item) => (
                  <SidebarItem
                    key={item.title}
                    title={item.title}
                    icon={item.icon}
                    active={pathname === item.path || pathname.startsWith(item.path || "")}
                    onClick={() => item.path && handleClick(item.path)}
                  />
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Sidebar
