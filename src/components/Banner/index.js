import InfiniteCarousel from 'react-leaf-carousel';
import styles from './styles.module.css'
import bannerFull from '../../assets/images/banner-full.png'

function Banner() {
  return (
    <InfiniteCarousel
    dots={true}
    arrows={false}
    showSides={false}
    sidesOpacity={0.5}
    scrollOnDevice={true}
  >
    <div style={{backgroundImage: `url(${bannerFull})`}} className={styles.slide}>
      <h2 className={styles.slideText}>
        Olá, o que você está buscando? <br/>
        <span>
            Criar ou migrar seu <br/>
            e-commerce?
        </span>
      </h2>
    </div>

    <div style={{backgroundImage: `url(${bannerFull})`}} className={styles.slide}>
      <h2 className={styles.slideText}>
       Achou o que você está buscando? <br/>
        <span>
            Entre em contoato
        </span>
      </h2>
    </div>

  </InfiniteCarousel>
  );
}

export default Banner;