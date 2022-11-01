import { takeEvery, put } from "redux-saga/effects";
import {
  GET_ALL_CUSTOMERS,
  GET_ALL_CUSTOMERS_FAILED,
  GET_ALL_CUSTOMERS_SUCCESS,

  DELETE_BY_ID_CUSTOMERS,
  DELETE_BY_ID_CUSTOMERS_FAILED,
  DELETE_BY_ID_CUSTOMERS_SUCCESS,

  INSRT_NEW_CUSTOMERS,
  INSRT_NEW_CUSTOMERS_FAILED,
  INSRT_NEW_CUSTOMERS_SUCCESS,

  UPDATE_CUSTOMERS,
  UPDATE_CUSTOMERS_FAILED,
  UPDATE_CUSTOMERS_SUCCESS,
  
} from "../utils/commonType";
import { apiResultGetAllCustomers, apiResultdataCustomersDelete, apiResultdataCustomersNew, apiResultdataCustomersUpdate } from "../api/apiConfig";

export function* wachResultGetAllCustomers() {
  yield takeEvery(GET_ALL_CUSTOMERS, callResultGetAllCustomers);
}
function* callResultGetAllCustomers(action) {
  try {
    const result = yield apiResultGetAllCustomers(action.data);
    if (result.status === 200) {
      if (result.data.responseCode === "00000") {
        yield put({
          type: GET_ALL_CUSTOMERS_SUCCESS,
          status: result.data.status,
          data: result.data.customers,
          message: result.data.message,
          responseCode: result.data.responseCode,
        });
      } else {
        yield put({
          type: GET_ALL_CUSTOMERS_FAILED,
          status: result.data.status,
          data: result.data.customers,
          message: result.data.message,
          responseCode: result.data.responseCode,
        });
      }
    } else if (result.status === 500) {
      yield put({
        type: GET_ALL_CUSTOMERS_FAILED,
        status: false,
        data: null,
        message: result.data.message,
        responseCode: result.data.responseCode,
      });
    } else {
      yield put({
        type: GET_ALL_CUSTOMERS_FAILED,
        status: result.data.status,
        data: result.data.customers,
        message: result.data.message,
        responseCode: result.data.responseCode,
      });
    }
  } catch (error) {
    yield put({ type: GET_ALL_CUSTOMERS_FAILED, data: null });
  }
}

export function* wachResultdataCustomersDelete() {
  yield takeEvery(DELETE_BY_ID_CUSTOMERS, callResultdataCustomersDelete);
}
function* callResultdataCustomersDelete(action) {
  try {
    const result = yield apiResultdataCustomersDelete(action.data, action.token);
    console.log("result:", result);
    console.log("status:", result.status);
    console.log("data.responseCode:", result.data.responseCode);
    if (result.status === 200) {
      if (result.data.responseCode === "00000") {
        yield put({
          type: DELETE_BY_ID_CUSTOMERS_SUCCESS,
          status: result.data.status,
          data: result.data,
          message: result.data.message,
          responseCode: result.data.responseCode,
        });
      } else {
        yield put({
          type: DELETE_BY_ID_CUSTOMERS_FAILED,
          status: result.data.status,
          data: result.data,
          message: result.data.message,
          responseCode: result.data.responseCode,
        });
      }
    } else {
      yield put({
        type: DELETE_BY_ID_CUSTOMERS_FAILED,
        status: result.data.status,
        data: result.data,
        message: result.data.message,
        responseCode: result.data.responseCode,
      });
    }
  } catch (error) {
    yield put({ type: DELETE_BY_ID_CUSTOMERS_FAILED, data: null });
  }
}


export function* wachResultdataCustomersNew() {
    yield takeEvery(INSRT_NEW_CUSTOMERS, callResultdataCustomersNew);
  }
  function* callResultdataCustomersNew(action) {
    try {
      const result = yield apiResultdataCustomersNew(action.data, action.token );
      console.log("result:", result);
      console.log("status:", result.status);
      console.log("data.responseCode:", result.data.responseCode);
      if (result.status === 200) {
        if (result.data.responseCode === "00000") {
          yield put({
            type: INSRT_NEW_CUSTOMERS_SUCCESS,
            status: result.data.status,
            data: result.data,
            message: result.data.message,
            responseCode: result.data.responseCode,
          });
        } else {
          yield put({
            type: INSRT_NEW_CUSTOMERS_FAILED,
            status: result.data.status,
            data: result.data,
            message: result.data.message,
            responseCode: result.data.responseCode,
          });
        }
      } else {
        yield put({
          type: INSRT_NEW_CUSTOMERS_FAILED,
          status: result.data.status,
          data: result.data,
          message: result.data.message,
          responseCode: result.data.responseCode,
        });
      }
    } catch (error) {
      yield put({ type: INSRT_NEW_CUSTOMERS_FAILED, data: null });
    }
  }


  export function* wachResultdataCustomersUpdate() {
    yield takeEvery(UPDATE_CUSTOMERS, callResultdataCustomersUpdate);
  }
  function* callResultdataCustomersUpdate(action) {
    try {
      const result = yield apiResultdataCustomersUpdate(action.data, action.token );
      console.log("result:", result);
      console.log("status:", result.status);
      console.log("data.responseCode:", result.data.responseCode);
      if (result.status === 200) {
        if (result.data.responseCode === "00000") {
          yield put({
            type: UPDATE_CUSTOMERS_SUCCESS,
            status: result.data.status,
            data: result.data,
            message: result.data.message,
            responseCode: result.data.responseCode,
          });
        } else {
          yield put({
            type: UPDATE_CUSTOMERS_FAILED,
            status: result.data.status,
            data: result.data,
            message: result.data.message,
            responseCode: result.data.responseCode,
          });
        }
      } else {
        yield put({
          type: UPDATE_CUSTOMERS_FAILED,
          status: result.data.status,
          data: result.data,
          message: result.data.message,
          responseCode: result.data.responseCode,
        });
      }
    } catch (error) {
      yield put({ type: UPDATE_CUSTOMERS_FAILED, data: null });
    }
  }
