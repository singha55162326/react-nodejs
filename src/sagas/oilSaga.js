import { takeEvery, put } from "redux-saga/effects";
import {
  GET_ALL_OIL,
  GET_ALL_OIL_FAILED,
  GET_ALL_OIL_SUCCESS,

  DELETE_BY_ID_OIL,
  DELETE_BY_ID_OIL_FAILED,
  DELETE_BY_ID_OIL_SUCCESS,

  INSRT_NEW_OIL,
  INSRT_NEW_OIL_FAILED,
  INSRT_NEW_OIL_SUCCESS,

  UPDATE_OIL,
  UPDATE_OIL_FAILED,
  UPDATE_OIL_SUCCESS,

  GET_ALL_OIL_BY_ID_SUPPLIER,
  GET_ALL_OIL_BY_ID_SUPPLIER_SUCCESS,
  GET_ALL_OIL_BY_ID_SUPPLIER_FAILED
  
} from "../utils/commonType";
import { apiResultGetAllOil, apiResultdataOilDelete, apiResultdataOilNew, apiResultdataOilUpdate, apiResultGetAllOilByIdSupplier } from "../api/apiConfig";

export function* wachResultGetAllOil() {
  yield takeEvery(GET_ALL_OIL, callResultGetAllOil);
}
function* callResultGetAllOil(action) {
  try {
    const result = yield apiResultGetAllOil(action.data);
    if (result.status === 200) {
      if (result.data.responseCode === "00000") {
        yield put({
          type: GET_ALL_OIL_SUCCESS,
          status: result.data.status,
          data: result.data.oils,
          message: result.data.message,
          responseCode: result.data.responseCode,
        });
      } else {
        yield put({
          type: GET_ALL_OIL_FAILED,
          status: result.data.status,
          data: result.data.listData,
          message: result.data.message,
          responseCode: result.data.responseCode,
        });
      }
    } else if (result.status === 500) {
      yield put({
        type: GET_ALL_OIL_FAILED,
        status: false,
        data: null,
        message: result.data.message,
        responseCode: result.data.responseCode,
      });
    } else {
      yield put({
        type: GET_ALL_OIL_FAILED,
        status: result.data.status,
        data: result.data.listData,
        message: result.data.message,
        responseCode: result.data.responseCode,
      });
    }
  } catch (error) {
    yield put({ type: GET_ALL_OIL_FAILED, data: null });
  }
}

export function* wachResultdataOilDelete() {
  yield takeEvery(DELETE_BY_ID_OIL, callResultdataOilDelete);
}
function* callResultdataOilDelete(action) {
  try {
    const result = yield apiResultdataOilDelete(action.data, action.token);
    console.log("result:", result);
    console.log("status:", result.status);
    console.log("data.responseCode:", result.data.responseCode);
    if (result.status === 200) {
      if (result.data.responseCode === "00000") {
        yield put({
          type: DELETE_BY_ID_OIL_SUCCESS,
          status: result.data.status,
          data: result.data,
          message: result.data.message,
          responseCode: result.data.responseCode,
        });
      } else {
        yield put({
          type: DELETE_BY_ID_OIL_FAILED,
          status: result.data.status,
          data: result.data,
          message: result.data.message,
          responseCode: result.data.responseCode,
        });
      }
    } else {
      yield put({
        type: DELETE_BY_ID_OIL_FAILED,
        status: result.data.status,
        data: result.data,
        message: result.data.message,
        responseCode: result.data.responseCode,
      });
    }
  } catch (error) {
    yield put({ type: DELETE_BY_ID_OIL_FAILED, data: null });
  }
}


export function* wachResultdataOilNew() {
    yield takeEvery(INSRT_NEW_OIL, callResultdataOilNew);
  }
  function* callResultdataOilNew(action) {
    try {
      const result = yield apiResultdataOilNew(action.data, action.token );
      console.log("result:", result);
      console.log("status:", result.status);
      console.log("data.responseCode:", result.data.responseCode);
      if (result.status === 200) {
        if (result.data.responseCode === "00000") {
          yield put({
            type: INSRT_NEW_OIL_SUCCESS,
            status: result.data.status,
            data: result.data,
            message: result.data.message,
            responseCode: result.data.responseCode,
          });
        } else {
          yield put({
            type: INSRT_NEW_OIL_FAILED,
            status: result.data.status,
            data: result.data,
            message: result.data.message,
            responseCode: result.data.responseCode,
          });
        }
      } else {
        yield put({
          type: INSRT_NEW_OIL_FAILED,
          status: result.data.status,
          data: result.data,
          message: result.data.message,
          responseCode: result.data.responseCode,
        });
      }
    } catch (error) {
      yield put({ type: INSRT_NEW_OIL_FAILED, data: null });
    }
  }


  export function* wachResultdataOilUpdate() {
    yield takeEvery(UPDATE_OIL, callResultdataOilUpdate);
  }
  function* callResultdataOilUpdate(action) {
    try {
      const result = yield apiResultdataOilUpdate(action.data, action.token );
      console.log("result:", result);
      console.log("status:", result.status);
      console.log("data.responseCode:", result.data.responseCode);
      if (result.status === 200) {
        if (result.data.responseCode === "00000") {
          yield put({
            type: UPDATE_OIL_SUCCESS,
            status: result.data.status,
            data: result.data,
            message: result.data.message,
            responseCode: result.data.responseCode,
          });
        } else {
          yield put({
            type: UPDATE_OIL_FAILED,
            status: result.data.status,
            data: result.data,
            message: result.data.message,
            responseCode: result.data.responseCode,
          });
        }
      } else {
        yield put({
          type: UPDATE_OIL_FAILED,
          status: result.data.status,
          data: result.data,
          message: result.data.message,
          responseCode: result.data.responseCode,
        });
      }
    } catch (error) {
      yield put({ type: UPDATE_OIL_FAILED, data: null });
    }
  }


  export function* wachResultGetAllOilByIdSupplier() {
    yield takeEvery(GET_ALL_OIL_BY_ID_SUPPLIER, callResultGetAllOilByIdSupplier);
  }
  function* callResultGetAllOilByIdSupplier(action) {
    try {
      const result = yield apiResultGetAllOilByIdSupplier(action.data, action.token);
      if (result.status === 200) {
        if (result.data.responseCode === "00000") {
          yield put({
            type: GET_ALL_OIL_BY_ID_SUPPLIER_SUCCESS,
            status: result.data.status,
            data: result.data.supplier,
            message: result.data.message,
            responseCode: result.data.responseCode,
          });
        } else {
          yield put({
            type: GET_ALL_OIL_BY_ID_SUPPLIER_FAILED,
            status: result.data.status,
            data: result.data.listData,
            message: result.data.message,
            responseCode: result.data.responseCode,
          });
        }
      } else if (result.status === 500) {
        yield put({
          type: GET_ALL_OIL_BY_ID_SUPPLIER_FAILED,
          status: false,
          data: null,
          message: result.data.message,
          responseCode: result.data.responseCode,
        });
      } else {
        yield put({
          type: GET_ALL_OIL_BY_ID_SUPPLIER_FAILED,
          status: result.data.status,
          data: result.data.listData,
          message: result.data.message,
          responseCode: result.data.responseCode,
        });
      }
    } catch (error) {
      yield put({ type: GET_ALL_OIL_BY_ID_SUPPLIER_FAILED, data: null });
    }
  }
