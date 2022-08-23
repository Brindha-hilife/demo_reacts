import React from 'react';
import { Grid, Container, Box, Typography} from '@mui/material';
import {FaHeart} from 'react-icons/fa';
import { footerStyle }from './Footerstyle';


function Footer() {
    return(
    <Box>
      <Container sx={footerStyle.container}>
        <Grid>
            <Typography variant="subtitle2">© 2022, HILIFE.AI Pvt. Ltd. All Rights Reserved.</Typography>
        </Grid>
        <Grid >
           <Typography sx={footerStyle.hearts}>Made with &ensp;<FaHeart style={{color:'rgb(193, 32, 32)'}} /> &ensp; in TRICHY  &ensp;
         | &ensp; திருச்சியில் உருவாக்கப்பட்டது &ensp;<FaHeart style={{color:'rgb(193, 32, 32)'}}/> </Typography>  
          </Grid>         
        </Container>
    </Box>
    );
  }
  
export default Footer;