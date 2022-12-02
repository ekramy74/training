import {Navigate,} from "react-router-dom";
import {useContext} from "react";
import {AuthContext} from "../../../App";

export const ProtectedRoute = ({children}) => {
    const {authState} = useContext(AuthContext);
    console.log(authState)
    if (authState.isAuthenticated && authState.token)
        return children
    else
        return <Navigate to="/Login" replace={true}/>
}