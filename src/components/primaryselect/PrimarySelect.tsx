import React, {SelectHTMLAttributes} from "react"
import styles from "./primaryselect.module.scss"
import Image from "next/image"
import ChevronDownIcon from "@/assets/svgs/chevron-down.svg"

export interface SelectOption {
  value: string | number
  label: string
  disabled?: boolean
}

interface PrimarySelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string
  labelStyles?: React.CSSProperties
  error?: string
  id: string
  options: SelectOption[]
  icon?: string
  containerClassName?: string
}

const PrimarySelect = ({label, error, id, options, icon, labelStyles, containerClassName = "", className = "", ...props}: PrimarySelectProps) => {
  return (
    <div data-testid='select-container' className={`${styles.primarySelectContainer} ${containerClassName}`}>
      {label && (
        <label htmlFor={id} className={styles.label} style={labelStyles}>
          {label}
        </label>
      )}
      <div className={styles.selectContainer}>
        <select id={id} className={`${styles.select} ${className}`} {...props}>
          {options.map((option) => (
            <option key={option.value} value={option.value} disabled={option.disabled}>
              {option.label}
            </option>
          ))}
        </select>
        <div className={styles.selectIcon}>
          <Image src={ChevronDownIcon} alt='' width={16} height={16} />
        </div>
        {icon && (
          <div className={styles.prefixIcon}>
            <Image src={icon} alt='' width={16} height={16} />
          </div>
        )}
      </div>
      {error && <span className={styles.error}>{error}</span>}
    </div>
  )
}

export default PrimarySelect
