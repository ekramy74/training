import {CartActionTypes} from "../../utils/ActionTypes/ActionTypes";

export const BagInitialState = {
    bag: JSON.parse(localStorage.getItem('bag')) || [],
    subTotal: 0,
    tax: 0,
    total: 0,
    loading: true
}
export const BagReducer = (state = BagInitialState, action) => {
    switch (action.type) {
        case CartActionTypes.INCREASE_QUANTITY:
            return {
                ...state,
                bag: state.bag.map((item) => {
                        if (item.id === action.payload) {
                            return {
                                ...item,
                                qty: item.qty + 1,
                            }
                        } else {
                            return item
                        }
                    }
                ),
            }
        case CartActionTypes.DECREASE_QUANTITY:
            return {
                ...state,
                bag: state.bag.map((item) => {
                        if (item.id === action.payload) {
                            return {
                                ...item,
                                qty: item.qty - 1,
                            }
                        } else {
                            return item
                        }
                    }
                ),
            }
        case CartActionTypes.CLEAR_CART:
            return {
                ...state,
                bag: [],
            }
        case CartActionTypes.ADD_TO_CART:
            const inCart = state.bag.find((item) => item?.product?.id === action.payload?.product?.id) || false;
            if (inCart) {
                const newBag = state.bag.map((item) => {
                        if (item.product.id === action.payload.product.id) {
                            return {
                                ...item,
                                qty: action.payload.qty + item.qty,
                            }
                        } else {
                            return item
                        }
                    }
                )
                localStorage.setItem('bag', JSON.stringify(newBag))
                return {
                    ...state,
                    bag: newBag
                }
            } else {
                localStorage.setItem('bag', JSON.stringify([...state.bag, action.payload]))
                return {
                    ...state,
                    bag: [...state.bag, action.payload],
                }
            }
        default:
            return state;
    }
}