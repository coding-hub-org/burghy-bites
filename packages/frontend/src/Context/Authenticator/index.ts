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
    ifLog: boolean;
    constructor(){
        this.user = iniUser;
        this.token=new Cookie();    
        this.ifLog=false;
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
                let responseData= await response.json();
                if (responseData.confirmation===false) return false;
                this.user={
                    firstName:responseData.data.firstName,
                    lastName:responseData.data.lastName,
                    email:responseData.data.email
                };
                this.ifLog=true;
                console.log("TRUE");    
                console.log(this.ifLog);
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
        this.user=iniUser;
        this.ifLog=false;
        return true;
    }
    async doComment(data: Object|undefined){
        let newdata={
            ...data,
            author: this.user.firstName+" "+this.user.lastName,
        }
        try{
            let response = await doPost('/comments',newdata,{"Authorization":` Token ${this.token.get('token')}`});
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
        return this.ifLog;
        
    }


}
const authenticationContext= React.createContext(new Auth());
export default authenticationContext;