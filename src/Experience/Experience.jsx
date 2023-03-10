import React, { useContext } from 'react'
import Styles from './Experience.module.css'
import ExperienceForm from '../Forms/ExperienceForm/ExperienceForm'
import ArrowIcon from '../Images/arrow-icon.svg'
import { useNavigate, Navigate } from 'react-router-dom'
import ResumeTemplate from '../ResumeTemplate/ResumeTemplate'
import { FormContext } from '../context/context'

const Experience = () => {
  const navigate = useNavigate()
  const { validationIndex, clearData, formData } = useContext(FormContext)
  if (validationIndex < 1) return <Navigate to='/general-information' replace />

  return (
    <div className={Styles['main-container']}>
      <div className={Styles['left-column']}>
        <div className={Styles['first-column']}>
          <img
            src={ArrowIcon}
            className={Styles['arrow-icon']}
            alt='arrow-icon'
            onClick={() => {
              clearData()
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
      <div className={Styles['right-column']}>
        <ResumeTemplate
          width='44vw'
          minHeight='100vh'
          formData={formData}
          type='default'
        />
      </div>
    </div>
  )
}

export default Experience
