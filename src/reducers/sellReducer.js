import {
    INSRT_NEW_SELL,
    INSRT_NEW_SELL_FAILED,
    INSRT_NEW_SELL_SUCCESS,
    GET_MAX_ID_SELL,
    GET_MAX_ID_SELL_FAILED,
    GET_MAX_ID_SELL_SUCCESS,

    INSRT_NEW_SELL_DETAIL,
    INSRT_NEW_SELL_DETAIL_FAILED,
    INSRT_NEW_SELL_DETAIL_SUCCESS,

    GET_ALL_SELL,
    GET_ALL_SELL_FAILED,
    GET_ALL_SELL_SUCCESS,

    GET_PRINT_SELL,
    GET_PRINT_SELL_SUCCESS,
    GET_PRINT_SELL_FAILED

} from "../utils/commonType";


const initialState = {
    error: false,
    success: false,
    actionType: null,
    isLoading: false,
    dataResultSellNew: null,
    dataResultMaxIdSell: null,
    dataResultSellDetailNew: null,
    dataResultGetSell: null,
    dataResultGetPrintSell: null,

};

export default (state = initialState, action) => {
    switch (action.type) {
        case INSRT_NEW_SELL:
            return { ...state, isLoading: false, dataResultSellNew: null };
        case INSRT_NEW_SELL_FAILED:
            return {
                ...state,
                actionType: INSRT_NEW_SELL_FAILED,
                dataResultSellNew: action.data,
                message: action.message,
                status: action.status,
                responseCode: action.responseCode,
            };
        case INSRT_NEW_SELL_SUCCESS:
            return {
                ...state,
                actionType: INSRT_NEW_SELL_SUCCESS,
                dataResultSellNew: action.data,
                message: action.message,
                status: action.status,
                responseCode: action.responseCode,
            };

        case GET_MAX_ID_SELL:
            return { ...state, isLoading: false, dataResultMaxIdSell: null };
        case GET_MAX_ID_SELL_FAILED:
            return {
                ...state,
                actionType: GET_MAX_ID_SELL_FAILED,
                dataResultMaxIdSell: action.data,
                message: action.message,
                status: action.status,
                responseCode: action.responseCode,
            };
        case GET_MAX_ID_SELL_SUCCESS:
            return {
                ...state,
                actionType: GET_MAX_ID_SELL_SUCCESS,
                dataResultMaxIdSell: action.data,
                message: action.message,
                status: action.status,
                responseCode: action.responseCode,
            };

        case INSRT_NEW_SELL_DETAIL:
            return { ...state, isLoading: false, dataResultSellDetailNew: null };
        case INSRT_NEW_SELL_DETAIL_FAILED:
            return {
                ...state,
                actionType: INSRT_NEW_SELL_DETAIL_FAILED,
                dataResultSellDetailNew: action.data,
                message: action.message,
                status: action.status,
                responseCode: action.responseCode,
            };
        case INSRT_NEW_SELL_DETAIL_SUCCESS:
            return {
                ...state,
                actionType: INSRT_NEW_SELL_DETAIL_SUCCESS,
                dataResultSellDetailNew: action.data,
                message: action.message,
                status: action.status,
                responseCode: action.responseCode,
            };

        case GET_ALL_SELL:
            return { ...state, isLoading: false, dataResultGetSell: null };
        case GET_ALL_SELL_FAILED:
            return {
                ...state,
                actionType: GET_ALL_SELL_FAILED,
                dataResultGetSell: action.data,
                message: action.message,
                status: action.status,
                responseCode: action.responseCode,
            };
        case GET_ALL_SELL_SUCCESS:
            return {
                ...state,
                actionType: GET_ALL_SELL_SUCCESS,
                dataResultGetSell: action.data,
                message: action.message,
                status: action.status,
                responseCode: action.responseCode,
            };

            case GET_PRINT_SELL:
                return { ...state, isLoading: false, dataResultGetPrintSell: null };
            case GET_PRINT_SELL_FAILED:
                return {
                    ...state,
                    actionType: GET_PRINT_SELL_FAILED,
                    dataResultGetPrintSell: action.data,
                    message: action.message,
                    status: action.status,
                    responseCode: action.responseCode,
                };
            case GET_PRINT_SELL_SUCCESS:
                return {
                    ...state,
                    actionType: GET_PRINT_SELL_SUCCESS,
                    dataResultGetPrintSell: action.data,
                    message: action.message,
                    status: action.status,
                    responseCode: action.responseCode,
                };

        default:
            return state;
    }
};
