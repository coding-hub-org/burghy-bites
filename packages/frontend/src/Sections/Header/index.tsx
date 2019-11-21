import React from 'react';
import './index.scss';
import {NavLink} from 'react-router-dom';
<<<<<<< HEAD
import BBlogo from "../../Asset/BBlogo.png";
=======

import BBlogo from "../../Asset/BBlogo.png";

>>>>>>> 825fc880417279611758af0534bb9cd8cce7f64a
//this need to be redesigned
const Navbar: React.FC = ()=>{
    return(
        <React.Fragment>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/venues">Dining Locations </NavLink>
            <input type="text" placeholder="Search..." />
<<<<<<< HEAD
=======

>>>>>>> 825fc880417279611758af0534bb9cd8cce7f64a
            <span id="logo"><img src={BBlogo} className="logo-img" alt="logo"/></span>
        </React.Fragment>
    )
};
export default Navbar;