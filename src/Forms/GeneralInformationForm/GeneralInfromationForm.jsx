import React, { useState, useEffect } from 'react'
import Styles from './Form.module.css'
import Input from '../../FormTemplates/Input/Input'
import TextArea from '../../FormTemplates/Textarea/TextArea'
import ImageUploader from '../../FormTemplates/ImageUploader/ImageUploader'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'

const getForm = () => {
  const storedValues = localStorage.getItem('form')
  if (!storedValues)
    return {
      name: '',
      surname: '',
      image: '',
      about_me: '',
      email: '',
      mobile_number: '',
    }
  return JSON.parse(storedValues)
}

const GeneralInformationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
  })
  const [values, setValues] = useState(getForm)
  const navigate = useNavigate()
  const handleChange = (e) => {
    setValues((previousValues) => ({
      ...previousValues,
      [e.target.name]: e.target.value,
    }))
  }
  useEffect(() => {
    localStorage.setItem('form', JSON.stringify(values))
  }, [values])

  return (
    <form
      onChange={console.log('change')}
      onSubmit={handleSubmit((data) => console.log('submit', data))}
    >
      <div className={Styles['name-surname-container']}>
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
          value={values.name}
          onChange={handleChange}
          error={errors?.name}
          register={register}
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
          value={values.surname}
          onChange={handleChange}
          error={errors?.surname}
          register={register}
        />
      </div>
      <ImageUploader name='image' register={register} onChange={handleChange} />
      <TextArea
        labelName='ჩემ შესახებ (არასავალდებულო)'
        name='about_me'
        value={values.about_me}
        onChange={handleChange}
        register={register}
      />
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
        value={values.email}
        onChange={handleChange}
        error={errors?.email}
        register={register}
      />
      <Input
        labelName='მობილურის ნომერი'
        placeHolder='+995 551 12 34 56'
        name='mobile_number'
        width='clamp(15em, 49vw, 60em)'
        iconPosition='55vw'
        validationMessage='უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს'
        validation={{
          required: true,
          pattern: {
            value: /^\+995\s5\d{2}\s\d{2}\s\d{2}\s\d{2}$/,
            message: 'უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს',
          },
        }}
        value={values.mobile_number}
        onChange={handleChange}
        error={errors?.mobile_number}
        register={register}
      />
      <div className={Styles['next-btn-container']}>
        <button
          className={Styles['next-btn']}
          //   onClick={() => navigate('/experience')}
        >
          <span>შემდეგი</span>
        </button>
      </div>
    </form>
  )
}

export default GeneralInformationForm
