import React,{useState, useContext} from 'react';
import './index.scss';
import {Redirect} from 'react-router-dom';
import authenticationContext from '../../Context/Authenticator';
import { preventDefault } from 'ol/events/Event';

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
<div className = "bg-img">
    <form action = "/action_page.php" method="post">
        <div className="login-box">
            <h1 className="txt-color">Login</h1>
            <br></br>
            <div className="input_container">
                <input onChange={handleChangeUser} placeholder="Username" type="text" name="Username" className='input-field' value={email} />
            </div>
            <br></br>
            <div className="input_container">
                <input onChange={handleChangePass} placeholder="Password" type="password" name="Password" className='input-field' value={password}/>
            </div>
            <br></br>
            <div>
                <button onClick={(e)=>{e.preventDefault();handleClick();}} id='input_submit' className="input_submit">Login</button>
            </div>
            <br></br>
            <div>
            <span className="txt-color">Forgot <a className="links" href="#"> Username / Password ?</a></span> 
            </div>  
        </div>


    </form>
</div>
    )
};

export default LoginSection;
