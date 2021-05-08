import React from 'react';
import styles from './styles.module.css'
import cartIcon from '../../assets/images/cart.svg'

function ShoppingCart() {
  return (
      <div className={styles.wrapper}>
          <img src={cartIcon} alt="Carrinho de compras" className={styles.icon}/>
          <div className={styles.badge}>
            <span className={styles.text}>0</span>
          </div>
      </div>
  );
}

export default ShoppingCart;