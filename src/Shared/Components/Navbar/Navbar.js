import './navbar.css'
import {Link} from "react-router-dom";
import {useEffect, useRef} from "react";
import {Button} from "antd";

export const Navbar = () => {
    const navRef = useRef(null);
    useEffect(() => {
            const nav = navRef.current;
            const handleScroll = () => {
                if (window.scrollY > 0) {
                    nav.classList.add('scrolled');
                } else {
                    nav.classList.remove('scrolled');
                }
            };
            window.addEventListener('scroll', handleScroll);
            return () => {
                window.removeEventListener('scroll', handleScroll);
            };
        }
        , []);
    return (
        <div className={'navbar'} ref={navRef}>
            <div className={'logo'}/>
            <div className={'links'}>
                <ul>
                    <li>
                        <Link to={'/'}>Home</Link>
                    </li>
                    <li>
                        <Link to={'/about'}>About</Link>
                    </li>
                    <li>
                        <Link to={'/contact'}>Contact</Link>
                    </li>
                </ul>
            </div>
            <div>
                <button className={'transparentBtn'}>Get started</button>
            </div>
        </div>
    );
}