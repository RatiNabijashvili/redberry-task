import React from 'react'
import Styles from './TextArea.module.css'

const TextArea = (props) => {
  return (
    <div className={Styles['textarea-container']}>
      <label className={Styles['label-name']}>{props.labelName}</label>
      <textarea
        placeholder={props.placeHolder}
        className={Styles.textarea}
        style={{
          border:
            props.value === '' ? '1px solid #BCBCBC' : '1px solid #98E37E',
        }}
        {...props.register(props.name, {
          ...props.validation,
          onChange: props.onChange,
          value: props.value,
          name: props.name,
        })}
      />
      <p className={Styles['validation-text']}>{props.error?.message}</p>
    </div>
  )
}

export default TextArea
