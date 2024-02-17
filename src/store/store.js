import { configureStore } from '@reduxjs/toolkit'
import { productSlice } from '../store/product'
export const store = configureStore({
  reducer: {
    product:productSlice
  },
})