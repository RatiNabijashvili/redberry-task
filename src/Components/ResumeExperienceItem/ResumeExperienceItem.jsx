import React from 'react'
import Styles from './ResumeExperienceItem.module.css'

const ResumeExperienceItem = ({ data }) => {
  return (
    <div>
      <div>
        {data.position && (
          <h2 className={Styles['position']}>
            {data.position + ', '}
            {data.employer}
          </h2>
        )}
      </div>
      <div>
        {data.start_date && (
          <h2 className={Styles.date}>
            {data.start_date + ' - '}
            {data.due_date}
          </h2>
        )}
        <p className={Styles.description}>{data.description}</p>
      </div>
      {data.position.length > 0 && <div className={Styles.line} />}
    </div>
  )
}

export default ResumeExperienceItem
