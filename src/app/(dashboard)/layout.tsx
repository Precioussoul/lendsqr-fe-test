import Navbar from "@/components/navbar/navbar"
import React from "react"

const DashboardLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  )
}

export default DashboardLayout
