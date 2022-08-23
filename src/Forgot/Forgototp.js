// import React from 'react';
// import { Box, Typography, Button,  FormControl, OutlinedInput, InputAdornment, IconButton } from '@mui/material';
// import { Container } from '@mui/system';
// import Forgotlogo from '../components/images/mainlogo.png';
// import { loginforgot } from './Loginstyle';
// import { FaEyeSlash } from "react-icons/fa";
// import { Link } from 'react-router-dom';



// const Forgotpassword = () => {
//     return (
//         <>
//             <Container maxWidth="sm" sx={loginforgot.forgot_container}>
//                 <Box >
//                     <img src={Forgotlogo} alt="HILIFE.AI LOGO" /><br />
//                     <Typography variant="h5">Authentication</Typography><br /><br />
//                     <Container>
//                         <FormControl variant="outlined" fullWidth sx={{ maxWidth: '90%' }}>
//                             <OutlinedInput
//                                 id="outlined-adornment-password"
//                                 endAdornment={
//                                     <InputAdornment position="end">
//                                         <IconButton
//                                             aria-label="toggle password visibility"
//                                             edge="end"
//                                         >
//                                             <Typography>Change</Typography>
//                                         </IconButton>
//                                     </InputAdornment>
//                                 }
//                                 label=""
//                             />
//                         </FormControl><br /><br />
//                         <Typography variant="h6">Forgot Password</Typography><br /><br />
//                         <Container>
//                         <Typography variant="subtitle1" sx={{ textAlign: 'justify' }}>A one-time password (OTP) will be sent to your registered email address for verification </Typography><br /><br />
//                         </Container>
//                         <FormControl variant="outlined" fullWidth sx={{ maxWidth: '90%' }}>
//                             <OutlinedInput
//                                 id="outlined-adornment-password"
//                                 endAdornment={
//                                     <InputAdornment position="end">
//                                         <IconButton
//                                             aria-label="toggle password visibility"
//                                             edge="end"
//                                         >
//                                             <FaEyeSlash />
//                                         </IconButton>
//                                     </InputAdornment>
//                                 }
//                                 label=""
//                             />
//                         </FormControl><br /><br />
//                         <Button variant="contained" fullWidth sx={{ maxWidth: '90%' }}>SEND OTP</Button><br /><br />
//                         <Typography variant="subtitle1"><Link to="" style={{textDecoration:'none'}}>Contact Support</Link></Typography><br /><br />
//                     </Container>
//                 </Box>
//             </Container>
//         </>
//     )
// }

// export default Forgotpassword;