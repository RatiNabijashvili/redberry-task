import React, { useContext } from 'react'
import Styles from './Form.module.css'
import Input from '../../FormTemplates/Input/Input'
import TextArea from '../../FormTemplates/Textarea/TextArea'
import ImageUploader from '../../FormTemplates/ImageUploader/ImageUploader'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { FormContext } from '../../context'

const GeneralInformationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid, isValidating },
  } = useForm({
    mode: 'onChange',
  })

  const { formData, changeGeneralField, setValidationIndex } =
    useContext(FormContext)
  const navigate = useNavigate()

  const onSubmit = () => {
    navigate('/experience')
    setValidationIndex(1)
  }

  const handleChange = (e) => {
    changeGeneralField({ [e.target.name]: e.target.value })
    setValidationIndex(0)
  }

  const handleUpload = (e, img) => {
    changeGeneralField({ [e.target.name]: img })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={Styles['name-surname-container']}>
        <Input
          labelName='სახელი'
          placeHolder='ანზორ'
          name='name'
          width='clamp(15em, 20vw, 35em)'
          iconPosition='23vw'
          validationMessage='მინიმუმ 2 ასო, ქართული ასოები'
          validation={{
            required: true,
            minLength: { value: 2, message: 'მინიმუმ 2 ასო' },
            pattern: { value: /^[ა-ჰ]+$/, message: 'ქართული ასოები' },
          }}
          value={formData.name}
          onChange={handleChange}
          error={errors?.name}
          register={register}
        />
        <Input
          labelName='გვარი'
          placeHolder='მუმლაძე'
          name='surname'
          width='clamp(15em, 20vw, 35em)'
          iconPosition='47vw'
          validationMessage='მინიმუმ 2 ასო, ქართული ასოები'
          validation={{
            required: true,
            minLength: { value: 2, message: 'მინიმუმ 2 ასო' },
            pattern: { value: /^[ა-ჰ]+$/, message: 'ქართული ასოები' },
          }}
          value={formData.surname}
          onChange={handleChange}
          error={errors?.surname}
          register={register}
        />
      </div>
      <ImageUploader
        name='image'
        register={register}
        onUpload={handleUpload}
        validation={{
          required: {
            value: formData.image.length === 0,
            message: 'ატვირთეთ სურათი',
          },
        }}
        error={errors?.image}
      />
      <TextArea
        labelName='ჩემს შესახებ (არასავალდებულო)'
        placeHolder='ზოგადი ინფო ჩემს შესახებ'
        name='about_me'
        value={formData.about_me}
        validation={{
          required: false,
        }}
        onChange={handleChange}
        register={register}
      />
      <Input
        labelName='ელ.ფოსტა'
        placeHolder='anzorr666@redberry.ge'
        name='email'
        width='clamp(15em, 45vw, 60em)'
        iconPosition='47vw'
        validationMessage='უნდა მთავრდებოდეს @redberry.ge-ით'
        validation={{
          required: true,
          pattern: {
            value: /^[A-Z0-9._%+-]+@[redberry]+\.[ge]{2,}$/i,
            message: 'უნდა მთავრდებოდეს @redberry.ge-ით',
          },
        }}
        value={formData.email}
        onChange={handleChange}
        error={errors?.email}
        register={register}
      />
      <Input
        labelName='მობილურის ნომერი'
        placeHolder='+995 551 12 34 56'
        name='mobile_number'
        width='clamp(15em, 45vw, 60em)'
        iconPosition='47vw'
        validationMessage='უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს'
        validation={{
          required: true,
          pattern: {
            value: /^\+995\s5\d{2}\s\d{2}\s\d{2}\s\d{2}$/,
            message: 'უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს',
          },
        }}
        value={formData.mobile_number}
        onChange={handleChange}
        error={errors?.mobile_number}
        register={register}
      />
      <div className={Styles['next-btn-container']}>
        <button type='submit' className={Styles['next-btn']}>
          <span>შემდეგი</span>
        </button>
      </div>
    </form>
  )
}

export default GeneralInformationForm
