import React from 'react';
import {doGet} from './HTTPRequest';
class Loader{
    constructor(){
    }
    async loadDish(name:string|undefined){
        try{
            let response = await doGet(`/dishes/${name}`);

            if (response.status===200){
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