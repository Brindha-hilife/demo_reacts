import React, { useState } from "react";
import { Box, AccordionSummary, Typography,Button, Table,TableBody,TableCell,TableContainer,Tabs,TableHead,TableRow,Paper,TextField,
 Grid, TableFooter, InputLabel, Accordion,AccordionDetails,FormControl, MenuItem, Select } from '@mui/material';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { userStyle } from '../../PageStyle';
import { FaMapMarker,FaBars,FaList,FaSearch,FaUser ,FaFileCsv, FaPrint, FaFilePdf } from "react-icons/fa";
import { AiFillFileExcel } from "react-icons/ai";
import PropTypes from 'prop-types';
import Tab from '@material-ui/core/Tab';
import $ from 'jquery';
import "rsuite/dist/rsuite.css";
import Sidebar from '../../../header/Sidebar';
import Footer from '../../../footer/Footer';
import { DateRangePicker } from 'rsuite';

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
 //  JQUER
 $(document).ready(function () {
    setTimeout(function(){
    $('#detailed').DataTable({
      language: {search: '', searchPlaceholder: "Search..."},
      lengthMenu: [25, 50, 100, 200, 500, 1000],
      // overflow-X: true
    });
     } ,1000);
});
 //  JQUER
 $(document).ready(function () {
    setTimeout(function(){
    $('#detailedWtPurchase').DataTable({
      language: {search: '', searchPlaceholder: "Search..."},
      lengthMenu: [25, 50, 100, 200, 500, 1000],
      // overflow-X: true
    });
     } ,1000);
});
 //  JQUER
 $(document).ready(function () {
    setTimeout(function(){
    $('#grouped').DataTable({
      language: {search: '', searchPlaceholder: "Search..."},
      lengthMenu: [25, 50, 100, 200, 500, 1000],
      // overflow-X: true
    });
     } ,1000);
});
 //  JQUER
 $(document).ready(function () {
    setTimeout(function(){
    $('#ByCategory').DataTable({
      language: {search: '', searchPlaceholder: "Search..."},
      lengthMenu: [25, 50, 100, 200, 500, 1000],
      // overflow-X: true
    });
     } ,1000);
});
 //  JQUER
 $(document).ready(function () {
    setTimeout(function(){
    $('#ByBrand').DataTable({
      language: {search: '', searchPlaceholder: "Search..."},
      lengthMenu: [25, 50, 100, 200, 500, 1000],
      // overflow-X: true
    });
     } ,1000);
});

