// import logo from './logo.svg';
 import './App.css';
import {Route,Routes} from "react-router-dom";
import {LoginUi} from './loginUi/loginUi.js';
 import Signin from './loginUi/loginUi.js';
 import Regi from './loginUi/registration.js';
 import Thank from './loginUi/thank.js';
import BasicExample from "./Comp/Navi";
import FluidExample from "./Comp/Home.js";
 import Sidenav from "./sidenav/sidenav.js";
 import Car from './Car/Car.js';
 import Bike from './Car/bike.js'
 import Reg from './Car/registration.js';
import His from './Car/History.js';
import Comp1 from './Car/Ccompany1.js'
import Comp2 from './Car/Ccompany2.js'
import Comp3 from './Car/Ccompany3.js'
import Comp4 from './Car/Ccompany4.js'
import Comp5 from './Car/Ccompany5.js'
import Comp6 from './Car/Ccompany6.js'
import Bcomp1 from './Car/Bcompany1.js'
import Bcomp2 from './Car/Bcompany2.js'
import Bcomp3 from './Car/Bcompany3.js'
import Bcomp4 from './Car/Bcompany4.js'
import Bcomp5 from './Car/Bcompany5.js'
import Bcomp6 from './Car/Bcompany6.js'
import Ahome from './Admin/Ahome.js';
import ANavi from './Admin/ANavi.js';
import Alogin from './Admin/Alogin.js';
import Asidenav from './Admin/Asidenav.js';
import Acompany from './Admin/Acompany.js';
import Athank from './Admin/Athank.js';
import Acompd from './Admin/Acompd.js';
import Auserd from './Admin/Auserd.js';

function App() {
  return (
    <Routes>
    <Route path="/Home" element={<BasicExample />}></Route>
    <Route path="/" element={<LoginUi />}></Route>
    <Route path="/Signup" element={<Signin />}></Route>
    <Route path="/FluidExample" element={<FluidExample />}></Route>
    <Route path="/sidenav" element={<Sidenav />}></Route>
    <Route path="/car" element={<Car />}></Route>
    <Route path="/bike" element={<Bike />}></Route>
    <Route path="/reg" element={<Reg />}></Route>
    <Route path="/regi" element={<Regi />}></Route>
    <Route path="/thank" element={<Thank />}></Route>
    <Route path="/his" element={<His />}></Route>
    <Route path="/Ccomp1" element={<Comp1 />}></Route>
    <Route path="/Ccomp2" element={<Comp2 />}></Route>
    <Route path="/Ccomp3" element={<Comp3 />}></Route>
    <Route path="/Ccomp4" element={<Comp4 />}></Route>
    <Route path="/Ccomp5" element={<Comp5 />}></Route>
    <Route path="/Ccomp6" element={<Comp6 />}></Route>
    <Route path="/Bcomp1" element={<Bcomp1 />}></Route>
    <Route path="/Bcomp2" element={<Bcomp2/>}></Route>
    <Route path="/Bcomp3" element={<Bcomp3 />}></Route>
    <Route path="/Bcomp4" element={<Bcomp4 />}></Route>
    <Route path="/Bcomp5" element={<Bcomp5 />}></Route>
    <Route path="/Bcomp6" element={<Bcomp6 />}></Route>
    <Route path="/Ahome" element={<Ahome />}></Route>
    <Route path="/ANavi" element={<ANavi />}></Route>
    <Route path="/Alogin" element={<Alogin />}></Route>
    <Route path="/Asidenav" element={<Asidenav />}></Route>
    <Route path="/Acompany" element={<Acompany />}></Route>
    <Route path="/Athank" element={<Athank />}></Route>
    <Route path="/Auserd" element={<Auserd />}></Route>
    <Route path="/Acompd" element={<Acompd />}></Route>
   </Routes>  
  //  <Sidenav/>
  );
}

export default App;
