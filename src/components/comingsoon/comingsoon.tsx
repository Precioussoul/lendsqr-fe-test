import React from "react"
import styles from "./comingsoon.module.scss"
import Image from "next/image"
import constructionIcon from "@/assets/svgs/construction.svg"

interface ComingSoonProps {
  featureName?: string
}

const ComingSoon: React.FC<ComingSoonProps> = ({featureName = "this feature"}) => {
  return (
    <div className={styles.comingSoon}>
      <div className={styles.content}>
        <div className={styles.iconContainer}>
          <Image src={constructionIcon} alt='Under Construction' width={80} height={80} className={styles.icon} />
        </div>
        <h2 className={styles.title}>Feature Coming Soon</h2>
        <p className={styles.message}>We're working hard to bring you {featureName}. Please check back later!</p>
        <div className={styles.progressContainer}>
          <div className={styles.progressBar}>
            <div className={styles.progress}></div>
          </div>
          <span className={styles.progressText}>In Development</span>
        </div>
      </div>
    </div>
  )
}

export default ComingSoon
