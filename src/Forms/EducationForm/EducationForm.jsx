import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import Styles from './Form.module.css'
import { FormContext } from '../../context/context'
import EducationInputGroup from '../../Components/EducationInputGroup/EducationInputGroup'

const EducationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
  })
  const { formData, changeEducationsField, addEducation, setValidationIndex } =
    useContext(FormContext)

  const onSubmit = () => {
    navigate('/resume')
    setValidationIndex(3)
  }

  const navigate = useNavigate()

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        {formData.educations.map((educationObj, i) => {
          const prefix = `group-${i}-`
          const handleChange = (e) => {
            const key = e.target.name.substring(prefix.length)
            changeEducationsField(i, { [key]: e.target.value })
            setValidationIndex(2)
          }

          const handleDegreeSelect = (id) => {
            changeEducationsField(i, { degree_id: id })
          }

          return (
            <EducationInputGroup
              key={i}
              register={register}
              prefix={prefix}
              values={educationObj}
              errors={errors}
              onChange={handleChange}
              onDegreeSelect={handleDegreeSelect}
            />
          )
        })}
        <div className={Styles.line} />
        <button
          type='button'
          className={Styles['add-more-btn']}
          onClick={addEducation}
        >
          მეტი გამოცდილების დამატება
        </button>
        <div className={Styles['button-container']}>
          <button
            className={Styles.btn}
            onClick={() => navigate('/experience')}
          >
            <span>უკან</span>
          </button>
          <button className={Styles.btn}>
            <span>შემდეგი</span>
          </button>
        </div>
      </div>
    </form>
  )
}

export default EducationForm
