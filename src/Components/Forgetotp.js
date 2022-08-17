// import {FaHeart} from 'react-icons/fa';
import logo from '../images/logo.png';




function Forgetotp() {

  return (
    // <Container>
    <div className="App">
      <div className='container'>
        <img src={logo} alt="logo" />
        <h6>Authentication</h6>
        <span ><input name="sampleInputone" /><a href='/' className='fonteyeone' > Change </a>  </span>
        {/* <span>Click me</span> */}
        <h6 className='headone'>Forget Password</h6>
        <p>A one-time password (OTP) will be sent to your registered email address for verification </p>

        <button className='loginbtn'>SEND OTP</button>
        <a href='/' className='atagone'>Contact Support</a>
      </div>

      {/* <br /><br />
          <span className='footertext'>© 2022, HILIFE.AI Pvt. Ltd. All Rights Reserved.</span>
           <br /><br />
           <span className='hearts'>Made with &ensp;<FaHeart className='heart' /> &ensp; in TRICHY  &ensp;| &ensp; திருச்சியில் உருவாக்கப்பட்டது &ensp;<FaHeart className='heart' />  </span>
            */}
    </div>
    // </Container>
  );
}


export default Forgetotp;