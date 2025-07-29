import React from "react"
import styles from "./personalinfo.module.scss"
import DetailItem from "../detail-item/detail-item"
import {personalInfoData} from "./data"

const Personalinfo = () => {
  return (
    <div className={styles.personalinfo}>
      <div className={styles.personalinfoContent}>
        {personalInfoData.map((item, index) => (
          <div className={styles.personalinfoHeader} key={index}>
            <h2 className={styles.personalinfoTitle}>{item.header}</h2>
            <div className={styles.detailItemsContainer}>
              {item.details.map((detail, index) => (
                <DetailItem key={index} title={detail.title} subtitle={detail.subtitle} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Personalinfo
