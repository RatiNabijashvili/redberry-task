import React, { useContext } from 'react'
import Styles from './GeneralInformation.module.css'
import ArrowIcon from '../Images/arrow-icon.svg'
import { useNavigate } from 'react-router-dom'
import GeneralInformationForm from '../Forms/GeneralInformationForm/GeneralInfromationForm'
import { FormContext } from '../context/context'
import ResumeTemplate from '../ResumeTemplate/ResumeTemplate'

const GeneralInformation = () => {
  const navigate = useNavigate()
  const { clearData, formData } = useContext(FormContext)
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
            <h2 className={Styles['page-name']}>პირადი ინფო</h2>
            <h2 className={Styles['page-indicator']}>1/3</h2>
          </div>
          <GeneralInformationForm />
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

export default GeneralInformation
