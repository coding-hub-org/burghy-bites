import React from 'react';

const LoginSection:React.FC = () =>{
    return(
        <div>
            <h1>Login</h1>
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
        
            <div>                                        
                <a href="/">Forgot password?</a>
            </div>

            <button>Login</button>
        </div>
    )
};

export default LoginSection;