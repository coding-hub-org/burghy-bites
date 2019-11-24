import React,{useState,useContext,useEffect} from 'react';
import {useParams,Link} from 'react-router-dom';
import LoaderContext from '../../Context/Loader';
import Venue from '../../Context/Models/venue';
import Dish from '../../Context/Models/venue';
import './index.scss';
const VenueSection: React.FC = () =>{
    let {name}=useParams();
    const iniVenue: Venue = {
        name:name,
        hours:"",
        isOpen:false,
        description:"",
        imgURL:""
    };
    const menuLink = (dish:Dish) =>{
        return (<Link to={`/dishes/${name}/${dish.name}`}>{dish.name}</Link>);
    }
    
    let loader=useContext(LoaderContext);
    const [venueData, setVenue] = useState(iniVenue);
    const [dishesData,setDishes]= useState([]);
    const [isLoading, loaded]=useState(true);
    useEffect(()=>{
        const getVenue = async() =>{
            let venueToGet = await loader.loadVenue(name);
            let dishesToGet = await loader.loadAllDish(name);
            loaded(false);
            console.log(venueToGet);
            console.log(dishesToGet);
            setVenue(prev => {
                return venueToGet ? venueToGet : iniVenue;
            });
            
            setDishes(prev => {
                return dishesToGet ? dishesToGet : prev;
            });
            
        }
        if (!isLoading) return;
        getVenue();
    },[iniVenue,loader,name,isLoading]);
    return (
        <div className="venues-section">
            <h1 className={name}>{name}</h1>
            <div className="description">
                <div>
                    <img   
                    src={venueData.imgURL}
                    alt="Subway"></img>
                </div>
                <p> {venueData.description}</p>
            </div>
            <div className="open-hour">
                <p>Open at: {venueData.hours}</p>
            </div>
            <div className="menu">
                <h3>Menu</h3>
                {dishesData.map(dish=>{
                    return menuLink(dish);
                })}                
            </div>
            
        </div>
    );

};
export default VenueSection;