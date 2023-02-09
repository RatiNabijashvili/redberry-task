import React, { useState, useEffect } from 'react'
import Styles from './Degree.module.css'

const Degree = (props) => {
  const [degrees, setDegrees] = useState([])
  const fetchData = () => {
    return fetch('https://resume.redberryinternship.ge/api/degrees')
      .then((response) => response.json())
      .then((data) => setDegrees(data))
  }
  useEffect(() => {
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
        <option value='' disabled>
          {props.placeHolder}
        </option>
        {Object.keys(degrees).map((data) => {
          return (
            <option key={data} value={degrees[data].title}>
              {degrees[data].title}
            </option>
          )
        })}
      </select>
    </div>
  )
}

export default Degree
