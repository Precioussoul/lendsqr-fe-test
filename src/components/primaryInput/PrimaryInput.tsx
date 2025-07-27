import React from "react"
import styles from "./primaryinput.module.scss"
import Image from "next/image"

interface PrimaryInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  type: string
  error?: string
  id: string
  icon?: string
  showPassword?: boolean
}
const PrimaryInput = ({label, type, error, id, icon, showPassword, ...props}: PrimaryInputProps) => {
  const [isPasswordVisible, setIsPasswordVisible] = React.useState(false)

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible)
  }

  return (
    <div className={styles.primaryInputContainer}>
      {label && (
        <label htmlFor={id} className={styles.label}>
          {label}
        </label>
      )}
      <div className={styles.inputContainer}>
        <input type={isPasswordVisible ? "text" : type} id={id} className={styles.input} {...props} />
        {icon && <Image src={icon} alt='Icon' width={15} height={15} />}
        {showPassword && (
          <span className={styles.showPassword} onClick={togglePasswordVisibility}>
            {isPasswordVisible ? "Hide" : "Show"}
          </span>
        )}
      </div>

      <span className={styles.error}>{error}</span>
    </div>
  )
}

export default PrimaryInput
