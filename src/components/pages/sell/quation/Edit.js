import React, { useState } from 'react';
import { userStyle } from '../../PageStyle';
import {
    Box, Grid, FormControl, InputLabel, OutlinedInput, Select, MenuItem, Paper, TableCell, TextareaAutosize, InputAdornment,
    Typography, FormGroup, FormControlLabel, Checkbox, Button, Table, Tooltip, IconButton, TableContainer, TableHead, TableRow, TableBody
} from '@mui/material';
import { FcInfo } from "react-icons/fc";
import { FaInfo, FaExternalLinkAlt, FaSearch, FaUserAlt, FaUserSecret, FaTable } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Quotsearchplus from './Quotationsearchproduct';
import Quotcusmod from './Quotationcustomer';
import Sidebar from '../../../header/Sidebar';
import Footer from '../../../footer/Footer';
import { StyledTableRow, StyledTableCell} from '../../Table';

const Quotationeditlist = ()=>{
    // ******** Text field ******** //
    const [quotEdit, setQuotEdit] = useState({
        quotEditLoc: "", quotEditSelect: "", quotEditPayTerm: "", quotEditPaySelect: "",
        quotEditStatus: "", quotEditInvoiceSh: "", quotEditInvoiceNo: "", quotEditTable: "",
        quotEditStaff: "", quotEditDisType: "", quotEditDisAmt: "", quotEditOrdTax: "",
        quotEditSell: "", quotEditShipDet: "", quotEditShipAdd: "", quotEditShipChrg: "", quotEditShipStatus: "",
        quotEditDeliveredTo: "", quotEditAmt: "", quotEditPayMethod: "", quotEditPayAcc: "", quotEditCrdNo: "", quotEditCrdName: "",
        quotEditCrdTransNo: "", quotEditCrdType: "", quotEditMonth: "", quotEditYear: "", quotEditSecCode: "", quotEditChequeNo: "",
        quotEditBankAccNo: "", quotEditTrans: "", quotEditPayNote: "",
    });

 
    return (
        <Box>
            <form action=''>
                <Grid display="flex">
                    <Typography sx={userStyle.HeaderText}>Edit Quotation</Typography>&ensp;
                </Grid>
                <Box sx={userStyle.container}>
                    <Grid container spacing={2} sx={userStyle.textInput}>
                    <Grid item md={4} sm={6} xs={12} >
                                <Grid sx={{ display: 'flex' }}  >
                                    <Grid sx={userStyle.spanIcons}><LocationOnIcon /></Grid>
                                    <FormControl size="small" fullWidth sx={{ display: 'flex' }}>
                                        <InputLabel id="demo-select-small">xxx</InputLabel>
                                        <Select
                                            labelId="demo-select-small"
                                            id="demo-select-small"
                                            value={quotEdit.quotEditLoc}
                                            onChange={(e) => { setQuotEdit({ ...quotEdit, QuotEditLoc: e.target.value }) }}
                                            label="xxx"
                                            fullWidth
                                        >
                                            <MenuItem value={1}>xxx</MenuItem>
                                            <MenuItem value={2}>yyy</MenuItem>
                                        </Select>
                                    </FormControl>
                                    <Grid sx={userStyle.spanInfoIcons}>
                                        {/* <Tooltip classes={{ arrow: classes.arrow, tooltip: classes.tooltip }} title="Business location from where your want to sell" arrow> */}
                                            <IconButton>
                                                <FcInfo />
                                            </IconButton>
                                        {/* </Tooltip> */}
                                    </Grid>
                                </Grid><br /><br />
                            </Grid>
                            <Grid item md={8}></Grid>
                        <Grid item md={4} sm={6} xs={12}>
                            <Grid sx={{ display: 'flex' }}  >
                                <Grid sx={userStyle.spanIcons}><FaExternalLinkAlt /></Grid>
                                <FormControl size="small" fullWidth sx={{ display: 'flex' }}>
                                    <InputLabel id="demo-select-small">Select types of service</InputLabel>
                                    <Select
                                        labelId="demo-select-small"
                                        id="demo-select-small"
                                        value={quotEdit.quotEditSelect}
                                        onChange={(e) => { setQuotEdit({ ...quotEdit, QuotEditSelect: e.target.value }) }}
                                        label="Select types of service"
                                        fullWidth
                                    >
                                        <MenuItem value={1}>Select types of service</MenuItem>
                                    </Select>
                                </FormControl>
                                <Grid sx={userStyle.spanInfoIcons}>
                                    {/* <Tooltip classes={{ arrow: classes.arrow, tooltip: classes.tooltip }} title="Type of service means services like dine-in, parcel, home delivery, third party delivery etx." arrow> */}
                                        <IconButton>
                                            <FcInfo />
                                        </IconButton>
                                    {/* </Tooltip> */}
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item md={4} sm={6} xs={12}></Grid>
                        <Grid item md={4} sm={6} xs={12}>
                            <FormGroup>
                                <span><FormControlLabel control={<Checkbox />} label="Subscribe?" />
                                    {/* <Tooltip classes={{ arrow: classes.arrow, tooltip: classes.tooltip }} title="If subscribed this invoice will be automatically generated at regular intervals. You can disable this feature in Settings > Business Settings > Modules" arrow> */}
                                        <IconButton>
                                            <FcInfo />
                                        </IconButton>
                                    {/* </Tooltip> */}
                                </span>
                            </FormGroup>
                        </Grid>
                        <Grid item md={4} sm={6} xs={12}>
                            <Grid sx={{ display: 'flex' }}  >
                                <Grid sx={userStyle.spanIcons}><FaUserAlt /></Grid>
                                <FormControl size="small" fullWidth sx={{ display: 'flex' }}>
                                    <InputLabel id="demo-select-small">Customer</InputLabel>
                                    <Select
                                        labelId="demo-select-small"
                                        id="demo-select-small"
                                        // value={quotEdit.quotEditb}
                                        // onChange={(e) => { setQuotEdit({ ...quotEdit, QuotEditbrand: e.target.value }) }}
                                        label="Customer"
                                        fullWidth
                                    >
                                        <MenuItem value={1}>Walk-in Customer</MenuItem>
                                    </Select>
                                </FormControl>
                                <Grid sx={userStyle.spanIcons}><Quotcusmod /></Grid>
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
                                                // <Tooltip classes={{ arrow: classes.arrow, tooltip: classes.tooltip }} title='Payments to be paid for purchases/sales within the given time period. All upcoming or due payments will be displayed in dashboard - Payment Due section' arrow>
                                                    <InputAdornment position="end">
                                                        <IconButton
                                                            aria-label="toggle password visibility"
                                                            edge="end"
                                                            value={quotEdit.quotEditPayTerm}
                                                            onChange={(e) => { setQuotEdit({ ...quotEdit, QuotEditPayTerm: e.target.value }) }}
                                                        >
                                                            <FcInfo />
                                                        </IconButton>
                                                    </InputAdornment>
                                                // </Tooltip>
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
                                        value={quotEdit.quotEditPaySelect}
                                        onChange={(e) => { setQuotEdit({ ...quotEdit, QuotEditPaySelect: e.target.value }) }}
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
                                    // value={quotEdit.quotEditname}
                                    // onChange={(e) => { setQuotEdit({ ...quotEdit, QuotEditname: e.target.value }) }}
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
                                                        value={quotEdit.quotEditInvoiceSh}
                                                        onChange={(e) => { setQuotEdit({ ...quotEdit, QuotEditInvoiceSh: e.target.value }) }}
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
                                                        value={quotEdit.quotEditInvoiceNo}
                                                        onChange={(e) => { setQuotEdit({ ...quotEdit, QuotEditInvoiceNo: e.target.value }) }}
                                                        label="Invoice No"
                                                    />
                                                </FormControl>
                                                <Typography variant='body2' sx={{ opacity: '0.9', mt: 1 }}>Keep blank to auto generate</Typography>
                                            </Grid>
                                            <Grid item md={12} sm={12} xs={12}>
                                                <Grid item md={6} sm={12} xs={12}>
                                                    <FormControl size="small" fullWidth>
                                                        <Button component="label" sx={userStyle.uploadBtn}> Upload File
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
                                <Grid sx={userStyle.spanIcons}><FaTable /></Grid>
                                <FormControl size="small" fullWidth sx={{ display: 'flex' }}>
                                    <InputLabel id="demo-select-small">Select Table</InputLabel>
                                    <Select
                                        labelId="demo-select-small"
                                        id="demo-select-small"
                                        value={quotEdit.quotEditTable}
                                        onChange={(e) => { setQuotEdit({ ...quotEdit, QuotEditTable: e.target.value }) }}
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
                                <Grid sx={userStyle.spanIcons}><FaUserSecret /></Grid>
                                <FormControl size="small" fullWidth sx={{ display: 'flex' }}>
                                    <InputLabel id="demo-select-small">Select Service Staff</InputLabel>
                                    <Select
                                        labelId="demo-select-small"
                                        id="demo-select-small"
                                        value={quotEdit.quotEditStaff}
                                        onChange={(e) => { setQuotEdit({ ...quotEdit, QuotEditStaff: e.target.value }) }}
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
                <Box sx={userStyle.container} style={{ minHeight: '300px' }}>
                    <Grid container style={{ justifyContent: "center", }} sx={userStyle.textInput}>
                        <Grid md={8} sx={12} xs={12}>
                            <Grid sx={{ display: 'flex' }}  >
                                <Grid sx={userStyle.spanIcons}>
                                    < FaSearch />
                                </Grid>
                                <FormControl size="small" fullWidth >
                                    <InputLabel id="demo-select-small">Enter Product name / SKU / Scan bar code</InputLabel>
                                    <OutlinedInput
                                        id="component-outlined"
                                        value={quotEdit.quotEditbrand}
                                        onChange={(e) => { setQuotEdit({ ...quotEdit, QuotEditbrand: e.target.value }) }}
                                        type="search"
                                        label="Enter Product name / SKU / Scan bar code"
                                    />
                                </FormControl>
                                <Quotsearchplus />
                            </Grid>
                        </Grid>
                    </Grid>
                    <br />
                    <TableContainer component={Paper} sx={userStyle.tablecontainer}>
                        <Table aria-label="customized table" id="">
                            <TableHead >
                                <StyledTableRow >
                                    <StyledTableCell >Product</StyledTableCell>
                                    <StyledTableCell >Quantity</StyledTableCell>
                                    <StyledTableCell >Unit Price</StyledTableCell>
                                    <StyledTableCell >Discount</StyledTableCell>
                                    <StyledTableCell >Subtotal</StyledTableCell>
                                    <StyledTableCell ><AiOutlineClose /></StyledTableCell>
                                </StyledTableRow>
                            </TableHead>
                            <TableBody>
                                <StyledTableRow>
                                    <StyledTableCell></StyledTableCell>
                                    <StyledTableCell></StyledTableCell>
                                    <StyledTableCell></StyledTableCell>
                                    <StyledTableCell></StyledTableCell>
                                    <StyledTableCell align="right"><b>Items:</b> 0.00</StyledTableCell>
                                    <StyledTableCell align="right"><b>Total:</b> 0.00</StyledTableCell>
                                </StyledTableRow>
                            </TableBody>
                        </Table>
                    </TableContainer><br />
                </Box><br />
                <Box sx={userStyle.container}>
                    <Grid container spacing={3} sx={userStyle.textInput}>
                        <Grid item md={4} sm={6} xs={12}>
                            <Grid sx={{ display: 'flex' }}  >
                                <Grid sx={userStyle.spanIcons}><FaInfo /></Grid>
                                <FormControl size="small" fullWidth sx={{ display: 'flex' }}>
                                    <InputLabel id="demo-select-small">Discount Type *</InputLabel>
                                    <Select
                                        labelId="demo-select-small"
                                        id="demo-select-small"
                                        value={quotEdit.quotEditDisType}
                                        onChange={(e) => { setQuotEdit({ ...quotEdit, QuotEditDisType: e.target.value }) }}
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
                                <Grid sx={userStyle.spanIcons}><FaInfo /></Grid>
                                <FormControl size="small" fullWidth >
                                    <InputLabel htmlFor="component-outlined" >Discount Amount *</InputLabel>
                                    <OutlinedInput
                                        id="component-outlined"
                                        value={quotEdit.quotEditDisAmt}
                                        onChange={(e) => { setQuotEdit({ ...quotEdit, QuotEditDisAmt: e.target.value }) }}
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
                                <Grid sx={userStyle.spanIcons}><FaInfo /></Grid>
                                <FormControl size="small" fullWidth sx={{ display: 'flex' }}>
                                    <InputLabel id="demo-select-small">Order Tax *</InputLabel>
                                    <Select
                                        labelId="demo-select-small"
                                        id="demo-select-small"
                                        value={quotEdit.quotEditOrdTax}
                                        onChange={(e) => { setQuotEdit({ ...quotEdit, QuotEditOrdTax: e.target.value }) }}
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
                                    value={quotEdit.quotEditSell}
                                    onChange={(e) => { setQuotEdit({ ...quotEdit, QuotEditSell: e.target.value }) }}
                                />
                            </FormControl>
                        </Grid>
                    </Grid>
                </Box><br />

                <Box sx={userStyle.container}>
                    <Grid container spacing={3} sx={userStyle.textInput}>
                        <Grid item md={4} sm={6} xs={12}>
                            <InputLabel id="demo-select-small" sx={{ m: 1 }}>Shipping Details</InputLabel>
                            <FormControl size="small" fullWidth >
                                <TextareaAutosize aria-label="minimum height" placeholder='Shipping Details' minRows={3} style={{ border: '1px solid #b97df0' }}
                                    value={quotEdit.quotEditShipDet}
                                    onChange={(e) => { setQuotEdit({ ...quotEdit, QuotEditShipDet: e.target.value }) }} />
                            </FormControl>
                        </Grid>
                        <Grid item md={4} sm={6} xs={12}>
                            <InputLabel id="demo-select-small" sx={{ m: 1 }}>Shipping Address</InputLabel>
                            <FormControl size="small" fullWidth >
                                <TextareaAutosize aria-label="minimum height" placeholder='Shipping Address' minRows={3} style={{ border: '1px solid #b97df0' }}
                                    value={quotEdit.quotEditShipAdd}
                                    onChange={(e) => { setQuotEdit({ ...quotEdit, QuotEditShipAdd: e.target.value }) }} />
                            </FormControl>
                        </Grid>
                        <Grid item md={4} sm={6} xs={12} sx={{ paddingTop: '64px !important' }}>
                            <Grid sx={{ display: 'flex' }}  >
                                <Grid sx={userStyle.spanIcons}><FaInfo /></Grid>
                                <FormControl size="small" fullWidth >
                                    <InputLabel htmlFor="component-outlined" >Shipping Charges</InputLabel>
                                    <OutlinedInput
                                        id="component-outlined"
                                        value={quotEdit.quotEditShipChrg}
                                        onChange={(e) => { setQuotEdit({ ...quotEdit, QuotEditShipChrg: e.target.value }) }}
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
                                    value={quotEdit.quotEditShipStatus}
                                    onChange={(e) => { setQuotEdit({ ...quotEdit, QuotEditShipStatus: e.target.value }) }}
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
                                    value={quotEdit.quotEditDeliveredTo}
                                    onChange={(e) => { setQuotEdit({ ...quotEdit, QuotEditDeliveredTo: e.target.value }) }}
                                    label="Delivered To"
                                />
                            </FormControl>
                        </Grid>
                        <Grid item md={4} sm={6} xs={12}>
                            <FormControl size="small" fullWidth>
                                <Button component="label" sx={userStyle.uploadBtn}> Upload File
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
                <Grid container sx={userStyle.gridContainer}>
                    <Grid >
                        <Button sx={userStyle.buttonAdd}>Save And Print</Button>
                        <Button sx={userStyle.buttonAdd}>Save  </Button>
                    </Grid>
                </Grid>
            </form >
        </Box >
    );
}

const Quotationedit = () => {
  return (
    <>
           <Box sx={{display:'flex', }} >
                <Sidebar />
                <Box sx={{width:'100%',overflowX:'hidden'}}>
                    <Box component="main" sx={{ padding: '30px',}}><br /><br />
                        <Quotationeditlist /><br /><br />
                        <Footer />
                    </Box>
                </Box>
            </Box>
         </>
  );
}

export default Quotationedit;