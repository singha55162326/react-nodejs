

export function* wachResultdataTransportsById() {
    yield takeEvery(GET_ALL_TRANSPORTS_BY_ID, callResultdataTransportsById);
  }
  function* callResultdataTransportsById(action) {
    try {
      const result = yield apiResultdataTransportsById(action.data, action.token );
      console.log("result:", result);
      console.log("status:", result.status);
      console.log("data.responseCode:", result.data.responseCode);
      if (result.status === 200) {
        if (result.data.responseCode === "00000") {
          yield put({
            type: GET_ALL_TRANSPORTS_BY_ID_SUCCESS,
            status: result.data.status,
            data: result.data,
            message: result.data.message,
            responseCode: result.data.responseCode,
          });
        } else {
          yield put({
            type: GET_ALL_TRANSPORTS_BY_ID_FAILED,
            status: result.data.status,
            data: result.data,
            message: result.data.message,
            responseCode: result.data.responseCode,
          });
        }
      } else {
        yield put({
          type: GET_ALL_TRANSPORTS_BY_ID_FAILED,
          status: result.data.status,
          data: result.data,
          message: result.data.message,
          responseCode: result.data.responseCode,
        });
      }
    } catch (error) {
      yield put({ type: GET_ALL_TRANSPORTS_BY_ID_FAILED, data: null });
    }
  }