import { takeEvery, put } from "redux-saga/effects";
import {
  GET_ALL_REPORT,
  GET_ALL_REPORT_FAILED,
  GET_ALL_REPORT_SUCCESS,
  GET_SUM_REPORT,
  GET_SUM_REPORT_SUCCESS,
  GET_SUM_REPORT_FAILED
  
} from "../utils/commonType";
import { apiResultGetAllReport, apiResultGetSumReport } from "../api/apiConfig";

export function* wachResultGetAllReport() {
  yield takeEvery(GET_ALL_REPORT, callResultGetAllReport);
}
function* callResultGetAllReport(action) {
  try {
    const result = yield apiResultGetAllReport(action.data, action.token);
    console.log('result:', result)
    if (result.status === 200) {
      if (result.data.responseCode === "00000") {
        yield put({
          type: GET_ALL_REPORT_SUCCESS,
          status: result.data.status,
          data: result.data,
          message: result.data.message,
          responseCode: result.data.responseCode,
        });
      } else {
        yield put({
          type: GET_ALL_REPORT_FAILED,
          status: result.data.status,
          data: result.data,
          message: result.data.message,
          responseCode: result.data.responseCode,
        });
      }
    } else if (result.status === 500) {
      yield put({
        type: GET_ALL_REPORT_FAILED,
        status: false,
        data: null,
        message: result.data.message,
        responseCode: result.data.responseCode,
      });
    } else {
      yield put({
        type: GET_ALL_REPORT_FAILED,
        status: result.data.status,
        data: result.data.listData,
        message: result.data.message,
        responseCode: result.data.responseCode,
      });
    }
  } catch (error) {
    yield put({ type: GET_ALL_REPORT_FAILED, data: null });
  }
}

export function* wachResultGetSumReport() {
  yield takeEvery(GET_SUM_REPORT, callResultGetSumReport);
}
function* callResultGetSumReport(action) {
  try {
    const result = yield apiResultGetSumReport(action.token);
    console.log('result:', result)
    if (result.status === 200) {
      if (result.data.responseCode === "00000") {
        yield put({
          type: GET_SUM_REPORT_SUCCESS,
          status: result.data.status,
          data: result.data.dataSum,
          message: result.data.message,
          responseCode: result.data.responseCode,
        });
      } else {
        yield put({
          type: GET_SUM_REPORT_FAILED,
          status: result.data.status,
          data: result.data.dataSum,
          message: result.data.message,
          responseCode: result.data.responseCode,
        });
      }
    } else if (result.status === 500) {
      yield put({
        type: GET_SUM_REPORT_FAILED,
        status: false,
        data: null,
        message: result.data.message,
        responseCode: result.data.responseCode,
      });
    } else {
      yield put({
        type: GET_SUM_REPORT_FAILED,
        status: result.data.status,
        data: result.data.dataSum,
        message: result.data.message,
        responseCode: result.data.responseCode,
      });
    }
  } catch (error) {
    yield put({ type: GET_SUM_REPORT_FAILED, data: null });
  }
}

