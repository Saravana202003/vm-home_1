import React from 'react'
import Table  from 'react-bootstrap/Table';
import '../Car/History.css'
import ANavi from "./ANavi";
import Asidenav from "./Asidenav";
export default function Auserd() {
  return (
    <>
    <div>
    <ANavi />
    <Asidenav />
     <div style={{marginLeft:'18%',marginTop:'3%',marginRight:'1%',backgroundColor:'azure'}}>
    <Table striped bordered hover size="lm">
      <thead  >
        <tr className='tab1' >
          <th style={{color:'white',backgroundColor:'#589eed'}}  >S.N</th>
          <th  style={{color:'white',backgroundColor:'#589eed'}}>Name</th>
          <th style={{color:'white',backgroundColor:'#589eed'}}>phone-no</th>
          <th style={{color:'white',backgroundColor:'#589eed'}}>email</th>
          <th style={{color:'white',backgroundColor:'#589eed'}}>password</th> 

        </tr>
      </thead>
      <tbody>
        <tr>
          <th>1.</th>
          <td>John</td>
          <td>9834536056</td>
          <td>john@gmail.com</td>
          <td>fsdhav2</td>
        </tr>
        <tr>
          <th>2.</th>
          <td>admm</td>
          <td>6347572384</td>
          <td>admm@gmail.com</td>
          <td>768ghg</td>
      
        </tr>
        <tr>
          <th>3.</th>
          <td>Tom</td>
          <td>9342684041</td>
          <td>tom@gmail.com</td>
          <td>99rff4d</td>
    
         
        </tr>
        <tr>
          <th>4.</th>
          <td>carter</td>
          <td>6389452704</td>
          <td>carter@gmail.com</td>
          <td>dh3456h</td>
        </tr>    
      </tbody>
    </Table>
    </div>
    </div>
    </>
  );
}
