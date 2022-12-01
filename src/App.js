import './App.css';
import {Route, Routes} from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import {Navbar} from "./Shared/Components/Navbar/Navbar";
import {useEffect, useRef} from "react";

function App() {
    const contentRef = useRef(null);

    useEffect(() => {
            const content = contentRef.current;
            const handleScroll = () => {
                if (window.scrollY > 0) {
                    content.classList.add('content-scroll');
                } else {
                    content.classList.remove('content-scroll');
                }
            };
            window.addEventListener('scroll', handleScroll);
            return () => {
                window.removeEventListener('scroll', handleScroll);
            };
        }
        , []);
    return (
        <div className="App">
            <header className="App-header">
                <Navbar/>
            </header>
            <div className={'content'} ref={contentRef}>
                <Routes>
                    <Route path={'/'} element={<Home/>}/>
                    <Route path={'/about'} element={<About/>}/>
                    <Route path={'/contact'} element={<Contact/>}/>
                </Routes>

            </div>
            <div className={'footer'}>
            </div>
        </div>
    );
}

export default App;
