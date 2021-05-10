import { useDispatch } from "react-redux";
import { increment } from "../../redux/cartSlice";
import RatingStar from "./RatingStar";
import styles from './styles.module.css'

function Item({ name, imageUrl, listPrice, price, installments, stars }) {
  const dispatch = useDispatch();
  
  function handleClick() {
    console.log('oie')
    dispatch(increment())
  }

  

  return (
    <div className={styles.boxProduct}>
      <img src={imageUrl} alt={`Produto ${name}}`} />
      <div className={styles.detailsProduct}>
        <p>{name}</p>
        <div className={styles.rating}>
        <RatingStar value={stars} />
        </div>
        {listPrice && <span>de {listPrice}</span>}
        <p className={styles.priceProduct}>por R$ {price}</p>
        {
         !!installments.length && (
             <small>ou em {installments[0].quantity}x de R$ {installments[0].value}</small>
         )  
        }
        <button onClick={handleClick} className={styles.button}>Comprar</button>
      </div>
    </div>
  );
}

export default Item;
