import axios from 'axios'

const BASE_URI = 'https://corebiz-test.herokuapp.com/api/v1'

async function singUpNewsletter({email, name}) {
    try {
        await axios.post(BASE_URI + '/newsletter', {
            name, email
        })
        return true
    } catch (error) {
        console.error('ERROR singUpNewsletter: ', error)
        return false
    }
}

export {
    singUpNewsletter
}