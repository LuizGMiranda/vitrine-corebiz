import { useEffect, useState } from 'react';
import styles from './styles.module.css'
import Container from '../Container'
import { getProducts } from '../../services/products'
import ContainerItens from './ContainerItens';

function Produts() {
    const [items, setItems] = useState([])

    useEffect(() => {
        async function fetch() {
            const data = await getProducts();
            setItems(data)
        }

        fetch()
    }, [])

  return (
      <Container>
          <h2 className={styles.h2}>Mais vendidos</h2>
          <div className={styles.line}></div>
          <ContainerItens items={items}/>
      </Container>
  );
}

export default Produts;