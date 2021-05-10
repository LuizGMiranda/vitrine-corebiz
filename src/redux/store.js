import { configureStore } from '@reduxjs/toolkit'
import storeSynchronize from 'redux-localstore'
import cartReducer from './cartSlice'

export const store = configureStore({
  reducer: {
    cart: cartReducer
  }
})
storeSynchronize(store)