import { createSlice } from '@reduxjs/toolkit'

import initialState from './initialState'

import * as productReducers from './products'
import * as summaryReducers from './summary'

export const { reducer, actions } = createSlice({
  name: 'shopping-cart',
  initialState,
  reducers: {
    ...productReducers,
    ...summaryReducers
  }
})
