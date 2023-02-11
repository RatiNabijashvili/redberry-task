import React, { useContext } from 'react'
import Styles from './GeneralInformation.module.css'
import ArrowIcon from '../Images/arrow-icon.svg'
import { Form, useNavigate } from 'react-router-dom'
import GeneralInformationForm from '../Forms/GeneralInformationForm/GeneralInfromationForm'
import { FormContext } from '../context'
import Resume from '../Resume/Resume'

const GeneralInformation = () => {
  const navigate = useNavigate()
  const { clearData } = useContext(FormContext)
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
        <Resume />
      </div>
    </div>
  )
}

export default GeneralInformation
