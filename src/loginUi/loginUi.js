import './loginUi.css';
import user from "../image/user.png";
import email from "../image/email.png";
import pass from "../image/pass.png";  
// import car2 from "../image/car2.JPEG";
import  bgcar from "../image/bg-car1.JPEG";
import  name from "../image/name.png";
import  call from "../image/calls.png";
import bgbike from "../image/bg-bike1.JPEG";
import Container from 'react-bootstrap/Container';
import { useNavigate } from 'react-router-dom';

export  function LoginUi() {
  const navigate=useNavigate();
  return (
    <>
    <Container fluid>
    <div className="main" style={{backgroundImage:`url(${bgcar})`,display:"flex", backgroundPosition: 'center',
        backgroundSize: 'cover',height:'100%',width:'100%'}}>
     <div className="smain">
       <div>
         <div className="imgs">
           <div className="container-image">
             <img src={user} alt="user" className="profile"/>
           </div>
         </div>
         <div>           
          <h1>login</h1>    
          <br></br>                               
           <div >
             <img  src={email} alt="email" className="emai"/>
              <input type="email" placeholder="email" className="input name"   />
         </div>
            <div className="second-input">
              <img src={pass} alt="pass" className="emai"/>
              <input type="password" placeholder="password" className="input name"/>
            </div>
            <div className="login-button">
           <button className='button' onClick={()=>{navigate('/FluidExample')}}>login</button>
           </div>
           <div className="login-button">
           <button className='button' onClick={()=>{navigate('/Signup')}}>SignUp</button>
           </div>
           <br></br>
             <p > Admin Login:
              <button onClick={()=>{navigate('/Alogin')}} >Click</button> 
            </p> 
         </div>
       </div>
     </div>
    </div>
    </Container>
    </>
  );
}

export default function Signin() {
   const navigate=useNavigate();
  return (
    <>
    <div className="main" style={{backgroundImage:`url(${bgbike})`,backgroundRepeat:"no-repeat",display:"flex",backgroundPosition: 'center',
        backgroundSize: 'cover',height:'100%'}}>
     <div className="sub-main1">
       <div>
         <div className="imgs">
           <div className="container-image">
             <img src={user} alt="user" className="profile"/>
           </div>
         </div>
         <div>           
          <h1>SignUp</h1>   
          <br></br>                              
           <div >
             <img src={email} alt="email" className="emai"/>
              <input type="email" placeholder="email" className="input name"/>
         </div>
            <div className="second-input">
              <img src={name} alt="pass" className="emai"/>
              <input type="text" placeholder="Name" className="input name"/>
            </div>
            <div className="second-input">
              <img src={call} alt="pass" className="emai"/>
              <input type="text" placeholder="Phone-no" className="input name"/>
            </div>
            <div className="second-input">
              <img src={pass} alt="pass" className="emai"/>
              <input type="password" placeholder="password" className="input name"/>
            </div>
           <div className="login-button">
           <button className='button' onClick={()=>{navigate('/')}}>Create-Account</button>
           </div>
            {/* <p className="link">
              <a href="#">Forgot password ?</a> Or<a href="#">Sign Up</a>
            </p> */}
         </div>
       </div>
     </div>
    </div>
    </>
  );
}