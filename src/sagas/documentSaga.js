import { takeEvery, put } from "redux-saga/effects";
import {
  GET_ALL_DOCUMENT,
  GET_ALL_DOCUMENT_FAILED,
  GET_ALL_DOCUMENT_SUCCESS,

  DELETE_BY_ID_DOCUMENT,
  DELETE_BY_ID_DOCUMENT_FAILED,
  DELETE_BY_ID_DOCUMENT_SUCCESS,

  INSRT_NEW_DOCUMENT,
  INSRT_NEW_DOCUMENT_FAILED,
  INSRT_NEW_DOCUMENT_SUCCESS,

  UPDATE_DOCUMENT,
  UPDATE_DOCUMENT_FAILED,
  UPDATE_DOCUMENT_SUCCESS,

  GET_ALL_DOCUMENT_BY_ID,
  GET_ALL_DOCUMENT_BY_ID_FAILED,
  GET_ALL_DOCUMENT_BY_ID_SUCCESS
  
} from "../utils/commonType";
import { apiResultGetAllDocument, apiResultdataDocumentDelete, apiResultdataDocumentNew, apiResultdataDocumentUpdate,
  apiResultdataDocumentById } from "../api/apiConfig";

export function* wachResultGetAllDocument() {
  yield takeEvery(GET_ALL_DOCUMENT, callResultGetAllDocument);
}
function* callResultGetAllDocument(action) {
  try {
    const result = yield apiResultGetAllDocument(action.data);
    if (result.status === 200) {
      if (result.data.responseCode === "00000") {
        yield put({
          type: GET_ALL_DOCUMENT_SUCCESS,
          status: result.data.status,
          data: result.data.documents,
          message: result.data.message,
          responseCode: result.data.responseCode,
        });
      } else {
        yield put({
          type: GET_ALL_DOCUMENT_FAILED,
          status: result.data.status,
          data: result.data.listData,
          message: result.data.message,
          responseCode: result.data.responseCode,
        });
      }
    } else if (result.status === 500) {
      yield put({
        type: GET_ALL_DOCUMENT_FAILED,
        status: false,
        data: null,
        message: result.data.message,
        responseCode: result.data.responseCode,
      });
    } else {
      yield put({
        type: GET_ALL_DOCUMENT_FAILED,
        status: result.data.status,
        data: result.data.listData,
        message: result.data.message,
        responseCode: result.data.responseCode,
      });
    }
  } catch (error) {
    yield put({ type: GET_ALL_DOCUMENT_FAILED, data: null });
  }
}

export function* wachResultdataDocumentDelete() {
  yield takeEvery(DELETE_BY_ID_DOCUMENT, callResultdataDocumentDelete);
}
function* callResultdataDocumentDelete(action) {
  try {
    const result = yield apiResultdataDocumentDelete(action.data, action.token);
    console.log("result:", result);
    console.log("status:", result.status);
    console.log("data.responseCode:", result.data.responseCode);
    if (result.status === 200) {
      if (result.data.responseCode === "00000") {
        yield put({
          type: DELETE_BY_ID_DOCUMENT_SUCCESS,
          status: result.data.status,
          data: result.data,
          message: result.data.message,
          responseCode: result.data.responseCode,
        });
      } else {
        yield put({
          type: DELETE_BY_ID_DOCUMENT_FAILED,
          status: result.data.status,
          data: result.data,
          message: result.data.message,
          responseCode: result.data.responseCode,
        });
      }
    } else {
      yield put({
        type: DELETE_BY_ID_DOCUMENT_FAILED,
        status: result.data.status,
        data: result.data,
        message: result.data.message,
        responseCode: result.data.responseCode,
      });
    }
  } catch (error) {
    yield put({ type: DELETE_BY_ID_DOCUMENT_FAILED, data: null });
  }
}


export function* wachResultdataDocumentNew() {
    yield takeEvery(INSRT_NEW_DOCUMENT, callResultdataDocumentNew);
  }
  function* callResultdataDocumentNew(action) {
    try {
      const result = yield apiResultdataDocumentNew(action.data, action.token );
      console.log("result:", result);
      console.log("status:", result.status);
      console.log("data.responseCode:", result.data.responseCode);
      if (result.status === 200) {
        if (result.data.responseCode === "00000") {
          yield put({
            type: INSRT_NEW_DOCUMENT_SUCCESS,
            status: result.data.status,
            data: result.data,
            message: result.data.message,
            responseCode: result.data.responseCode,
          });
        } else {
          yield put({
            type: INSRT_NEW_DOCUMENT_FAILED,
            status: result.data.status,
            data: result.data,
            message: result.data.message,
            responseCode: result.data.responseCode,
          });
        }
      } else {
        yield put({
          type: INSRT_NEW_DOCUMENT_FAILED,
          status: result.data.status,
          data: result.data,
          message: result.data.message,
          responseCode: result.data.responseCode,
        });
      }
    } catch (error) {
      yield put({ type: INSRT_NEW_DOCUMENT_FAILED, data: null });
    }
  }


  export function* wachResultdataDocumentUpdate() {
    yield takeEvery(UPDATE_DOCUMENT, callResultdataDocumentUpdate);
  }
  function* callResultdataDocumentUpdate(action) {
    try {
      const result = yield apiResultdataDocumentUpdate(action.data, action.token );
      console.log("result:", result);
      console.log("status:", result.status);
      console.log("data.responseCode:", result.data.responseCode);
      if (result.status === 200) {
        if (result.data.responseCode === "00000") {
          yield put({
            type: UPDATE_DOCUMENT_SUCCESS,
            status: result.data.status,
            data: result.data,
            message: result.data.message,
            responseCode: result.data.responseCode,
          });
        } else {
          yield put({
            type: UPDATE_DOCUMENT_FAILED,
            status: result.data.status,
            data: result.data,
            message: result.data.message,
            responseCode: result.data.responseCode,
          });
        }
      } else {
        yield put({
          type: UPDATE_DOCUMENT_FAILED,
          status: result.data.status,
          data: result.data,
          message: result.data.message,
          responseCode: result.data.responseCode,
        });
      }
    } catch (error) {
      yield put({ type: UPDATE_DOCUMENT_FAILED, data: null });
    }
  }


  export function* wachResultdataDocumentById() {
    yield takeEvery(GET_ALL_DOCUMENT_BY_ID, callResultdataDocumentById);
  }
  function* callResultdataDocumentById(action) {
    try {
      const result = yield apiResultdataDocumentById(action.data, action.token );
      console.log("result:", result);
      console.log("status:", result.status);
      console.log("data.responseCode:", result.data.responseCode);
      if (result.status === 200) {
        if (result.data.responseCode === "00000") {
          yield put({
            type: GET_ALL_DOCUMENT_BY_ID_SUCCESS,
            status: result.data.status,
            data: result.data.documents,
            message: result.data.message,
            responseCode: result.data.responseCode,
          });
        } else {
          yield put({
            type: GET_ALL_DOCUMENT_BY_ID_FAILED,
            status: result.data.status,
            data: result.data.documents,
            message: result.data.message,
            responseCode: result.data.responseCode,
          });
        }
      } else {
        yield put({
          type: GET_ALL_DOCUMENT_BY_ID_FAILED,
          status: result.data.status,
          data: result.data.documents,
          message: result.data.message,
          responseCode: result.data.responseCode,
        });
      }
    } catch (error) {
      yield put({ type: GET_ALL_DOCUMENT_BY_ID_FAILED, data: null });
    }
  }
