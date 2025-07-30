"use client"

import React, {useState, useMemo, useEffect} from "react"
import styles from "./users.module.scss"
import Table from "@/components/table/Table"
import UserStats from "@/components/user-stats/userstats"
import {User, UserTableHeader} from "@/types/user"
import {useRouter} from "next/navigation"

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
  const [users, setUsers] = useState<User[]>([])

  const handleRowClick = (user: User) => {
    router.push(`/users/${user.id}`)
  }

  const handleStatusChange = (userId: string, status: User["status"]) => {
    setUsers((prevUsers) => prevUsers.map((user) => (user.id === userId ? {...user, status} : user)))
  }

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch("/api/users")
      const data = await response.json()
      setUsers(data)
    }
    fetchUsers()
  }, [])

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Users</h1>
      <div className={styles.userStatsContainer}>
        <UserStats />
        <Table headers={tableHeaders} data={users} onRowClick={handleRowClick} onStatusChange={handleStatusChange} />
      </div>
    </div>
  )
}

export default UsersDashboardPage
