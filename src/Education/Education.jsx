import React from 'react'
import Styles from './Education.module.css'
import EducationForm from '../Forms/EducationForm/EducationForm'
import ArrowIcon from '../Images/arrow-icon.svg'
import { useNavigate } from 'react-router-dom'

const Education = () => {
  const navigate = useNavigate()
  return (
    <div className={Styles['main-container']}>
      <div className={Styles['left-column']}>
        <div className={Styles['first-column']}>
          <img
            src={ArrowIcon}
            className={Styles['arrow-icon']}
            alt='arrow-icon'
            onClick={() => {
              localStorage.clear()
              navigate('/')
            }}
          />
        </div>
        <div className={Styles['second-column']}>
          <div className={Styles['page-name-container']}>
            <h2 className={Styles['page-name']}>განათლება</h2>
            <h2 className={Styles['page-indicator']}>3/3</h2>
          </div>
          <EducationForm />
        </div>
      </div>
      <div className={Styles['right-column']}></div>
    </div>
  )
}

export default Education
