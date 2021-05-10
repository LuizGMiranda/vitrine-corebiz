import axios from 'axios'

const BASE_URI = 'https://corebiz-test.herokuapp.com/api/v1'

async function getProducts() {
    try {
        const {data} = await axios.get(BASE_URI + '/products')
        return data
    } catch (error) {
        console.error('ERROR getProducts: ', error)
        return []
    }
}

export {
    getProducts
}