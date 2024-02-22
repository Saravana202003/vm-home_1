import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';
function ANavi() {
  const navigate=useNavigate();
  return (
    <Navbar sticky='top' bg="dark" data-bs-theme="dark" expand="lg" className="bg-body-tertiary" >
      <Container>
        <Navbar.Brand style={{fontFamily:'fantasy'}} >VM-Home</Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav  className="me-auto">
          </Nav>                    
          <Nav>                
          <Nav.Link  onClick={()=>{navigate('/Ahome')}}>Home</Nav.Link>         
            <Nav.Link  onClick={()=>{navigate('/Acompany')}}>Add-company</Nav.Link>
            <Nav.Link  onClick={()=>{navigate('/Auserd')}}>User-details</Nav.Link>                              
            <Nav.Link  onClick={()=>{navigate('/Acompd')}}>Company-details</Nav.Link>
          </Nav>
          <Nav  >
          <Nav.Link  onClick={()=>{navigate('/Alogin')}}><button style={{color:'black',backgroundColor:'white',marginRight:'1%'}}>Logout</button></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );  
}

export default ANavi;
          