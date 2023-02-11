import React from 'react'
import Styles from './ResumeEducationItem.module.css'

const ResumeEducationItem = ({ data }) => {
  return (
    <div>
      <div>
        {data.institute && (
          <h2 className={Styles.institute}>
            {data.institute + ', '}
            {data.degree}
          </h2>
        )}
      </div>
      <div>
        {data.due_date && <h2 className={Styles.date}>{data.due_date}</h2>}
        <p className={Styles.description}>{data.description}</p>
      </div>
      {data.institute.length > 1 && <div className={Styles.line} />}
    </div>
  )
}

export default ResumeEducationItem