function ProductSell() {

// TABS
const [value, setValue] = useState(0);

const ProductSellChange = (event, newValue) => {
    setValue(newValue);
};

// accordian
const [expanded, setExpanded] = React.useState('panel1');

const handleChange = (panel) => (event, newExpanded) => {
setExpanded(newExpanded ? panel : false);
};

    return (
      <>
    <Box>
    <Typography sx={userStyle.HeaderText}>Product Sell Report</Typography>    
    <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header" sx={{color:'#7009ab !IMPORTANT',boxShadow:'0px 0px 2px #00000047',}}><Typography sx={{fontSize:'20px'}}><FilterAltIcon /> Filter</Typography></AccordionSummary>
            <AccordionDetails >
                    <br /> 
                <Grid container spacing={2}>
                    <Grid item sm={12} xs={12} md={6} lg={3}>
                        <Grid sx={{ display: 'flex' }}  >
                            <Grid sx={userStyle.spanIcons}><FaSearch /></Grid>
                              <FormControl size="small" fullWidth sx={{ display: 'flex'}}>
                                <TextField size="small" label='search Product'  sx={{borderRadius:'0px !important',
                                    '& .MuiOutlinedInput-notchedOutline': {
                                        border: '1px solid #B97DF0',
                                        borderRadius:'0px !important',
                                    },}}>

                                </TextField>
                        </FormControl>
                    </Grid>
                  </Grid>
                  <Grid item sm={12} xs={12} md={6} lg={3}>
                  <Grid sx={{ display: 'flex' }}  >
                    <Grid sx={userStyle.spanIcons}><FaUser /></Grid>
                    <FormControl size="small" fullWidth sx={{ display: 'flex',borderRadius:'0px !important' }}>
                    <InputLabel id="demo-select-small">Customer</InputLabel>
                        <Select
                                labelId="demo-select-small"
                                sx={{borderRadius:'0px !important',
                                '& .MuiOutlinedInput-notchedOutline': {
                                    border: '1px solid #B97DF0',
                                    borderRadius:'0px !important',
                                },}}
                                id="demo-select-small"
                                label='Customer'
                                // value={ProfitLoss.ProfitAddLocation}
                                // onChange={(event) => { setProfitLoss({ ...ProfitLoss, ProfitAddLocation: event.target.value }) }}
                                fullWidth
                            >
                                <MenuItem value="">
                                    <em>Please Select</em>
                                </MenuItem>
                                <MenuItem value={1}>yyy</MenuItem>
                                <MenuItem value={2}>xxx</MenuItem>
                            </Select>   
                        </FormControl>
                    </Grid>
                  </Grid>
                  <Grid item sm={12} xs={12} md={6} lg={3}>
                  <FormControl size="small" fullWidth sx={{ display: 'flex',borderRadius:'0px !important' }}>
                    <InputLabel id="demo-select-small">Customer Group Name</InputLabel>
                        <Select
                                labelId="demo-select-small"
                                sx={{borderRadius:'0px !important',
                                '& .MuiOutlinedInput-notchedOutline': {
                                    border: '1px solid #B97DF0',
                                    borderRadius:'0px !important',
                                },}}
                                id="demo-select-small"
                                label='Customer Group Name'
                                // value={ProfitLoss.ProfitAddLocation}
                                // onChange={(event) => { setProfitLoss({ ...ProfitLoss, ProfitAddLocation: event.target.value }) }}
                                fullWidth
                            >
                                <MenuItem value="">
                                    <em>Please Select</em>
                                </MenuItem>
                                <MenuItem value={1}>yyy</MenuItem>
                                <MenuItem value={2}>xxx</MenuItem>
                            </Select>   
                        </FormControl>
                  </Grid>
                  <Grid item sm={12} xs={12} md={6} lg={3}>
                  <Grid sx={{ display: 'flex' }}  >
                    <Grid sx={userStyle.spanIcons}><FaMapMarker /></Grid>
                    <FormControl size="small" fullWidth sx={{ display: 'flex',borderRadius:'0px !important' }}>
                    <InputLabel id="demo-select-small">Business Location</InputLabel>
                        <Select
                                labelId="demo-select-small"
                                sx={{borderRadius:'0px !important',
                                '& .MuiOutlinedInput-notchedOutline': {
                                    border: '1px solid #B97DF0',
                                    borderRadius:'0px !important',
                                },}}
                                id="demo-select-small"
                                label='Customer'
                                // value={ProfitLoss.ProfitAddLocation}
                                // onChange={(event) => { setProfitLoss({ ...ProfitLoss, ProfitAddLocation: event.target.value }) }}
                                fullWidth
                            >
                                <MenuItem value={1}>All</MenuItem>
                                <MenuItem value={2}>xxx</MenuItem>
                            </Select>   
                        </FormControl>
                    </Grid>
                  </Grid>
                  </Grid>
                  <br />
                  <Grid container spacing={2}>
                  <Grid item sm={12} xs={12} md={6} lg={3}>
                  <FormControl size="small" fullWidth sx={{ display: 'flex',borderRadius:'0px !important' }}>
                    <InputLabel id="demo-select-small">Category</InputLabel>
                        <Select
                                labelId="demo-select-small"
                                sx={{borderRadius:'0px !important',
                                '& .MuiOutlinedInput-notchedOutline': {
                                    border: '1px solid #B97DF0',
                                    borderRadius:'0px !important',
                                },}}
                                id="demo-select-small"
                                label='Category'
                                // value={ProfitLoss.ProfitAddLocation}
                                // onChange={(event) => { setProfitLoss({ ...ProfitLoss, ProfitAddLocation: event.target.value }) }}
                                fullWidth
                            >
                                <MenuItem value={1}>All</MenuItem>
                                <MenuItem value={2}>xxx</MenuItem>
                            </Select>   
                        </FormControl>
                  </Grid>
                  <Grid item sm={12} xs={12} md={6} lg={3}>
                  <FormControl size="small" fullWidth sx={{ display: 'flex',borderRadius:'0px !important' }}>
                    <InputLabel id="demo-select-small">Brand</InputLabel>
                        <Select

                                labelId="demo-select-small"
                                 sx={{borderRadius:'0px !important',
                                    '& .MuiOutlinedInput-notchedOutline': {
                                        border: '1px solid #B97DF0',
                                        borderRadius:'0px !important',
                                    },}}
                                id="demo-select-small"
                                label='Brand'
                                // value={ProfitLoss.ProfitAddLocation}
                                // onChange={(event) => { setProfitLoss({ ...ProfitLoss, ProfitAddLocation: event.target.value }) }}
                                fullWidth
                            >
                                <MenuItem value={1}>All</MenuItem>
                                <MenuItem value={2}>xxx</MenuItem>
                            </Select>   
                        </FormControl>
                  </Grid>
                  <Grid item sm={12} xs={12} md={6} lg={3}>
                     <DateRangePicker size="lg" fullWidth style={{width:'100%', border: '1px solid #B97DF0'}}  />
                  </Grid>
                  <Grid item sm={12} xs={12} md={6} lg={3}>
                  <Grid sx={{ display: 'flex' }}  >
                     <TextField
                     fullWidth
                        id="time"
                        label="Alarm clock"
                        type="time"
                        size='small'
                        defaultValue="07:30"
                        sx={{borderRadius:'0px !important',
                        '& .MuiOutlinedInput-notchedOutline': {
                            border: '1px solid #B97DF0',
                            borderRadius:'0px !important',
                        },}}
                        InputLabelProps={{
                        shrink: true,
                        
                        }}
                        inputProps={{
                        step: 300, // 5 min
                        }}
                       
                        />
                        <TextField
                        id="time"
                        label="Alarm clock"
                        type="time"
                        size='small'
                        defaultValue="07:30"
                        
                        InputLabelProps={{
                        shrink: true,
                        }}
                        sx={{borderRadius:'0px !important',
                        '& .MuiOutlinedInput-notchedOutline': {
                            border: '1px solid #B97DF0',
                            borderRadius:'0px !important',
                        },}}
                        inputProps={{
                        step: 300, // 5 min
                        }}
                        fullWidth
                        />
                    </Grid>
                  </Grid>
                  </Grid>
                  <br />
                </AccordionDetails> 
            </Accordion>
            </Box>
        <br />
  
    <Box sx={userStyle.container}>     
         <Box sx={{ borderBottom: 1, borderColor: 'divider',textTransform: 'CAPITALIZE', }}>
            <Tabs value={value} onChange={ProductSellChange} TabIndicatorProps={{style: {background:'none',borderTop:'5px solid #7009ab',borderLeft:'2px solid black',top:'0',borderRadius:'5px !important'}}}  aria-label="basic tabs example" scrollButtons variant="scrollable"  >
            <Tab iconPosition="start" label={<><div><FaList/>&ensp;Detailed</div></>} {...a11yProps(0)}/>
            <Tab iconPosition="start" label={<><div><FaList/>&ensp;Detailed (With purchase)</div></>} {...a11yProps(1)} />
            <Tab iconPosition="start" label={<><div><FaBars/>&ensp;Grouped</div></>}  {...a11yProps(2)} />
            <Tab iconPosition="start" label={<><div><FaBars/>&ensp;By Category</div></>} {...a11yProps(3)} />
            <Tab iconPosition="start" label={<><div><FaBars/>&ensp;By Brand</div></>} {...a11yProps(4)} />
            
            </Tabs>
        </Box>
            <TabPanel value={value} index={0}>          
                <TableContainer component={Paper} sx={{boxShadow:'none'}}>
                    <Grid container sx={userStyle.gridcontainer}>    
                            <Grid>   
                                <Button sx={userStyle.buttongrp}><FaFileCsv />&ensp;Export to CSV</Button>
                                <Button sx={userStyle.buttongrp}><AiFillFileExcel />&ensp;Export to Excel</Button>
                                <Button sx={userStyle.buttongrp}><FaPrint />&ensp;Print</Button>
                                <Button sx={userStyle.buttongrp}><FaFilePdf />&ensp;Export to PDF</Button>
                            </Grid>    
                        </Grid>
                        <Table sx={{ minWidth: 700 }} aria-label="customized table" id="detailed">
                        <TableHead>
                            <TableRow>
                            <TableCell align="left">Product</TableCell>
                            <TableCell align="left">SKU</TableCell>
                            <TableCell align="left">Customer name</TableCell>
                            <TableCell align="left">Contact ID</TableCell>
                            <TableCell align="left">Invoice No.</TableCell>
                            <TableCell align="left">Date</TableCell>
                            <TableCell align="left">Quantity</TableCell>
                            <TableCell align="left">Unit Price</TableCell>
                            <TableCell align="left">Discount</TableCell>
                            <TableCell align="left">Tax</TableCell>
                            <TableCell align="left">Price inc.tax</TableCell>
                            <TableCell align="left">Total</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                            <TableCell align="left">XYZ</TableCell>
                            <TableCell align="left"></TableCell>
                            <TableCell align="left"></TableCell>
                            <TableCell align="left"></TableCell>
                            <TableCell align="left"></TableCell>
                            <TableCell align="left"></TableCell>
                            <TableCell align="left"></TableCell>
                            <TableCell align="left">₹21.27</TableCell>
                            <TableCell align="left"></TableCell>
                            <TableCell align="left"></TableCell>
                            <TableCell align="left"></TableCell>
                            <TableCell align="left">Total</TableCell>
                            </TableRow>
                        </TableBody>
                        <TableFooter sx={{height:'50px',backgroundColor:'#8080806e',textAlign:'center !important'}}>
                            <TableRow> 
                            <TableCell align="left"sx={userStyle.footerStyle} colspan={6}>Total</TableCell>
                            <TableCell align="left"sx={userStyle.footerStyle}>3.00 Pc(s)</TableCell>
                            <TableCell align="left"sx={userStyle.footerStyle}></TableCell>
                            <TableCell align="left"sx={userStyle.footerStyle}></TableCell>
                            <TableCell align="left"sx={userStyle.footerStyle}></TableCell>
                            <TableCell align="left"sx={userStyle.footerStyle}></TableCell>
                            <TableCell align="left"sx={userStyle.footerStyle}>₹0.00</TableCell>
                            </TableRow>
                        </TableFooter>
                        </Table>
                    </TableContainer>
            </TabPanel>
            <TabPanel value={value} index={1}>
            <TableContainer component={Paper} sx={{boxShadow:'none'}}>
                    <Grid container sx={userStyle.gridcontainer}>    
                            <Grid>   
                                <Button sx={userStyle.buttongrp}><FaFileCsv />&ensp;Export to CSV</Button>
                                <Button sx={userStyle.buttongrp}><AiFillFileExcel />&ensp;Export to Excel</Button>
                                <Button sx={userStyle.buttongrp}><FaPrint />&ensp;Print</Button>
                                <Button sx={userStyle.buttongrp}><FaFilePdf />&ensp;Export to PDF</Button>
                            </Grid>    
                        </Grid>
                        <Table sx={{ minWidth: 700 }} aria-label="customized table" id="detailedWtPurchase">
                        <TableHead>
                            <TableRow>
                            <TableCell align="left">Product</TableCell>
                            <TableCell align="left">SKU</TableCell>
                            <TableCell align="left">Customer name</TableCell>
                            <TableCell align="left">Invoice No.</TableCell>
                            <TableCell align="left">Date</TableCell>
                            <TableCell align="left">Pruchase ref no.</TableCell>
                            <TableCell align="left">Supplier Name</TableCell>
                            <TableCell align="left">Quantity</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                            <TableCell align="left">xyz</TableCell>
                            <TableCell align="left"></TableCell>
                            <TableCell align="left"></TableCell>
                            <TableCell align="left"></TableCell>
                            <TableCell align="left"></TableCell>
                            <TableCell align="left"></TableCell>
                            <TableCell align="left"> </TableCell>
                            <TableCell align="left"></TableCell>
                            </TableRow>
                        </TableBody>
                  
                        </Table>
                    </TableContainer>
            </TabPanel>
            <TabPanel value={value} index={2}>
            <TableContainer component={Paper} sx={{boxShadow:'none'}}>
                    <Grid container sx={userStyle.gridcontainer}>    
                            <Grid>   
                                <Button sx={userStyle.buttongrp}><FaFileCsv />&ensp;Export to CSV</Button>
                                <Button sx={userStyle.buttongrp}><AiFillFileExcel />&ensp;Export to Excel</Button>
                                <Button sx={userStyle.buttongrp}><FaPrint />&ensp;Print</Button>
                                <Button sx={userStyle.buttongrp}><FaFilePdf />&ensp;Export to PDF</Button>
                            </Grid>    
                        </Grid>
                        <Table sx={{ minWidth: 700 }} aria-label="customized table" id="grouped">
                        <TableHead>
                            <TableRow>
                            <TableCell align="left">Product</TableCell>
                            <TableCell align="left">SKU</TableCell>
                            <TableCell align="left">Date</TableCell>
                            <TableCell align="left">Current stock</TableCell>
                            <TableCell align="left">Total unit sold</TableCell>
                            <TableCell align="left">Total</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                            <TableCell align="left">XYZ</TableCell>
                            <TableCell align="left"></TableCell>
                            <TableCell align="left"></TableCell>
                            <TableCell align="left"></TableCell>
                            <TableCell align="left"></TableCell>
                            <TableCell align="left"></TableCell>
                            </TableRow>
                        </TableBody>
                        <TableFooter sx={{height:'50px',backgroundColor:'#8080806e',}}>
                            <TableRow>
                                <TableCell sx={userStyle.footerStyle} colspan={4}> Total </TableCell>
                                <TableCell sx={userStyle.footerStyle} align="left"> </TableCell>
                                <TableCell sx={userStyle.footerStyle} align="left"> ₹0.00</TableCell>
                            </TableRow>
                        </TableFooter>
                        </Table>
                    </TableContainer>
            </TabPanel>
            <TabPanel value={value} index={3}>
            <TableContainer component={Paper} sx={{boxShadow:'none'}}>
                    <Grid container sx={userStyle.gridcontainer}>    
                            <Grid>   
                                <Button sx={userStyle.buttongrp}><FaFileCsv />&ensp;Export to CSV</Button>
                                <Button sx={userStyle.buttongrp}><AiFillFileExcel />&ensp;Export to Excel</Button>
                                <Button sx={userStyle.buttongrp}><FaPrint />&ensp;Print</Button>
                                <Button sx={userStyle.buttongrp}><FaFilePdf />&ensp;Export to PDF</Button>
                            </Grid>    
                        </Grid>
                        <Table sx={{ minWidth: 700 }} aria-label="customized table" id="ByCategory">
                        <TableHead>
                            <TableRow>
                                <TableCell align="left">Category</TableCell>
                                <TableCell align="left">Current stock</TableCell>
                                <TableCell align="left">Total unit sold</TableCell>
                                <TableCell align="left">Total</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell align="left">xyz</TableCell>
                                <TableCell align="left"></TableCell>
                                <TableCell align="left"></TableCell>
                                <TableCell align="left"></TableCell>
                            </TableRow>
                        </TableBody>
                        <TableFooter sx={{height:'50px',backgroundColor:'#8080806e',}}>
                            <TableRow>
                                <TableCell sx={userStyle.footerStyle}> Total </TableCell>
                                <TableCell sx={userStyle.footerStyle}>  </TableCell>
                                <TableCell sx={userStyle.footerStyle}>  </TableCell>
                                <TableCell sx={userStyle.footerStyle} align="left"> ₹0.00</TableCell>
                            </TableRow>
                        </TableFooter>
                        </Table>
                    </TableContainer>
            </TabPanel>
            <TabPanel value={value} index={4}>
            <TableContainer component={Paper} sx={{boxShadow:'none'}}>
                    <Grid container sx={userStyle.gridcontainer}>    
                            <Grid>   
                                <Button sx={userStyle.buttongrp}><FaFileCsv />&ensp;Export to CSV</Button>
                                <Button sx={userStyle.buttongrp}><AiFillFileExcel />&ensp;Export to Excel</Button>
                                <Button sx={userStyle.buttongrp}><FaPrint />&ensp;Print</Button>
                                <Button sx={userStyle.buttongrp}><FaFilePdf />&ensp;Export to PDF</Button>
                            </Grid>    
                        </Grid>
                        <Table sx={{ minWidth: 700 }} aria-label="customized table" id="ByBrand">
                        <TableHead>
                            <TableRow>
                                <TableCell align="left">Brand</TableCell>
                                <TableCell align="left">Current stock</TableCell>
                                <TableCell align="left">Total unit sold</TableCell>
                                <TableCell align="left">Total</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell align="left">0</TableCell>
                                <TableCell align="left"></TableCell>
                                <TableCell align="left"></TableCell>
                                <TableCell align="left"></TableCell>
                            </TableRow>
                        </TableBody>
                        <TableFooter sx={{height:'50px',backgroundColor:'#8080806e',}}>
                            <TableRow>
                                <TableCell sx={userStyle.footerStyle}> Total </TableCell>
                                <TableCell sx={userStyle.footerStyle}>  </TableCell>
                                <TableCell sx={userStyle.footerStyle}>  </TableCell>
                                <TableCell sx={userStyle.footerStyle} align="left"> ₹0.00</TableCell>
                            </TableRow>
                        </TableFooter>
                        </Table>
                    </TableContainer>
            </TabPanel>
           
       
                </Box>

  </>
    
    );
}

const ProductSelllist = ()=>{
    return(
<Box sx={{display:'flex', }} >
        <Sidebar />
        <Box sx={{width:'100%',overflowX:'hidden'}}>
            <Box component="main" sx={{ padding: '30px',}}><br /><br />
              <ProductSell /><br /><br />
              <Footer />
            </Box>
        </Box>
      </Box>
    );
}

export default ProductSelllist;