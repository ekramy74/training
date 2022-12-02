import './App.css';
import {Route, Routes, useLocation} from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import {Navbar} from "./Shared/Components/Navbar/Navbar";
import {createContext, useEffect, useReducer, useRef} from "react";
import Login from "./Pages/Auth/Login";
import Register from "./Pages/Auth/Register";
import {AuthReducer, InitialState} from "./Pages/Auth/AuthReducer";

export const AuthContext = createContext();

function App() {
    const contentRef = useRef(null);
    const [authState, authDispatch] = useReducer(AuthReducer, InitialState);
    const location = useLocation()

    useEffect(() => {
            if (location.pathname !== '/Login' && location.pathname !== '/Register') {
                const content = contentRef.current;
                const handleScroll = () => {
                    if (window.scrollY > 0) {
                        content.classList.add('content-scroll');
                    } else {
                        content.classList.remove('content-scroll');
                    }
                };
                window.addEventListener('scroll', handleScroll);
            }
        }
        , []);
    return (
        <AuthContext.Provider value={{authState, authDispatch}}>
            <div className="App">
                <header className="App-header">
                    {
                        (
                            location.pathname.toLowerCase() !== '/login'
                            && location.pathname.toLowerCase() !== '/register'
                        ) &&
                        <Navbar/>
                    }
                </header>
                <div className={'content'} ref={contentRef}>
                    <Routes>
                        <Route path="/login" element={<Login/>}/>
                        <Route path="/register" element={<Register/>}/>
                        <Route path={'/'} element={<Home/>}/>
                        <Route path={'/about'} element={<About/>}/>
                        <Route path={'/contact'} element={<Contact/>}/>
                    </Routes>

                </div>
                <div className={'footer'}>
                </div>
            </div>
        </AuthContext.Provider>
    );
}

export default App;
