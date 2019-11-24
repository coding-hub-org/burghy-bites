import React from 'react';
import {doGet} from './HTTPRequest';

class Loader{
    async loadDish(name:string|undefined, venue:string|undefined){
        try{
            let response = await doGet(`/dishes/${venue}/${name}`);

            if (response.status!==404){
                let responseData= await response.json();
                return responseData.data;
            }
        }catch(error){
            console.error(error);
        }finally{
            
        }
    };
    async loadAllDish(venue:string|undefined){
        try{
            let response = await doGet(`/dishes/${venue}`);
            if (response.status!==404){
                let responseData= await response.json();
                return responseData.data;
            }
        }catch(error){
            console.error(error);
        }finally{

        }
    };
    async loadVenues(){
        try{
            let response = await doGet('/venues');
            if (response.status!==404){
                let responseData= await response.json();
                return responseData.data;
            }
        }catch(error){
            console.error(error);
        }finally{
        }
    };
    async loadVenue(name: string| undefined){
        try{
            let response = await doGet(`/venues/${name}`);
            if (response.status!==404){
                let responseData= await response.json();
                return responseData.data;
            }
        }catch(error){
            console.error(error);
        }finally{

        }
    };
};
const LoaderContext= React.createContext(new Loader());
export default LoaderContext;