import bgbike from "../image/t1.JPEG";
import Sidenav from "../sidenav/sidenav.js";
import BasicExample from '../Comp/Navi.js';
export default  function Thank (){
    return (
        <>
        <div >
        <BasicExample/>
        <Sidenav />
        <div  
        style={{backgroundImage:`url(${bgbike})`,backgroundRepeat:"no-repeat",display:"flex",backgroundPosition: 'center',
           backgroundSize: 'cover',height:'50rem'}}>
        </div>
        </div>
        </>
    );
}