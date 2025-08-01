"use client"
import React from "react"
import styles from "./sign-in.module.scss"
import Image from "next/image"
import signInBg from "@/assets/images/pablo-auth-bg.png"
import logo from "@/assets/svgs/Lendsqr_logo.svg"
import PrimaryInput from "@/components/primaryInput/PrimaryInput"
import {useRouter} from "next/navigation"

const LoginPage = () => {
  const router = useRouter()

  const handleSignIn = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    router.push("/users")
  }

  return (
    <div className={styles.authContainer}>
      <div className={styles.authBg}>
        <Image src={logo} alt='Logo' width={150} height={50} className={styles.logo} />
        <div className={styles.authBgImage}>
          <Image src={signInBg} alt='Sign In Background' width={1000} height={1000} />
        </div>
      </div>
      <div className={styles.authContent}>
        <div className={styles.authLogo}>
          <Image src={logo} alt='Logo' width={150} height={50} className={styles.logo} />
        </div>
        <div className={styles.authFormContent}>
          <div className={styles.authFormHeader}>
            <h1>Welcome!</h1>
            <p>Enter details to login.</p>
          </div>
          <form onSubmit={handleSignIn}>
            <div className={styles.authForm}>
              <PrimaryInput type='email' id='email' name='email' placeholder='Enter your email' required />
              <PrimaryInput type='password' id='password' name='password' placeholder='Enter your password' showPassword required />
              <span className={styles.forgotPassword}>Forgot Password?</span>
            </div>
            <button type='submit' className={styles.signInButton}>
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
