import { createSlice } from '@reduxjs/toolkit'
import {defineState} from 'redux-localstore'

const defaultState = {
    products: 0,
  }

const initialState = defineState(defaultState)('cart')
export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    increment: state => {
        state.products += 1;
      },
      decrement: state => {
        state.products -= 1;
      },
  }
})

export const { increment, decrement } = cartSlice.actions

export default cartSlice.reducer