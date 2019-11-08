import React from 'react';
import {useParams} from 'react-router-dom';


const DishSection:React.FC = () =>{
    let {dish,venue}=useParams();
    return(
        <div>
            <h1> {dish} </h1>
            <p> from {venue}</p>
        </div>
    )
};
export default DishSection;