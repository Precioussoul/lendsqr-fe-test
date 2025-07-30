/**
 * Generate mock users data - mocky.io is now paid and json-generator.com - i'm not familiar with it - it confusing
 * that's why i'm using my own function for convenience
 * @param count - The number of users to generate
 * @returns Array of mock users
 * */

import {User} from "@/types/user"

export interface ExtendedUser extends User {
  personalInfo: {
    fullName: string
    bvn: string
    gender: string
    maritalStatus: string
    children: string
    residenceType: string
  }
  education: {
    level: string
    employmentStatus: string
    sector: string
    duration: string
    officeEmail: string
    monthlyIncome: string
    loanRepayment: string
  }
  socials: {
    twitter: string
    facebook: string
    instagram: string
  }
  guarantor: {
    fullName: string
    phoneNumber: string
    email: string
    relationship: string
  }
  account: {
    balance: string
    accountNumber: string
    bank: string
  }
  documents: {
    idType: string
    idNumber: string
    idIssueDate: string
    idExpiryDate: string
  }
  createdAt: string
  updatedAt: string
}

export const generateMockUsers = (count: number): ExtendedUser[] => {
  const statuses: User["status"][] = ["active", "inactive", "pending", "blacklisted"]
  const organizations = ["Lendsqr", "Irorun", "Lendstar", "Lendistry", "Lendio"]
  const domains = ["gmail.com", "yahoo.com", "lendsqr.com", "example.com"]
  const firstNames = ["Grace", "John", "Sarah", "Michael", "Aisha", "David", "Fatima", "James", "Amina", "Daniel"]
  const lastNames = ["Effiom", "Smith", "Johnson", "Williams", "Brown", "Jones", "Garcia", "Miller", "Davis", "Rodriguez"]
  const genders = ["Female", "Male", "Non-binary"]
  const maritalStatuses = ["Single", "Married", "Divorced", "Widowed"]
  const residenceTypes = ["Parent's Apartment", "Own Apartment", "Rented Apartment", "Shared Apartment"]
  const educationLevels = ["High School", "Associate Degree", "Bachelor's Degree", "Master's Degree", "PhD"]
  const employmentStatuses = ["Employed", "Self-employed", "Unemployed", "Student"]
  const sectors = ["Fintech", "Healthcare", "Education", "Technology", "Finance", "Retail", "Manufacturing"]
  const relationships = ["Sister", "Brother", "Mother", "Father", "Friend", "Spouse", "Cousin"]
  const banks = ["Providus Bank", "Access Bank", "Zenith Bank", "GTBank", "First Bank", "UBA"]
  const idTypes = ["Driver's License", "National ID", "Passport", "Voter's Card"]

  const getRandomDate = (start: Date, end: Date): string => {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).toISOString().split("T")[0]
  }

  return Array.from({length: count}, (_, i) => {
    const firstName = firstNames[Math.floor(Math.random() * firstNames.length)]
    const lastName = lastNames[Math.floor(Math.random() * lastNames.length)]
    const fullName = `${firstName} ${lastName}`
    const username = fullName.toLowerCase().replace(/\s+/g, ".")
    const email = `${username}@${domains[Math.floor(Math.random() * domains.length)]}`
    const phoneNumber = `+1 (555) ${Math.floor(100 + Math.random() * 900)}-${Math.floor(1000 + Math.random() * 9000)}`
    const now = new Date()
    const dateJoined = new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "short",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    })
      .format(new Date(now.getTime() - Math.floor(Math.random() * 1000 * 60 * 60 * 24 * 365 * 3)))
      .replace(/,/g, "")

    const createdAt = new Date(now.getTime() - Math.floor(Math.random() * 1000 * 60 * 60 * 24 * 365 * 3)).toISOString()
    const updatedAt = new Date(new Date(createdAt).getTime() + Math.random() * (now.getTime() - new Date(createdAt).getTime())).toISOString()
    const lastActive = new Date(updatedAt).toISOString()

    return {
      id: `user-${i + 1}`,
      organization: organizations[Math.floor(Math.random() * organizations.length)],
      username,
      email,
      phoneNumber,
      dateJoined,
      status: statuses[Math.floor(Math.random() * statuses.length)],
      personalInfo: {
        fullName,
        bvn: Math.floor(1000000000 + Math.random() * 9000000000).toString(),
        gender: genders[Math.floor(Math.random() * genders.length)],
        maritalStatus: maritalStatuses[Math.floor(Math.random() * maritalStatuses.length)],
        children: Math.random() > 0.5 ? `${Math.floor(Math.random() * 4)}` : "None",
        residenceType: residenceTypes[Math.floor(Math.random() * residenceTypes.length)],
      },
      education: {
        level: educationLevels[Math.floor(Math.random() * educationLevels.length)],
        employmentStatus: employmentStatuses[Math.floor(Math.random() * employmentStatuses.length)],
        sector: sectors[Math.floor(Math.random() * sectors.length)],
        duration: `${Math.floor(1 + Math.random() * 10)} years`,
        officeEmail: `office.${username}@${domains[Math.floor(Math.random() * domains.length)]}`,
        monthlyIncome: `₦${Math.floor(100 + Math.random() * 900)},000.00-₦${Math.floor(1000 + Math.random() * 9000)},000.00`,
        loanRepayment: `${Math.floor(10 + Math.random() * 90)},000.00`,
      },
      socials: {
        twitter: `@${username}`,
        facebook: fullName,
        instagram: `@${username}`,
      },
      guarantor: {
        fullName: `${firstNames[Math.floor(Math.random() * firstNames.length)]} ${lastNames[Math.floor(Math.random() * lastNames.length)]}`,
        phoneNumber: `+1 (555) ${Math.floor(100 + Math.random() * 900)}-${Math.floor(1000 + Math.random() * 9000)}`,
        email: `guarantor.${username}@${domains[Math.floor(Math.random() * domains.length)]}`,
        relationship: relationships[Math.floor(Math.random() * relationships.length)],
      },
      account: {
        balance: `₦${Math.floor(1000 + Math.random() * 90000)}.00`,
        accountNumber: Math.floor(1000000000 + Math.random() * 9000000000).toString(),
        bank: banks[Math.floor(Math.random() * banks.length)],
      },
      documents: {
        idType: idTypes[Math.floor(Math.random() * idTypes.length)],
        idNumber: `${idTypes[0].substring(0, 2).toUpperCase()}-${Math.floor(1000000000 + Math.random() * 9000000000)}`,
        idIssueDate: getRandomDate(new Date(2015, 0, 1), new Date(2020, 11, 31)),
        idExpiryDate: getRandomDate(new Date(2023, 0, 1), new Date(2030, 11, 31)),
      },
      createdAt,
      updatedAt,
    }
  })
}
