"use client"
import React from "react"
import styles from "./primarybutton.module.scss"

interface PrimaryButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}

const PrimaryButton = ({children, ...props}: PrimaryButtonProps) => {
  return (
    <button className={styles.primaryButton} {...props}>
      {children}
    </button>
  )
}

export default PrimaryButton
