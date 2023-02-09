import React from 'react'
import Styles from './Experience.module.css'
import ExperienceForm from '../Forms/ExperienceForm/ExperienceForm'
import ArrowIcon from '../Images/arrow-icon.svg'
import { useNavigate } from 'react-router-dom'

const Experience = () => {
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
            <h2 className={Styles['page-name']}>გამოცდილება</h2>
            <h2 className={Styles['page-indicator']}>2/3</h2>
          </div>
          <ExperienceForm />
        </div>
      </div>
      <div className={Styles['right-column']}></div>
    </div>
  )
}

export default Experience
