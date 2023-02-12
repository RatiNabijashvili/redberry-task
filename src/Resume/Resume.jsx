import React, { useContext, useState, useEffect } from 'react'
import { useNavigate, Navigate } from 'react-router-dom'
import { FormContext } from '../context/context'
import ArrowIcon from '../Images/arrow-icon.svg'
import CloseIcon from '../Images/close-icon.svg'
import Styles from './Resume.module.css'
import ResumeTemplate from '../ResumeTemplate/ResumeTemplate'
import axios from 'axios'

const Resume = () => {
  const [resumeData, setResumeData] = useState(null)
  const [isClosed, setIsClosed] = useState(false)
  const navigate = useNavigate()
  const { formData, validationIndex, clearData, setValidationIndex } =
    useContext(FormContext)

  useEffect(() => {
    const postData = async () => {
      const tempData = { ...formData }
      tempData.phone_number = tempData.phone_number.replace(/\s/g, '')

      const res = await fetch(tempData.image)
      const blob = await res.blob()

      tempData.image = new File([blob], 'image', { type: 'image/png' })

      console.log(tempData.image)

      axios
        .post('https://resume.redberryinternship.ge/api/cvs', tempData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        .then((res) => {
          return res.data
        })
        .then((data) => {
          setResumeData(data)
        })
        .catch((err) => console.log('error: ', err))
    }

    postData()
  }, [formData])

  if (validationIndex < 3) return <Navigate to='/general-information' replace />
  console.log('test', resumeData)
  return (
    <div className={Styles['resume-container']}>
      <img
        src={ArrowIcon}
        className={Styles['arrow-icon']}
        alt='arrow-icon'
        onClick={() => {
          clearData()
          navigate('/')
          setValidationIndex(0)
        }}
      />
      <div className={Styles['right-column']}>
        {resumeData && (
          <ResumeTemplate
            width='44vw'
            minHeight='95vh'
            formData={resumeData}
            type='response'
          />
        )}
        <div
          className={Styles['pop-up-message-container']}
          style={{ display: isClosed ? 'none' : 'block' }}
        >
          <img
            src={CloseIcon}
            className={Styles['close-icon']}
            alt='close-icon'
            onClick={() => setIsClosed(true)}
          />
          <h2 className={Styles['pop-up-message']}>
            რეზიუმე წარმატებით <br /> გაიგზავნა 🎉
          </h2>
        </div>
      </div>
    </div>
  )
}

export default Resume
