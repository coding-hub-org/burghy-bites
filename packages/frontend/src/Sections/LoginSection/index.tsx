import React,{useState, useContext} from 'react';
import './index.scss';
import {Redirect} from 'react-router-dom';
import authenticationContext from '../../Context/Authenticator';
const LoginSection:React.FC = () =>{
    let authenticator = useContext(authenticationContext);
    const [loggedIn,log] = useState(false);
    const [email,setEmail] = useState("");
    const [password,setPassWord] = useState("");
    const handleChangeUser = (e: React.FormEvent<HTMLInputElement>) =>{
        setEmail(e.currentTarget.value);
    };
    const handleChangePass = (e: React.FormEvent<HTMLInputElement>) =>{
        setPassWord(e.currentTarget.value);
    }
    const handleClick= async()=>{
        console.log(email);
        console.log(password);
        let response=await authenticator.doLogin({
            email:email,
            password:password
        });
        if (response) log(true);
    };
    if (loggedIn)
    return(
        <Redirect to="/"/>
    )
    return(
        <div>
            <h1 className="login-header">LOGIN</h1>
            <div>                                        
                <h2>Welcome back!  </h2><a href="/">Did you forget your password?</a>
            </div>
            <div>
                <label>Email</label><br/>
                <input onChange={handleChangeUser} type="text"  id="username" placeholder="Username" value={email}/>
            </div>
            <div>
                <label>Password</label><br/>
                <input onChange={handleChangePass} type="password" id="password" placeholder="Password" value={password}/>
            </div>
            
        
            <div >
                <input type="checkbox" />
                <label >Remember me</label>
            </div>
        

            <button onClick={(e)=>{handleClick();}}>Login</button>
        </div>
    )
};

export default LoginSection;