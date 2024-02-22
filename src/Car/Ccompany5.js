import Card from 'react-bootstrap/Card';
import BasicExample from '../Comp/Navi.js';
import Sidenav from "../sidenav/sidenav.js";
import CardGroup from 'react-bootstrap/CardGroup';
import c1 from "../Companypic/cs1.JPEG";
import c2 from "../Companypic/cs2.JPEG";
import c3 from "../Companypic/cs3.JPEG";
import c4 from "../Companypic/cs4.JPEG";
import c5 from "../Companypic/cs5.JPEG";
import c6 from "../Companypic/cs6.JPEG";
import { useNavigate } from 'react-router-dom';

function Comp5() {
  const navigate=useNavigate();
  return (
    <>
    <div >
    <BasicExample/>
  <Sidenav/>
    <div style={{marginLeft:'18%',marginTop:'3%',backgroundColor:'lightblue'}}>
    <CardGroup>
      <Card>
        <img src={c6} alt='pass' width={'301'} height={'160'}  style={{marginLeft:'13%',marginTop:'5%'}}/>
        <Card.Body>
          <Card.Title style={{textAlign:'center',fontStyle:'italic'}}><h4>SURYA MOTORS</h4></Card.Title>
          <Card.Text  style={{fontFamily:' Garamond, serif'}}>
          <br></br>
           <b>RS:  </b>1030
           <br></br>
          <b>ADDRESS:  </b>  20, GRG Layout (Opp to St.Francis Convent), Trichy Road, Coimbatore, Tamil Nadu 641018
          <br></br>
          <b>PHONE:  </b>  094437 75757
          <br></br>
          <b>RATING:  </b>4.1
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <button onClick={()=>{navigate('/regi')}}style={{marginLeft:"40%"}}>REGISTER</button>
        </Card.Footer>
      </Card>
      <Card>
      <img src={c2} alt='pass' width={'301'} height={'160'}  style={{marginLeft:'13%',marginTop:'5%'}}/>
      <Card.Body>
          <Card.Title style={{textAlign:'center',fontStyle:'italic'}}><h4>KR Auto Care</h4></Card.Title>
          <Card.Text  style={{fontFamily:' Garamond, serif'}}>
          <br></br>
           <b>RS:  </b>980
           <br></br>
          <b>ADDRESS:  </b> G K R Nagar, Civil Aerodrome Post, Chinniyampalayam, Coimbatore, Tamil Nadu 641062
          <br></br>
          <b>PHONE:  </b>095244 19999
          <br></br>
          <b>RATING:  </b>4.5
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <button onClick={()=>{navigate('/regi')}}style={{marginLeft:"40%"}}>REGISTER</button>
        </Card.Footer>
      </Card>
      <Card>
      <img src={c3} alt='pass' width={'301'} height={'160'}  style={{marginLeft:'13%',marginTop:'5%'}}/>
      <Card.Body>
          <Card.Title style={{textAlign:'center',fontStyle:'italic'}}><h4>Sri Sakthi Car Care</h4></Card.Title>
          <Card.Text  style={{fontFamily:' Garamond, serif'}}>
          <br></br>
           <b>RS:  </b>990
           <br></br>
          <b>ADDRESS:  </b>  Kovai Mahalingapuram, Podanur, Tamil Nadu 641023
          <br></br>
          <b>PHONE:  </b> 099654 91466
          <br></br>
          <b>RATING:  </b>4.8
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <button onClick={()=>{navigate('/regi')}} style={{marginLeft:"40%"}}>REGISTER</button>
        </Card.Footer>
      </Card>
      </CardGroup>
      <CardGroup>
      <Card>
        <img src={c4} alt='pass' width={'301'} height={'160'}  style={{marginLeft:'13%',marginTop:'5%'}}/>
        <Card.Body>
          <Card.Title style={{textAlign:'center',fontStyle:'italic'}}><h4>Asia Automobile</h4></Card.Title>
          <Card.Text  style={{fontFamily:' Garamond, serif'}}>
          <br></br>
           <b>RS:  </b>900
           <br></br>
          <b>ADDRESS:  </b>   8, 160Thiruvasagam Street, opposite prozone mall, Saravanampatti, Coimbatore, Tamil Nadu 641035
          <br></br>
          <b>PHONE:  </b> 098433 16661
          <br></br>
          <b>RATING:  </b>4.8
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <button onClick={()=>{navigate('/regi')}}style={{marginLeft:"40%"}}>REGISTER</button>
        </Card.Footer>
      </Card>
      <Card>
      <img src={c5} alt='pass' width={'301'} height={'160'}  style={{marginLeft:'13%',marginTop:'5%'}}/>
      <Card.Body>
          <Card.Title style={{textAlign:'center',fontStyle:'italic'}}><h4>KOVAI MOTOR</h4></Card.Title>
          <Card.Text  style={{fontFamily:' Garamond, serif'}}>
          <br></br>
           <b>RS:  </b>950
           <br></br>
          <b>ADDRESS:  </b>   Vasantham Nagar, Saravanampatti, Coimbatore, Tamil Nadu 641035
          <br></br>
          <b>PHONE:  </b> 097877 70256
          <br></br>
          <b>RATING:  </b>4.6
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <button onClick={()=>{navigate('/regi')}}style={{marginLeft:"40%"}}>REGISTER</button>
        </Card.Footer>
      </Card>
      <Card>
      <img src={c1} alt='pass' width={'301'} height={'160'}  style={{marginLeft:'13%',marginTop:'5%'}}/>
      <Card.Body>
          <Card.Title style={{textAlign:'center',fontStyle:'italic'}}><h4>Prime Car Service</h4></Card.Title>
          <Card.Text  style={{fontFamily:' Garamond, serif'}}>
          <br></br>
           <b>RS:  </b>1000
           <br></br>
          <b>ADDRESS:  </b>Bharath petrol bunk, 128 C, SIHS Colony Rd, opposite Civil aerodrome post, SIHS Colony, Coimbatore, Neelikonampalayam, Tamil Nadu 641014
          <br></br>
          <b>PHONE:  </b>084899 11881
          <br></br>
          <b>RATING:  </b>4.7
          </Card.Text>
        </Card.Body>

        <Card.Footer>
          <button onClick={()=>{navigate('/regi')}}style={{marginLeft:"40%"}}>REGISTER</button>
        </Card.Footer>
      </Card>
      </CardGroup>

    </div>
    </div>
    </>
  );
}  

export default Comp5;