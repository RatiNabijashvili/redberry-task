import React from 'react'
import Styles from './ImageUploader.module.css'

const ImageUploader = (props) => {
  const handleChange = (e) => {
    const img = e.target.files[0]
    if (!img) return

    const reader = new FileReader()

    reader.readAsDataURL(img)
    reader.onload = () => {
      props.onUpload(e, reader.result)
    }
  }

  return (
    <div>
      <div className={Styles['upload-container']}>
        <label className={Styles['main-upload-text']}>
          პირადი ფოტოს ატვირთვა
        </label>
        <label className={Styles['upload-text']}>
          ატვირთვა
          <input
            type='file'
            accept='image/png, image/jpg, image/gif, image/jpeg'
            className={Styles['upload-input']}
            name={props.name}
            {...props.register(props.name, {
              ...props.validation,
            })}
            onChange={handleChange}
          />
        </label>
      </div>
      <p className={Styles['validation-text']}>{props.error?.message}</p>
    </div>
  )
}

export default ImageUploader
