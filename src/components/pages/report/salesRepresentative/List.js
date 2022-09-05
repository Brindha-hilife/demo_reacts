import React, { useState } from "react";
import { Box, AccordionSummary, Typography,Button, Table,TableBody,TableCell,TableContainer,Tabs,TableHead,TableRow,Paper,Grid, TableFooter, InputLabel, Accordion,AccordionDetails,FormControl, MenuItem, Select } from '@mui/material';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import {userStyle} from '../../PageStyle';
import { FaFileCsv, FaPrint, FaCog,FaFilePdf } from "react-icons/fa";
import { AiFillFileExcel } from "react-icons/ai";
import PropTypes from 'prop-types';
import Tab from '@material-ui/core/Tab';
import "rsuite/dist/rsuite.css";
import { DateRangePicker } from 'rsuite';
import Saleswithcommisionlist from './Saleswithcommision';
import Salesaddlist from './Salesadd';
import Salesexpenselist from './Expenses';
import Sidebar from '../../../header/Sidebar';
import Footer from '../../../footer/Footer';

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

function SalesRepresentativetable(){

// TABS
const [value, setValue] = useState(0);

const ProductSellChange = (event, newValue) => {
    setValue(newValue);
};

// Accordion
const [expanded, setExpanded] = React.useState('panel1');

const handleChange = (panel) => (event, newExpanded) => {
setExpanded(newExpanded ? panel : false);
};

return(
    <>
    <Box>
    <Typography sx={userStyle.HeaderText}>Sales Representative Report</Typography> 
        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} sx={userStyle.container}>
            <AccordionSummary aria-controls="panel1d-content"  id="panel1d-header" sx={{color:'#7009ab !IMPORTANT',boxShadow:'0px 0px 2px #00000047',width:'100%'}}><Typography sx={{fontSize:'20px'}}><FilterAltIcon /> Filter</Typography></AccordionSummary>
                <AccordionDetails >
                    <br /> 
                    <Grid container spacing={2}>
                        <Grid item sm={12} xs={12} md={6} lg={3}>
                            <FormControl size="small" fullWidth sx={{ display: 'flex',borderRadius:'0px !important' }}>
                                <InputLabel id="demo-select-small">User</InputLabel>
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
                                 
                                    <MenuItem value={1}>All Users</MenuItem>
                                    <MenuItem value={2}>xxx</MenuItem>
                                </Select>   
                            </FormControl>
                    </Grid>
                    <Grid item sm={12} xs={12} md={6} lg={3}>
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
                                    label='Business Location'
                                    // value={ProfitLoss.ProfitAddLocation}
                                    // onChange={(event) => { setProfitLoss({ ...ProfitLoss, ProfitAddLocation: event.target.value }) }}
                                        fullWidth
                                    >
                                    <MenuItem value={1}>All locations</MenuItem>
                                    <MenuItem value={2}>xxx</MenuItem>
                                </Select>   
                            </FormControl>
                    </Grid>
                    <Grid item sm={12} xs={12} md={6} lg={3}>
                        <DateRangePicker size="lg" fullWidth style={{width:'100%', border: '1px solid #B97DF0'}}  />
                    </Grid>
                  </Grid>
                  <br />
                </AccordionDetails> 
            </Accordion>
            </Box>
            <br /> 
            <Box sx={userStyle.container}> 
                <Typography sx={userStyle.importheadtext}>Summary</Typography>
                <br />
                <Typography variant="h6">Total Sale - Total Sales Return: ₹ 8,593.75 - ₹ 0.00 = ₹ 8,593.75</Typography>
                <Typography variant="h6">Total Expense: ₹ 0.00</Typography>

            </Box>
            <br />
            <Box sx={userStyle.container}>     
                <Box sx={{ borderBottom: 1, borderColor: 'divider',textTransform: 'CAPITALIZE', }}>
                    <Tabs value={value} onChange={ProductSellChange} TabIndicatorProps={{style: {background:'none',borderTop:'5px solid #7009ab',borderLeft:'2px solid black',top:'0',borderRadius:'5px !important'}}}  aria-label="basic tabs example" scrollButtons variant="scrollable"  >
                    <Tab iconPosition="start" label={<><div><FaCog/>&ensp;Sales Added</div></>} {...a11yProps(0)}/>
                    <Tab iconPosition="start" label={<><div><FaCog/>&ensp;Sales With Commission</div></>} {...a11yProps(1)} />
                    <Tab iconPosition="start" label={<><div><FaCog/>&ensp;Expenses</div></>} {...a11yProps(2)} />
                    </Tabs>
            </Box>
            <TabPanel value={value} index={0}>          
                <Salesaddlist />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Saleswithcommisionlist />
                </TabPanel>
                <TabPanel value={value} index={2}>
               <Salesexpenselist />
                </TabPanel>
                </Box>
            <br />
  </>   

);

}
const SalesRepresentativeList = ()=>{
    return(
        <Box sx={{display:'flex', }} >
        <Sidebar />
        <Box sx={{width:'100%',overflowX:'hidden'}}>
            <Box component="main" sx={{ padding: '30px',}}><br /><br />
              <SalesRepresentativetable /><br /><br />
              <Footer />
            </Box>
        </Box>
      </Box>
    )
}

export default SalesRepresentativeList;