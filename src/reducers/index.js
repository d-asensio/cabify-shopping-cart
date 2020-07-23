import { createSlice } from '@reduxjs/toolkit'

import initialState from './initialState'

import * as productReducers from './products'

export const { reducer, actions } = createSlice({
  name: 'shopping-cart',
  initialState,
  reducers: {
    ...productReducers
  }
})
