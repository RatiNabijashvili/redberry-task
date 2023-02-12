import React from 'react'
import ResumeEducationItem from '../Components/ResumeEducationItem/ResumeEducationItem'
import ResumeExperienceItem from '../Components/ResumeExperienceItem/ResumeExperienceItem'
import EmailIcon from '../Images/mail-icon.svg'
import PhoneIcon from '../Images/phone-icon.svg'
import ResumeLogo from '../Images/resume-logo.svg'
import Styles from './Resume.module.css'

const ResumeTemplate = (props) => {
  return (
    <div
      className={Styles['resume-container']}
      style={{
        width: props.width,
        minHeight: props.minHeight,
        border: props.type === 'response' ? '1px solid #000000' : 'none',
        padding: props.type === 'response' ? '2rem 3rem' : 'none',
      }}
    >
      <div className={Styles['general-information-container']}>
        <div>
          <div className={Styles['name-surname-container']}>
            <h2 className={Styles.name}>{props.formData.name}</h2>
            <h2 className={Styles.surname}>{props.formData.surname}</h2>
          </div>
          <div className={Styles['email-mobile-container']}>
            {props.formData.email.length > 0 && (
              <div className={Styles['email-container']}>
                <img
                  src={EmailIcon}
                  alt='email-icon'
                  className={Styles['email-icon']}
                />
                <h2 className={Styles.email}>{props.formData.email}</h2>
              </div>
            )}
            {props.formData.phone_number.length > 0 && (
              <div className={Styles['mobile-container']}>
                <img
                  src={PhoneIcon}
                  alt='phone-icon'
                  className={Styles['phone-icon']}
                />
                <h2 className={Styles['mobile-number']}>
                  {props.formData.phone_number}
                </h2>
              </div>
            )}
          </div>
          {props.formData.about_me.length > 0 && (
            <div className={Styles['about-container']}>
              <h2 className={Styles['about-name']}>ჩემს შესახებ</h2>
              <p className={Styles['about-me']}>{props.formData.about_me}</p>
            </div>
          )}
        </div>
        {props.formData.image.length > 0 && (
          <img
            src={`${
              props.type === 'response'
                ? 'https://resume.redberryinternship.ge/'
                : ''
            }${props.formData.image}`}
            alt='user'
            className={Styles['user-photo']}
          />
        )}
      </div>
      {props.formData.name.length > 0 && <div className={Styles.line} />}
      <div>
        {props.formData.experiences[0].position.length > 0 && (
          <h2 className={Styles['about-name']}>გამოცდილება</h2>
        )}
        {props.formData.experiences.length > 0 &&
          props.formData.experiences.map((data, index) => {
            return <ResumeExperienceItem data={data} key={index} />
          })}
      </div>
      <div>
        {props.formData.educations[0].institute.length > 0 && (
          <h2 className={Styles['about-name']}>განათლება</h2>
        )}
        {props.formData.educations.length > 0 &&
          props.formData.educations.map((data, index) => {
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

export default ResumeTemplate
