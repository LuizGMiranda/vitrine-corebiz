import React from 'react';
import searchIcon from '../../assets/images/searchIcon.svg';
import styles from './style.module.css';

function Input(props) {
    const {placeholder, onSearch} = props
  return (
      <div className={styles.wrapper}>
          <input placeholder={placeholder} className={styles.input} {...props} />
          <img src={searchIcon} alt="Icone de busca" />
      </div>
  );
}

export default Input;