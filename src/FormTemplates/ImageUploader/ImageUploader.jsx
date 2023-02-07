import React from 'react'
import Styles from './ImageUploader.module.css'

const ImageUploader = (props) => {
  return (
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
          {...props.register(props.name)}
          onChange={props.onChange}
        />
      </label>
    </div>
  )
}

export default ImageUploader
