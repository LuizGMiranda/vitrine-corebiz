import React from 'react';
import { useSelector } from "react-redux";
import styles from './styles.module.css'
import cartIcon from '../../assets/images/cart.svg'

function ShoppingCart() {
  const {products} = useSelector(state => state.cart)
  return (
      <div className={styles.wrapper}>
          <img src={cartIcon} alt="Carrinho de compras" className={styles.icon}/>
          <div className={styles.badge}>
            <span className={styles.text}>{products}</span>
          </div>
      </div>
  );
}

export default ShoppingCart;