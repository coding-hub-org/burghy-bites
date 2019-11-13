import React from 'react';
import './index.scss';
import {NavLink} from 'react-router-dom';
//this need to be redesigned
const Navbar: React.FC = ()=>{
    return(
        <React.Fragment>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/venues">Dining Locations </NavLink>
            <input type="text" placeholder="Search..." />
            <span id="logo">LOGO</span>
        </React.Fragment>
    )
};
export default Navbar;