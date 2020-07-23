import { createSlice } from '@reduxjs/toolkit'

import initialState from './initialState'

export const { reducer, actions } = createSlice({
  name: 'shopping-cart',
  initialState,
  reducers: {}
})
