import React, { useState } from 'react';
import { sellStyle } from '../Sellstyle';
import {
    Box, Grid, FormControl, InputLabel, OutlinedInput, Select, MenuItem, Paper, TableCell,
    Typography, FormGroup, FormControlLabel, Checkbox, Button, Table, Tooltip, IconButton, TableContainer, TableHead, TableRow, TableBody
} from '@mui/material';
import { FcInfo } from "react-icons/fc";
import { FaExternalLinkAlt, FaPause, FaEdit, FaSearch, FaUserAlt, FaUserSecret, FaTable, FaPauseCircle, FaWindowMaximize, FaCalculator, FaBriefcase, FaRegWindowClose, FaBackward, FaMinusCircle, FaCheck, FaCreditCard, FaMoneyCheckAlt, FaMoneyBillAlt, FaClock } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { makeStyles, } from "@material-ui/core/styles";
import Possearchplus from './Possearchmod';
import Poscusmod from './Poscusmod';
import Poslinkmod from './Poslinkmod';


function Poscreate() {

    // ******** Text field ******** //
    const [posAdd, setPosAdd] = useState({
        posAddLoc: "", posAddSelect: "", posAddTable: "", posAddAllBrand: "",
        posAddStaff: "",
    });

    // Tooltip function
    const useStyles = makeStyles(theme => ({
        arrow: {
            fontSize: 25,
            color: "7009AB !important",
            "&::before": {
                backgroundColor: "7009AB !important",
                boxShadow: '6px 6px 6px 9px #dedbdbae',
            }
        },
        tooltip: {
            fontSize: "17px !important",
            color: "#7009AB !important",
            backgroundColor: "white !important",
            boxShadow: '6px 6px 6px 9px #dedbdbae',
            padding: "20px",
        }
    }));
    const classes = useStyles();

    return (
        <Box sx={{ backgroundColor: '#8080805c', color: 'black', height: 'auto', position: 'relative', overflow: 'visible' }}>
            <form action=''>
                <Box sx={{ padding: '10px', }}>
                    <Grid container spacing={1}>
                        <Grid item md={4} sm={6} xs={12} >
                            <Grid display="flex">
                                <Typography variant='subtitle1' sx={{ marginRight: '10px' }}>Location:</Typography>
                                <FormControl size="small" fullWidth sx={{ display: 'flex' }}>
                                    <InputLabel id="demo-select-small">xxx</InputLabel>
                                    <Select
                                        labelId="demo-select-small"
                                        id="demo-select-small"
                                        value={posAdd.posAddLoc}
                                        onChange={(e) => { setPosAdd({ ...posAdd, posAddLoc: e.target.value }) }}
                                        label="xxx"
                                        fullWidth
                                    >
                                        <MenuItem value={1}>xxx</MenuItem>
                                        <MenuItem value={2}>yyy</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                        </Grid>
                        <Grid item md={1}></Grid>
                        <Grid item md={7} sm={12} xs={12} >
                            <Box sx={{ float: 'right' }}>
                                <Button sx={sellStyle.btnExpress}><FaMinusCircle style={{ fontSize: '16px' }} />&ensp;Add Expense</Button>
                                <Button sx={sellStyle.btnPause}><FaPauseCircle style={{ fontSize: '18px' }} /></Button>
                                <Button sx={sellStyle.btnMax}><FaWindowMaximize style={{ fontSize: '18px' }} /></Button>
                                <Button sx={sellStyle.btnCal}><FaCalculator style={{ fontSize: '18px' }} /></Button>
                                <Button sx={sellStyle.btnCal}><FaBriefcase style={{ fontSize: '18px' }} /></Button>
                                <Button sx={sellStyle.btnClose}><FaRegWindowClose style={{ fontSize: '18px' }} /></Button>
                                <Button sx={sellStyle.btnBack}><FaBackward style={{ fontSize: '18px' }} /></Button>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>

                <Box sx={{ height: '900px', mt: '3', }}>
                    <Grid container spacing={2} >
                        <Grid item md={7} sm={12} xs={12} sx={{ backgroundColor: 'white', margin: '20px', padding: '20px' }}>
                            <Grid container spacing={3}>
                                <Grid item md={4} sm={6} xs={12}>
                                    <Grid sx={{ display: 'flex' }}  >
                                        <Grid sx={sellStyle.spanIcons}><FaUserAlt /></Grid>
                                        <FormControl size="small" fullWidth sx={{ display: 'flex' }}>
                                            <InputLabel id="demo-select-small">Walk-in Customer</InputLabel>
                                            <Select
                                                labelId="demo-select-small"
                                                id="demo-select-small"
                                                // value={posAdd.posAddb}
                                                // onChange={(e) => { setPosAdd({ ...posAdd, posAddbrand: e.target.value }) }}
                                                label="Walk-in Customer"
                                                fullWidth
                                            >
                                                <MenuItem value={1}>Walk-in Customer</MenuItem>
                                            </Select>
                                        </FormControl>
                                        <Grid sx={sellStyle.spanIcons}><Poscusmod />   </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item md={8} sm={6} xs={12}>
                                    <Grid sx={{ display: 'flex' }}  >
                                        <Grid sx={sellStyle.spanIcons}>
                                            < FaSearch />
                                        </Grid>
                                        <FormControl size="small" fullWidth >
                                            <InputLabel id="demo-select-small">Enter Product name / SKU / Scan bar code</InputLabel>
                                            <OutlinedInput
                                                id="component-outlined"
                                                // value={posAdd.posAddbrand}
                                                // onChange={(e) => { setPosAdd({ ...posAdd, PosAddbrand: e.target.value }) }}
                                                type="search"
                                                label="Enter Product name / SKU / Scan bar code"
                                            />
                                        </FormControl>
                                        <Possearchplus />
                                    </Grid>
                                </Grid>
                                <Grid item md={4} sm={6} xs={12}>
                                    <Grid sx={{ display: 'flex' }}  >
                                        <Grid sx={sellStyle.spanIcons}><FaExternalLinkAlt /></Grid>
                                        <FormControl size="small" fullWidth sx={{ display: 'flex' }}>
                                            <InputLabel id="demo-select-small">Select types of service</InputLabel>
                                            <Select
                                                labelId="demo-select-small"
                                                id="demo-select-small"
                                                value={posAdd.posAddSelect}
                                                onChange={(e) => { setPosAdd({ ...posAdd, PosAddSelect: e.target.value }) }}
                                                label="Select types of service"
                                                fullWidth
                                            >
                                                <MenuItem value={1}>Select types of service</MenuItem>
                                            </Select>
                                        </FormControl>
                                        <Grid sx={sellStyle.spanInfoIcons}>
                                            <Tooltip classes={{ arrow: classes.arrow, tooltip: classes.tooltip }} title="Type of service means services like dine-in, parcel, home delivery, third party delivery etx." arrow>
                                                <IconButton>
                                                    <FcInfo />
                                                </IconButton>
                                            </Tooltip>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item md={8} sm={6} xs={12} >
                                    <Grid display='flex'>
                                        <FormGroup >
                                            <FormControlLabel control={<Checkbox />} label="Subscribe?" />
                                            <span>
                                                <Poslinkmod />

                                                <Tooltip classes={{ arrow: classes.arrow, tooltip: classes.tooltip }} title="If subscribed this invoice will be automatically generated at regular intervals. You can disable this feature in Settings > Business Settings > Modules" arrow>
                                                    <IconButton>
                                                        <FcInfo />
                                                    </IconButton>
                                                </Tooltip>
                                            </span>
                                        </FormGroup>
                                    </Grid>
                                </Grid>
                                <Grid item md={4} sm={6} xs={12}>
                                    <Grid sx={{ display: 'flex' }}  >
                                        <Grid sx={sellStyle.spanIcons}><FaTable /></Grid>
                                        <FormControl size="small" fullWidth sx={{ display: 'flex' }}>
                                            <InputLabel id="demo-select-small">Select Table</InputLabel>
                                            <Select
                                                labelId="demo-select-small"
                                                id="demo-select-small"
                                                value={posAdd.posAddTable}
                                                onChange={(e) => { setPosAdd({ ...posAdd, PosAddTable: e.target.value }) }}
                                                label="Select Table"
                                                fullWidth
                                            >
                                                <MenuItem value={1}>Select Table</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                </Grid>
                                <Grid item md={4} sm={6} xs={12}>
                                    <Grid sx={{ display: 'flex' }}  >
                                        <Grid sx={sellStyle.spanIcons}><FaUserSecret /></Grid>
                                        <FormControl size="small" fullWidth sx={{ display: 'flex' }}>
                                            <InputLabel id="demo-select-small">Select Service Staff</InputLabel>
                                            <Select
                                                labelId="demo-select-small"
                                                id="demo-select-small"
                                                value={posAdd.posAddStaff}
                                                onChange={(e) => { setPosAdd({ ...posAdd, PosAddStaff: e.target.value }) }}
                                                label="Select Service Staff"
                                                fullWidth
                                            >
                                                <MenuItem value={1}>Select Service Staff</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                </Grid>
                                <Grid md={4} sm={6} xs={12}></Grid><br /><br /><br /><br />
                                <Grid md={12} sm={12} xs={12}>
                                    <TableContainer component={Paper} sx={sellStyle.tablecontainer} style={{ height: '600px', marginLeft: '10px' }}>
                                        <Table aria-label="customized table" id="">
                                            <TableHead >
                                                <TableRow >
                                                    <TableCell sx={sellStyle.tableHead}> Product
                                                        <Tooltip classes={{ arrow: classes.arrow, tooltip: classes.tooltip }} arrow sx={{ zIndex: '1' }}
                                                            title="Click product name to edit price, discount & tax. Click Comment Icon to enter serial number / IMEI
                                    or addional note. Click Modifier Icon(if enabled) for modifiers.">
                                                            <IconButton>
                                                                <FcInfo />
                                                            </IconButton>
                                                        </Tooltip>

                                                    </TableCell >
                                                    <TableCell sx={sellStyle.tableHead}>Quantity</TableCell>
                                                    <TableCell sx={sellStyle.tableHead}>Subtotal</TableCell>
                                                    <TableCell sx={sellStyle.tableHead}><AiOutlineClose /></TableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody >
                                                <TableRow></TableRow>
                                                <TableRow></TableRow>
                                                <TableRow></TableRow>
                                                <TableRow></TableRow><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                                                <TableRow >
                                                    <TableCell><Typography variant="body2"><b>Items:</b></Typography> 0.00</TableCell>
                                                    <TableCell><Typography variant="body2"><b>Total:</b></Typography> 0.00</TableCell>
                                                    <TableCell></TableCell>
                                                    <TableCell></TableCell>
                                                </TableRow>
                                                <TableRow >
                                                    <TableCell><Typography variant="body2"><b> Discount
                                                        <Tooltip classes={{ arrow: classes.arrow, tooltip: classes.tooltip }} arrow sx={{ zIndex: '1' }}
                                                            title="Set 'Default Sale Discount' for all sales in Business Setting. Click on the edit icon below to add/update discount.">
                                                            <IconButton>
                                                                <FcInfo />
                                                            </IconButton>
                                                        </Tooltip>
                                                        : (-)</b></Typography><FaEdit /> 0.00</TableCell>
                                                    <TableCell><Typography variant="body2"><b>Order Tax(+):</b></Typography>
                                                        <Tooltip classes={{ arrow: classes.arrow, tooltip: classes.tooltip }} arrow sx={{ zIndex: '1' }}
                                                            title="Set 'Default Sale Tax' for all sales in Business Setting. Click on the edit icon below to add/update Order Tax.">
                                                            <IconButton>
                                                                <FcInfo />
                                                            </IconButton>
                                                        </Tooltip>
                                                        <FaEdit /> 0.00</TableCell>
                                                    <TableCell><Typography variant="body2"><b>Shipping(+):</b></Typography>
                                                        <Tooltip classes={{ arrow: classes.arrow, tooltip: classes.tooltip }} arrow sx={{ zIndex: '1' }}
                                                            title="Set shipping details and shipping charges. Click on the edit icon below to add/update shipping details and charges.">
                                                            <IconButton>
                                                                <FcInfo />
                                                            </IconButton>
                                                        </Tooltip>
                                                        <FaEdit /> 0.00</TableCell>
                                                    <TableCell><Typography variant="body2"><b>Packing Charge(+):</b></Typography><FaEdit /> 0</TableCell>
                                                </TableRow>
                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item md={4} sm={12} xs={12}>
                            <Grid container spacing={3} >
                                <Grid item md={5} sm={12} xs={12}>
                                    <FormControl size="small" fullWidth sx={{ display: 'flex' }}>
                                        <InputLabel id="demo-select-small">All Brands</InputLabel>
                                        <Select
                                            labelId="demo-select-small"
                                            id="demo-select-small"
                                            value={posAdd.posAddAllBrand}
                                            onChange={(e) => { setPosAdd({ ...posAdd, PosAllBrand: e.target.value }) }}
                                            label="All Brands"
                                            fullWidth
                                        >
                                            <MenuItem value={1}>All Brands</MenuItem>
                                            <MenuItem value={2}>xxx</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item md={7} sm={12} xs={12}></Grid>
                                <Grid item md={12} sm={12} xs={12}>
                                    <Grid container spacing={3}>
                                        <Grid item md={3} sm={3} xs={3}>
                                            <Box sx={sellStyle.imgBox}>
                                                <img src='' alt='sample' style={{ width: '80px', padding: '10px' }} />
                                                <Typography >xxxx</Typography>
                                                <Typography >xxxx</Typography>
                                            </Box>
                                        </Grid>
                                        <Grid item md={3} sm={3} xs={3}>
                                            <Box sx={sellStyle.imgBox}>
                                                <img src='' alt='sample' style={{ width: '80px', padding: '10px' }} />
                                                <Typography >xxxx</Typography>
                                                <Typography >xxxx</Typography>
                                            </Box>
                                        </Grid>
                                        <Grid item md={3} sm={3} xs={3}>
                                            <Box sx={sellStyle.imgBox}>
                                                <img src='' alt='sample' style={{ width: '80px', padding: '10px' }} />
                                                <Typography >xxxx</Typography>
                                                <Typography >xxxx</Typography>
                                            </Box>
                                        </Grid>
                                        <Grid item md={3} sm={3} xs={3}>
                                            <Box sx={sellStyle.imgBox}>
                                                <img src='' alt='sample' style={{ width: '80px', padding: '10px' }} />
                                                <Typography >xxxx</Typography>
                                                <Typography >xxxx</Typography>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
                <br></br>
                <Box  >
                    <Grid container sx={sellStyle.btnGrid} >
                        <Grid item md={8} sm={12} xs={12} sx={{ display: 'flex', }}>
                            <Button sx={sellStyle.btnBack}><FaEdit />&ensp;Draft</Button>
                            <Button sx={sellStyle.btnPause}><FaEdit />&ensp;Quotation</Button>
                            <Button sx={sellStyle.btnSus}><FaPause />&ensp;Suspend</Button>
                            <Button sx={sellStyle.btnCred}><FaCheck />&ensp;Credit Sale</Button>
                            <Button sx={sellStyle.btnCard}><FaCreditCard />&ensp;Card</Button>
                            <Button sx={sellStyle.btnMulti}><FaMoneyCheckAlt />&ensp;Multiple Pay</Button>
                            <Button sx={sellStyle.btnCash}><FaMoneyBillAlt />&ensp;Cash</Button>&ensp;
                            <Typography sx={{ marginTop: '5px' }}><b>Total Payable :</b>&ensp; 0.00 </Typography>
                            <Button sx={sellStyle.btnCancel}><FaRegWindowClose />&ensp;Cancel</Button>
                        </Grid>
                        <Grid item md={4} sm={12} xs={12}>
                            <Box sx={{ float: 'right' }}>
                                <Button sx={sellStyle.btnRec}><FaClock />&ensp;Recent Transactions</Button>
                            </Box>
                        </Grid>

                    </Grid>
                    <br /><br />
                </Box>
            </form >


        </Box>

    );
}

export default Poscreate;