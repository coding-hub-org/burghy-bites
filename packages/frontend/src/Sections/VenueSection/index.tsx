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
            <div>
            <h2 className="ClintonMenu">Menu</h2>
            <h3> 
                <ol className="ClintonMenuList">
                    <li>Coffee</li>
                        <ul>
                            <li>black hot drink</li>
                        </ul>
                    <li>Tea</li>
                        <ul>
                            <li>Black tea</li>
                            <li>Green tea</li>
                        </ul>
                    <li>Milk</li>
                        <ul>
                            <li>white cold drink</li>
                        </ul>
                    <li>Bagal</li>
                </ol>
            </h3>
            </div>   
            </div>
        );
    if ( name === "subway" )
        return (
            <div>

                <p> Located on the first floor in the Angell College Center past the College Center desk. Fresh subs, salads and soups - eat in or take out.</p> 
                 <img   
                src="http://cr.citymall.net/wp-content/uploads/2014/09/logoArtboard-21-copy-344x260.png" 
                alt="Subway"></img>
            <div>
            <h2 className="SubwayMenu">Menu</h2>
            <h3> 
                <ol className="SubwayMenuList">
                    <li>Coffee</li>
                        <ul>
                            <li>black hot drink</li>
                        </ul>
                    <li>Tea</li>
                        <ul>
                            <li>Black tea</li>
                            <li>Green tea</li>
                        </ul>
                    <li>Milk</li>
                        <ul>
                            <li>white cold drink</li>
                        </ul>
                    <li>Bagal</li>
                </ol>
            </h3>
            </div>
            </div>
        );
    if ( name === "Little Al's" )
        return (
            <div>
                <p> The entrance to Little Al's at Algonquin is behind Adirondack Hall. Convenient, fresh and fast! Check out our delicious artisan sandwiches. Geared for customers on the run. Little Al's disposable packaging is made from degradable resources.</p> 
                 <img 
                src="http://www.plattsburghcas.com/sites/default/files/styles/900tall/public/1Little%20Al%27s%201.jpg?itok=hqlLpr6r" 
                alt="Little Al's"></img>
            <div>
            <h2 className="Menu">Menu</h2>
            <h3> 
                <ol className="MenuList">
                    <li>Coffee</li>
                        <ul>
                            <li>black hot drink</li>
                        </ul>
                    <li>Tea</li>
                        <ul>
                            <li>Black tea</li>
                            <li>Green tea</li>
                        </ul>
                    <li>Milk</li>
                        <ul>
                            <li>white cold drink</li>
                        </ul>
                    <li>Bagal</li>
                </ol>
            </h3>
            </div>   
            </div>
        );
    if ( name === "Einstein's Bros. Bagels" )
        return (
            <div>
                <p> Einstein's is located on the first floor of Hawkins Hall. Enjoy fresh bagels, specialty sandwiches, soups, salads, and beverages. Come on in between classes.</p> 
                 <img 
                src="http://www.plattsburghcas.com/sites/default/files/styles/600x400/public/Einstien_bros.jpg?itok=pBJd5tz8" 
                alt="Einstein's"></img>
            <div>
            <h2 className="Menu">Menu</h2>
            <h3> 
                <ol className="MenuList">
                    <li>Coffee</li>
                        <ul>
                            <li>black hot drink</li>
                        </ul>
                    <li>Tea</li>
                        <ul>
                            <li>Black tea</li>
                            <li>Green tea</li>
                        </ul>
                    <li>Milk</li>
                        <ul>
                            <li>white cold drink</li>
                        </ul>
                    <li>Bagal</li>
                </ol>
            </h3>
            </div>  
            </div>
        );
    if ( name === "Griddles" )
        return (
            <div>
                <p> Located on the first floor in the Angell College Center in Burghy’s net to Subway. Griddles is a breakfast concept with traditional breakfast eggs, egg sandwiches, pancakes, bagels, baked goods and more.</p> 
                 <img 
                src="" 
                alt="Griddles"></img>
            <div>
            <h2 className="Menu">Menu</h2>
            <h3> 
                <ol className="MenuList">
                    <li>Coffee</li>
                        <ul>
                            <li>black hot drink</li>
                        </ul>
                    <li>Tea</li>
                        <ul>
                            <li>Black tea</li>
                            <li>Green tea</li>
                        </ul>
                    <li>Milk</li>
                        <ul>
                            <li>white cold drink</li>
                        </ul>
                    <li>Bagal</li>
                </ol>
            </h3>
            </div>  
            </div>
        );
    if ( name === "SONO" )
        return (
            <div>
                <p> SONO opens each night for dinner in the Griddles location. It is a Latin American menu where guests can build their burrito bowl, burrito, and taco to order. Quesadilla’s are also available. Delicious sides of house-made chips and salsa are a good choice to add to your meal.</p> 
                 <img 
                src="" 
                alt="SONO"></img>
            <div>
            <h2 className="Menu">Menu</h2>
            <h3> 
                <ol className="MenuList">
                    <li>Coffee</li>
                        <ul>
                            <li>black hot drink</li>
                        </ul>
                    <li>Tea</li>
                        <ul>
                            <li>Black tea</li>
                            <li>Green tea</li>
                        </ul>
                    <li>Milk</li>
                        <ul>
                            <li>white cold drink</li>
                        </ul>
                    <li>Bagal</li>
                </ol>
            </h3>
            </div>   
            </div>
        );
    if ( name === "Scoops" )
        return (
            <div>
                <p> Nestled inside Campus Express, Scoops ice cream shop satisfies the sweet tooth in everyone. You can experience ice cream cones, milkshakes, a juice bar and Freshen’s Smoothies. A bakery case filled with goodies from Our Campus Bakery on campus completes the experience.</p> 
                 <img 
                src="http://www.plattsburghcas.com/sites/default/files/styles/600x400/public/Scoops_Web_Photo.jpg?itok=7c26pP6Q" 
                alt="Scoops"></img>
            <div>
            <h2 className="Menu">Menu</h2>
            <h3> 
                <ol className="MenuList">
                    <li>Coffee</li>
                        <ul>
                            <li>black hot drink</li>
                        </ul>
                    <li>Tea</li>
                        <ul>
                            <li>Black tea</li>
                            <li>Green tea</li>
                        </ul>
                    <li>Milk</li>
                        <ul>
                            <li>white cold drink</li>
                        </ul>
                    <li>Bagal</li>
                </ol>
            </h3>
            </div> 
            </div>
        );
    if ( name === "Tim Horton's" )
        return (
            <div>
                <p> Located on the second floor in the Angell College Center in Flynt Commons, get a quick pick-me-up with gourmet coffees, cocoa, ice cappuccinos and teas. Enjoy freshly made bagels and baked goods or grab a breakfast or lunch sandwich with soup to complete your meal.</p> 
                 <img 
                src="https://pbs.twimg.com/media/DM_tj3VXcAAB-Xk.jpg" 
                alt="Tim Horton's"></img>
            <div>
            <h2 className="Menu">Menu</h2>
            <h3> 
                <ol className="MenuList">
                    <li>Coffee</li>
                        <ul>
                            <li>black hot drink</li>
                        </ul>
                    <li>Tea</li>
                        <ul>
                            <li>Black tea</li>
                            <li>Green tea</li>
                        </ul>
                    <li>Milk</li>
                        <ul>
                            <li>white cold drink</li>
                        </ul>
                    <li>Bagal</li>
                </ol>
            </h3>
            </div>  
            </div>
        );
    if ( name === "Samuel D's" )
        return (
            <div>
                <p> Located in Sibley Hall at the main entrance. Samuel D's offer Starbucks coffee and delicious sandwiches, soups, salads, pastries.</p> 
                 <img 
                src="http://samuelds.com/sDentrance2.JPG" 
                alt="Samuel D's"></img>
            <div>
            <h2 className="Menu">Menu</h2>
            <h3> 
                <ol className="MenuList">
                    <li>Coffee</li>
                        <ul>
                            <li>black hot drink</li>
                        </ul>
                    <li>Tea</li>
                        <ul>
                            <li>Black tea</li>
                            <li>Green tea</li>
                        </ul>
                    <li>Milk</li>
                        <ul>
                            <li>white cold drink</li>
                        </ul>
                    <li>Bagal</li>
                </ol>
            </h3>
            </div>  
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