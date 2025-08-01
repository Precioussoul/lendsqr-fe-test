import React from "react"
import styles from "./primaryinput.module.scss"
import Image from "next/image"

interface PrimaryInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  labelStyles?: React.CSSProperties
  type: string
  error?: string
  id: string
  icon?: string
  showPassword?: boolean
  extraIcon?: string
}
const PrimaryInput = ({label, type, error, id, icon, showPassword, extraIcon, labelStyles, ...props}: PrimaryInputProps) => {
  const [isPasswordVisible, setIsPasswordVisible] = React.useState(false)

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible)
  }

  return (
    <div className={styles.primaryInputContainer}>
      {label && (
        <label htmlFor={id} className={styles.label} style={labelStyles}>
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
        {extraIcon && <Image src={extraIcon} alt='Icon' width={15} height={15} />}
      </div>

      <span className={styles.error}>{error}</span>
    </div>
  )
}

export default PrimaryInput
