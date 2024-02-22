import Table from 'react-bootstrap/Table';
import BasicExample from '../Comp/Navi.js';
import Sidenav from "../sidenav/sidenav.js";
import './History.css'
function His() {
  return (
    <>
    <div>
     <BasicExample/>
     <Sidenav />
     <div style={{marginLeft:'18%',marginTop:'3%',marginRight:'1%',backgroundColor:'azure'}}>
    <Table striped bordered hover size="lm">
      <thead  >
        <tr className='tab1' >
          <th style={{color:'white',backgroundColor:'red'}}  >S.N</th>
          <th  style={{color:'white',backgroundColor:'red'}}>Name</th>
          <th style={{color:'white',backgroundColor:'red'}}>reg-company</th>
          <th style={{color:'white',backgroundColor:'red'}}>service</th>
          <th style={{color:'white',backgroundColor:'red'}}>service-type</th>
          <th style={{color:'white',backgroundColor:'red'}}>Time-slot</th>
          <th style={{color:'white',backgroundColor:'red'}}>date</th>
          <th style={{color:'white',backgroundColor:'red'}}>Cost</th>
          <th style={{color:'white',backgroundColor:'red'}}>Status</th>
         
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>1.</th>
          <td>John</td>
          <td>Martin-services</td>
          <td>Bike</td>
          <td>Engine</td>
          <td>6pm</td>
          <td>1/9/2023</td>
          <td>Rs.3000</td>
          <td>Done</td>
        </tr>
        <tr>
          <th>2.</th>
          <td>John</td>
          <td>Martin-services</td>
          <td>Car</td>
          <td>interior</td>
          <td>12pm</td>
          <td>19/7/2023</td>
          <td>Rs.5000</td>
          <td>unavailable</td>
        </tr>
        <tr>
          <th>3.</th>
          <td>John</td>
          <td>loyal-services</td>
          <td>bike</td>
          <td>brake</td>
          <td>5pm</td>
          <td>7/4/2023</td>
          <td>Rs.300</td>
          <td>Done</td>
        </tr>
        <tr>
          <th>4.</th>
          <td>John</td>
          <td>Martin-services</td>
          <td>Car</td>
          <td>carwash</td>
          <td>4pm</td>
          <td>1/2/2023</td>
          <td>Rs.200</td>
          <td>Done</td>
        </tr>
        
      </tbody>
    </Table>
    </div>
    </div>
    </>
  );
}

export default His;