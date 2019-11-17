import React from 'react';
import {useParams} from 'react-router-dom';
import './index.scss';

const description = (name : string|undefined)=>{
    if ( name === "clinton" )
        return (
            <div>
                <p> Clinton is an all-you-care-to eat location for breakfast, lunch and dinner, Monday through Sunday. Eggs made to order, house-made entrees, grill fare, deli, Italian entrees, pizza, soups, breads, salads, fruit and yogurt bar, 2 Mongolian grills with a rotating theme on one and a G8 station with foods avoiding gluten and the 8 major allergens.</p> 
                 <img 
                src="https://static1.squarespace.com/static/597768c003596ef82cdbd4e1/59b6aa912278e7557ed6651f/5d4db7fbfcd1ce0001bb2214/1570457176148/Plattsburgh-Salad-Bar.jpg?format=1500w" 
                alt="Clinton"></img>   
            </div>
        );
    if ( name === "subway" )
        return (
            <div>
                <p> This is Subway:</p> 
                 <img   
                src="http://cr.citymall.net/wp-content/uploads/2014/09/logoArtboard-21-copy-344x260.png" 
                alt="Subway"></img>
                <p>This is subway</p>   
            </div>
        );
    if ( name === "Little Al's" )
        return (
            <div>
                <p> This is clinton:</p> 
                 <img 
                src="https://static1.squarespace.com/static/597768c003596ef82cdbd4e1/59b6aa912278e7557ed6651f/5d4db7fbfcd1ce0001bb2214/1570457176148/Plattsburgh-Salad-Bar.jpg?format=1500w" 
                alt="Clinton"></img>
                <p>     ABC</p>   
            </div>
        );
    if ( name === "Einstein's Bros. Bagels" )
        return (
            <div>
                <p> This is clinton:</p> 
                 <img 
                src="https://static1.squarespace.com/static/597768c003596ef82cdbd4e1/59b6aa912278e7557ed6651f/5d4db7fbfcd1ce0001bb2214/1570457176148/Plattsburgh-Salad-Bar.jpg?format=1500w" 
                alt="Clinton"></img>
                <p>     ABC</p>   
            </div>
        );
    if ( name === "Griddles" )
        return (
            <div>
                <p> This is clinton:</p> 
                 <img 
                src="https://static1.squarespace.com/static/597768c003596ef82cdbd4e1/59b6aa912278e7557ed6651f/5d4db7fbfcd1ce0001bb2214/1570457176148/Plattsburgh-Salad-Bar.jpg?format=1500w" 
                alt="Clinton"></img>
                <p>     ABC</p>   
            </div>
        );
    if ( name === "SONO" )
        return (
            <div>
                <p> This is clinton:</p> 
                 <img 
                src="https://static1.squarespace.com/static/597768c003596ef82cdbd4e1/59b6aa912278e7557ed6651f/5d4db7fbfcd1ce0001bb2214/1570457176148/Plattsburgh-Salad-Bar.jpg?format=1500w" 
                alt="Clinton"></img>
                <p> This is SONO</p>   
            </div>
        );
    if ( name === "Scoops" )
        return (
            <div>
                <p> This is Scoops:</p> 
                 <img 
                src="https://static1.squarespace.com/static/597768c003596ef82cdbd4e1/59b6aa912278e7557ed6651f/5d4db7fbfcd1ce0001bb2214/1570457176148/Plattsburgh-Salad-Bar.jpg?format=1500w" 
                alt="Clinton"></img>
                <p>This is Scoops</p>   
            </div>
        );
    if ( name === "Tim Horton's" )
        return (
            <div>
                <p> This is clinton:</p> 
                 <img 
                src="https://static1.squarespace.com/static/597768c003596ef82cdbd4e1/59b6aa912278e7557ed6651f/5d4db7fbfcd1ce0001bb2214/1570457176148/Plattsburgh-Salad-Bar.jpg?format=1500w" 
                alt="Clinton"></img>
                <p> This is Einstein's</p>   
            </div>
        );
    if ( name === "Samuel D's" )
        return (
            <div>
                <p> This is clinton:</p> 
                 <img 
                src="https://static1.squarespace.com/static/597768c003596ef82cdbd4e1/59b6aa912278e7557ed6651f/5d4db7fbfcd1ce0001bb2214/1570457176148/Plattsburgh-Salad-Bar.jpg?format=1500w" 
                alt="Clinton"></img>
                <p> This Samuel D's </p>   
            </div>
        );
    return null;
};
const VenueSection: React.FC = () =>{
    let {name}=useParams();
    
    return (
        <div className="venues-section">
            <h1 className={name}>{name}</h1>
            <p className="description">{description(name)}</p>
             
        </div>
    );

};
export default VenueSection;