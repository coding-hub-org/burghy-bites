import React from 'react';
import './index.scss';
const LoginSection:React.FC = () =>{
    return(
        <div>
            <h1 className="login-header">LOGIN</h1>
            <div>                                        
                <h2>Welcome back!  </h2><a href="/">Did you forget your password?</a>
            </div>
            <div>
                <input type="text"  placeholder="Username"/>
            </div>
            <div>
                <input type="password" placeholder="Password"/>
            </div>
            
        
            <div >
                <input type="checkbox" />
                <label >Remember me</label>
            </div>
        

            <button>Login</button>
        </div>
    )
};

export default LoginSection;