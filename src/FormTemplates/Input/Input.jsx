import React from 'react'
import { useForm } from 'react-hook-form'
import Styles from './Input.module.css'
import ValidationIcon from '../../Images/validation-icon.svg'
import ErrorIcon from '../../Images/validation-error-icon.svg'

const Input = (props) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      [props.name]: '',
    },
  })
  const isEmpty = watch(props.name)
  return (
    <div
      onChange={handleSubmit((data) => {
        return data
      })}
      className={Styles['input-container']}
    >
      <label
        className={Styles['label-name']}
        style={{
          color: isEmpty !== '' && errors[props.name] ? '#e52f2f' : '#000000',
        }}
      >
        {props.labelName}
      </label>
      <div className={Styles['input-with-logo']}>
        <input
          type='text'
          className={Styles.input}
          placeholder={props.placeHolder}
          {...register(`${props.name}`, props.validation)}
          style={{
            border:
              isEmpty === ''
                ? '1px solid #bcbcbc'
                : errors[props.name]
                ? '1px solid #E52F2F'
                : '1px solid #98E37E',
            width: props.width,
          }}
        />
        <img
          src={ValidationIcon}
          className={Styles['validation-icon']}
          style={{
            display: isEmpty !== '' && !errors[props.name] ? 'block' : 'none',
            left: props.iconPosition,
          }}
          alt='validation-icon'
        />
        <img
          src={ErrorIcon}
          className={Styles['error-icon']}
          style={{
            display: isEmpty !== '' && errors[props.name] ? 'block' : 'none',
          }}
          alt='error-icon'
        />
      </div>
      <p className={Styles['validation-text']}>
        {isEmpty === '' ? props.validationMessage : errors[props.name]?.message}
      </p>
    </div>
  )
}

export default Input
