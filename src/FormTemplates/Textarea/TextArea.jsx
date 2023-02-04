import React, { useState } from 'react'
import Styles from './TextArea.module.css'

const TextArea = (props) => {
  //useState should be changed after I write context, so it is not temporary
  const [text, setText] = useState('')
  //

  return (
    <div className={Styles['textarea-container']}>
      <label className={Styles['label-name']}>{props.labelName}</label>
      <textarea
        placeholder='ზოგადი ინფო ჩემს შესახებ'
        className={Styles.textarea}
        style={{
          border: text === '' ? '1px solid #BCBCBC' : '1px solid #98E37E',
        }}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  )
}

export default TextArea
