import {HomeActionTypes} from "../../utils/ActionTypes/ActionTypes";

export const HomeInitialState = {
    HomeProducts: [],
    isLoading: true,
    error: null,
}
export const HomeReducer = (state = HomeInitialState, action) => {
    switch (action.type) {
        case HomeActionTypes.SET_LOADING:
            return {
                ...state,
                isLoading: true,
            };
        case HomeActionTypes.GET_PRODUCTS_SUCCESS:
            return {
                ...state,
                HomeProducts: action.payload,
                isLoading: false,
            };
        case HomeActionTypes.GET_PRODUCTS_ERROR:
            return {
                ...state,
                error: action.payload,
                isLoading: false,
            };
        default:
            return state;
    }
}