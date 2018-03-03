import { all, call, put, takeLatest } from 'redux-saga/effects'

function* testSaga() {
  yield call(() => 'abc')
  yield put({
    type: 'TEST_SUCCESS',
  })
}

const testsSaga = [takeLatest('TEST', testSaga)]

export default function* rootSaga() {
  yield all([...testsSaga])
}
