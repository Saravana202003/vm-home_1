import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from 'react-router-dom';
function BasicExample() {
  const navigate=useNavigate();
  return (
    <Navbar sticky='top' bg="dark" data-bs-theme="dark" expand="lg" className="bg-body-tertiary" >
      <Container>
        <Navbar.Brand style={{fontFamily:'fantasy'}} >VM-Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav  className="me-auto"></Nav>
          <Nav>
            <Nav.Link   onClick={()=>{navigate('/FluidExample')}}>Home</Nav.Link>
            <NavDropdown  title="Services" id="basic-nav-dropdown">
              <NavDropdown.Item onClick={()=>{navigate('/Car')}}>Car</NavDropdown.Item>
              <NavDropdown.Item onClick={()=>{navigate('/bike')}}>Bike </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link  onClick={()=>{navigate('/reg')}}>Registrations</Nav.Link>
            <Nav.Link  onClick={()=>{navigate('/his')}}>History</Nav.Link>
            </Nav>
          <Nav> <Nav.Link onClick={()=>{navigate('/')}}><button style={{color:'black',backgroundColor:'white',marginRight:'1%'}}>Logout</button></Nav.Link></Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;