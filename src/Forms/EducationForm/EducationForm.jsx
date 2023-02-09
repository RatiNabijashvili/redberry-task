import React, { useEffect, useState } from 'react'
import Input from '../../FormTemplates/Input/Input'
import DataPicker from '../../FormTemplates/DatePicker/DataPicker'
import TextArea from '../../FormTemplates/Textarea/TextArea'
import Degree from '../../FormTemplates/Degree/Degree'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import Styles from './Form.module.css'

const getForm = () => {
  const storedValues = localStorage.getItem('EducationForm')
  if (!storedValues)
    return {
      institute: '',
      degree: '',
      due_date: '',
      description: '',
    }
  return JSON.parse(storedValues)
}

const EducationForm = () => {
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
    localStorage.setItem('EducationForm', JSON.stringify(values))
  }, [values])
  return (
    <form onSubmit={handleSubmit((data) => console.log('submit', data))}>
      <div>
        <Input
          labelName='სასწავლებელი'
          placeHolder='სასწავლებელი'
          name='institute'
          width='clamp(15em, 49vw, 60em)'
          iconPosition='55vw'
          validationMessage='მინიმუმ 2 სიმბოლო'
          validation={{
            required: true,
            minLength: { value: 2, message: 'მინიმუმ 2 ასო' },
          }}
          value={values.institute}
          onChange={handleChange}
          error={errors?.institute}
          register={register}
        />
        <div className={Styles['date-container']}>
          <Degree
            labelName='ხარისხი'
            placeHolder='აირჩიეთ ხარისხი'
            name='degree'
            validation={{
              required: true,
            }}
            value={values.degree}
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
          placeHolder='განათლების აღწერა'
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
            onClick={() => navigate('/experience')}
          >
            <span>უკან</span>
          </button>
          <button className={Styles.btn} onClick={() => navigate('/resume')}>
            <span>შემდეგი</span>
          </button>
        </div>
      </div>
    </form>
  )
}

export default EducationForm
