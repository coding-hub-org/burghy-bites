import React from 'react';
import {useParams} from 'react-router-dom';


const DishSection:React.FC = () =>{
    let {dish,venue}=useParams();
    return(
        <div>
            This is template page for {dish} at {venue}
        </div>
    )
};
export default DishSection;