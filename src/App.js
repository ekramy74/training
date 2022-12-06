import './App.css';
import {Route, Routes, useLocation} from "react-router-dom";
import Home from "./Pages/Home/Home";
import Contact from "./Pages/Contact/Contact";
import {Navbar} from "./Shared/Components/Navbar/Navbar";
import {createContext, useEffect, useReducer, useRef} from "react";
import Login from "./Pages/Auth/Login";
import Register from "./Pages/Auth/Register";
import {AuthReducer, InitialState} from "./Pages/Auth/AuthReducer";
import Products from "./Pages/Products/Products";
import ViewProduct from "./Pages/ViewProduct/ViewProduct";
import {BagInitialState, BagReducer} from "./Pages/Bag/BagReducer";
import Bag from "./Pages/Bag/Bag";

export const AuthContext = createContext();
export const BagContext = createContext();

function App() {
    const [authState, authDispatch] = useReducer(AuthReducer, InitialState);
    const [bagState, bagDispatch] = useReducer(BagReducer, BagInitialState);
    const location = useLocation()

    const checkPathName = () => {
        return location.pathname.toLowerCase() !== '/login'
            && location.pathname.toLowerCase() !== '/register';
    }

    return (
        <AuthContext.Provider value={{authState, authDispatch}}>
            <BagContext.Provider value={{bagState, bagDispatch}}>
                <div className="App">
                    <header className="App-header">

                        {
                            checkPathName() &&
                            <Navbar/>
                        }
                    </header>
                    <div className={!checkPathName()?'auth-content':'content'}>
                        <Routes>
                            <Route path="/login" element={<Login/>}/>
                            <Route path="/register" element={<Register/>}/>
                            <Route path={'/'} element={<Home/>}/>
                            <Route path={'/products'} element={<Products/>}/>
                            <Route path={'/products/:id'} element={<ViewProduct/>}/>
                            <Route path={'/Bag'} element={<Bag/>}/>
                            <Route path={'/contact'} element={<Contact/>}/>
                        </Routes>

                    </div>
                    <div className={'footer'}>
                    </div>
                </div>
            </BagContext.Provider>
        </AuthContext.Provider>
    );
}

export default App;
