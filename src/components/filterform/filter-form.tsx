"use client"
import React from "react"
import styles from "./filterform.module.scss"
import PrimaryInput from "../primaryInput/PrimaryInput"
import PrimaryButton from "../primarybutton/primary-button"
const FilterForm = () => {
  return (
    <div className={styles.filterForm}>
      <PrimaryInput
        type='text'
        id='user'
        name='username'
        placeholder='Username'
        label='Organization'
        labelStyles={{textTransform: "capitalize", fontSize: 14}}
      />
      <PrimaryInput
        type='text'
        id='user'
        name='username'
        placeholder='Username'
        label='Username'
        labelStyles={{textTransform: "capitalize", fontSize: 14}}
      />
      <PrimaryInput type='text' id='user' name='email' placeholder='Email' label='Email' labelStyles={{textTransform: "capitalize", fontSize: 14}} />
      <PrimaryInput
        type='text'
        id='user'
        name='dateJoined'
        placeholder='Date joined'
        label='Date'
        labelStyles={{textTransform: "capitalize", fontSize: 14}}
      />
      <PrimaryInput
        type='text'
        id='user'
        name='phoneNumber'
        placeholder='Phone Number'
        label='Phone Number'
        labelStyles={{textTransform: "capitalize", fontSize: 14}}
      />
      <PrimaryInput type='text' id='user' name='status' placeholder='Status' label='Status' labelStyles={{textTransform: "capitalize", fontSize: 14}} />
      <div className={styles.filterButtons}>
        <PrimaryButton
          style={{
            backgroundColor: "#fff",
            color: "var(--text-color)",
            border: "1px solid var(--text-color)",
            width: "50%",
          }}
        >
          Reset
        </PrimaryButton>
        <PrimaryButton style={{width: "50%"}}>Filter</PrimaryButton>
      </div>
    </div>
  )
}

export default FilterForm
