import React from 'react';
import './index.scss';
const LoginSection:React.FC = () =>{
    return(
<body className = "bg-img">
    <form action = "/action_page.php" method="post">
        <div className="login-box">
            <h1 className="txt-color">Login</h1>
            <br></br>
            <div className="input_container">
                <input placeholder="Username" type="text" name="Username" className='input-field'/>
            </div>
            <br></br>
            <div className="input_container">
                <input placeholder="Password" type="password" name="Password" className='input-field'/>
            </div>
            <br></br>
            <div>
                <button type="submit" value="Login" id='input_submit' className="input_submit">Login</button>
            </div>
            <br></br>
            <div>
            <span className="txt-color">Forgot <a className="links" href="#"> Username / Password ?</a></span> 
            </div>  
        </div>


    </form>
</body>
    )
};

export default LoginSection;