import { takeEvery, put } from "redux-saga/effects";
import { LOGIN, LOGIN_FAILED, LOGIN_SUCCESS } from "../utils/commonType.js";
import { userLoginApi } from "../api/apiConfig";
import Cookie from 'js-cookie';

export function* wachLogin() {
  yield takeEvery(LOGIN, callLogin);
}

function* callLogin(action) {
  try {
    const result = yield userLoginApi(action.data);
    if (result.status === 200) {
      console.log('result.data:', result.data)
      console.log('result.data.responseCode:', result.data.responseCode)
      if (result.data.responseCode === "00000") {
        Cookie.set('userInfo', JSON.stringify(result.data));
        yield put({
          type: LOGIN_SUCCESS,
          userInfo: result.data,
          description: result.data.message,
          responseCode: result.data.responseCode,
        });
      } else {
        yield put({
          type: LOGIN_FAILED,
          userInfo: result.data,
          description: result.data.message,
          responseCode: result.data.responseCode,
        });
      }
    } else {
      yield put({
        type: LOGIN_FAILED,
        userInfo: null,
        description: "failure",
        responseCode: result.status,
      });
    }
    yield put({ type: LOGIN_SUCCESS, userInfo: action.data });
  } catch (error) {
    yield put({ type: LOGIN_FAILED, userInfo: null });
  }
}





