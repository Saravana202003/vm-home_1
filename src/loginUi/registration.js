import './registration.css'
import user from "../image/rz.png";
import pass from "../image/pass.png";  
// import car2 from "../image/car2.JPEG";
import { useNavigate } from 'react-router-dom';
import BasicExample from '../Comp/Navi.js';
import bgbike from "../image/l.JPEG";
import Sidenav from "../sidenav/sidenav.js";
export default function Regi() {
    const navigate=useNavigate();
   return (
     <>
     <div>
     <BasicExample/>
     <Sidenav />
     <div className="main" style={{backgroundImage:`url(${bgbike})`,backgroundRepeat:"no-repeat",display:"flex",backgroundPosition: 'center',
        backgroundSize: 'cover',height:'100%'}}>
      <div className="main1" style={{height:'870px'}}>
        <div>
          <div className="imgs">
            <div className="container-image">
              <img src={user} alt="user" className="profile"/>
            </div>
          </div>
          <div>           
           <h1>Register</h1>                                 
             <div className="second-input">
               <img src={pass} alt="pass" className="email"/>
               <input type="text" placeholder="Name" className="input name"/>
             </div>
             <div className="second-input">
               <img src={user} alt="pass" className="email"/>
               <input type="text" placeholder="Phone-no" className="input name"/>
             </div>
             <div className="second-input">
               <img src={user} alt="pass" className="email"/>
               <input type="text" placeholder="Address" className="input name"/>
             </div>
             <div className="second-input">
               <img src={user} alt="pass" className="email"/>
               <input type="text" placeholder="Date" className="input name"/>
             </div>
             <div className="second-input">
               <img src={user} alt="pass" className="email"/>
               <input type="text" placeholder="vehicle type" className="input name"/>
             </div>
             <div className="second-input">
               <img src={user} alt="pass" className="email"/>
               <input type="text" placeholder="vehicle model" className="input name"/>
             </div>
             <div className="second-input">
               <img src={user} alt="pass" className="email"/>
               <input type="text" placeholder="timeslot" className="input name"/>
             </div>
             <div className="second-input">
               <img src={user} alt="pass" className="email"/>
               <input type="text" placeholder="type of service" className="input name"/>
             </div>
            <div className="login-button">
            <button className='button' onClick={()=>{navigate('/thank')}}>Click</button>
            </div>
             {/* <p className="link">
               <a href="#">Forgot password ?</a> Or<a href="#">Sign Up</a>
             </p> */}
          </div>
        </div>
      </div>
     </div>
     </div>
     </>
   );
 }