"use client"
import Navbar from "@/components/navbar/navbar"
import React from "react"
import Sidebar from "@/components/sidebar/sidebar"
import styles from "./layout.module.scss"

const DashboardLayout = ({children}: {children: React.ReactNode}) => {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false)

  const handleSidebarMenuClick = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }
  return (
    <div className={styles.dashboardLayoutContainer}>
      <div>
        <Navbar onSidebarMenuClick={handleSidebarMenuClick} />
        <div className={styles.dashboardLayout}>
          <div className={styles.sidebar}>
            <Sidebar />
          </div>
          <div className={styles.content}>{children}</div>
        </div>
      </div>
      {isSidebarOpen && (
        <div className={styles.sidebarOverlay}>
          <div className={styles.sidebarOverlayContainer} onClick={handleSidebarMenuClick}>
            <Sidebar isSidebarOpen={isSidebarOpen} />
          </div>
        </div>
      )}
    </div>
  )
}

export default DashboardLayout
