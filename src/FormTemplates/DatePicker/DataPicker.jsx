import React, { useState } from 'react'
import Styles from './DatePicker.module.css'

const DataPicker = (props) => {
  //useState should be changed after I write context, so it is not temporary
  const [date, setDate] = useState('')
  //
  const handleChange = (e) => {
    setDate(e.target.value)
  }
  return (
    <div className={Styles['datePicker-container']}>
      <label className={Styles['label-name']}>{props.labelName}</label>
      <input
        type='date'
        onChange={handleChange}
        className={Styles['date-picker']}
        style={{
          border: date === '' ? '1px solid #BCBCBC' : '1px solid #98E37E',
        }}
        required
      />
    </div>
  )
}

export default DataPicker
