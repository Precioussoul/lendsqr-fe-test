import React, { useState } from "react"
import styles from "./navbar.module.scss"
import Image from "next/image"
import logo from "@/assets/svgs/Lendsqr_logo.svg"
import sidebarLeftMenu from "@/assets/svgs/sidebar-left-menu.svg"
import notification from "@/assets/svgs/notification_bell.svg"
import dropdown from "@/assets/svgs/dropdown.svg"
import UserProfile from "@/assets/images/image-avatar.png"
import SearchInput from "../searchInput/searchInput"
import SearchModal from "../searchModal/searchModal"
import Link from "next/link"
import LogoMobile from "@/assets/svgs/lendsqr_small-logo.svg"
import SearchIcon from "@/assets/svgs/search.svg"

interface NavbarProps {
  onSidebarMenuClick?: () => void
}

const Navbar = ({ onSidebarMenuClick }: NavbarProps) => {
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  return (
    <div className={styles.navbar}>
      <div className={styles.logoContainer}>
        <Image src={sidebarLeftMenu} alt='Sidebar Left Menu' width={30} height={30} className={styles.sidebarMenu} onClick={onSidebarMenuClick} />
        <Image src={logo} alt='Logo' width={150} height={50} className={styles.logo} />
        <Image src={LogoMobile} alt='Logo' width={50} height={50} className={styles.logoMobile} />
      </div>
      <div className={styles.navLinksContainer}>
        <SearchInput />
        {/* notification */}
        <div className={styles.notificationContainer}>
          <div className={styles.docsContainer}>
            <Link href={"#"} className={styles.docslink}>
              <span className=''>Docs</span>
            </Link>

            <Image src={notification} alt='Notification' width={30} height={30} />
          </div>
          <div 
            className={styles.searchMobileContainer} 
            onClick={() => setIsSearchModalOpen(true)}
          >
            <Image src={SearchIcon} alt='Search' width={15} height={15} />
          </div>
          <div className={styles.profileContainer}>
            <div className={styles.avatarContainer}>
              <Image src={UserProfile} alt='Notification' width={30} height={30} className={styles.avatarImg} />
            </div>
            <div className={styles.profileInfoContainer}>
              <span className=''>Adedeji</span>
              <Image src={dropdown} alt='dropdown icon' width={20} height={20} />
            </div>
          </div>
        </div>
      </div>
      <SearchModal 
        isOpen={isSearchModalOpen} 
        onClose={() => setIsSearchModalOpen(false)} 
      />
    </div>
  )
}

export default Navbar
