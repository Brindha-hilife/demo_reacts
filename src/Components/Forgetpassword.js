import { FaHeart, FaEyeSlash } from 'react-icons/fa';
import logo from '../images/logo.png';
import { useNavigate } from 'react-router-dom';
import '../App.css';
export function Forgetpassword() {
  const navigate = useNavigate();

  const navigateToForgetotp = () => {
    // navigate to /contacts
    navigate('/forgetotp');
  };
  return (
    // <Container>
    <div className="App">
      <div className='container'>
        <img src={logo} alt="logo" />
        <h6>Authentication</h6>
        <span ><input name="sampleInputone" /><a href='/' className='fonteyeone' > Change </a>  </span>
        <h6 className='headone'>Forget Password</h6>
        <p>Enter the last password you remember with this HIPOS account. If it matches, you can continue to sign in.</p>
        <span ><input name="sampleInputone" /><FaEyeSlash className='fonteye' /></span>
        <button className='loginbtn' onClick={navigateToForgetotp}>VERIFY THE PASSWORD</button>
        <a href='/' className='atagone'>Continue to reset password</a>
      </div>

      <br /><br />
      <span className='footertext'>© 2022, HILIFE.AI Pvt. Ltd. All Rights Reserved.</span>
      <br /><br />
      <span className='hearts'>Made with &ensp;<FaHeart className='heart' /> &ensp; in TRICHY  &ensp;| &ensp; திருச்சியில் உருவாக்கப்பட்டது &ensp;<FaHeart className='heart' />  </span>

    </div>
    // </Container>
  );
}

export default Forgetpassword;