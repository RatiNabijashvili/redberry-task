import React, { useContext } from 'react'
import ResumeEducationItem from '../Components/ResumeEducationItem/ResumeEducationItem'
import ResumeExperienceItem from '../Components/ResumeExperienceItem/ResumeExperienceItem'
import { FormContext } from '../context'
import EmailIcon from '../Images/mail-icon.svg'
import PhoneIcon from '../Images/phone-icon.svg'
import ResumeLogo from '../Images/resume-logo.svg'
import Styles from './Resume.module.css'

const Resume = (props) => {
  const { formData } = useContext(FormContext)
  return (
    <div
      className={Styles['resume-container']}
      style={{
        width: props.width,
        minHeight: props.minHeight,
      }}
    >
      <div className={Styles['general-information-container']}>
        <div>
          <div className={Styles['name-surname-container']}>
            <h2 className={Styles.name}>{formData.name}</h2>
            <h2 className={Styles.surname}>{formData.surname}</h2>
          </div>
          <div className={Styles['email-mobile-container']}>
            {formData.email.length > 0 && (
              <div className={Styles['email-container']}>
                <img
                  src={EmailIcon}
                  alt='email-icon'
                  className={Styles['email-icon']}
                />
                <h2 className={Styles.email}>{formData.email}</h2>
              </div>
            )}
            {formData.mobile_number.length > 0 && (
              <div className={Styles['mobile-container']}>
                <img
                  src={PhoneIcon}
                  alt='phone-icon'
                  className={Styles['phone-icon']}
                />
                <h2 className={Styles['mobile-number']}>
                  {formData.mobile_number}
                </h2>
              </div>
            )}
          </div>
          {formData.about_me.length > 0 && (
            <div className={Styles['about-container']}>
              <h2 className={Styles['about-name']}>ჩემს შესახებ</h2>
              <p className={Styles['about-me']}>{formData.about_me}</p>
            </div>
          )}
        </div>
        {formData.image.length > 0 && (
          <img
            src={formData.image}
            alt='user-photo'
            className={Styles['user-photo']}
          />
        )}
      </div>
      {formData.name.length > 0 && <div className={Styles.line} />}
      <div>
        {formData.experiences[0].position.length > 0 && (
          <h2 className={Styles['about-name']}>გამოცდილება</h2>
        )}
        {formData.experiences.length > 0 &&
          formData.experiences.map((data, index) => {
            return <ResumeExperienceItem data={data} key={index} />
          })}
      </div>
      <div>
        {formData.educations[0].institute.length > 0 && (
          <h2 className={Styles['about-name']}>განათლება</h2>
        )}
        {formData.educations.length > 0 &&
          formData.educations.map((data, index) => {
            return <ResumeEducationItem data={data} key={index} />
          })}
      </div>
      <img
        src={ResumeLogo}
        alt='resume-alt'
        className={Styles['resume-logo']}
      />
    </div>
  )
}

export default Resume
