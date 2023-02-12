import React, { useState, useEffect } from 'react'
import Styles from './Degree.module.css'

const Degree = (props) => {
  const [degrees, setDegrees] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      fetch('https://resume.redberryinternship.ge/api/degrees')
        .then((response) => response.json())
        .then((data) => setDegrees(data))
    }
    fetchData()
  }, [])

  return (
    <div className={Styles['degree-container']}>
      <label
        className={Styles['label-name']}
        style={{
          color: props.value !== '' && props.error ? '#e52f2f' : '#000000',
        }}
      >
        {props.labelName}
      </label>
      {degrees.length > 0 ? (
        <select
          className={Styles['degree-selection']}
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
        >
          <option value={props.placeHodler} disabled>
            {props.placeHolder}
          </option>
          {degrees.map((degree) => {
            return (
              <option
                key={degree.id}
                value={degree.title}
                onClick={() => {
                  props.onSelect(degree.id)
                }}
              >
                {degree.title}
              </option>
            )
          })}
        </select>
      ) : (
        <select
          className={Styles['degree-selection']}
          style={{
            border:
              props.value === ''
                ? '1px solid #bcbcbc'
                : props.error
                ? '1px solid #E52F2F'
                : '1px solid #98E37E',
            width: props.width,
          }}
        ></select>
      )}
      <p className={Styles['validation-text']}>{props.error?.message}</p>
    </div>
  )
}

export default Degree
