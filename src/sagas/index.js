import { all } from 'redux-saga/effects'

import summaryWatcher from './summaryWatcher'

export function * saga () {
  yield all([
    summaryWatcher()
  ])
}
