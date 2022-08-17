import { FaHeart } from 'react-icons/fa';
// // import './App.css';
import logo from '../images/logo.png';
import { useNavigate } from 'react-router-dom';


function Forgetcaptcha() {
  const navigate = useNavigate();

  const navigateToForgetpassword = () => {
    // navigate to /contacts
    navigate('/forgetpassword');
  };
  return (
    <div className="App">
      <div className='container'>
        <img src={logo} alt="logo" />
        <h6>Authentication</h6>
        <span ><input name="sampleInputone" /><a href='/' className='fonteyeone' > Change </a>  </span>
        <button className='loginbtn' onClick={navigateToForgetpassword}>Next</button>
      </div>
      <br /><br />
      <span className='footertext'>© 2022, HILIFE.AI Pvt. Ltd. All Rights Reserved.</span>
      <br /><br />
      <span className='hearts'>Made with &ensp;<FaHeart className='heart' /> &ensp; in TRICHY  &ensp;| &ensp; திருச்சியில் உருவாக்கப்பட்டது &ensp;<FaHeart className='heart' />  </span>

    </div>
  );
}



export default Forgetcaptcha;




