import React from 'react';

const RegisterSection:React.FC = () =>{
    return(
        <div>
            <h1>Sign up</h1>
            <div className="sign-up-form">
                <div>
                    <input type="text"  placeholder="Name"/>
                </div>
                <div>
                    <input type="email" placeholder="Email"/>
                </div>
                <div>
                   <input type="text"  placeholder="Username"/>
                </div>
                <div>
                   <input type="password" placeholder="Password"/>
                </div>
                <div>
                    <button>Submit</button>
                </div>
            </div>
        </div>
    )
};

export default RegisterSection;