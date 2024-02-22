import Card from 'react-bootstrap/Card';
import BasicExample from '../Comp/Navi.js';
import Sidenav from "../sidenav/sidenav.js";
import CardGroup from 'react-bootstrap/CardGroup';
import c1 from "../Carimg/body.jpg";
import c2 from "../Carimg/carwash.jpg";
import c3 from "../Carimg/interior.jpg";
import c4 from "../Carimg/oil.jpg";
import c5 from "../Carimg/tyre.jpg";
import c6 from "../Carimg/engine.jpg";
import { useNavigate } from 'react-router-dom';
function Car() {
  const navigate=useNavigate();
  return (
    <>
    <div>
<BasicExample/>
  <Sidenav/>
    <div style={{marginLeft:'18%',marginTop:'3%',backgroundColor:'black'}}>
    <CardGroup>
      <Card>
        <img src={c1} alt='pass' width={'301'} height={'160'}  style={{marginLeft:'13%',marginTop:'5%'}}/>
        <Card.Body>
          <Card.Title style={{marginLeft:'40%',fontFamily:'Brush Script MT, cursive'}}><h2>Body</h2></Card.Title>
          <Card.Text style={{fontFamily:' Garamond, serif'}}>
          Professional body car service: Restoring and enhancing your vehicle's appearance with precision dent removal, paint correction, and expert detailing.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <button  onClick={()=>{navigate('/Ccomp1')}}style={{marginLeft:"40%"}}>CLICK</button>
        </Card.Footer>
      </Card>
      <Card>
      <img src={c2} alt='pass' width={'301'} height={'160'}  style={{marginLeft:'13%',marginTop:'5%'}}/>
        <Card.Body>
          <Card.Title style={{marginLeft:'40%',fontFamily:' Brush Script MT, cursive'}}><h2>CarWash</h2></Card.Title>
          <Card.Text  style={{fontFamily:' Garamond, serif'}}>
          Professional car wash service, restoring your vehicle's shine with meticulous attention and eco-friendly practices.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <button  onClick={()=>{navigate('/Ccomp2')}} style={{marginLeft:"40%"}}>CLICK</button>
        </Card.Footer>
      </Card>
      <Card>
      <img src={c3} alt='pass' width={'301'} height={'160'}  style={{marginLeft:'13%',marginTop:'5%'}}/>
        <Card.Body>
          <Card.Title style={{marginLeft:'40%',fontFamily:'Brush Script MT, cursive'}}><h2>Interior</h2></Card.Title>
          <Card.Text  style={{fontFamily:' Garamond, serif'}}>
          Revitalize your vehicle's interior with our expert car interior services, ensuring a comfortable and stylish driving experience
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <button  onClick={()=>{navigate('/Ccomp3')}} style={{marginLeft:"40%"}}>CLICK</button>
        </Card.Footer>
      </Card>
      </CardGroup>
      <CardGroup>
      <Card>
        <img src={c4} alt='pass' width={'301'} height={'160'}  style={{marginLeft:'13%',marginTop:'5%'}}/>
        <Card.Body>
          <Card.Title style={{marginLeft:"40%",fontFamily:'Brush Script MT, cursive'}} ><h2>OIL</h2></Card.Title>
          <Card.Text  style={{fontFamily:' Garamond, serif'}}>
          Oil change services ensure your car's engine runs smoothly by replacing old oil with fresh lubricant, promoting optimal performance and longevity
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <button  onClick={()=>{navigate('/Ccomp4')}} style={{marginLeft:"40%"}}>CLICK</button>
        </Card.Footer>
      </Card>
      <Card>
      <img src={c5} alt='pass' width={'301'} height={'160'} style={{marginLeft:'13%',marginTop:'5%'}} />
        <Card.Body>
          <Card.Title style={{marginLeft:"40%",fontFamily:'Brush Script MT, cursive'}}><h2>Tyre</h2></Card.Title>
          <Card.Text  style={{fontFamily:' Garamond, serif'}}>
          TyreService offers efficient and reliable car tire replacement and repair, ensuring a smooth and safe driving experience for all customers.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <button   onClick={()=>{navigate('/Ccomp5')}}style={{marginLeft:"40%"}}>CLICK</button>
        </Card.Footer>
      </Card>
      <Card>
      <img src={c6} alt='pass' width={'301'} height={'160'} style={{marginLeft:'13%',marginTop:'5%'}}/>
        <Card.Body>
          <Card.Title style={{marginLeft:"40%",fontFamily:'Brush Script MT, cursive'}}><h2>Engine</h2></Card.Title>
          <Card.Text  style={{fontFamily:' Garamond, serif'}}>
          Expert engine diagnostics and repair for optimal car performance and reliability. Trust our skilled technicians for efficient and thorough engine services
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <button  onClick={()=>{navigate('/Ccomp6')}}style={{marginLeft:"40%"}}>CLICK</button>
        </Card.Footer>
      </Card>
      </CardGroup>

    </div>
    </div>
    </>
  );
}

export default Car;