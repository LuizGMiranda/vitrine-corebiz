import React from 'react';
import styles from './styles.module.css'
import iconMyAccount from '../../assets/images/user.svg'

function MyAccount() {
  return (
    <div>
        <img src={iconMyAccount} alt="Icone de uma pessoa" className={styles.icon} />
        <span className={styles.text}>Minha conta</span>
    </div>
  );
}

export default MyAccount;