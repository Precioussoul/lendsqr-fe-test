import React from "react"
import styles from "./detail-item.module.scss"

interface DetailItemProps {
  title: string
  subtitle: string
}

const DetailItem = ({title, subtitle}: DetailItemProps) => {
  return (
    <div className={styles.detailItem}>
      <span className={styles.detailItemTitle}>{title}</span>
      <h3 className={styles.detailItemSubTitle}>{subtitle}</h3>
    </div>
  )
}

export default DetailItem
