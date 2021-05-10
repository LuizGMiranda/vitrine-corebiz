import React, { useState } from 'react';
import styles from './styles.module.css'
import Container from '../Container';
import { useFormik } from 'formik';
import * as yup from 'yup';
import InputValidate from '../InputValidate';
import { singUpNewsletter } from '../../services/newsletter';

const validationSchema = yup.object().shape({
    name: yup.string().required('Preencha com seu nome completo'),
    email: yup.string().email('Preencha com um e-mail válido').required('Preencha com um e-mail válido'),
})

function Newsletter() {
    const [success, setSuccess] = useState(false)
    const formik = useFormik({
        initialValues: {
            name: '',
            email: ''
        },
        onSubmit: async (values) => {
            const data = await singUpNewsletter(values)
            if (data) {
                setSuccess(true)
            }
            console.log(values)
        },
        validationSchema
    })

    function handleButtonSuccess() {
        setSuccess(false)
    }

  return (
      <div className={styles.container}>
          <Container>
              {
                  success ? (
                        <div >
                            <p>
                                <strong>Seu e-mail foi cadastrado com sucesso!</strong> <br/>
                                A partir de agora você receberá as novidade e ofertas exclusivas.
                            </p>
                            <button className={styles.buttonSuccess} onClick={handleButtonSuccess}>
                                Cadastrar novo e-mail
                            </button>
                        </div>
                  ) :  (
                    <div className={styles.center}>
                        <h2 className={styles.title}>Participe de nossas news com promoções e novidades!</h2>
                        <div className={styles.row}>
                            <InputValidate id="name" placeholder="Digite seu nome" formik={formik} />
                            <InputValidate id="email" placeholder="Digite seu email" formik={formik} />
                            <button type="submit" className={styles.button} disabled={formik.isSubmitting} onClick={formik.handleSubmit}>Eu quero</button>
                        </div>
                    </div>
                  )
              }
          </Container>
      </div>
  );
}

export default Newsletter;