import React from 'react';
import { Grid, Button  } from '@mui/material';
import { navbarStyle } from './Style';
import { BiCalculator } from 'react-icons/bi';
import { CgMicrosoft } from 'react-icons/cg';
import MoneyOutlined from '@mui/icons-material/MoneyOutlined';

const Navbar = () => {
  return (
   <>
     <Grid container  sx={{justifyContent: 'flex-end'}}>
        <Button sx={navbarStyle.navbarrightbtn}>+</Button>
        <Button sx={navbarStyle.navbarrightbtn}><BiCalculator /></Button>
        <Button sx={navbarStyle.navbarrightbtn}><CgMicrosoft />&ensp;POS</Button>
        <Button sx={navbarStyle.navbarrightbtn}><MoneyOutlined /></Button>
        {/* <Button sx={navbarStyle.navbarright}>+</Button>
        <Button sx={navbarStyle.navbarright}>+</Button> */}
      </Grid>
   </>
  )
}

export default Navbar;