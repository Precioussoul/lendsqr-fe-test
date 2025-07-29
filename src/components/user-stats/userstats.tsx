import React from "react"
import styles from "./userstats.module.scss"
import StatsItem from "./StatsItem/StatsItem"
import np_users from "@/assets/svgs/np_users.svg"
import np_users_active from "@/assets/svgs/np_users_active.svg"
import np_users_loan from "@/assets/svgs/np_users_loan.svg"
import np_users_savings from "@/assets/svgs/np_users_savings.svg"

const UserStats = () => {
  return (
    <div className={styles.userStats}>
      <StatsItem label='Users' value='2456' icon={np_users} iconBg='#DF18FF15' />
      <StatsItem label='Active Users' value='2453' icon={np_users_active} iconBg='#5718FF15' />
      <StatsItem label='Users with loan' value='124531' icon={np_users_loan} iconBg='#F55F4415' />
      <StatsItem label='Users with Savings' value='102453' icon={np_users_savings} iconBg='#FF336615' />
    </div>
  )
}

export default UserStats
