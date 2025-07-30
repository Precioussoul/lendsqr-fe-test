"use client"
import React, {useState} from "react"
import styles from "./user-detail.module.scss"
import {useParams, useRouter} from "next/navigation"
import Image from "next/image"
import PrimaryButton from "@/components/primarybutton/primary-button"
import goBackIcon from "@/assets/svgs/go-back.svg"
import profileIcon from "@/assets/svgs/np_user_profile.svg"
import fullStarIcon from "@/assets/svgs/np-star-full.svg"
import outlineStarIcon from "@/assets/svgs/np_star_outline.svg"
import Personalinfo from "@/components/personalInfo/personalinfo"
import ComingSoon from "@/components/comingsoon/comingsoon"
import {useEffect} from "react"
import {ExtendedUser} from "@/lib"

const UserDetailPage = () => {
  const router = useRouter()
  const {userId} = useParams()
  const [user, setUser] = useState<ExtendedUser | null>(null)

  useEffect(() => {
    const fetchUser = async () => {
      const cacheKey = `user-${userId}`

      const cachedData = localStorage.getItem(cacheKey)
      if (cachedData) {
        setUser(JSON.parse(cachedData))
      }

      try {
        const response = await fetch(`/api/users?id=${userId}`)
        const data = await response.json()
        setUser(data)
        localStorage.setItem(cacheKey, JSON.stringify(data))
      } catch (error) {
        console.error("Error fetching user data:", error)
      }
    }

    fetchUser()
  }, [userId])

  const [activeTab, setActiveTab] = useState("general")

  return (
    <div className={styles.container}>
      <div className={styles.headerContent}>
        <button onClick={() => router.back()} className={styles.goBackButton}>
          <Image src={goBackIcon} alt='go-back' width={28} height={10} />
          <span>Back to Users</span>
        </button>
        <div className={styles.headerContentActions}>
          <h1 className={styles.headerTitle}>User Details</h1>

          <div className={styles.userDetailsActions}>
            <PrimaryButton
              style={{
                backgroundColor: "transparent",
                color: "#E4033B",
                border: "1px solid #E4033B",
                fontSize: "14px",
                padding: "8px 16px",
                textTransform: "uppercase",
                borderRadius: "8px",
                cursor: "pointer",
              }}
            >
              Blacklist User
            </PrimaryButton>
            <PrimaryButton
              style={{
                backgroundColor: "transparent",
                color: "var(--primary)",
                border: "1px solid var(--primary)",
                fontSize: "14px",
                textTransform: "uppercase",

                padding: "8px 16px",
                borderRadius: "8px",
                cursor: "pointer",
              }}
            >
              Activate User
            </PrimaryButton>
          </div>
        </div>

        {/* user detail info */}

        <div className={styles.userDetailInfo}>
          <div className={styles.userDetailInfoHeader}>
            <div className={styles.userDetailInfoHeaderContent}>
              {/* profile area */}
              <div className={styles.profileWrapper}>
                <div className={styles.profileImageWrapper}>
                  <Image src={profileIcon} alt='profile' width={40} height={40} className={styles.profileImage} />
                </div>
                <div className={styles.profileContent}>
                  <h1 className={styles.profileContentTitle}>{user?.personalInfo?.fullName}</h1>
                  <p className={styles.profileContentSubTitle}>{user?.id}</p>
                </div>
              </div>

              {/* user rating */}
              <div className={styles.userRatingWrapper}>
                <h1 className={styles.userRatingContentTitle}>User’s Tier</h1>
                {/* stars */}
                <div className={styles.userRatingContentStars}>
                  <Image src={fullStarIcon} alt='star' width={20} height={20} className={styles.userRatingContentStar} />
                  <Image src={outlineStarIcon} alt='star' width={20} height={20} className={styles.userRatingContentStar} />
                  <Image src={outlineStarIcon} alt='star' width={20} height={20} className={styles.userRatingContentStar} />
                </div>
              </div>

              {/* user balance */}
              <div className={styles.userBalanceWrapper}>
                <h1 className={styles.userRatingContentTitle}>₦200,000.00</h1>
                <p className={styles.userRatingContentSubTitle}>9912345678/Providus Bank</p>
              </div>
            </div>
            <div className={styles.userDetailInfoHeaderActions}>
              <button className={`${styles.tabButton} ${activeTab === "general" ? styles.activeTab : ""}`} onClick={() => setActiveTab("general")}>
                General Details
              </button>
              <button className={`${styles.tabButton} ${activeTab === "documents" ? styles.activeTab : ""}`} onClick={() => setActiveTab("documents")}>
                Documents
              </button>
              <button className={`${styles.tabButton} ${activeTab === "bank" ? styles.activeTab : ""}`} onClick={() => setActiveTab("bank")}>
                Bank Details
              </button>
              <button className={`${styles.tabButton} ${activeTab === "loans" ? styles.activeTab : ""}`} onClick={() => setActiveTab("loans")}>
                Loans
              </button>
              <button className={`${styles.tabButton} ${activeTab === "savings" ? styles.activeTab : ""}`} onClick={() => setActiveTab("savings")}>
                Savings
              </button>
              <button
                className={`${styles.tabButton} ${activeTab === "appAndSystem" ? styles.activeTab : ""}`}
                onClick={() => setActiveTab("appAndSystem")}
              >
                App and System
              </button>
            </div>
          </div>
        </div>
        {/* Tab Content */}
        <div className={styles.tabContent}>
          {activeTab === "general" && <div className={styles.tabPanel}>{user && <Personalinfo user={user} />}</div>}
          {activeTab === "documents" && (
            <div className={styles.tabPanel}>
              <ComingSoon featureName='Documents' />
            </div>
          )}
          {activeTab === "bank" && (
            <div className={styles.tabPanel}>
              <ComingSoon featureName='Bank Details' />
            </div>
          )}
          {activeTab === "loans" && (
            <div className={styles.tabPanel}>
              <ComingSoon featureName='Loans' />
            </div>
          )}
          {activeTab === "savings" && (
            <div className={styles.tabPanel}>
              <ComingSoon featureName='Savings' />
            </div>
          )}
          {activeTab === "appAndSystem" && (
            <div className={styles.tabPanel}>
              <ComingSoon featureName='App and System' />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default UserDetailPage
