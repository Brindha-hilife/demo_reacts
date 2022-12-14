import React, { useState } from 'react';
import { sellStyle } from '../Sellstyle';
import {
    Box, Container, Grid, FormControl, InputLabel, OutlinedInput, Select, MenuItem, Paper, TableCell, TextareaAutosize, InputAdornment,
    Typography, FormGroup, FormControlLabel, Checkbox, Button, Table, Tooltip, IconButton, TableContainer, TableHead, TableRow, TableBody
} from '@mui/material';
import { FcInfo } from "react-icons/fc";
import { FaInfo, FaExternalLinkAlt, FaSearch, FaUserAlt, FaUserSecret, FaTable } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { makeStyles, } from "@material-ui/core/styles";
import Draftsearchplus from './Draftsearchmod';
import Draftcusmod from './Draftcusmod';

function Draftscreate() {

    // ******** Text field ******** //
    const [draftAdd, setDraftAdd] = useState({
        draftAddLoc: "", draftAddSelect: "", draftAddPayTerm: "", draftAddPaySelect: "",
        draftAddStatus: "", draftAddInvoiceSh: "", draftAddInvoiceNo: "", draftAddTable: "",
        draftAddStaff: "", draftAddDisType: "", draftAddDisAmt: "", draftAddOrdTax: "",
        draftAddSell: "", draftAddShipDet: "", draftAddShipAdd: "", draftAddShipChrg: "", draftAddShipStatus: "",
        draftAddDeliveredTo: "", draftAddAmt: "", draftAddPayMethod: "", draftAddPayAcc: "", draftAddCrdNo: "", draftAddCrdName: "",
        draftAddCrdTransNo: "", draftAddCrdType: "", draftAddMonth: "", draftAddYear: "", draftAddSecCode: "", draftAddChequeNo: "",
        draftAddBankAccNo: "", draftAddTrans: "", draftAddPayNote: "",
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
        <Box>
            <form action=''>
                <Container sx={{ paddingTop: '10px', }}>
                    <Grid display="flex">
                        <Typography variant="h6" sx={{ color: '#7009ab' }}>Add Draft</Typography>&ensp;
                    </Grid><br />
                    <Box>
                        <Grid container >
                            <Grid item md={4} sm={6} xs={12} sx={{ width: '350px' }}>
                                <Grid sx={{ display: 'flex' }}  >
                                    <Grid sx={sellStyle.spanLoc}><LocationOnIcon /></Grid>
                                    <FormControl size="small" fullWidth sx={{ display: 'flex' }}>
                                        <InputLabel id="demo-select-small">xxx</InputLabel>
                                        <Select
                                            labelId="demo-select-small"
                                            id="demo-select-small"
                                            value={draftAdd.draftAddLoc}
                                            onChange={(e) => { setDraftAdd({ ...draftAdd, DraftAddLoc: e.target.value }) }}
                                            label="xxx"
                                            fullWidth
                                        >
                                            <MenuItem value={1}>xxx</MenuItem>
                                            <MenuItem value={2}>yyy</MenuItem>
                                        </Select>
                                    </FormControl>
                                    <Grid sx={sellStyle.spanInfoIcons}>
                                        <Tooltip classes={{ arrow: classes.arrow, tooltip: classes.tooltip }} title="Business location from where your want to sell" arrow>
                                            <IconButton>
                                                <FcInfo />
                                            </IconButton>
                                        </Tooltip>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item md={8}></Grid>
                        </Grid>
                    </Box>
                </Container><br />
                <Box sx={sellStyle.subContainer}>
                    <Grid container spacing={2} sx={sellStyle.textInput}>
                        <Grid item md={4} sm={6} xs={12}>
                            <Grid sx={{ display: 'flex' }}  >
                                <Grid sx={sellStyle.spanIcons}><FaExternalLinkAlt /></Grid>
                                <FormControl size="small" fullWidth sx={{ display: 'flex' }}>
                                    <InputLabel id="demo-select-small">Select types of service</InputLabel>
                                    <Select
                                        labelId="demo-select-small"
                                        id="demo-select-small"
                                        value={draftAdd.draftAddSelect}
                                        onChange={(e) => { setDraftAdd({ ...draftAdd, DraftAddSelect: e.target.value }) }}
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
                        <Grid item md={4} sm={6} xs={12}></Grid>
                        <Grid item md={4} sm={6} xs={12}>
                            <FormGroup>
                                <span><FormControlLabel control={<Checkbox />} label="Subscribe?" />
                                    <Tooltip classes={{ arrow: classes.arrow, tooltip: classes.tooltip }} title="If subscribed this invoice will be automatically generated at regular intervals. You can disable this feature in Settings > Business Settings > Modules" arrow>
                                        <IconButton>
                                            <FcInfo />
                                        </IconButton>
                                    </Tooltip>
                                </span>
                            </FormGroup>
                        </Grid>
                        <Grid item md={4} sm={6} xs={12}>
                            <Grid sx={{ display: 'flex' }}  >
                                <Grid sx={sellStyle.spanIcons}><FaUserAlt /></Grid>
                                <FormControl size="small" fullWidth sx={{ display: 'flex' }}>
                                    <InputLabel id="demo-select-small">Customer</InputLabel>
                                    <Select
                                        labelId="demo-select-small"
                                        id="demo-select-small"
                                        // value={draftAdd.draftAddb}
                                        // onChange={(e) => { setDraftAdd({ ...draftAdd, DraftAddbrand: e.target.value }) }}
                                        label="Customer"
                                        fullWidth
                                    >
                                        <MenuItem value={1}>Walk-in Customer</MenuItem>
                                    </Select>
                                </FormControl>
                                <Grid sx={sellStyle.spanIcons}><Draftcusmod /></Grid>
                            </Grid>
                        </Grid>
                        <Grid item md={4} sm={6} xs={12}>
                            <Grid sx={{ display: 'flex' }}  >
                                <Grid sx={{ width: '210px' }}>
                                    <FormControl variant="outlined" size="small" fullWidth>
                                        <InputLabel htmlFor="outlined-adornment-password">Pay Term</InputLabel>
                                        <OutlinedInput
                                            id="outlined-adornment-password"
                                            endAdornment={
                                                <Tooltip classes={{ arrow: classes.arrow, tooltip: classes.tooltip }} title='Payments to be paid for purchases/sales within the given time period. All upcoming or due payments will be displayed in dashboard - Payment Due section' arrow>
                                                    <InputAdornment position="end">
                                                        <IconButton
                                                            aria-label="toggle password visibility"
                                                            edge="end"
                                                            value={draftAdd.draftAddPayTerm}
                                                            onChange={(e) => { setDraftAdd({ ...draftAdd, DraftAddPayTerm: e.target.value }) }}
                                                        >
                                                            <FcInfo />
                                                        </IconButton>
                                                    </InputAdornment>
                                                </Tooltip>
                                            }
                                            label="Pay Term"
                                        />
                                    </FormControl>
                                </Grid>
                                <FormControl size="small" sx={{ display: 'flex', }} fullWidth>
                                    <InputLabel htmlFor="component-outlined" >Please Select</InputLabel>
                                    <Select
                                        labelId="demo-select-small"
                                        id="demo-select-small"
                                        value={draftAdd.draftAddPaySelect}
                                        onChange={(e) => { setDraftAdd({ ...draftAdd, DraftAddPaySelect: e.target.value }) }}
                                        label="Please Select"
                                        fullWidth
                                    >
                                        <MenuItem value={1}><em>Please Select</em></MenuItem>
                                        <MenuItem value={2}>Month</MenuItem>
                                        <MenuItem value={3}>Days</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                        </Grid>
                        <Grid item md={4} sm={6} xs={12}>
                            <FormControl size="small" fullWidth >
                                <InputLabel htmlFor="component-outlined" ></InputLabel>
                                <OutlinedInput
                                    id="component-outlined"
                                    // value={draftAdd.draftAddname}
                                    // onChange={(e) => { setDraftAdd({ ...draftAdd, DraftAddname: e.target.value }) }}
                                    label="Sale Date *"
                                    type='date'
                                />
                            </FormControl>
                        </Grid>


                        <Grid item md={12} sm={12} xs={12}>
                            <Grid container spacing={3}>
                                <Grid item md={4} sm={6} xs={12}>
                                    <Grid display="block">
                                        <Typography variant='subtitle1'><b>Billing Address:</b> <br />Walk-in Customer</Typography>
                                        <br />
                                        <Typography variant='subtitle1'><b>Shipping Address:</b> <br /> Walk-in Customer,</Typography>
                                    </Grid>
                                </Grid>
                                <Grid item md={8} sm={6} xs={12}>
                                    <Grid item md={12} sm={12} xs={12}>
                                        <Grid container spacing={3}>
                                            <Grid item md={6} sm={6} xs={12}>
                                                <FormControl size="small" sx={{ display: 'flex', }} fullWidth>
                                                    <InputLabel htmlFor="component-outlined" >Invoice Scheme</InputLabel>
                                                    <Select
                                                        labelId="demo-select-small"
                                                        id="demo-select-small"
                                                        value={draftAdd.draftAddInvoiceSh}
                                                        onChange={(e) => { setDraftAdd({ ...draftAdd, DraftAddInvoiceSh: e.target.value }) }}
                                                        label="Invoice Scheme"
                                                        fullWidth
                                                    >
                                                        <MenuItem value={1}><em>Please Select</em></MenuItem>
                                                        <MenuItem value={2}>Defaul</MenuItem>
                                                    </Select>
                                                </FormControl>
                                            </Grid>
                                            <Grid item md={6} sm={6} xs={12}>
                                                <FormControl size="small" fullWidth >
                                                    <InputLabel htmlFor="component-outlined" >Invoice No</InputLabel>
                                                    <OutlinedInput
                                                        id="component-outlined"
                                                        value={draftAdd.draftAddInvoiceNo}
                                                        onChange={(e) => { setDraftAdd({ ...draftAdd, DraftAddInvoiceNo: e.target.value }) }}
                                                        label="Invoice No"
                                                    />
                                                </FormControl>
                                                <Typography variant='body2' sx={{ opacity: '0.9', mt: 1 }}>Keep blank to auto generate</Typography>
                                            </Grid>
                                            <Grid item md={12} sm={12} xs={12}>
                                                <Grid item md={6} sm={12} xs={12}>
                                                    <FormControl size="small" fullWidth>
                                                        <Button component="label" sx={sellStyle.uploadBtn}> Upload File
                                                            <input type="file" hidden />
                                                        </Button>
                                                        <Typography variant='body2' sx={{ opacity: '0.9', mt: 1 }}>
                                                            Max File size: 5MB <br />
                                                            Allowed File: .pdf, .csv, .zip, .doc, .docx, .jpeg, .jpg, .png
                                                        </Typography>
                                                    </FormControl>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
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
                                        value={draftAdd.draftAddTable}
                                        onChange={(e) => { setDraftAdd({ ...draftAdd, DraftAddTable: e.target.value }) }}
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
                                        value={draftAdd.draftAddStaff}
                                        onChange={(e) => { setDraftAdd({ ...draftAdd, DraftAddStaff: e.target.value }) }}
                                        label="Select Service Staff"
                                        fullWidth
                                    >
                                        <MenuItem value={1}>Select Service Staff</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                        </Grid>

                    </Grid>
                </Box><br />
                <Box sx={sellStyle.subContainer} style={{ minHeight: '300px' }}>
                    <Grid container style={{ justifyContent: "center", }} sx={sellStyle.textInput}>
                        <Grid md={8} sx={12} xs={12}>
                            <Grid sx={{ display: 'flex' }}  >
                                <Grid sx={sellStyle.spanIcons}>
                                    < FaSearch />
                                </Grid>
                                <FormControl size="small" fullWidth >
                                    <InputLabel id="demo-select-small">Enter Product name / SKU / Scan bar code</InputLabel>
                                    <OutlinedInput
                                        id="component-outlined"
                                        value={draftAdd.draftAddbrand}
                                        onChange={(e) => { setDraftAdd({ ...draftAdd, DraftAddbrand: e.target.value }) }}
                                        type="search"
                                        label="Enter Product name / SKU / Scan bar code"
                                    />
                                </FormControl>
                                <Draftsearchplus />
                            </Grid>
                        </Grid>
                    </Grid>
                    <br />
                    <TableContainer component={Paper} sx={sellStyle.tablecontainer}>
                        <Table aria-label="customized table" id="">
                            <TableHead >
                                <TableRow >
                                    <TableCell sx={sellStyle.tableHead}>Product</TableCell>
                                    <TableCell sx={sellStyle.tableHead}>Quantity</TableCell>
                                    <TableCell sx={sellStyle.tableHead}>Unit Price</TableCell>
                                    <TableCell sx={sellStyle.tableHead}>Discount</TableCell>
                                    <TableCell sx={sellStyle.tableHead}>Subtotal</TableCell>
                                    <TableCell sx={sellStyle.tableHead}><AiOutlineClose /></TableCell>
                                </TableRow>
                            </TableHead><br />
                            <TableBody>
                                <TableRow>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                    <TableCell align="right"><b>Items:</b> 0.00</TableCell>
                                    <TableCell align="right"><b>Total:</b> 0.00</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer><br />
                </Box><br />
                <Box sx={sellStyle.subContainer}>
                    <Grid container spacing={3} sx={sellStyle.textInput}>
                        <Grid item md={4} sm={6} xs={12}>
                            <Grid sx={{ display: 'flex' }}  >
                                <Grid sx={sellStyle.spanIcons}><FaInfo /></Grid>
                                <FormControl size="small" fullWidth sx={{ display: 'flex' }}>
                                    <InputLabel id="demo-select-small">Discount Type *</InputLabel>
                                    <Select
                                        labelId="demo-select-small"
                                        id="demo-select-small"
                                        value={draftAdd.draftAddDisType}
                                        onChange={(e) => { setDraftAdd({ ...draftAdd, DraftAddDisType: e.target.value }) }}
                                        label="Discount Type *"
                                        fullWidth
                                    >
                                        <MenuItem value=""><em>Please Select</em></MenuItem>
                                        <MenuItem value={1}>Fixed</MenuItem>
                                        <MenuItem value={2}>Percentage</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                        </Grid>
                        <Grid item md={4} sm={6} xs={12}>
                            <Grid sx={{ display: 'flex' }}  >
                                <Grid sx={sellStyle.spanIcons}><FaInfo /></Grid>
                                <FormControl size="small" fullWidth >
                                    <InputLabel htmlFor="component-outlined" >Discount Amount *</InputLabel>
                                    <OutlinedInput
                                        id="component-outlined"
                                        value={draftAdd.draftAddDisAmt}
                                        onChange={(e) => { setDraftAdd({ ...draftAdd, DraftAddDisAmt: e.target.value }) }}
                                        label="Discount Amount *"
                                    />
                                </FormControl>
                            </Grid>
                        </Grid>
                        <Grid item md={4} sm={6} xs={12}>
                            <Grid display="block">
                                <Typography variant='subtitle1'><b>Discount Amount:</b> (-) 0.00</Typography>
                                <br />
                                <Typography variant='subtitle1'><b>Order Tax:</b> (+) 0.00</Typography>
                            </Grid>
                        </Grid>
                        <Grid item md={4} sm={6} xs={12}>
                            <Grid sx={{ display: 'flex' }}  >
                                <Grid sx={sellStyle.spanIcons}><FaInfo /></Grid>
                                <FormControl size="small" fullWidth sx={{ display: 'flex' }}>
                                    <InputLabel id="demo-select-small">Order Tax *</InputLabel>
                                    <Select
                                        labelId="demo-select-small"
                                        id="demo-select-small"
                                        value={draftAdd.draftAddOrdTax}
                                        onChange={(e) => { setDraftAdd({ ...draftAdd, DraftAddOrdTax: e.target.value }) }}
                                        label="Order Tax *"
                                        fullWidth
                                    >
                                        <MenuItem value=""><em>Please Select</em></MenuItem>
                                        <MenuItem value={1}>Fixed</MenuItem>
                                        <MenuItem value={2}>Percentage</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                        </Grid>
                        <Grid item md={12} sm={12} xs={12}>
                            <InputLabel id="demo-select-small" sx={{ m: 1 }}>Sell Note</InputLabel>
                            <FormControl size="small" fullWidth >
                                <TextareaAutosize aria-label="minimum height" minRows={3} style={{ border: '1px solid #b97df0' }}
                                    value={draftAdd.draftAddSell}
                                    onChange={(e) => { setDraftAdd({ ...draftAdd, DraftAddSell: e.target.value }) }}
                                />
                            </FormControl>
                        </Grid>
                    </Grid>
                </Box><br />

                <Box sx={sellStyle.subContainer}>
                    <Grid container spacing={3} sx={sellStyle.textInput}>
                        <Grid item md={4} sm={6} xs={12}>
                            <InputLabel id="demo-select-small" sx={{ m: 1 }}>Shipping Details</InputLabel>
                            <FormControl size="small" fullWidth >
                                <TextareaAutosize aria-label="minimum height" placeholder='Shipping Details' minRows={3} style={{ border: '1px solid #b97df0' }}
                                    value={draftAdd.draftAddShipDet}
                                    onChange={(e) => { setDraftAdd({ ...draftAdd, DraftAddShipDet: e.target.value }) }} />
                            </FormControl>
                        </Grid>
                        <Grid item md={4} sm={6} xs={12}>
                            <InputLabel id="demo-select-small" sx={{ m: 1 }}>Shipping Address</InputLabel>
                            <FormControl size="small" fullWidth >
                                <TextareaAutosize aria-label="minimum height" placeholder='Shipping Address' minRows={3} style={{ border: '1px solid #b97df0' }}
                                    value={draftAdd.draftAddShipAdd}
                                    onChange={(e) => { setDraftAdd({ ...draftAdd, DraftAddShipAdd: e.target.value }) }} />
                            </FormControl>
                        </Grid>
                        <Grid item md={4} sm={6} xs={12} sx={{ paddingTop: '64px !important' }}>
                            <Grid sx={{ display: 'flex' }}  >
                                <Grid sx={sellStyle.spanIcons}><FaInfo /></Grid>
                                <FormControl size="small" fullWidth >
                                    <InputLabel htmlFor="component-outlined" >Shipping Charges</InputLabel>
                                    <OutlinedInput
                                        id="component-outlined"
                                        value={draftAdd.draftAddShipChrg}
                                        onChange={(e) => { setDraftAdd({ ...draftAdd, DraftAddShipChrg: e.target.value }) }}
                                        label="Shipping Charges"
                                    />
                                </FormControl>
                            </Grid>
                        </Grid>
                        <Grid item md={4} sm={6} xs={12}>
                            <FormControl size="small" fullWidth sx={{ display: 'flex' }}>
                                <InputLabel id="demo-select-small">Shipping Status</InputLabel>
                                <Select
                                    labelId="demo-select-small"
                                    id="demo-select-small"
                                    value={draftAdd.draftAddShipStatus}
                                    onChange={(e) => { setDraftAdd({ ...draftAdd, DraftAddShipStatus: e.target.value }) }}
                                    label="Shipping Status"
                                    fullWidth
                                >
                                    <MenuItem value=""><em>Please Select</em></MenuItem>
                                    <MenuItem value={1}>Ordered</MenuItem>
                                    <MenuItem value={2}>Packed</MenuItem>
                                    <MenuItem value={3}>Shipped</MenuItem>
                                    <MenuItem value={4}>Delivered</MenuItem>
                                    <MenuItem value={5}>Cancelled</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item md={4} sm={6} xs={12}>
                            <FormControl size="small" fullWidth >
                                <InputLabel htmlFor="component-outlined" >Delivered to</InputLabel>
                                <OutlinedInput
                                    id="component-outlined"
                                    value={draftAdd.draftAddDeliveredTo}
                                    onChange={(e) => { setDraftAdd({ ...draftAdd, DraftAddDeliveredTo: e.target.value }) }}
                                    label="Delivered To"
                                />
                            </FormControl>
                        </Grid>
                        <Grid item md={4} sm={6} xs={12}>
                            <FormControl size="small" fullWidth>
                                <Button component="label" sx={sellStyle.uploadBtn}> Upload File
                                    <input type="file" hidden />
                                </Button>
                                <Typography variant='body2' sx={{ opacity: '0.9', mt: 1 }}>
                                    Max File size: 5MB <br />
                                    Allowed File: .pdf, .csv, .zip, .doc, .docx, .jpeg, .jpg, .png
                                </Typography>
                            </FormControl>
                        </Grid>
                        <Grid item md={8} sm={6} sx={12}></Grid>
                        <Grid item md={4} sm={6} sx={12}>
                            <Typography variant='subtitle1'><b>Total Payable:</b> 0.00</Typography>
                        </Grid>


                    </Grid>
                </Box>
                <Grid container sx={sellStyle.gridContainer}>
                    <Grid >
                        <Button sx={sellStyle.buttonAdd}>Save And Print</Button>
                        <Button sx={sellStyle.buttonAdd}>Save  </Button>
                    </Grid>
                </Grid>
            </form >
        </Box >
    );
}

export default Draftscreate;