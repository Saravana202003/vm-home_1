import React from 'react'
import Table from 'react-bootstrap/Table';
import '../Car/History.css'
import ANavi from "./ANavi";
import Asidenav from "./Asidenav";
export default function Acompd() {
  return (
    <>
    <div>
    <ANavi />
    <Asidenav />
     <div style={{marginLeft:'18%',marginTop:'3%',marginRight:'1%'}}>
    <Table striped bordered hover size="lm">
      <thead  >
        <tr className='tab1' >
        <th style={{color:'white',backgroundColor:'#589eed'}}  >S.N</th>
          <th style={{color:'white',backgroundColor:'#589eed'}}  >Company-Name</th>
          <th  style={{color:'white',backgroundColor:'#589eed'}}>Phone-no</th>
          <th rowSpan={2} style={{color:'white',backgroundColor:'#589eed'}}>address</th>
          <th style={{color:'white',backgroundColor:'#589eed'}}>company mail</th>
          <th style={{color:'white',backgroundColor:'#589eed'}}>vehicle-types</th>
          <th style={{color:'white',backgroundColor:'#589eed'}}>services</th>
          <th style={{color:'white',backgroundColor:'#589eed'}}>rating</th>
        </tr>
      </thead>
      <tbody>                   
        <tr>
          <th>1.</th>
          <td>Prime Car Service</td>
          <td> 084899 11881</td>
          <td > Bharath petrol bunk, 128 C, SIHS Colony Rd, opposite Civil aerodrome post, SIHS Colony, Coimbatore, Neelikonampalayam, Tamil Nadu 641014</td>       
          <td>primecarservice@gmail.com</td>
          <td>Car</td>
          <td>All</td>
          <td>4.7</td>
           
        </tr>
        <tr>
        <th>2.</th>
          <td>KR Auto Care</td>
          <td>095244 19999</td>
          <td > G K R Nagar, Civil Aerodrome Post, Chinniyampalayam, Coimbatore, Tamil Nadu 641062</td>       
          <td>krautocare@gmail.com</td>
          <td>Car</td>
          <td>All</td>
          <td>4.5</td>
        
        </tr>
        <tr>
        <th>3.</th>
          <td>Sri Sakthi Car Care</td>
          <td> 099654 91466</td>
          <td >Kovai Mahalingapuram, Podanur, Tamil Nadu 641023</td>       
          <td>srisakthicarcare@gmail.com</td>
          <td>Car</td>
          <td>All</td>
          <td>4.8</td>
        
        </tr>
        <tr>
        <th>4.</th>
          <td>Asia Automobile</td>
          <td> 084899 11881</td>
          <td >8, 160Thiruvasagam Street, opposite prozone mall, Saravanampatti, Coimbatore, Tamil Nadu 641035</td>       
          <td>asiaautomobile@gmail.com</td>
          <td>Car</td>
          <td>All</td>
          <td>4.8</td>
        </tr>
        <tr>
        <th>5.</th>
          <td>KOVAI MOTOR</td>
          <td> 084899 11881</td>
          <td >Vasantham Nagar, Saravanampatti, Coimbatore, Tamil Nadu 641035</td>       
          <td>kovaimotor@gmail.com</td>
          <td>Car</td>
          <td>All</td>
          <td>4.6</td>
        
        </tr>
        <tr>
        <th>6.</th>
          <td>SURYA MOTORS</td>
          <td>  094437 75757</td>
          <td >20, GRG Layout (Opp to St.Francis Convent), Trichy Road, Coimbatore, Tamil Nadu 641018</td>       
          <td>suryamotors@gmail.com</td>
          <td>Car</td>
          <td>All</td>
          <td>4.1</td>
        
        </tr>
        <tr>
        <th>7.</th>
          <td>Best Bike Service Point</td>
          <td> 098941 89269</td>
          <td >Venkata Krishna Rd, Opposite Kennedy Theatre, Road, R.S. Puram, Coimbatore, Tamil Nadu</td>       
          <td>bestbikeservicepoint@gmail.com</td>
          <td>Bike</td>
          <td>All</td>
          <td>4.2</td>
        
        </tr>
        <tr>
        <th>8.</th>
          <td>AADIDEV BIKE</td>
          <td>  090036 13030</td>
          <td > C1 Aeg Building, VK Rd, Peelamedu, Coimbatore, Tamil Nadu 641004</td>       
          <td>aadidevbike@gmail.com</td>
          <td>Bike</td>
          <td>All</td>
          <td>4.6</td>
        
        </tr>
        <tr>
        <th>9.</th>
          <td>Wings bike zone</td>
          <td> 077086 00094</td>
          <td >  Nava India Rd, Peelamedu, Sri Ramakrishna Dental College and Hospital, Tamil Nadu 641004</td>       
          <td>wingsbikezone@gmail.com</td>
          <td>Bike</td>
          <td>All</td>
          <td>3.6</td>
        
        </tr>
         <tr>
        <th>10.</th>
          <td>Bikes Automobiles</td>
          <td>097888 97921 </td>
          <td >2X3R+7PH, Puliakulam, Coimbatore, Tamil Nadu 641045</td>       
          <td>bikesautomobiles@gmail.com</td>
          <td>Bike</td>
          <td>All</td>
          <td>5.0</td>
        
        </tr>
        <tr>
        <th>11.</th>
          <td>R3 Bike care</td>
          <td> 082201 32480</td>
          <td >  89 D, Thiruvalluvar Street, Ramakrishnapuram, Saravanampatti, Coimbatore, Tamil Nadu 641035</td>       
          <td>r3bikecare@gmail.com</td>
          <td>Bike</td>
          <td>All</td>
          <td>4.7</td>
        
        </tr>
        <tr>
        <th>12.</th>
          <td>SB Bike Carriage Sales&Service</td>
          <td>099942 80041</td>
          <td > No.943-B, Vincent Rd, Fort, Coimbatore, Tamil Nadu</td>       
          <td>sbbikecarriagesalessevice@gmail.com</td>
          <td>Bike</td>
          <td>All</td>
          <td>4.1</td>
        
        </tr>
      </tbody>
    </Table>
    </div>
    </div>
    </>
  );
}
