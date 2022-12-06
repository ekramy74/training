import {AuthActionTypes} from "../../utils/ActionTypes/ActionTypes";

export const InitialState = {
    token: localStorage.getItem('token') !== 'undefined' ? localStorage.getItem('token') : null,
    isAuthenticated: !!localStorage.getItem('token'),
    isLoading: false,
}
export const AuthReducer = (state = InitialState, action) => {

    function loginSuccess() {
        localStorage.setItem('token', action.payload.token);
    }

    switch (action.type) {
        case AuthActionTypes.LOGIN:
            return {
                ...state,
                isLoading: true
            }
        case AuthActionTypes.LOGIN_SUCCESS:
            loginSuccess();
            return {
                ...state,
                isLoading: false,
                isAuthenticated: true,
                token: action.payload.token,
            }
        case AuthActionTypes.LOGIN_ERROR:
            return {
                ...state,
                isLoading: false,
                isAuthenticated: false,
            }
        case AuthActionTypes.REGISTER_SUCCESS:
            loginSuccess();
            return {
                ...state,
                isLoading: false,
                isAuthenticated: false,
            }
        case AuthActionTypes.REGISTER_ERROR:
            return {
                ...state,
                isLoading: false,
                isAuthenticated: false,
            }
        case AuthActionTypes.LOGOUT:
            localStorage.setItem('token', null);
            InitialState.isAuthenticated = false;
            return {
                ...state,
                token: null,
                isAuthenticated: false,
            }
        case AuthActionTypes.REFRESH_TOKEN:
            localStorage.setItem('token', action.payload);
            return {
                ...state,
                token: action.payload,
            }
        default:
            return state
    }
}
