import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter,Routes, Route} from "react-router-dom";
import './index.css';
import App from './App';
// import Roles from './Roles';
// import Salescomn from './Salescomn';
import Useradd from './Usermanagement/Users/Useradd';
import Useredit from './Usermanagement/Users/Useredit';
import Roleadd from './Usermanagement/Roles/Roleadd';
import Roleedit from './Usermanagement/Roles/Roleedit';


// import Forgetcapcha from './Components/Forgetcaptcha';

import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//     {/* <Forgetcapcha /> */}
   
//   </React.StrictMode>
// );

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
  <BrowserRouter>
  {/* <App /> */}
  <Routes>
    <Route path="/" element={<App />} />
    {/* <Route path="role" element={<Roles />} /> */}
    {/* <Route path="salescomn" element={<Salescomn />} /> */}
    <Route path="useradd" element={<Useradd />} />
    <Route path="useredit" element={<Useredit />} />
    <Route path="roleadd" element={<Roleadd />} />
    <Route path="roleedit" element={<Roleedit />} />
  </Routes>
</BrowserRouter>
   
  
);




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
