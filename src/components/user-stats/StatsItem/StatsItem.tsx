import React from "react"
import styles from "./statsItem.module.scss"
import Image from "next/image"
import {formatNumber} from "@/utils"

interface StatsItemProps {
  label: string
  value: string
  icon: string
  iconBg?: string
}

const StatsItem = ({label, value, icon, iconBg}: StatsItemProps) => {
  return (
    <div className={styles.statsItem}>
      <div className={styles.statsItemContent}>
        <div className={styles.statsItemIcon} style={{backgroundColor: iconBg}}>
          <Image src={icon || ""} alt='Icon' width={20} height={20} />
        </div>
        <span className={styles.statsItemLabel}>{label}</span>
        <span className={styles.statsItemValue}>{formatNumber(Number(value))}</span>
      </div>
    </div>
  )
}

export default StatsItem
