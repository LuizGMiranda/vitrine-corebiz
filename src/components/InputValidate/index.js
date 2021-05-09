import React from 'react';
import styles from './style.module.css';

function InputValidate({id, placeholder, formik}) {
  return (
      <div className={styles.wrapper}>
           <input className={formik.errors[id] ? styles.inputError : styles.input} id={id} placeholder={placeholder} onChange={formik.handleChange} onBlur={formik.handleBlur} />
            {formik.touched[id] && <span className={styles.textError}>{formik.errors[id]}</span>}
      </div>
  );
}

export default InputValidate;