import ANavi from "./ANavi";
import Asidenav from "./Asidenav";
import './Acompany.css';
import user from "../image/comp.png";
import pass from "../image/pass.png"; 
import Acomp from '../Aimg/Accomp.JPEG';
import { useNavigate } from "react-router-dom";
export default function Acompany() {
  const navigate=useNavigate();
  return (
    <>
    <div>
    <ANavi />
    <Asidenav />
    <div className="main" style={{backgroundImage:`url(${Acomp})`,backgroundRepeat:"no-repeat",display:"flex",backgroundPosition: 'center',
        backgroundSize: 'cover',height:'100%',width:'100%'}}>
      <div className="main1" style={{height:'1600px'}}>
        <div>
          <div className="imgs">
            <div className="container-image">
              <img src={user} alt="user" className="profile"/>  
            </div>
          </div>
          <div style={{marginTop:'3%'}}>           
           <h1>Company</h1>                               
             <div className="second-input">
            
               <img src={pass} alt="pass" className="email"/> 
               <input  type="text" placeholder="Company-Name" className="input name"/>
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
               <input type="text" placeholder="company mail" className="input name"/>
             </div>   
             <div className="maintable">
             <div className="second-input">
             <table  className="tab">
             <div className="second-input">
               < p className="hig">Vehicle-Types </p>
               <div className="alignment">
              <input type='radio' value='car' id='car'/>
              <label className="hig1" for='car'> Cars</label>
              </div>
              <div className="alignment">
              <input type='radio' value='bike'  id='bike'/>
              <label className="hig1" for='bike'> Bike</label>                  
              </div>
              <div className="alignment">
              <input type='radio' value='both'   id='both'/>
              <label className="hig1" for='both'> Both</label>
              </div>
             </div>
             </table>
             </div>
             </div>

             <div className="maintable">
             <div className="second-input">
             <table  className="tab">
             <div className="second-input">
               < p className="hig">Car-services </p>
               <div className="alignment">
              <input type='radio' value=' Body' id='Body'/>
              <label className="hig1" for=' Body'> Body</label>
              </div>
              <div className="alignment">
              <input type='radio' value='Carwash'  id='Carwash'/>
              <label className="hig1" for='Carwash'>Carwash</label>
              </div>
              <div className="alignment">
              <input type='radio' value='Interior'   id='Interior'/>
              <label className="hig1" for='Interior'> Interior</label>
              </div>
              <div className="alignment">
              <input type='radio' value='Oil'   id='Oil'/>
              <label className="hig1" for='Oil'>Oil</label>
              </div>
              <div className="alignment">
              <input type='radio' value='tyre'   id='tyre'/>
              <label className="hig1" for='tyre'>tyre</label>
              </div>
              <div className="alignment">
              <input type='radio' value='Engine'   id='Engine'/>
              <label className="hig1" for='Engine'> Engine</label>
              </div>
              <div className="alignment">
              <input type='radio' value='All'   id='All'/>
              <label className="hig1" for='All'> All</label>
              </div>
             </div>
             </table>
             </div>
             </div>

             <div className="maintable">
             <div className="second-input">
             <table  className="tab">
             <div className="second-input">
               < p className="hig">Bike-services </p>
               <div className="alignment">
              <input type='radio' value=' Brake' id='Brake'/>
              <label className="hig1" for=' Brake'> Brake</label>
              </div>
              <div className="alignment">
              <input type='radio' value='Color'  id='Color'/>
              <label className="hig1" for='Color'>Color</label>
              </div>
              <div className="alignment">
              <input type='radio' value='Enginer'   id='Engine'/>
              <label className="hig1" for='Enginer'> Engine</label>
              </div>
              <div className="alignment">
              <input type='radio' value='Light'   id='Light'/>
              <label className="hig1" for='Light'>Light</label>
              </div>
              <div className="alignment">
              <input type='radio' value='Oil'   id='Oil'/>
              <label className="hig1" for='Oil'>Oil</label>
              </div>
              <div className="alignment">
              <input type='radio' value='Tyre'   id='Tyre'/>
              <label className="hig1" for='Tyre'>Tyre</label>
              </div>
              <div className="alignment">
              <input type='radio' value='All1'   id='All1'/>
              <label className="hig1" for='All1'> All</label>
              </div>
             </div>
             </table>
             </div>
             </div>

             <div className="maintable">
             <div className="second-input">
             <div className="second-input">
               < p className="hig input" style={{paddingTop:'8px'}}>Company-Photo 
               <input style={{paddingTop:'10px',paddingLeft:'30px'}} type="file" className="input"/></p>
               </div>
               </div>
               </div>
             <br></br>
             <br></br>
               <div className="login-button">
            <button className='button'  onClick={()=>{navigate('/Athank')}} >Submit</button>
            </div>

          </div>
        </div>
      </div>
     </div>
    </div>
    </>
  )
}
