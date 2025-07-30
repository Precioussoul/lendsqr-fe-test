"use client"
import React from "react"
import styles from "./filterform.module.scss"
import PrimaryInput from "../primaryInput/PrimaryInput"
import PrimaryButton from "../primarybutton/primary-button"
import PrimarySelect from "../primaryselect/PrimarySelect"
import CalendarIcon from "@/assets/svgs/calendar.svg"

const FilterForm = () => {
  return (
    <div className={styles.filterForm}>
      <PrimarySelect
        options={[
          {value: "", label: "Select"},
          {value: "1", label: "Organization 1"},
          {value: "2", label: "Organization 2"},
          {value: "3", label: "Organization 3"},
        ]}
        id='organization'
        name='organization'
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
        type='tel'
        id='user'
        name='phoneNumber'
        placeholder='Phone Number'
        label='Phone Number'
        labelStyles={{textTransform: "capitalize", fontSize: 14}}
      />
      <PrimaryInput
        type='date'
        id='user'
        name='dateJoined'
        placeholder='Date joined'
        label='Date'
        labelStyles={{textTransform: "capitalize", fontSize: 14}}
      />
      <PrimarySelect
        options={[
          {value: "", label: "Status"},
          {value: "1", label: "Active"},
          {value: "2", label: "Inactive"},
          {value: "3", label: "Pending"},
          {value: "4", label: "Blacklisted"},
        ]}
        id='user'
        name='status'
        label='Status'
        labelStyles={{textTransform: "capitalize", fontSize: 14}}
      />
      <div className={styles.filterButtons}>
        <PrimaryButton
          style={{
            backgroundColor: "#fff",
            color: "var(--text-color)",
            border: "1px solid var(--text-color)",
            width: "50%",
            padding: "10px 15px",
          }}
        >
          Reset
        </PrimaryButton>
        <PrimaryButton style={{width: "50%", padding: "10px 15px"}}>Filter</PrimaryButton>
      </div>
    </div>
  )
}

export default FilterForm
