import React from 'react';
import styles from './styles.module.css'
import logo from '../../assets/images/logo.svg'
import InputSearch from '../InputSearch';
import MyAccount from '../MyAccount';
import ShoppingCart from '../ShoppingCart';
import Container from '../Container';

function Header() {
  return (
      <nav>
          <Container>
              <div className={styles.wrapper}>
                <img src={logo} alt="Logo Corebiz" />
                    <InputSearch placeholder="O que está procurando?" />
                    <MyAccount />
                    <ShoppingCart />
              </div>
          </Container>
      </nav>
  );
}

export default Header;