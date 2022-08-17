import React from 'react';
// import './App.css';
// import './product.css';
// import logo from './images/logo.png';
// import {Routes, Route, useNavigate} from 'react-router-dom';
// import Forgetcaptcha from './Components/Forgetcaptcha';
// import Forgetpassword from './Components/Forgetpassword';
// import Forgetotp  from './Components/Forgetotp';
// import Productadd from './Productadd';
// import Productedit from './Productedit';
// import Productview from './Productview';
// import Demo from './Demo';
// import { Modal } from 'react-bootstrap';
// import Users from './Users';
// import Roles from './Roles';
// import Salescomn from './Salescomn';
import Useradd from './Useradd';
// import Footer from './Footer';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import ListComponent from './ListComponent'
// import CustomizedTables from './Muitable';
//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import 'jquery/dist/jquery.min.js';
function App() {
 
  return (
    <div>
        {/* <Routes>
          <Route path="/forgetcaptcha" element={<Forgetcaptcha />} />
          <Route path="/forgetpassword" element={<Forgetpassword />} />
          <Route path="/forgetotp" element={<Forgetotp />} />
          <Route path="/" element={<Home />} />
          
        </Routes>  */}
        {/* <Productadd /> */}
        {/* <Productedit /> */}
        {/* <Productview /> */}
        {/* <Users /> */}
        {/* <Roles /> */}
        {/* <Salescomn /> */}
        <Useradd />



        {/* <Demo /> */}
        
        {/* <ListComponent/>   */}
        {/* <CustomizedTables /> */}

        </div> 
      
  );
}

// function Home() {
//   const navigate = useNavigate();

//   const navigateToForgetcaptcha = () => {
//     // navigate to /forgetcaptcha
//     navigate('/forgetcaptcha');
//   };
//   return (
//     <div className="App">
//       <div className='container'>
//         <div className='row'>
//           <div className='col'>
//             <div className='logo text-center'>
//               <img src={logo} alt="logo"></img>
//             </div>
//           </div>
//         </div>
//         <div className='row div-body'>
//           <div className='col'>
//             <h6>Forgot Password</h6>
//             <p>Enter your registered email address, mobile number, or username to change your HIPOS account password.</p>
//           </div>
//         </div>
//         <div className='row'>
//           <div className='col'>
//             <form className='form-group'> 
//               <div className='row'>
//                 <input className='form-group' type={'text'} placeholder={'Email, mobile, or username'}></input>
//               </div>
//               <div className='row'>
//               <button className='loginbtn' onClick={navigateToForgetcaptcha}>Next</button>    
                  
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//       <br /><br />
    
//       <Footer />
//     </div>  
//   );
  
// }



export default App;
