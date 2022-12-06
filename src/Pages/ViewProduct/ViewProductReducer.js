import {CartActionTypes} from "../../utils/ActionTypes/ActionTypes";

export const ViewProductInitialState = {
    product: null,
    loading: true,
    qty: 1,
}

export const ViewProductReducer = (state = ViewProductInitialState, action) => {
    switch (action.type) {
        case 'SET_PRODUCT':
            return {
                ...state,
                product: action.payload,
                loading: false,
            }
        case CartActionTypes.INCREASE_QUANTITY:
            if (state.qty < 10) {
                return {
                    ...state,
                    qty: state.qty + 1,
                }
            } else {
                return {
                    ...state,

                }
            }
        case CartActionTypes.DECREASE_QUANTITY:
            if (state.qty > 1) {
                return {
                    ...state,
                    qty: state.qty - 1,
                }
            } else {
                return {
                    ...state,
                }
            }
        default:
            return state;
    }
}