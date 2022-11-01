import { takeEvery, put } from "redux-saga/effects";
import {

  INSRT_NEW_SELL,
  INSRT_NEW_SELL_FAILED,
  INSRT_NEW_SELL_SUCCESS,

  GET_MAX_ID_SELL,
  GET_MAX_ID_SELL_FAILED,
  GET_MAX_ID_SELL_SUCCESS,

  INSRT_NEW_SELL_DETAIL,
  INSRT_NEW_SELL_DETAIL_FAILED,
  INSRT_NEW_SELL_DETAIL_SUCCESS,

  GET_ALL_SELL,
  GET_ALL_SELL_FAILED,
  GET_ALL_SELL_SUCCESS,


  GET_PRINT_SELL,
  GET_PRINT_SELL_SUCCESS,
  GET_PRINT_SELL_FAILED


} from "../utils/commonType";
import { apiResultdataSellNew, apiResultGetMaxIdSell, apiResultdataSellDetailNew, apiResultGetSell, apiResultGetPrintSell } from "../api/apiConfig";


export function* wachResultdataSellNew() {
  yield takeEvery(INSRT_NEW_SELL, callResultdataSellNew);
}
function* callResultdataSellNew(action) {
  try {
    const result = yield apiResultdataSellNew(action.data, action.token);
    console.log("result:", result);
    console.log("status:", result.status);
    console.log("data.responseCode:", result.data.responseCode);
    if (result.status === 200) {
      switch (result.data.responseCode) {
        case "00000":
          yield put({
            type: INSRT_NEW_SELL_SUCCESS,
            status: result.data.status,
            data: result.data,
            message: result.data.message,
            responseCode: result.data.responseCode,
          });
          break;
        case result.data.responseCode:
          yield put({
            type: INSRT_NEW_SELL_FAILED,
            status: result.data.status,
            data: result.data,
            message: result.data.message,
            responseCode: result.data.responseCode,
          });
          break;

        default:
          break;
      }

    } else {
      yield put({
        type: INSRT_NEW_SELL_FAILED,
        status: result.data.status,
        data: result.data,
        message: result.data.message,
        responseCode: result.data.responseCode,
      });
    }
  } catch (error) {
    yield put({ type: INSRT_NEW_SELL_FAILED, data: null });
  }
}


export function* wachResultGetMaxIdSell() {
  yield takeEvery(GET_MAX_ID_SELL, callResultGetMaxIdSell);
}
function* callResultGetMaxIdSell(action) {
  try {
    const result = yield apiResultGetMaxIdSell(action.data);
    if (result.status === 200) {
      if (result.data.responseCode === "00000") {
        yield put({
          type: GET_MAX_ID_SELL_SUCCESS,
          status: result.data.status,
          data: result.data.sell[0],
          message: result.data.message,
          responseCode: result.data.responseCode,
        });
      } else {
        yield put({
          type: GET_MAX_ID_SELL_FAILED,
          status: result.data.status,
          data: result.data.sell,
          message: result.data.message,
          responseCode: result.data.responseCode,
        });
      }
    } else if (result.status === 500) {
      yield put({
        type: GET_MAX_ID_SELL_FAILED,
        status: false,
        data: null,
        message: result.data.message,
        responseCode: result.data.responseCode,
      });
    } else {
      yield put({
        type: GET_MAX_ID_SELL_FAILED,
        status: result.data.status,
        data: result.data.sell,
        message: result.data.message,
        responseCode: result.data.responseCode,
      });
    }
  } catch (error) {
    yield put({ type: GET_MAX_ID_SELL_FAILED, data: null });
  }
}

export function* wachResultdataSellDetailNew() {
  yield takeEvery(INSRT_NEW_SELL_DETAIL, callResultdataSellDetailNew);
}
function* callResultdataSellDetailNew(action) {
  try {
    const result = yield apiResultdataSellDetailNew(action.data, action.token);
    console.log("result:", result);
    console.log("status:", result.status);
    console.log("data.responseCode:", result.data.responseCode);
    if (result.status === 200) {
      if (result.data.responseCode === "00000") {
        yield put({
          type: INSRT_NEW_SELL_DETAIL_SUCCESS,
          status: result.data.status,
          data: result.data,
          message: result.data.message,
          responseCode: result.data.responseCode,
        });
      } else {
        yield put({
          type: INSRT_NEW_SELL_DETAIL_FAILED,
          status: result.data.status,
          data: result.data,
          message: result.data.message,
          responseCode: result.data.responseCode,
        });
      }
    } else {
      yield put({
        type: INSRT_NEW_SELL_DETAIL_FAILED,
        status: result.data.status,
        data: result.data,
        message: result.data.message,
        responseCode: result.data.responseCode,
      });
    }
  } catch (error) {
    yield put({ type: INSRT_NEW_SELL_DETAIL_FAILED, data: null });
  }
}


export function* wachResultGetdSell() {
  yield takeEvery(GET_ALL_SELL, callResultGetdSell);
}
function* callResultGetdSell(action) {
  try {
    const result = yield apiResultGetSell(action.data);
    if (result.status === 200) {
      if (result.data.responseCode === "00000") {
        yield put({
          type: GET_ALL_SELL_SUCCESS,
          status: result.data.status,
          data: result.data.sell,
          message: result.data.message,
          responseCode: result.data.responseCode,
        });
      } else {
        yield put({
          type: GET_ALL_SELL_FAILED,
          status: result.data.status,
          data: result.data.sell,
          message: result.data.message,
          responseCode: result.data.responseCode,
        });
      }
    } else if (result.status === 500) {
      yield put({
        type: GET_ALL_SELL_FAILED,
        status: false,
        data: null,
        message: result.data.message,
        responseCode: result.data.responseCode,
      });
    } else {
      yield put({
        type: GET_ALL_SELL_FAILED,
        status: result.data.status,
        data: result.data.sell,
        message: result.data.message,
        responseCode: result.data.responseCode,
      });
    }
  } catch (error) {
    yield put({ type: GET_ALL_SELL_FAILED, data: null });
  }
}


export function* wachResultGetdPrintSell() {
  yield takeEvery(GET_PRINT_SELL, callResultGetdPrintSell);
}
function* callResultGetdPrintSell(action) {
  try {
    const result = yield apiResultGetPrintSell(action.data, action.token);
    if (result.status === 200) {
      if (result.data.responseCode === "00000") {
        yield put({
          type: GET_PRINT_SELL_SUCCESS,
          status: result.data.status,
          data: result.data.sell,
          message: result.data.message,
          responseCode: result.data.responseCode,
        });
      } else {
        yield put({
          type: GET_PRINT_SELL_FAILED,
          status: result.data.status,
          data: result.data.sell,
          message: result.data.message,
          responseCode: result.data.responseCode,
        });
      }
    } else if (result.status === 500) {
      yield put({
        type: GET_PRINT_SELL_FAILED,
        status: false,
        data: null,
        message: result.data.message,
        responseCode: result.data.responseCode,
      });
    } else {
      yield put({
        type: GET_PRINT_SELL_FAILED,
        status: result.data.status,
        data: result.data.sell,
        message: result.data.message,
        responseCode: result.data.responseCode,
      });
    }
  } catch (error) {
    yield put({ type: GET_PRINT_SELL_FAILED, data: null });
  }
}
