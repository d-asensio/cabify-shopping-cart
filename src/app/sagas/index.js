import { all } from 'redux-saga/effects'

import fetchData from './fetchData'
import userSelectionWatcher from './userSelectionWatcher'

export function * saga () {
  yield all([
    fetchData(),
    userSelectionWatcher()
  ])
}
