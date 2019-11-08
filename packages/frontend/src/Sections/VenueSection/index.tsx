import React from 'react';
import {useParams} from 'react-router-dom';


const VenueSection: React.FC = () =>{
    let {name}=useParams();
    return (
        <div>
            <h1>{name}</h1>
        </div>
    )
};
export default VenueSection;