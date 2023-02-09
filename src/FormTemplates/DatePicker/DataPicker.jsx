import React from 'react'
import Styles from './DatePicker.module.css'

const DataPicker = (props) => {
  return (
    <div className={Styles['datePicker-container']}>
      <label className={Styles['label-name']}>{props.labelName}</label>
      <input
        type='date'
        className={Styles['date-picker']}
        style={{
          border:
            props.value === '' ? '1px solid #BCBCBC' : '1px solid #98E37E',
        }}
        {...props.register(props.name, {
          ...props.validation,
          onChange: props.onChange,
          name: props.name,
          value: props.value,
        })}
      />
    </div>
  )
}

export default DataPicker
