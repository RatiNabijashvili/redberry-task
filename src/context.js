import { createContext, useState } from 'react'
import useLocalStorage from './useLocalStorage/useLocalStorage'
export const FormContext = createContext(null)

const defaultExperienceInfo = {
  position: '',
  employer: '',
  start_date: '',
  due_date: '',
  description: '',
}

const defaultEducationInfo = {
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
  mobile_number: '',
  experiences: [defaultExperienceInfo],
  educations: [defaultEducationInfo],
}

export const FormContextProvider = ({ children }) => {
  const [formData, setFormData] = useLocalStorage('formData', {
    ...defaultGeneralInfo,
  })

  const clearData = () => {
    setFormData(defaultGeneralInfo)
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

  const addExperience = () => {
    formData.experiences.push({ ...defaultExperienceInfo })
    setFormData({ ...formData })
  }

  return (
    <FormContext.Provider
      value={{
        formData,
        changeGeneralField,
        changeExperiencesField,
        addExperience,
        clearData,
      }}
    >
      {children}
    </FormContext.Provider>
  )
}
