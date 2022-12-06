import './navbar.css'
import {Link, useNavigate} from "react-router-dom";
import { useState} from "react";
import {MenuOutlined} from "@ant-design/icons";

export const Navbar = () => {

    const [show, setShow] = useState(false);
    const navigate = useNavigate();

    return (
        <div className={'navbar'}>
            <div className={'logo'}/>
            <div className={show ? 'links-open' : 'links'}>
                <ul>
                    <li>
                        <Link to={'/'}>Home</Link>
                    </li>
                    <li>
                        <Link to={'/products'}>Products</Link>
                    </li>
                    <li>
                        <Link to={'/bag'}>Bag</Link>
                    </li>
                </ul>
            </div>
            <div>
                <div className={'hamburger-menu'}
                     onClick={() => {
                         setShow(!show)
                     }}
                >
                    <MenuOutlined/>
                </div>
                <button className={'transparentBtn'} onClick={()=>{
                    navigate('/login')
                }}>Get started</button>
            </div>
        </div>
    );
}