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
    GET_PRINT_IMPORT_SUCCESS,
    GET_PRINT_IMPORT_FAILED

} from "../utils/commonType";

const initialState = {
    error: false,
    success: false,
    actionType: null,
    isLoading: false,
    dataResultImportNew: null,
    dataResultMaxIdImport: null,
    dataResultGetPrintImport: null,
};

export default (state = initialState, action) => {
    switch (action.type) {


        case INSRT_NEW_IMPORT:
            return { ...state, isLoading: false, dataResultImportNew: null };
        case INSRT_NEW_IMPORT_FAILED:
            return {
                ...state,
                actionType: INSRT_NEW_IMPORT_FAILED,
                dataResultImportNew: action.data,
                message: action.message,
                status: action.status,
                responseCode: action.responseCode,
            };
        case INSRT_NEW_IMPORT_SUCCESS:
            return {
                ...state,
                actionType: INSRT_NEW_IMPORT_SUCCESS,
                dataResultImportNew: action.data,
                message: action.message,
                status: action.status,
                responseCode: action.responseCode,
            };

        case GET_MAX_ID_IMPORT:
            return { ...state, isLoading: false, dataResultMaxIdImport: null };
        case GET_MAX_ID_IMPORT_FAILED:
            return {
                ...state,
                actionType: GET_MAX_ID_IMPORT_FAILED,
                dataResultMaxIdImport: action.data,
                message: action.message,
                status: action.status,
                responseCode: action.responseCode,
            };
        case GET_MAX_ID_IMPORT_SUCCESS:
            return {
                ...state,
                actionType: GET_MAX_ID_IMPORT_SUCCESS,
                dataResultMaxIdImport: action.data,
                message: action.message,
                status: action.status,
                responseCode: action.responseCode,
            };

        case INSRT_NEW_IMPORT_DETAIL:
            return { ...state, isLoading: false, dataResultImportDetailNew: null };
        case INSRT_NEW_IMPORT_DETAIL_FAILED:
            return {
                ...state,
                actionType: INSRT_NEW_IMPORT_DETAIL_FAILED,
                dataResultImportDetailNew: action.data,
                message: action.message,
                status: action.status,
                responseCode: action.responseCode,
            };
        case INSRT_NEW_IMPORT_DETAIL_SUCCESS:
            return {
                ...state,
                actionType: INSRT_NEW_IMPORT_DETAIL_SUCCESS,
                dataResultImportDetailNew: action.data,
                message: action.message,
                status: action.status,
                responseCode: action.responseCode,
            };


        case GET_PRINT_IMPORT:
            return { ...state, isLoading: false, dataResultGetPrintImport: null };
        case GET_PRINT_IMPORT_FAILED:
            return {
                ...state,
                actionType: GET_PRINT_IMPORT_FAILED,
                dataResultGetPrintImport: action.data,
                message: action.message,
                status: action.status,
                responseCode: action.responseCode,
            };
        case GET_PRINT_IMPORT_SUCCESS:
            return {
                ...state,
                actionType: GET_PRINT_IMPORT_SUCCESS,
                dataResultGetPrintImport: action.data,
                message: action.message,
                status: action.status,
                responseCode: action.responseCode,
            };



        default:
            return state;
    }
};
