import React from 'react'
import Styles from './Input.module.css'
import ValidationIcon from '../../Images/validation-icon.svg'
import ErrorIcon from '../../Images/validation-error-icon.svg'

const Input = (props) => {
  return (
    <div className={Styles['input-container']}>
      <label
        className={Styles['label-name']}
        style={{
          color: props.value !== '' && props.error ? '#e52f2f' : '#000000',
        }}
      >
        {props.labelName}
      </label>
      <div className={Styles['input-with-logo']}>
        <input
          type='text'
          className={Styles.input}
          placeholder={props.placeHolder}
          {...props.register(props.name, {
            ...props.validation,
            onChange: props.onChange,
            value: props.value,
            name: props.name,
          })}
          style={{
            border:
              props.value === ''
                ? '1px solid #bcbcbc'
                : props.error
                ? '1px solid #E52F2F'
                : '1px solid #98E37E',
            width: props.width,
          }}
        />
        <img
          src={ValidationIcon}
          className={Styles['validation-icon']}
          style={{
            display: props.value !== '' && !props.error ? 'block' : 'none',
            left: props.iconPosition,
          }}
          alt='validation-icon'
        />
        <img
          src={ErrorIcon}
          className={Styles['error-icon']}
          style={{
            display: props.value !== '' && props.error ? 'block' : 'none',
          }}
          alt='error-icon'
        />
      </div>
      <p className={Styles['validation-text']}>
        {props.value === '' ? props.validationMessage : props.error?.message}
      </p>
    </div>
  )
}

export default Input
