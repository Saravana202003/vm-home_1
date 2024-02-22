import React from 'react'
import ANavi from "./ANavi";
import Asidenav from "./Asidenav";
import thank from '../image/Athank.jpeg'
export default function Athank() {
  return (
    <>
        <ANavi />
        <Asidenav />
        <div>
           <div  
        style={{backgroundImage:`url(${thank})`,backgroundRepeat:"no-repeat",display:"flex",backgroundPosition: 'center',
           backgroundSize: 'cover',height:'50rem'}}>
        </div>
        </div>
        
    </>
  );
}
