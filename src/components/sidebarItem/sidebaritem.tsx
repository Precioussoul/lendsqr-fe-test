"use client"
import styles from "./sidebaritem.module.scss"
import Image from "next/image"
import React from "react"
import UserIcon from "@/assets/svgs/user-friends 1.svg"

interface SidebarItemProps {
  active?: boolean
  icon?: string
  extraIcon?: string
  title: string
  onClick?: () => void
  isPinned?: boolean
}

const SidebarItem = ({active, icon, extraIcon, title, onClick, isPinned}: SidebarItemProps) => {
  return (
    <li
      onClick={onClick}
      className={styles.sidebarItem}
      style={{
        backgroundColor: active ? "#39CDCC30" : "",
        borderLeft: active ? "4px solid #39CDCC" : "",
      }}
    >
      <Image src={icon || UserIcon} alt='userIcon' width={20} height={20} />
      <span style={{color: active || isPinned ? "#213f7d" : "#213f7d90"}} className={styles.title}>
        {title}
      </span>
      {extraIcon && <Image src={extraIcon} alt='extraIcon' width={15} height={15} />}
    </li>
  )
}

export default SidebarItem
