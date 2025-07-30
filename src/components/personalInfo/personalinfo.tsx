import React from "react"
import styles from "./personalinfo.module.scss"
import DetailItem from "../detail-item/detail-item"
import {ExtendedUser} from "@/lib"

interface PersonalInfoProps {
  user: ExtendedUser
}

const PersonalInfo: React.FC<PersonalInfoProps> = ({user}) => {
  if (!user) return null

  const personalInfoData = [
    {
      header: "Personal Information",
      details: [
        {title: "Full Name", subtitle: user.personalInfo.fullName},
        {title: "Phone Number", subtitle: user.phoneNumber},
        {title: "Email Address", subtitle: user.email},
        {title: "BVN", subtitle: user.personalInfo.bvn},
        {title: "Gender", subtitle: user.personalInfo.gender},
        {title: "Marital Status", subtitle: user.personalInfo.maritalStatus},
        {title: "Children", subtitle: user.personalInfo.children},
        {title: "Type of Residence", subtitle: user.personalInfo.residenceType},
      ],
    },
    {
      header: "Education and Employment",
      details: [
        {title: "Level of Education", subtitle: user.education.level},
        {title: "Employment Status", subtitle: user.education.employmentStatus},
        {title: "Sector of Employment", subtitle: user.education.sector},
        {title: "Duration of Employment", subtitle: user.education.duration},
        {title: "Office Email", subtitle: user.education.officeEmail},
        {title: "Monthly Income", subtitle: user.education.monthlyIncome},
        {title: "Loan Repayment", subtitle: user.education.loanRepayment},
      ],
    },
    {
      header: "Socials",
      details: [
        {title: "Twitter", subtitle: user.socials.twitter},
        {title: "Facebook", subtitle: user.socials.facebook},
        {title: "Instagram", subtitle: user.socials.instagram},
      ],
    },
    {
      header: "Guarantor",
      details: [
        {title: "Full Name", subtitle: user.guarantor.fullName},
        {title: "Phone Number", subtitle: user.guarantor.phoneNumber},
        {title: "Email Address", subtitle: user.guarantor.email},
        {title: "Relationship", subtitle: user.guarantor.relationship},
      ],
    },
  ]

  return (
    <div className={styles.personalinfo}>
      <div className={styles.personalinfoContent}>
        {personalInfoData.map((section, index) => (
          <div className={styles.personalinfoHeader} key={index}>
            <h2 className={styles.personalinfoTitle}>{section.header}</h2>
            <div className={styles.detailItemsContainer}>
              {section.details.map((detail, idx) => (
                <DetailItem key={idx} title={detail.title} subtitle={detail.subtitle} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PersonalInfo
