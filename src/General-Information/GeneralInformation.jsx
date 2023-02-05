import React from 'react'
import Styles from './GeneralInformation.module.css'
import Input from '../FormTemplates/Input/Input'
import TextArea from '../FormTemplates/Textarea/TextArea'
import ArrowIcon from '../Images/arrow-icon.svg'
import { useNavigate } from 'react-router-dom'

const GeneralInformation = () => {
  const navigate = useNavigate()
  return (
    <div className={Styles['main-container']}>
      <div className={Styles['left-column']}>
        <div className={Styles['first-column']}>
          <img
            src={ArrowIcon}
            className={Styles['arrow-icon']}
            alt='arrow-icon'
            onClick={() => navigate('/')}
          />
        </div>
        <div className={Styles['second-column']}>
          <div className={Styles['page-name-container']}>
            <h2 className={Styles['page-name']}>პირადი ინფო</h2>
            <h2 className={Styles['page-indicator']}>1/3</h2>
          </div>
          <form>
            <div className={Styles['name-surname-conatiner']}>
              <Input
                labelName='სახელი'
                placeHolder='ანზორ'
                name='name'
                width='clamp(15em, 22vw, 35em)'
                iconPosition='28vw'
                validationMessage='მინიმუმ 2 ასო, ქართული ასოები'
                validation={{
                  required: true,
                  minLength: { value: 2, message: 'მინიმუმ 2 ასო' },
                  pattern: { value: /^[ა-ჰ]+$/, message: 'ქართული ასოები' },
                }}
              />
              <Input
                labelName='გვარი'
                placeHolder='მუმლაძე'
                name='surname'
                width='clamp(15em, 22vw, 35em)'
                iconPosition='55vw'
                validationMessage='მინიმუმ 2 ასო, ქართული ასოები'
                validation={{
                  required: true,
                  minLength: { value: 2, message: 'მინიმუმ 2 ასო' },
                  pattern: { value: /^[ა-ჰ]+$/, message: 'ქართული ასოები' },
                }}
              />
            </div>
            <div className={Styles['upload-container']}>
              <label className={Styles['main-upload-text']}>
                პირადი ფოტოს ატვირთვა
              </label>
              <label className={Styles['upload-text']}>
                ატვირთვა
                <input
                  type='file'
                  accept='image/png, image/jpg, image/gif, image/jpeg'
                  className={Styles['upload-input']}
                />
              </label>
            </div>
            <TextArea labelName='ჩემ შესახებ (არასავალდებულო)' />
            <Input
              labelName='ელ.ფოსტა'
              placeHolder='anzorr666@redberry.ge'
              name='email'
              width='clamp(15em, 49vw, 60em)'
              iconPosition='55vw'
              validationMessage='უნდა მთავრდებოდეს @redberry.ge-ით'
              validation={{
                required: true,
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[redberry]+\.[ge]{2,}$/i,
                  message: 'უნდა მთავრდებოდეს @redberry.ge-ით',
                },
              }}
            />
            <Input
              labelName='მობილურის ნომერი'
              placeHolder='+995 551 12 34 56'
              name='phone_number'
              width='clamp(15em, 49vw, 60em)'
              iconPosition='55vw'
              validationMessage='უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს'
              validation={{
                required: true,
                pattern: {
                  value: /^[+]+[9]+[9]+[5]+[0-9]{8}$/,
                  message:
                    'უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს',
                },
              }}
            />
            <div className={Styles['next-btn-container']}>
              <button
                className={Styles['next-btn']}
                onClick={() => navigate('/experience')}
              >
                <span>შემდეგი</span>
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className={Styles['right-column']}></div>
    </div>
  )
}

export default GeneralInformation
