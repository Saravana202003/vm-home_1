   
import Carousel from 'react-bootstrap/Carousel';
import BasicExample from './Navi';
import pass from "../image/carrr1.jpg"; 
import  bgcar from "../image/carrr2.jpg";
import bgbike from "../image/carrr3.jpg";
  import light from '../image/c.jpg'
 import Sidenav from '../sidenav/sidenav';
 import About from '../Comp/About';
function FluidExample() {
  return (
  <>
  <div>
   <BasicExample/>
  <Sidenav/>
  <div style={{backgroundImage:`url(${light})`,display:"fixed", backgroundPosition: 'center',
        backgroundSize: 'cover',height:'100%',width:'100%',marginTop:'0%'}} >
  <div>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <Carousel data-bs-theme='dark' style={{width:'47%',margin:'auto',boxShadow:'4px 4px 4px 4px',marginLeft:'30%', }}>
      <Carousel.Item interval={2000}>
        <img src={pass} alt='pass'/>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
      <img src={bgcar} alt='pass'/>
      </Carousel.Item>  
      <Carousel.Item interval={2000}>
      <img src={bgbike} alt='pass'/>
      </Carousel.Item>
    </Carousel>
    
<div>
<About/>
</div>

</div>
</div>
</div>
    </>
  );
}

export default FluidExample;