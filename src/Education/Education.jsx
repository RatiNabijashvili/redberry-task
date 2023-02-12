import React, { useContext } from 'react'
import Styles from './Education.module.css'
import EducationForm from '../Forms/EducationForm/EducationForm'
import ArrowIcon from '../Images/arrow-icon.svg'
import { useNavigate, Navigate } from 'react-router-dom'
import { FormContext } from '../context/context'
import ResumeTemplate from '../ResumeTemplate/ResumeTemplate'

const Education = () => {
  const { validationIndex, clearData, formData } = useContext(FormContext)
  const navigate = useNavigate()

  if (validationIndex < 2) return <Navigate to='/experience' replace />

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
            <h2 className={Styles['page-name']}>განათლება</h2>
            <h2 className={Styles['page-indicator']}>3/3</h2>
          </div>
          <EducationForm />
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

export default Education
