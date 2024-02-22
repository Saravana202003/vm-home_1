import '../loginUi/loginUi.css';
import user from "../image/user.png";
import email from "../image/email.png";
import pass from "../image/pass.png";  
// import car2 from "../image/car2.JPEG";
import  bgcar from "../image/admin.JPEG";
import Container from 'react-bootstrap/Container';
import { useNavigate } from 'react-router-dom';

export default function Alogin() {
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
            <br></br>         
          <h1>Admin Login</h1>    
          <br></br>                               
           <div >
             <img  src={email} alt="email" className="emai"/>
              <input type="email" placeholder="Admin Email" className="input name"   />
         </div>
            <div className="second-input">
              <img src={pass} alt="pass" className="emai"/>
              <input type="password" placeholder="password" className="input name"/>
            </div>
            <div className="login-button">
           <button className='button' onClick={()=>{navigate('/Ahome')}}>login</button>
           </div>
           <br></br>
             <p > User Login Page: 
             <button  onClick={()=>{navigate('/')}}>Click</button>
            </p> 
         </div>
       </div>
     </div>
    </div>
    </Container>
    </>
  );
}