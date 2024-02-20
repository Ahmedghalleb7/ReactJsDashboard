import { configureStore } from '@reduxjs/toolkit'
import  productSlicee  from './product'

export const store = configureStore({
  reducer: {
    product:productSlicee
  },
})