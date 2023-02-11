import React, { useContext } from 'react'
import { FormContext } from '../context'
import MailIcon from '../Images/mail-icon.svg'
import PhoneIcon from '../Images/phone-icon.svg'
import Styles from './Resume.module.css'

const Resume = () => {
  const { formData } = useContext(FormContext)
  return (
    <div>
      <div className={Styles['general-information-container']}>
        <div>
          <div className={Styles['name-surname-container']}>
            <h2 className={Styles.name}>{formData.name}</h2>
            <h2 className={Styles.surname}>{formData.surname}</h2>
          </div>
          <div className={Styles['mail-mobile-container']}>
            <div className={Styles['mail-container']}>
              <img
                src={MailIcon}
                alt='mail-icon'
                className={Styles['mail-icon']}
              />
              <h2 className={Styles.email}>{formData.email}</h2>
            </div>
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
          </div>
          {formData.about_me.length > 0 && (
            <div className={Styles['about-container']}>
              <h2 className={Styles['about-name']}>ჩემს შესახებ</h2>
              <p className={Styles['about-me']}>{formData.about_me}</p>
            </div>
          )}
        </div>
        <img
          src={formData.image}
          alt='user-photo'
          className={Styles['user-photo']}
        />
      </div>
      <div></div>
      <div></div>
    </div>
  )
}

export default Resume
