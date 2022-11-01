import { takeEvery, put } from "redux-saga/effects";
import {
  GET_ALL_USERS,
  GET_ALL_USERS_FAILED,
  GET_ALL_USERS_SUCCESS,

  DELETE_BY_ID_USERS,
  DELETE_BY_ID_USERS_FAILED,
  DELETE_BY_ID_USERS_SUCCESS,

  INSRT_NEW_USERS,
  INSRT_NEW_USERS_FAILED,
  INSRT_NEW_USERS_SUCCESS,

  UPDATE_USERS,
  UPDATE_USERS_FAILED,
  UPDATE_USERS_SUCCESS,
  
} from "../utils/commonType";
import { apiResultGetAllUsers, apiResultdataUsersDelete, apiResultdataUsersNew, apiResultdataUsersUpdate } from "../api/apiConfig";

export function* wachResultGetAllUsers() {
  yield takeEvery(GET_ALL_USERS, callResultGetAllUsers);
}
function* callResultGetAllUsers(action) {
  try {
    const result = yield apiResultGetAllUsers(action.data);
    if (result.status === 200) {
      if (result.data.responseCode === "00000") {
        yield put({
          type: GET_ALL_USERS_SUCCESS,
          status: result.data.status,
          data: result.data.users,
          message: result.data.message,
          responseCode: result.data.responseCode,
        });
      } else {
        yield put({
          type: GET_ALL_USERS_FAILED,
          status: result.data.status,
          data: result.data.listData,
          message: result.data.message,
          responseCode: result.data.responseCode,
        });
      }
    } else if (result.status === 500) {
      yield put({
        type: GET_ALL_USERS_FAILED,
        status: false,
        data: null,
        message: result.data.message,
        responseCode: result.data.responseCode,
      });
    } else {
      yield put({
        type: GET_ALL_USERS_FAILED,
        status: result.data.status,
        data: result.data.listData,
        message: result.data.message,
        responseCode: result.data.responseCode,
      });
    }
  } catch (error) {
    yield put({ type: GET_ALL_USERS_FAILED, data: null });
  }
}

export function* wachResultdataUsersDelete() {
  yield takeEvery(DELETE_BY_ID_USERS, callResultdataUsersDelete);
}
function* callResultdataUsersDelete(action) {
  try {
    const result = yield apiResultdataUsersDelete(action.data, action.token);
    console.log("result:", result);
    console.log("status:", result.status);
    console.log("data.responseCode:", result.data.responseCode);
    if (result.status === 200) {
      if (result.data.responseCode === "00000") {
        yield put({
          type: DELETE_BY_ID_USERS_SUCCESS,
          status: result.data.status,
          data: result.data,
          message: result.data.message,
          responseCode: result.data.responseCode,
        });
      } else {
        yield put({
          type: DELETE_BY_ID_USERS_FAILED,
          status: result.data.status,
          data: result.data,
          message: result.data.message,
          responseCode: result.data.responseCode,
        });
      }
    } else {
      yield put({
        type: DELETE_BY_ID_USERS_FAILED,
        status: result.data.status,
        data: result.data,
        message: result.data.message,
        responseCode: result.data.responseCode,
      });
    }
  } catch (error) {
    yield put({ type: DELETE_BY_ID_USERS_FAILED, data: null });
  }
}


export function* wachResultdataUsersNew() {
    yield takeEvery(INSRT_NEW_USERS, callResultdataUsersNew);
  }
  function* callResultdataUsersNew(action) {
    try {
      const result = yield apiResultdataUsersNew(action.data, action.token );
      console.log("result:", result);
      console.log("status:", result.status);
      console.log("data.responseCode:", result.data.responseCode);
      if (result.status === 200) {
        if (result.data.responseCode === "00000") {
          yield put({
            type: INSRT_NEW_USERS_SUCCESS,
            status: result.data.status,
            data: result.data,
            message: result.data.message,
            responseCode: result.data.responseCode,
          });
        } else {
          yield put({
            type: INSRT_NEW_USERS_FAILED,
            status: result.data.status,
            data: result.data,
            message: result.data.message,
            responseCode: result.data.responseCode,
          });
        }
      } else {
        yield put({
          type: INSRT_NEW_USERS_FAILED,
          status: result.data.status,
          data: result.data,
          message: result.data.message,
          responseCode: result.data.responseCode,
        });
      }
    } catch (error) {
      yield put({ type: INSRT_NEW_USERS_FAILED, data: null });
    }
  }


  export function* wachResultdataUsersUpdate() {
    yield takeEvery(UPDATE_USERS, callResultdataUsersUpdate);
  }
  function* callResultdataUsersUpdate(action) {
    try {
      const result = yield apiResultdataUsersUpdate(action.data, action.token );
      console.log("result:", result);
      console.log("status:", result.status);
      console.log("data.responseCode:", result.data.responseCode);
      if (result.status === 200) {
        if (result.data.responseCode === "00000") {
          yield put({
            type: UPDATE_USERS_SUCCESS,
            status: result.data.status,
            data: result.data,
            message: result.data.message,
            responseCode: result.data.responseCode,
          });
        } else {
          yield put({
            type: UPDATE_USERS_FAILED,
            status: result.data.status,
            data: result.data,
            message: result.data.message,
            responseCode: result.data.responseCode,
          });
        }
      } else {
        yield put({
          type: UPDATE_USERS_FAILED,
          status: result.data.status,
          data: result.data,
          message: result.data.message,
          responseCode: result.data.responseCode,
        });
      }
    } catch (error) {
      yield put({ type: UPDATE_USERS_FAILED, data: null });
    }
  }
