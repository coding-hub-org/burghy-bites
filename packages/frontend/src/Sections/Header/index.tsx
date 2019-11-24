import React from 'react';
import './index.scss';
import {NavLink} from 'react-router-dom';
import BBlogo from "../../Asset/NewLogoName.png";
//this need to be redesigned
const Navbar: React.FC = ()=>{
    return(
        <div>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/login"> Login</NavLink>
            <span id="logo"><img src={BBlogo} className="logo-img" alt="logo"/></span>
        </div>
    )
};
export default Navbar;
