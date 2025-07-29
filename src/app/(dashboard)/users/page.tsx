"use client"

import React, {useState, useMemo} from "react"
import styles from "./users.module.scss"
import Table from "@/components/table/Table"
import UserStats from "@/components/user-stats/userstats"
import {User, UserTableHeader} from "@/types/user"
import {useRouter} from "next/navigation"

// Mock data - in a real app, this would come from an API
const generateMockUsers = (count: number): User[] => {
  const statuses: User["status"][] = ["active", "inactive", "pending", "blacklisted"]
  const organizations = ["Lendsqr", "Irorun", "Lendstar", "Lendistry", "Lendio"]
  const domains = ["gmail.com", "yahoo.com", "lendsqr.com", "example.com"]

  return Array.from({length: count}, (_, i) => ({
    id: `user-${i + 1}`,
    organization: organizations[Math.floor(Math.random() * organizations.length)],
    username: `user${i + 1}`,
    email: `user${i + 1}@${domains[Math.floor(Math.random() * domains.length)]}`,
    phoneNumber: `+1 (555) ${Math.floor(100 + Math.random() * 900)}-${Math.floor(1000 + Math.random() * 9000)}`,
    dateJoined: new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "short",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    })
      .format(new Date(Date.now() - Math.floor(Math.random() * 1000 * 60 * 60 * 24 * 365 * 3)))
      .replace(/,/g, ""),
    status: statuses[Math.floor(Math.random() * statuses.length)],
  }))
}

const tableHeaders: UserTableHeader[] = [
  {key: "organization", label: "Organization", sortable: true, filterable: true},
  {key: "username", label: "Username", sortable: true, filterable: true},
  {key: "email", label: "Email", sortable: true, filterable: true},
  {key: "phoneNumber", label: "Phone Number", sortable: true, filterable: true},
  {key: "dateJoined", label: "Date Joined", sortable: true, filterable: true},
  {key: "status", label: "Status", sortable: true, filterable: true},
  {key: "actions", label: ""},
]

const UsersDashboardPage = () => {
  const router = useRouter()
  const [users, setUsers] = useState<User[]>(() => generateMockUsers(50))

  const handleRowClick = (user: User) => {
    // Navigate to user details page
    console.log("Viewing user:", user.id)
    router.push(`/users/${user.id}`)
  }

  const handleStatusChange = (userId: string, status: User["status"]) => {
    setUsers((prevUsers) => prevUsers.map((user) => (user.id === userId ? {...user, status} : user)))
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Users</h1>

      {/* users stats */}

      <div className={styles.userStatsContainer}>
        <UserStats />
        <div className={styles.tableContainer}>
          <Table headers={tableHeaders} data={users} onRowClick={handleRowClick} onStatusChange={handleStatusChange} />
        </div>
      </div>
    </div>
  )
}

export default UsersDashboardPage
