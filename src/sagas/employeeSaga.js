import { takeEvery, put } from "redux-saga/effects";
import {
  GET_ALL_EMPLOYEE,
  GET_ALL_EMPLOYEE_FAILED,
  GET_ALL_EMPLOYEE_SUCCESS,

  DELETE_BY_ID_EMPLOYEE,
  DELETE_BY_ID_EMPLOYEE_FAILED,
  DELETE_BY_ID_EMPLOYEE_SUCCESS,

  INSRT_NEW_EMPLOYEE,
  INSRT_NEW_EMPLOYEE_FAILED,
  INSRT_NEW_EMPLOYEE_SUCCESS,

  UPDATE_EMPLOYEE,
  UPDATE_EMPLOYEE_FAILED,
  UPDATE_EMPLOYEE_SUCCESS,
  
} from "../utils/commonType";
import { apiResultGetAllEmployee, apiResultdataEmployeeDelete, apiResultdataEmployeeNew, apiResultdataEmployeeUpdate } from "../api/apiConfig";

export function* wachResultGetAllEmployee() {
  yield takeEvery(GET_ALL_EMPLOYEE, callResultGetAllEmployee);
}
function* callResultGetAllEmployee(action) {
  try {
    const result = yield apiResultGetAllEmployee(action.data);
    if (result.status === 200) {
      if (result.data.responseCode === "00000") {
        yield put({
          type: GET_ALL_EMPLOYEE_SUCCESS,
          status: result.data.status,
          data: result.data.employees,
          message: result.data.message,
          responseCode: result.data.responseCode,
        });
      } else {
        yield put({
          type: GET_ALL_EMPLOYEE_FAILED,
          status: result.data.status,
          data: result.data.listData,
          message: result.data.message,
          responseCode: result.data.responseCode,
        });
      }
    } else if (result.status === 500) {
      yield put({
        type: GET_ALL_EMPLOYEE_FAILED,
        status: false,
        data: null,
        message: result.data.message,
        responseCode: result.data.responseCode,
      });
    } else {
      yield put({
        type: GET_ALL_EMPLOYEE_FAILED,
        status: result.data.status,
        data: result.data.listData,
        message: result.data.message,
        responseCode: result.data.responseCode,
      });
    }
  } catch (error) {
    yield put({ type: GET_ALL_EMPLOYEE_FAILED, data: null });
  }
}

export function* wachResultdataEmployeeDelete() {
  yield takeEvery(DELETE_BY_ID_EMPLOYEE, callResultdataEmployeeDelete);
}
function* callResultdataEmployeeDelete(action) {
  try {
    const result = yield apiResultdataEmployeeDelete(action.data, action.token);
    console.log("result:", result);
    console.log("status:", result.status);
    console.log("data.responseCode:", result.data.responseCode);
    if (result.status === 200) {
      if (result.data.responseCode === "00000") {
        yield put({
          type: DELETE_BY_ID_EMPLOYEE_SUCCESS,
          status: result.data.status,
          data: result.data,
          message: result.data.message,
          responseCode: result.data.responseCode,
        });
      } else {
        yield put({
          type: DELETE_BY_ID_EMPLOYEE_FAILED,
          status: result.data.status,
          data: result.data,
          message: result.data.message,
          responseCode: result.data.responseCode,
        });
      }
    } else {
      yield put({
        type: DELETE_BY_ID_EMPLOYEE_FAILED,
        status: result.data.status,
        data: result.data,
        message: result.data.message,
        responseCode: result.data.responseCode,
      });
    }
  } catch (error) {
    yield put({ type: DELETE_BY_ID_EMPLOYEE_FAILED, data: null });
  }
}


export function* wachResultdataEmployeeNew() {
    yield takeEvery(INSRT_NEW_EMPLOYEE, callResultdataEmployeeNew);
  }
  function* callResultdataEmployeeNew(action) {
    try {
      const result = yield apiResultdataEmployeeNew(action.data, action.token );
      console.log("result:", result);
      console.log("status:", result.status);
      console.log("data.responseCode:", result.data.responseCode);
      if (result.status === 200) {
        if (result.data.responseCode === "00000") {
          yield put({
            type: INSRT_NEW_EMPLOYEE_SUCCESS,
            status: result.data.status,
            data: result.data,
            message: result.data.message,
            responseCode: result.data.responseCode,
          });
        } else {
          yield put({
            type: INSRT_NEW_EMPLOYEE_FAILED,
            status: result.data.status,
            data: result.data,
            message: result.data.message,
            responseCode: result.data.responseCode,
          });
        }
      } else {
        yield put({
          type: INSRT_NEW_EMPLOYEE_FAILED,
          status: result.data.status,
          data: result.data,
          message: result.data.message,
          responseCode: result.data.responseCode,
        });
      }
    } catch (error) {
      yield put({ type: INSRT_NEW_EMPLOYEE_FAILED, data: null });
    }
  }


  export function* wachResultdataEmployeeUpdate() {
    yield takeEvery(UPDATE_EMPLOYEE, callResultdataEmployeeUpdate);
  }
  function* callResultdataEmployeeUpdate(action) {
    try {
      const result = yield apiResultdataEmployeeUpdate(action.data, action.token );
      console.log("result:", result);
      console.log("status:", result.status);
      console.log("data.responseCode:", result.data.responseCode);
      if (result.status === 200) {
        if (result.data.responseCode === "00000") {
          yield put({
            type: UPDATE_EMPLOYEE_SUCCESS,
            status: result.data.status,
            data: result.data,
            message: result.data.message,
            responseCode: result.data.responseCode,
          });
        } else {
          yield put({
            type: UPDATE_EMPLOYEE_FAILED,
            status: result.data.status,
            data: result.data,
            message: result.data.message,
            responseCode: result.data.responseCode,
          });
        }
      } else {
        yield put({
          type: UPDATE_EMPLOYEE_FAILED,
          status: result.data.status,
          data: result.data,
          message: result.data.message,
          responseCode: result.data.responseCode,
        });
      }
    } catch (error) {
      yield put({ type: UPDATE_EMPLOYEE_FAILED, data: null });
    }
  }
