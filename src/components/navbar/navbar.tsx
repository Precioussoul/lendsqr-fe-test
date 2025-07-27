import styles from "./navbar.module.scss"
import Image from "next/image"
import logo from "@/assets/svgs/Lendsqr_logo.svg"

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.logoContainer}>
        <Image src={logo} alt='Logo' width={150} height={50} className={styles.logo} />
      </div>
      <div className={styles.navLinksContainer}>
        <ul>
          <li>Dashboard</li>
          <li>Users</li>
          <li>Transactions</li>
          <li>Settings</li>
        </ul>
      </div>
      <div className={styles.profileContainer}>
        <Image src={logo} alt='Logo' width={150} height={50} className={styles.logo} />
      </div>
    </div>
  )
}

export default Navbar
