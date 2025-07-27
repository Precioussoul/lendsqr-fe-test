import styles from "./navbar.module.scss"
import Image from "next/image"
import logo from "@/assets/svgs/Lendsqr_logo.svg"
import sidebarLeftMenu from "@/assets/svgs/sidebar-left-menu.svg"

interface NavbarProps {
  onSidebarMenuClick?: () => void
}

const Navbar = ({onSidebarMenuClick}: NavbarProps) => {
  return (
    <div className={styles.navbar}>
      <div className={styles.logoContainer}>
        <Image src={sidebarLeftMenu} alt='Sidebar Left Menu' width={30} height={30} className={styles.sidebarMenu} onClick={onSidebarMenuClick} />
        <Image src={logo} alt='Logo' width={150} height={50} className={styles.logo} />
      </div>
      <div className={styles.navLinksContainer}>
        {/* search */}
        <div className={styles.searchContainer}></div>
        {/* notification */}
        <div className={styles.notificationContainer}></div>
      </div>
    </div>
  )
}

export default Navbar
