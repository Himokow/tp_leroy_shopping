import React from 'react';
import './header.css';
import Cart from "../Cart/cart";
import {Link} from "react-router-dom";
import {Button} from "antd";

const Header = () => {
    return (
        <>
        <div className='header'>
            <Link to='/'>
            <img className="header_img" alt="a" src='https://image.freepik.com/vecteurs-libre/logo-fruits-legumes_7085-159.jpg'/>
            </Link>
            <div>
                <Button>
                    <Link to='/admin'>Admin</Link>
                </Button>
                <Cart/>
            </div>
        </div>
</>
    )
};

export default Header;