import React from 'react'
import Styles from './Home.module.css'
import RedberryLogo from '../Images/redberry-logo.svg'
import RingLogo from '../Images/ring-logo.svg'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()
  return (
    <div className={Styles['home-page']}>
      <div className={Styles.nav}>
        <img
          src={RedberryLogo}
          className={Styles['redberry-logo']}
          alt='redberry-logo'
        />
      </div>
      <div>
        <button
          className={Styles['add-btn']}
          onClick={() => navigate('/general-information')}
        >
          რეზიუმეს დამატება
        </button>
        <img src={RingLogo} className={Styles['ring-logo']} alt='ring-logo' />
      </div>
    </div>
  )
}

export default Home
