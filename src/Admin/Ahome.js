import ANavi from "./ANavi.js";
import Asidenav from "./Asidenav.js";
import Agraph1 from "./Agraph1.js";
import Achart from "./Achart.js";
export default function Ahome(){
    return(
<>  
<div className="parent">
<ANavi/>
<Asidenav />
<div style={{marginLeft:'15%',marginTop:'3%'}}><Agraph1 /></div>
<div style={{marginLeft:'20%',marginTop:'3%'}}><h3 style={{color:'black', fontFamily:'fantasy'}}>Graph representation</h3></div>
<div style={{marginLeft:'15%',marginTop:'2%'}} ><Achart /></div>


</div>
</>
    );
}                