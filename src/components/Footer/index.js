import Container from '../Container'
import styles from './styles.module.css'
import btnFaleConosco from '../../assets/images/btn-entre-contato.png'
import btnConsultorOnline from '../../assets/images/btn-consultor-online.png'
import vtexLogo from '../../assets/images/vtex-logo.png'
import createdByCorebiz from '../../assets/images/created-by-corebiz.png'
function Footer() {
  return (
      <footer className={styles.footer}>
          <Container>
              <div className={styles.container}>
                <div>
                    <h3 className={styles.title}>Localização</h3>

                    <address className={styles.address}>
                        Avenida Andrômeda, 2000. Bloco 6 e 8<br />
                        Alphavile SP
                       <a href="malito:brasil@corebiz.ag">brasil@corebiz.ag</a>
                       <a href="tel:+551130901039">+55 11 3090 1039</a> 
                    </address>
                </div>
                <div className={styles.boxButtons}>
                    <img src={btnFaleConosco} alt="Entre em contato" />
                    <img src={btnConsultorOnline} alt="Fale com consultor online" />
                </div>
                <div className={styles.boxLogos}>
                    <img src={createdByCorebiz} alt="Created By Corebiz" />
                    <img src={vtexLogo} alt="Logo vtex" />
                </div>
              </div>
          </Container>
      </footer>
  );
}

export default Footer;