import React,{useState,useContext,useEffect} from 'react';
import './index.scss';
import LoaderContext from '../../Context/Loader';
import Venue from '../../Context/Models/venue';
import MapComponent from './map';
import {Link} from 'react-router-dom';
import Navbar from '../Header';
const VenueBox = (venue:Venue) =>{
    return(
        <Link to={`/venues/${venue.name}`}>
            <div className="boxlet">
              <img
                src={venue.imgURL}
                className="images"
                alt={`image of ${venue.name}`}
              />
              <h3>
                {venue.name}
              </h3>
            </div>
        </Link>

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
            <Navbar/>
            <div className="map-wrapper">
                <MapComponent/>
            </div>
      
            <div className="gallerybox">
                {listOfVenues.map(venue=>{
                    return VenueBox(venue);
                })}
              
            </div>
            <footer className="footer"></footer>
        </div>
    )
}
{/*<div className="boxlet">
                <img src="https://cdn.glitch.com/b5ba0063-d756-434a-ab2a-75f1e7cf69bb%2F2.jpg?v=1575423852289"
                  className="images"></img>
                <h3>
                  Downer
                </h3>
              </div>

              <div className="boxlet">
              <img
                src="https://cdn.glitch.com/b5ba0063-d756-434a-ab2a-75f1e7cf69bb%2Fdepositphotos_24009695-stock-photo-plate-of-french-fries.jpg?v=1575423845175"
                className="images"
              />
              <h3>
                The Kitchen
              </h3>
              </div>
              <div className="boxlet">
                <img
                  src="https://cdn.glitch.com/b5ba0063-d756-434a-ab2a-75f1e7cf69bb%2Fthai-som-tum.jpg.jpg?v=1575423849948"
                  className="images"
                />
                <h3>
                  Hello there
                </h3>
              </div>
              <div className="boxlet">
                <img
                  src="https://cdn.glitch.com/b5ba0063-d756-434a-ab2a-75f1e7cf69bb%2Ffoods-wallpaper.jpg?v=1575513971387"
                  className="images"
                />
                <h3>
                  Griddles
                </h3>
              </div>
*/}
export default HomeSection;
