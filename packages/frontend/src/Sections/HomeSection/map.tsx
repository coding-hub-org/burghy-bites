import React,{useEffect,useState} from 'react';
import 'ol/ol.css';
import {Map, View} from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import {fromLonLat} from 'ol/proj';
import './map.scss';
const SUNYPLonLat = [-73.4669, 44.6926];
const SUNYPWebMercator = fromLonLat(SUNYPLonLat);
const MapComponent:React.FC = ()=>{
    const [map,setMap]=useState();

    useEffect(()=>{
        console.log("EF");
        let ele : HTMLElement|undefined|null =document.getElementById('map');
        if (ele===null) return;
        
        console.log(ele);
        setMap(new Map({
            target: ele,
            layers: [
              new TileLayer({
                source: new OSM()
              })
            ],
            view: new View({
                center: SUNYPWebMercator,
                zoom: 16,
                minZoom: 16,
                maxZoom:16
            })
          }));

    },[]);
    useEffect(()=>{
        if (!map) return;
        console.log(map.getView());
        
    },[map]);
    return (
        <div>
            <div id="map"></div>
        </div>
    )
};
export default MapComponent;