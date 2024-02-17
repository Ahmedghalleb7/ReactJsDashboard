import { createSlice } from '@reduxjs/toolkit'
export const productSlice = createSlice({
    name: 'product',
    initialState :{
        products:[],
        product:{}
    },
    reducers : {
    //   increment: (state) => {
   
    //     state.value += 1
    //   },
    //   decrement: (state) => {
    //     state.value -= 1
    //   },
    //   incrementByAmount: (state, action: PayloadAction<number>) => {
    //     state.value += action.payload
    //   },
    },
  })
  export default counterSlice.reducer
