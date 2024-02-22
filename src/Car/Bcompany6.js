import Card from 'react-bootstrap/Card';
import BasicExample from '../Comp/Navi.js';
import Sidenav from "../sidenav/sidenav.js";
import CardGroup from 'react-bootstrap/CardGroup';
import c1 from "../Companypic/bs1.JPEG";
import c2 from "../Companypic/bs2.JPEG";
import c3 from "../Companypic/bs3.JPEG";
import c4 from "../Companypic/bs4.JPEG";
import c5 from "../Companypic/bs5.JPEG";
import c6 from "../Companypic/bs6.JPEG";
import { useNavigate } from 'react-router-dom';

function Bcomp6() {
  const navigate=useNavigate();
  return (
    <>
    <div >
    <BasicExample/>
  <Sidenav/>
    <div style={{marginLeft:'18%',marginTop:'3%',backgroundColor:'lightblue'}}>
    <CardGroup>
      <Card>
        <img src={c1} alt='pass' width={'301'} height={'160'}  style={{marginLeft:'13%',marginTop:'5%'}}/>
        <Card.Body>
          <Card.Title style={{textAlign:'center',fontStyle:'italic'}}><h4>Best Bike Service Point</h4></Card.Title>
          <Card.Text  style={{fontFamily:' Garamond, serif'}}>
          <br></br>
           <b>RS:  </b>350
           <br></br>
          <b>ADDRESS:  </b> Venkata Krishna Rd, Opposite Kennedy Theatre, Road, R.S. Puram, Coimbatore, Tamil Nadu 641002
          <b>PHONE:  </b>098941 89269
          <br></br>
          <b>RATING:  </b>4.2
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <button onClick={()=>{navigate('/regi')}}style={{marginLeft:"40%"}}>REGISTER</button>
        </Card.Footer>
      </Card>
      <Card>
      <img src={c2} alt='pass' width={'301'} height={'160'}  style={{marginLeft:'13%',marginTop:'5%'}}/>
      <Card.Body>
          <Card.Title style={{textAlign:'center',fontStyle:'italic'}}><h4>AADIDEV BIKE</h4></Card.Title>
          <Card.Text  style={{fontFamily:' Garamond, serif'}}>
          <br></br>
           <b>RS:  </b>360
           <br></br>
          <b>ADDRESS:  </b>  C1 Aeg Building, VK Rd, Peelamedu, Coimbatore, Tamil Nadu 641004
          <br></br>
          <b>PHONE:  </b>090036 13030
          <br></br>
          <b>RATING:  </b>4.6
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <button onClick={()=>{navigate('/regi')}}style={{marginLeft:"40%"}}>REGISTER</button>
        </Card.Footer>
      </Card>
      <Card>
      <img src={c3} alt='pass' width={'301'} height={'160'}  style={{marginLeft:'13%',marginTop:'5%'}}/>
      <Card.Body>
          <Card.Title style={{textAlign:'center',fontStyle:'italic'}}><h4>Wings bike zone</h4></Card.Title>
          <Card.Text  style={{fontFamily:' Garamond, serif'}}>
          <br></br>
           <b>RS:  </b>320
           <br></br>
          <b>ADDRESS:  </b>   Nava India Rd, Peelamedu, Sri Ramakrishna Dental College and Hospital, Tamil Nadu 641004
          <br></br>
          <b>PHONE:  </b> 077086 00094
          <br></br>
          <b>RATING:  </b>3.6
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <button onClick={()=>{navigate('/regi')}}style={{marginLeft:"40%"}}>REGISTER</button>
        </Card.Footer>
      </Card>
      </CardGroup>
      <CardGroup>
      <Card>
        <img src={c4} alt='pass' width={'301'} height={'160'}  style={{marginLeft:'13%',marginTop:'5%'}}/>
        <Card.Body>
          <Card.Title style={{textAlign:'center',fontStyle:'italic'}}><h4>Bikes Automobiles</h4></Card.Title>
          <Card.Text  style={{fontFamily:' Garamond, serif'}}>
          <br></br>
           <b>RS:  </b>300
           <br></br>
          <b>ADDRESS:  </b>  2X3R+7PH, Puliakulam, Coimbatore, Tamil Nadu 641045
          <br></br>
          <b>PHONE:  </b> 097888 97921
          <br></br>
          <b>RATING:  </b>5.0
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <button onClick={()=>{navigate('/regi')}}style={{marginLeft:"40%"}}>REGISTER</button>
        </Card.Footer>
      </Card>
      <Card>
      <img src={c5} alt='pass' width={'301'} height={'160'}  style={{marginLeft:'13%',marginTop:'5%'}}/>
      <Card.Body>
          <Card.Title style={{textAlign:'center',fontStyle:'italic'}}><h4>R3 Bike care</h4></Card.Title>
          <Card.Text  style={{fontFamily:' Garamond, serif'}}>
          <br></br>
           <b>RS:  </b>335
           <br></br>
          <b>ADDRESS:  </b>   89 D, Thiruvalluvar Street, Ramakrishnapuram, Saravanampatti, Coimbatore, Tamil Nadu 641035
          <br></br>
          <b>PHONE:  </b>  082201 32480
          <br></br>
          <b>RATING:  </b>4.7
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <button onClick={()=>{navigate('/regi')}}style={{marginLeft:"40%"}}>REGISTER</button>
        </Card.Footer>
      </Card>
      <Card>
      <img src={c6} alt='pass' width={'301'} height={'160'}  style={{marginLeft:'13%',marginTop:'5%'}}/>
      <Card.Body>
          <Card.Title style={{textAlign:'center',fontStyle:'italic'}}><h4>SB Bike Carriage Sales&Service</h4></Card.Title>
          <Card.Text  style={{fontFamily:' Garamond, serif'}}>
          <br></br>
           <b>RS:  </b>340
           <br></br>
          <b>ADDRESS:  </b>   No.943-B, Vincent Rd, Fort, Coimbatore, Tamil Nadu 641001
          <br></br>
          <b>PHONE:  </b>  099942 80041
          <br></br>
          <b>RATING:  </b>4.1
          </Card.Text> 
        </Card.Body>
        <Card.Footer>
          <button onClick={()=>{navigate('/regi')}} style={{marginLeft:"40%"}}>REGISTER</button>
        </Card.Footer>
      </Card>
      </CardGroup>

    </div>
    </div>
    </>
  );
}  

export default Bcomp6;