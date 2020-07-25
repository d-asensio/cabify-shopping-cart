import { all } from 'redux-saga/effects'

import fetchData from './fetchData'
import summaryWatcher from './summaryWatcher'

export function * saga () {
  yield all([
    fetchData(),
    summaryWatcher()
  ])
}
