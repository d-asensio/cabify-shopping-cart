import { createSlice } from '@reduxjs/toolkit'

import initialState from './initialState'

import * as productReducers from './product'

export const { reducer, actions } = createSlice({
  name: 'shopping-cart',
  initialState,
  reducers: {
    ...productReducers
  }
})
