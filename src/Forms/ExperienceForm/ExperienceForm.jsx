import React, { useState, useEffect } from 'react'
import Input from '../../FormTemplates/Input/Input'
import DataPicker from '../../FormTemplates/DatePicker/DataPicker'
import TextArea from '../../FormTemplates/Textarea/TextArea'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import Styles from './Form.module.css'

const getForm = () => {
  const storedValues = localStorage.getItem('ExperienceForm')
  if (!storedValues)
    return {
      position: '',
      employer: '',
      start_date: '',
      due_date: '',
      description: '',
    }
  return JSON.parse(storedValues)
}

const ExperienceForm = () => {
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
    localStorage.setItem('ExperienceForm', JSON.stringify(values))
  }, [values])

  return (
    <form onSubmit={handleSubmit((data) => console.log('submit', data))}>
      <div>
        <Input
          labelName='თანამდებობა'
          placeHolder='დეველოპერი, დიზაინერ, ა.შ'
          name='position'
          width='clamp(15em, 49vw, 60em)'
          iconPosition='55vw'
          validationMessage='მინიმუმ 2 სიმბოლო'
          validation={{
            required: true,
            minLength: { value: 2, message: 'მინიმუმ 2 ასო' },
          }}
          value={values.position}
          onChange={handleChange}
          error={errors?.position}
          register={register}
        />
        <Input
          labelName='დამსაქმებელი'
          placeHolder='დამსაქმებელი'
          name='employer'
          width='clamp(15em, 49vw, 60em)'
          iconPosition='55vw'
          validationMessage='მინიმუმ 2 სიმბოლო'
          validation={{
            required: true,
            minLength: { value: 2, message: 'მინიმუმ 2 ასო' },
          }}
          value={values.employer}
          onChange={handleChange}
          error={errors?.employer}
          register={register}
        />
        <div className={Styles['date-container']}>
          <DataPicker
            labelName='დაწყების რიცხვი'
            name='start_date'
            validation={{
              required: true,
            }}
            value={values.start_date}
            onChange={handleChange}
            register={register}
          />
          <DataPicker
            labelName='დამთავრების რიცხვი'
            name='due_date'
            validation={{
              required: true,
            }}
            value={values.due_date}
            onChange={handleChange}
            register={register}
          />
        </div>
        <TextArea
          labelName='აღწერა'
          placeHolder='როლი თანამდებობაზე და ზოგადი აღწერა'
          name='description'
          validation={{
            required: true,
          }}
          value={values.description}
          onChange={handleChange}
          register={register}
        />
        <div className={Styles.line} />
        <button className={Styles['add-more-btn']}>
          მეტი გამოცდილების დამატება
        </button>
        <div className={Styles['button-container']}>
          <button
            className={Styles.btn}
            onClick={() => navigate('/general-information')}
          >
            <span>უკან</span>
          </button>
          <button className={Styles.btn} onClick={() => navigate('/education')}>
            <span>შემდეგი</span>
          </button>
        </div>
      </div>
    </form>
  )
}

export default ExperienceForm
