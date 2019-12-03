import React,{useState,useContext,useEffect} from 'react';
import './index.scss';
import LoaderContext from '../../Context/Loader';
import Venue from '../../Context/Models/venue';
import { useCallback } from 'react';
import MapComponent from './map';
const VenueBox = (venue:Venue) =>{
    return(
        <div>
            <h1>{venue.name}</h1>
            <p>{venue.hours}</p>
            {venue.description}
            Put you code here
            
        </div>
    );
};

const HomeSection: React.FC = ()=>{
    const [isLoading,loaded] = useState(true);
    const [listOfVenues, setVenues] = useState([]);
    let loader=useContext(LoaderContext);
    useEffect(()=>{
        const getVenues = async()=>{
            let venuesToGet= await loader.loadVenues();
            loaded(false);
            console.log(venuesToGet);
            setVenues(prev=>{
                return venuesToGet? venuesToGet: prev;
            });
        }
        if (!isLoading) return;
        getVenues();
    },[loader,isLoading]);
    return(
        <div className="home">
            <div className="map-wrapper">
                <MapComponent/>
            </div>
            <div className="venues-wrapper">
                {listOfVenues.map(venue=>{
                    return VenueBox(venue);
                })}
            </div>
        </div>
    )
}

export default HomeSection;