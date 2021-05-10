import React from 'react';
import searchIcon from '../../assets/images/searchIcon.svg';
import styles from './style.module.css';

function InputSearch(props) {
    const {placeholder} = props
  return (
      <div className={styles.wrapper}>
          <input placeholder={placeholder} className={styles.input} />
          <img src={searchIcon} alt="Icone de busca" />
      </div>
  );
}

export default InputSearch;