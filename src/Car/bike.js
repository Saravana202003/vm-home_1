import Card from 'react-bootstrap/Card';
import BasicExample from '../Comp/Navi.js';
import Sidenav from "../sidenav/sidenav.js";
import CardGroup from 'react-bootstrap/CardGroup';
import c1 from "../Bikeimg/brakesb.jpg";
import c2 from "../Bikeimg/colourb.jpg";
import c3 from "../Bikeimg/engineb.jpg";
import c4 from "../Bikeimg/lightb.jpg";
import c5 from "../Bikeimg/oilb.jpg";
import c6 from "../Bikeimg/tyresb.jpg";
import { useNavigate } from 'react-router-dom';

function Bike() {
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
          <Card.Title style={{marginLeft:'40%',fontFamily:'Brush Script MT, cursive'}}><h2>Brake</h2></Card.Title>
          <Card.Text  style={{fontFamily:' Garamond, serif'}}>
          Inspect and replace worn brake pads for optimal bike safety and performance.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <button onClick={()=>{navigate('/Bcomp1')}}style={{marginLeft:"40%"}}>CLICK</button>
        </Card.Footer>
      </Card>
      <Card>
      <img src={c2} alt='pass' width={'301'} height={'160'}  style={{marginLeft:'13%',marginTop:'5%'}}/>
        <Card.Body>
          <Card.Title style={{marginLeft:'40%',fontFamily:'Brush Script MT, cursive'}}><h2>Color</h2></Card.Title>
          <Card.Text style={{fontFamily:' Garamond, serif'}}>
          Revamp your ride with our expert color service elevate your bike's style and make a statement on the road
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <button onClick={()=>{navigate('/Bcomp2')}}style={{marginLeft:"40%"}}>CLICK</button>
        </Card.Footer>
      </Card>
      <Card>
      <img src={c3} alt='pass' width={'301'} height={'160'}  style={{marginLeft:'13%',marginTop:'5%'}}/>
        <Card.Body>
          <Card.Title style={{marginLeft:'40%',fontFamily:'Brush Script MT, cursive'}}><h2>Engine</h2></Card.Title>
          <Card.Text style={{fontFamily:' Garamond, serif'}}>
          Performing regular engine service on your bike ensures optimal performance and longevity by addressing issues such as oil changes, filter replacements
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <button onClick={()=>{navigate('/Bcomp3')}}style={{marginLeft:"40%"}}>CLICK</button>
        </Card.Footer>
      </Card>
      </CardGroup>
      <CardGroup>
      <Card>
        <img src={c4} alt='pass' width={'301'} height={'160'}  style={{marginLeft:'13%',marginTop:'5%'}}/>
        <Card.Body>
          <Card.Title style={{marginLeft:"40%",fontFamily:'Brush Script MT, cursive'}} ><h2>Light</h2></Card.Title>
          <Card.Text style={{fontFamily:' Garamond, serif'}}>
          the light service bike combines efficiency with a minimalist design, making it perfect for quick and easy rides in busy city environments.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <button onClick={()=>{navigate('/Bcomp4')}} style={{marginLeft:"40%"}}>CLICK</button>
        </Card.Footer>
      </Card>
      <Card>
      <img src={c5} alt='pass' width={'301'} height={'160'}  style={{marginLeft:'13%',marginTop:'5%'}}/>
        <Card.Body>
          <Card.Title style={{marginLeft:"40%",fontFamily:'Brush Script MT, cursive'}}><h2>Oil</h2></Card.Title>
          <Card.Text style={{fontFamily:' Garamond, serif'}}>
          Oil service for bikes, ensuring smooth performance and extended engine life. Trust us to keep your ride running at its best
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <button onClick={()=>{navigate('/Bcomp5')}}style={{marginLeft:"40%"}}>CLICK</button>
        </Card.Footer>
      </Card>
      <Card>
      <img src={c6} alt='pass' width={'301'} height={'160'}  style={{marginLeft:'13%',marginTop:'5%'}}/>
        <Card.Body>
          <Card.Title style={{marginLeft:"40%",fontFamily:'Brush Script MT, cursive'}}><h2>Tyre</h2></Card.Title>
          <Card.Text style={{fontFamily:' Garamond, serif'}}>
          Expert tire services for bikes, ensuring optimal performance and safety on the road
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <button onClick={()=>{navigate('/Bcomp6')}}style={{marginLeft:"40%"}}>CLICK</button>
        </Card.Footer>
      </Card>
      </CardGroup>

    </div>
    </div>
    </>
  );
}

export default Bike;