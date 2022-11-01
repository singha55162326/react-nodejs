import { takeEvery, put } from "redux-saga/effects";
import {

  INSRT_NEW_IMPORT,
  INSRT_NEW_IMPORT_FAILED,
  INSRT_NEW_IMPORT_SUCCESS,
  GET_MAX_ID_IMPORT,
  GET_MAX_ID_IMPORT_SUCCESS,
  GET_MAX_ID_IMPORT_FAILED,

  INSRT_NEW_IMPORT_DETAIL,
  INSRT_NEW_IMPORT_DETAIL_SUCCESS,
  INSRT_NEW_IMPORT_DETAIL_FAILED,

  GET_PRINT_IMPORT,
  GET_PRINT_IMPORT_FAILED,
  GET_PRINT_IMPORT_SUCCESS

  
} from "../utils/commonType";
import { apiResultdataImportNew, apiResultGetMaxIdImport, apiResultdataImportDetailNew, apiResultGetPrintImport } from "../api/apiConfig";



export function* wachResultdataImportNew() {
    yield takeEvery(INSRT_NEW_IMPORT, callResultdataImportNew);
  }
  function* callResultdataImportNew(action) {
    try {
      const result = yield apiResultdataImportNew(action.data, action.token );
      console.log("result:", result);
      console.log("status:", result.status);
      console.log("data.responseCode:", result.data.responseCode);
      console.log("result.data.responseCode:", result.data.responseCode);
      //00000
      if (result.status === 200) {
        if (result.data.responseCode === "00000") {
          yield put({
            type: INSRT_NEW_IMPORT_SUCCESS,
            status: result.data.status,
            data: result.data,
            message: result.data.message,
            responseCode: result.data.responseCode,
          });
        } else {
          yield put({
            type: INSRT_NEW_IMPORT_FAILED,
            status: result.data.status,
            data: result.data,
            message: result.data.message,
            responseCode: result.data.responseCode,
          });
        }
      } else {
        yield put({
          type: INSRT_NEW_IMPORT_FAILED,
          status: result.data.status,
          data: result.data,
          message: result.data.message,
          responseCode: result.data.responseCode,
        });
      }
    } catch (error) {
      yield put({ type: INSRT_NEW_IMPORT_FAILED, data: null });
    }
  }


  export function* wachResultGetMaxIdImport() {
    yield takeEvery(GET_MAX_ID_IMPORT, callResultGetMaxIdImport);
  }
  function* callResultGetMaxIdImport(action) {
    try {
      const result = yield apiResultGetMaxIdImport(action.data);
      console.log('result:', result)
      if (result.status === 200) {
        if (result.data.responseCode === "00000") {
          yield put({
            type: GET_MAX_ID_IMPORT_SUCCESS,
            status: result.data.status,
            data: result.data.imports[0],
            message: result.data.message,
            responseCode: result.data.responseCode,
          });
        } else {
          yield put({
            type: GET_MAX_ID_IMPORT_FAILED,
            status: result.data.status,
            data: result.data.imports,
            message: result.data.message,
            responseCode: result.data.responseCode,
          });
        }
      } else if (result.status === 500) {
        yield put({
          type: GET_MAX_ID_IMPORT_FAILED,
          status: false,
          data: null,
          message: result.data.message,
          responseCode: result.data.responseCode,
        });
      } else {
        yield put({
          type: GET_MAX_ID_IMPORT_FAILED,
          status: result.data.status,
          data: result.data.imports,
          message: result.data.message,
          responseCode: result.data.responseCode,
        });
      }
    } catch (error) {
      yield put({ type: GET_MAX_ID_IMPORT_FAILED, data: null });
    }
  }


  export function* wachResultdataImportDetailNew() {
    yield takeEvery(INSRT_NEW_IMPORT_DETAIL, callResultdataImportDetailNew);
  }
  function* callResultdataImportDetailNew(action) {
    try {
      const result = yield apiResultdataImportDetailNew(action.data, action.token);
      console.log("result:", result);
      console.log("status:", result.status);
      console.log("data.responseCode:", result.data.responseCode);
      if (result.status === 200) {
        if (result.data.responseCode === "00000") {
          yield put({
            type: INSRT_NEW_IMPORT_DETAIL_SUCCESS,
            status: result.data.status,
            data: result.data,
            message: result.data.message,
            responseCode: result.data.responseCode,
          });
        } else {
          yield put({
            type: INSRT_NEW_IMPORT_DETAIL_FAILED,
            status: result.data.status,
            data: result.data,
            message: result.data.message,
            responseCode: result.data.responseCode,
          });
        }
      } else {
        yield put({
          type: INSRT_NEW_IMPORT_DETAIL_FAILED,
          status: result.data.status,
          data: result.data,
          message: result.data.message,
          responseCode: result.data.responseCode,
        });
      }
    } catch (error) {
      yield put({ type: INSRT_NEW_IMPORT_DETAIL_FAILED, data: null });
    }
  }


  export function* wachResultGetPrintImport() {
    yield takeEvery(GET_PRINT_IMPORT, callResultGetPrintImport);
  }
  function* callResultGetPrintImport(action) {
    try {
      const result = yield apiResultGetPrintImport(action.data, action.token);
      console.log('result:', result)
      if (result.status === 200) {
        if (result.data.responseCode === "00000") {
          yield put({
            type: GET_PRINT_IMPORT_SUCCESS,
            status: result.data.status,
            data: result.data.imports,
            message: result.data.message,
            responseCode: result.data.responseCode,
          });
        } else {
          yield put({
            type: GET_PRINT_IMPORT_FAILED,
            status: result.data.status,
            data: result.data.imports,
            message: result.data.message,
            responseCode: result.data.responseCode,
          });
        }
      } else if (result.status === 500) {
        yield put({
          type: GET_PRINT_IMPORT_FAILED,
          status: false,
          data: null,
          message: result.data.message,
          responseCode: result.data.responseCode,
        });
      } else {
        yield put({
          type: GET_PRINT_IMPORT_FAILED,
          status: result.data.status,
          data: result.data.imports,
          message: result.data.message,
          responseCode: result.data.responseCode,
        });
      }
    } catch (error) {
      yield put({ type: GET_PRINT_IMPORT_FAILED, data: null });
    }
  }
