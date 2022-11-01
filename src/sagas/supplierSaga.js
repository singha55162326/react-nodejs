import { takeEvery, put } from "redux-saga/effects";
import {
  GET_ALL_SUPPLIER,
  GET_ALL_SUPPLIER_FAILED,
  GET_ALL_SUPPLIER_SUCCESS,

  DELETE_BY_ID_SUPPLIER,
  DELETE_BY_ID_SUPPLIER_FAILED,
  DELETE_BY_ID_SUPPLIER_SUCCESS,

  INSRT_NEW_SUPPLIER,
  INSRT_NEW_SUPPLIER_FAILED,
  INSRT_NEW_SUPPLIER_SUCCESS,

  UPDATE_SUPPLIER,
  UPDATE_SUPPLIER_FAILED,
  UPDATE_SUPPLIER_SUCCESS,
  
} from "../utils/commonType";
import { apiResultGetAllSupplier, apiResultdataSupplierDelete, apiResultdataSupplierNew, apiResultdataSupplierUpdate } from "../api/apiConfig";

export function* wachResultGetAllSupplier() {
  yield takeEvery(GET_ALL_SUPPLIER, callResultGetAllSupplier);
}
function* callResultGetAllSupplier(action) {
  try {
    const result = yield apiResultGetAllSupplier(action.data);
    if (result.status === 200) {
      if (result.data.responseCode === "00000") {
        yield put({
          type: GET_ALL_SUPPLIER_SUCCESS,
          status: result.data.status,
          data: result.data.suppliers,
          message: result.data.message,
          responseCode: result.data.responseCode,
        });
      } else {
        yield put({
          type: GET_ALL_SUPPLIER_FAILED,
          status: result.data.status,
          data: result.data.listData,
          message: result.data.message,
          responseCode: result.data.responseCode,
        });
      }
    } else if (result.status === 500) {
      yield put({
        type: GET_ALL_SUPPLIER_FAILED,
        status: false,
        data: null,
        message: result.data.message,
        responseCode: result.data.responseCode,
      });
    } else {
      yield put({
        type: GET_ALL_SUPPLIER_FAILED,
        status: result.data.status,
        data: result.data.listData,
        message: result.data.message,
        responseCode: result.data.responseCode,
      });
    }
  } catch (error) {
    yield put({ type: GET_ALL_SUPPLIER_FAILED, data: null });
  }
}

export function* wachResultdataSupplierDelete() {
  yield takeEvery(DELETE_BY_ID_SUPPLIER, callResultdataSupplierDelete);
}
function* callResultdataSupplierDelete(action) {
  try {
    const result = yield apiResultdataSupplierDelete(action.data, action.token);
    console.log("result:", result);
    console.log("status:", result.status);
    console.log("data.responseCode:", result.data.responseCode);
    if (result.status === 200) {
      if (result.data.responseCode === "00000") {
        yield put({
          type: DELETE_BY_ID_SUPPLIER_SUCCESS,
          status: result.data.status,
          data: result.data,
          message: result.data.message,
          responseCode: result.data.responseCode,
        });
      } else {
        yield put({
          type: DELETE_BY_ID_SUPPLIER_FAILED,
          status: result.data.status,
          data: result.data,
          message: result.data.message,
          responseCode: result.data.responseCode,
        });
      }
    } else {
      yield put({
        type: DELETE_BY_ID_SUPPLIER_FAILED,
        status: result.data.status,
        data: result.data,
        message: result.data.message,
        responseCode: result.data.responseCode,
      });
    }
  } catch (error) {
    yield put({ type: DELETE_BY_ID_SUPPLIER_FAILED, data: null });
  }
}


export function* wachResultdataSupplierNew() {
    yield takeEvery(INSRT_NEW_SUPPLIER, callResultdataSupplierNew);
  }
  function* callResultdataSupplierNew(action) {
    try {
      const result = yield apiResultdataSupplierNew(action.data, action.token );
      console.log("result:", result);
      console.log("status:", result.status);
      console.log("data.responseCode:", result.data.responseCode);
      if (result.status === 200) {
        if (result.data.responseCode === "00000") {
          yield put({
            type: INSRT_NEW_SUPPLIER_SUCCESS,
            status: result.data.status,
            data: result.data,
            message: result.data.message,
            responseCode: result.data.responseCode,
          });
        } else {
          yield put({
            type: INSRT_NEW_SUPPLIER_FAILED,
            status: result.data.status,
            data: result.data,
            message: result.data.message,
            responseCode: result.data.responseCode,
          });
        }
      } else {
        yield put({
          type: INSRT_NEW_SUPPLIER_FAILED,
          status: result.data.status,
          data: result.data,
          message: result.data.message,
          responseCode: result.data.responseCode,
        });
      }
    } catch (error) {
      yield put({ type: INSRT_NEW_SUPPLIER_FAILED, data: null });
    }
  }


  export function* wachResultdataSupplierUpdate() {
    yield takeEvery(UPDATE_SUPPLIER, callResultdataSupplierUpdate);
  }
  function* callResultdataSupplierUpdate(action) {
    try {
      const result = yield apiResultdataSupplierUpdate(action.data, action.token );
      console.log("result:", result);
      console.log("status:", result.status);
      console.log("data.responseCode:", result.data.responseCode);
      if (result.status === 200) {
        if (result.data.responseCode === "00000") {
          yield put({
            type: UPDATE_SUPPLIER_SUCCESS,
            status: result.data.status,
            data: result.data,
            message: result.data.message,
            responseCode: result.data.responseCode,
          });
        } else {
          yield put({
            type: UPDATE_SUPPLIER_FAILED,
            status: result.data.status,
            data: result.data,
            message: result.data.message,
            responseCode: result.data.responseCode,
          });
        }
      } else {
        yield put({
          type: UPDATE_SUPPLIER_FAILED,
          status: result.data.status,
          data: result.data,
          message: result.data.message,
          responseCode: result.data.responseCode,
        });
      }
    } catch (error) {
      yield put({ type: UPDATE_SUPPLIER_FAILED, data: null });
    }
  }
