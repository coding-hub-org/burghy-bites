import React, {useState, useContext} from 'react';
import {Redirect} from 'react-router-dom';
import authenticationContext from '../../Context/Authenticator';

const RegisterSection:React.FC = () =>{
    let authenticator = useContext(authenticationContext);
    const [firstName,setFirstName] = useState("");
    const [lastName,setLastName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [ok,setOk] =useState(false);
    const handleClick = async()=>{
        let response = await authenticator.doSignUp({
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password
        });
        if (response)
            setOk(true);
    }
    if (ok)
    return(
        <Redirect to="/login"/>
    )
    return(
        <div>
            <h1>Sign up</h1>
            <div className="sign-up-form">
                <div>
                    <label> First Name </label> <br/>
                    <input onChange={(e)=>{
                        setFirstName(e.target.value);
                    }} type="text"  placeholder="First Name" value={firstName}/>
                </div>
                <div>
                    <label> Last Name</label> <br/>
                    <input onChange={(e)=>{
                        setLastName(e.target.value);
                    }} type="text" placeholder="Last Name" value={lastName}/>
                </div>
                <div>
                    <label> Email</label> <br/>
                    <input onChange={(e)=>{
                        setEmail(e.target.value);
                    }} type="text"  placeholder="Email" value={email}/>
                </div>
                <div>
                    <label> Password</label> <br/>
                    <input onChange={(e)=>{
                        setPassword(e.target.value);
                    }} type="password" placeholder="Password" value={password}/>
                </div>
                <div>
                    <button onClick={handleClick}>Submit</button>
                </div>
            </div>
        </div>
    )
};

export default RegisterSection;