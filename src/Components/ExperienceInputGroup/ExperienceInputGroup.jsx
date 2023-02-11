import React, { useContext } from 'react'
import Styles from './ExperienceInputGroup.module.css'
import Input from '../../FormTemplates/Input/Input'
import TextArea from '../../FormTemplates/Textarea/TextArea'
import DatePicker from '../../FormTemplates/DatePicker/DatePicker'
import { useForm } from 'react-hook-form'
import { FormContext } from '../../context'

const ExperienceInputGroup = ({
  prefix,
  register,
  values,
  errors,
  onChange,
}) => {
  return (
    <>
      <Input
        labelName='თანამდებობა'
        placeHolder='დეველოპერი, დიზაინერ, ა.შ'
        name={prefix + 'position'}
        width='clamp(15em, 45vw, 60em)'
        iconPosition='47vw'
        validationMessage='მინიმუმ 2 სიმბოლო'
        validation={{
          required: true,
          minLength: { value: 2, message: 'მინიმუმ 2 ასო' },
        }}
        value={values.position}
        onChange={onChange}
        error={errors[prefix + 'position']}
        register={register}
      />
      <Input
        labelName='დამსაქმებელი'
        placeHolder='დამსაქმებელი'
        name={prefix + 'employer'}
        width='clamp(15em, 45vw, 60em)'
        iconPosition='47vw'
        validationMessage='მინიმუმ 2 სიმბოლო'
        validation={{
          required: true,
          minLength: { value: 2, message: 'მინიმუმ 2 ასო' },
        }}
        value={values.employer}
        onChange={onChange}
        error={errors[prefix + 'employer']}
        register={register}
      />
      <div className={Styles['date-container']}>
        <DatePicker
          labelName='დაწყების რიცხვი'
          name={prefix + 'start_date'}
          validation={{
            required: { value: true, message: 'შეავსეთ დაწყების თარიღი' },
          }}
          value={values.start_date}
          onChange={onChange}
          register={register}
          error={errors[prefix + 'start_date']}
        />
        <DatePicker
          labelName='დამთავრების რიცხვი'
          name={prefix + 'due_date'}
          validation={{
            required: { value: true, message: 'შეავსეთ დამთავრების თარიღი' },
          }}
          value={values.due_date}
          onChange={onChange}
          register={register}
          error={errors[prefix + 'due_date']}
        />
      </div>
      <TextArea
        labelName='აღწერა'
        placeHolder='როლი თანამდებობაზე და ზოგადი აღწერა'
        name={prefix + 'description'}
        validation={{
          required: { value: true, message: 'შეავსეთ აღწერა' },
        }}
        value={values.description}
        onChange={onChange}
        register={register}
        error={errors[prefix + 'description']}
      />
      <div className={Styles.line} />
    </>
  )
}

export default ExperienceInputGroup
