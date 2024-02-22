import Table from 'react-bootstrap/Table';
import BasicExample from '../Comp/Navi.js';
import Sidenav from "../sidenav/sidenav.js";
import './History.css'
function Reg() {
  return (
    <>
    <div>
     <BasicExample/>
     <Sidenav />
     <div style={{marginLeft:'18%',marginTop:'3%',backgroundColor:'azure',marginRight:'1%'}}>
    <Table striped bordered hover size="sm">
      <thead>
        <tr className='tab1'>
          <th  style={{color:'white',backgroundColor:'red'}}>S.N</th>
          <th  style={{color:'white',backgroundColor:'red'}}>Name</th>
          <th  style={{color:'white',backgroundColor:'red'}}>reg-company</th>
          <th  style={{color:'white',backgroundColor:'red'}}>service</th>
          <th  style={{color:'white',backgroundColor:'red'}}>service-type</th>
          <th  style={{color:'white',backgroundColor:'red'}}>Time-slot</th>
          <th  style={{color:'white',backgroundColor:'red'}}>date</th>
          <th  style={{color:'white',backgroundColor:'red'}}>Cost</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>1.</th>
          <td>John</td>
          <td>Martin-services</td>
          <td>Car</td>
          <td>Engine</td>
          <td>4pm</td>
          <td>12/12/2023</td>
          <td>Rs.2050</td>
        </tr>
        
      </tbody>
    </Table>
    </div>
    </div>
    </>
  );
}

export default Reg;