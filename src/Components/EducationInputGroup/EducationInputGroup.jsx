import React from 'react'
import Styles from './EducationInputGroup.module.css'
import Input from '../../FormTemplates/Input/Input'
import TextArea from '../../FormTemplates/Textarea/TextArea'
import DatePicker from '../../FormTemplates/DatePicker/DatePicker'
import Degree from '../../FormTemplates/Degree/Degree'

const EducationInputGroup = ({
  prefix,
  register,
  values,
  errors,
  onChange,
}) => {
  return (
    <>
      <Input
        labelName='სასწავლებელი'
        placeHolder='სასწავლებელი'
        name={prefix + 'institute'}
        width='clamp(15em, 45vw, 60em)'
        iconPosition='47vw'
        validationMessage='მინიმუმ 2 სიმბოლო'
        validation={{
          required: true,
          minLength: { value: 2, message: 'მინიმუმ 2 ასო' },
        }}
        value={values.institute}
        onChange={onChange}
        error={errors[prefix + 'insitute']}
        register={register}
      />
      <div className={Styles['date-container']}>
        <Degree
          labelName='ხარისხი'
          placeHolder='აირჩიეთ ხარისხი'
          name={prefix + 'degree'}
          validation={{
            required: { value: true, message: 'შეავსეთ ხარისხი' },
          }}
          value={values.degree}
          error={errors[prefix + 'degree']}
          onChange={onChange}
          register={register}
        />
        <DatePicker
          labelName='დამთავრების რიცხვი'
          name={prefix + 'due_date'}
          validation={{
            required: { value: true, message: 'შეავსეთ დამთავრების თარიღი' },
          }}
          value={values.due_date}
          onChange={onChange}
          error={errors[prefix + 'due_date']}
          register={register}
        />
      </div>
      <TextArea
        labelName='აღწერა'
        placeHolder='განათლების აღწერა'
        name={prefix + 'description'}
        validation={{
          required: { value: true, message: 'შეავსეთ აღწერა' },
        }}
        error={errors[prefix + 'description']}
        value={values.description}
        onChange={onChange}
        register={register}
      />
    </>
  )
}

export default EducationInputGroup
