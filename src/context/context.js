import { createContext } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'
export const FormContext = createContext(null)

const defaultExperienceInfo = {
  position: '',
  employer: '',
  start_date: '',
  due_date: '',
  description: '',
}

const defaultEducationInfo = {
  degree_id: 0,
  institute: '',
  degree: '',
  due_date: '',
  description: '',
}

const defaultGeneralInfo = {
  name: '',
  surname: '',
  image: '',
  about_me: '',
  email: '',
  phone_number: '',
  experiences: [defaultExperienceInfo],
  educations: [defaultEducationInfo],
}

export const FormContextProvider = ({ children }) => {
  const [validationIndex, setValidationIndex] = useLocalStorage(
    'validationIndex',
    0
  )
  const [formData, setFormData] = useLocalStorage('formData', {
    ...defaultGeneralInfo,
  })

  const clearData = () => {
    setValidationIndex(0)
    setFormData({ ...defaultGeneralInfo })
  }

  const changeGeneralField = (fieldData) => {
    setFormData({ ...formData, ...fieldData })
  }

  const changeExperiencesField = (index, fieldData) => {
    formData.experiences[index] = {
      ...formData.experiences[index],
      ...fieldData,
    }
    setFormData({ ...formData })
  }

  const changeEducationsField = (index, fieldData) => {
    formData.educations[index] = {
      ...formData.educations[index],
      ...fieldData,
    }
    setFormData({ ...formData })
  }

  const addExperience = () => {
    formData.experiences.push({ ...defaultExperienceInfo })
    setFormData({ ...formData })
  }

  const addEducation = () => {
    formData.educations.push({ ...defaultEducationInfo })
    setFormData({ ...formData })
  }

  return (
    <FormContext.Provider
      value={{
        formData,
        changeGeneralField,
        changeExperiencesField,
        addExperience,
        changeEducationsField,
        addEducation,
        clearData,
        validationIndex,
        setValidationIndex,
      }}
    >
      {children}
    </FormContext.Provider>
  )
}
