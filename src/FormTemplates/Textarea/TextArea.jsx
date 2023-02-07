import React from 'react'
import Styles from './TextArea.module.css'

const TextArea = (props) => {
  return (
    <div className={Styles['textarea-container']}>
      <label className={Styles['label-name']}>{props.labelName}</label>
      <textarea
        placeholder='ზოგადი ინფო ჩემს შესახებ'
        className={Styles.textarea}
        style={{
          border:
            props.value === '' ? '1px solid #BCBCBC' : '1px solid #98E37E',
        }}
        {...props.register(props.name, {
          onChange: props.onChange,
          value: props.value,
          name: props.name,
        })}
      />
    </div>
  )
}

export default TextArea
