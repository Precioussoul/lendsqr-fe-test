import Navbar from "@/components/navbar/navbar"
import React from "react"
import Sidebar from "@/components/sidebar/sidebar"
import styles from "./layout.module.scss"

const DashboardLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <div>
      <Navbar />
      <div className={styles.dashboardLayout}>
        <div className={styles.sidebar}>
          <Sidebar />
        </div>
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  )
}

export default DashboardLayout
