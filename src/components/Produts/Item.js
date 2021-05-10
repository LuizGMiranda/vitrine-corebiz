import styles from './styles.module.css'

function Item({ name, imageUrl, listPrice, price, installments, stars }) {
  return (
    <div className={styles.boxProduct}>
      <img src={imageUrl} alt={`Produto ${name}}`} />
      <div className={styles.detailsProduct}>
        <p>{name}</p>
        star {stars}
        {listPrice && <span>de {listPrice}</span>}
        <p className={styles.priceProduct}>por R$ {price}</p>
        {
         !!installments.length && (
             <small>ou em {installments[0].quantity}x de R$ {installments[0].value}</small>
         )  
        }
        <button className={styles.button}>Comprar</button>
      </div>
    </div>
  );
}

export default Item;
