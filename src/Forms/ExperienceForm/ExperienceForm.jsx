import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import Styles from './Form.module.css'
import { FormContext } from '../../context'
import ExperienceInputGroup from '../../Components/ExperienceInputGroup/ExperienceInputGroup'

const ExperienceForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
  })

  const onSubmit = () => {
    navigate('/education')
  }

  const { formData, addExperience, changeExperiencesField } =
    useContext(FormContext)

  const navigate = useNavigate()
  console.log(errors)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        {formData.experiences.map((experienceObj, i) => {
          const prefix = `group-${i}-`
          const handleChange = (e) => {
            const key = e.target.name.substring(prefix.length)
            changeExperiencesField(i, { [key]: e.target.value })
          }

          return (
            <ExperienceInputGroup
              key={i}
              register={register}
              prefix={prefix}
              values={experienceObj}
              errors={errors}
              onChange={handleChange}
            />
          )
        })}
        <button
          type='button'
          className={Styles['add-more-btn']}
          onClick={addExperience}
        >
          მეტი გამოცდილების დამატება
        </button>
        <div className={Styles['button-container']}>
          <button
            className={Styles.btn}
            onClick={() => navigate('/general-information')}
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

export default ExperienceForm
