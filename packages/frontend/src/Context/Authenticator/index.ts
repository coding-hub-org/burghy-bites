import React from 'react';
import {doGet, doPatch, doPost} from '../HTTPRequest';
import User from '../Models/user';
import Cookie from 'universal-cookie';
let iniUser:User={
    firstName:"",
    lastName:"",
    email:""
}
class Auth{
    user: User;
    token: Cookie;
    constructor(){
        this.user = iniUser;
        this.token=new Cookie();    
    };
    async doSignUp(data:Object|undefined){
        try{
            let response = await doPost('/register',data);
            if (response.status!==404){
                return true;
            }
            return false;
        }catch(error){
            console.log(error);
            return false;
        }finally{

        }

    }
    async doLogin(data: Object|undefined){
        //doPatch
        try{
            let response = await doPatch('/login',data);
            if (response.status!==404){
                return true;
            }
            return false;
        }catch(error){
            console.log(error);
            return false;
        }finally{

        }

    }
    async logOut(){
        //doPatch
        try{
            let response = await doPatch('/logout',{},{"Authorization":` Token ${this.token.get('token')}`});
            if (response.status!==404){
                return true;
            }
            return false;
        }catch(error){
            console.log(error);
            return false;
        }finally{
        }
    }
    async doComment(data: Object|undefined){
        try{
            let response = await doPost('/comments',data,{"Authorization":` Token ${this.token.get('token')}`});
            if (response.status!==404){
                return true;
            }
            return false;
        }catch(error){
            console.log(error);
            return false;
        }finally{

        }
    }
    async doCheck(){
        try{
            let response = await doGet('/login',{"Authorization":` Token ${this.token.get('token')}`});
            if (response.status!==404){
                return true;
            }
            return false;
        }catch(error){
            console.log(error);
            return false;
        }finally{

        };
        
    }


}
const authenticationContext= React.createContext(new Auth());
export default authenticationContext;