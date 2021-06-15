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
            <img className="header_img" alt="a" src='https://lh3.googleusercontent.com/proxy/UzN491CNgvmQrFbKvcfVleD1U-6rkHsVedSq2UOTuh_N_XUfZzM7Dn18S3rP_6M3F2Gwabv5swAmDuPN-jRKQzAH2hv4yI4Xhhy4BN2ggKXySJ49Gr28fbkNrqtxEf_bsNR6wu04tK4'/>
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