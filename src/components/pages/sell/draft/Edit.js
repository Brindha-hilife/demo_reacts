import React, { useState } from 'react';
import { userStyle } from '../../PageStyle';
import {
    Box, Container, Grid, FormControl, InputLabel, OutlinedInput, Select, MenuItem, Paper, TableCell, TextareaAutosize, InputAdornment,
    Typography, FormGroup, FormControlLabel, Checkbox, Button, Table, Tooltip, IconButton, TableContainer, TableHead, TableRow, TableBody
} from '@mui/material';
import { FcInfo } from "react-icons/fc";
import { FaInfo, FaExternalLinkAlt, FaSearch, FaUserAlt, FaUserSecret, FaTable } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Draftsearchplus from './Draftsearchprodut';
import Draftcusmod from './Draftcustomer';
import Sidebar from '../../../header/Sidebar';
import Footer from '../../../footer/Footer';
import { StyledTableRow, StyledTableCell} from '../../Table';

const Drafteditlist = ()=>{
    // ******** Text field ******** //
    const [draftEdit, setDraftEdit] = useState({
        draftEditLoc: "", draftEditSelect: "", draftEditPayTerm: "", draftEditPaySelect: "",
        draftEditStatus: "", draftEditInvoiceSh: "", draftEditInvoiceNo: "", draftEditTable: "",
        draftEditStaff: "", draftEditDisType: "", draftEditDisAmt: "", draftEditOrdTax: "",
        draftEditSell: "", draftEditShipDet: "", draftEditShipAdd: "", draftEditShipChrg: "", draftEditShipStatus: "",
        draftEditDeliveredTo: "", draftEditAmt: "", draftEditPayMethod: "", draftEditPayAcc: "", draftEditCrdNo: "", draftEditCrdName: "",
        draftEditCrdTransNo: "", draftEditCrdType: "", draftEditMonth: "", draftEditYear: "", draftEditSecCode: "", draftEditChequeNo: "",
        draftEditBankAccNo: "", draftEditTrans: "", draftEditPayNote: "",
    });



    return (
        <Box>
            <form action=''>
                <Grid display="flex">
                    <Typography sx={userStyle.HeaderText}>Edit Draft</Typography>&ensp;
                </Grid>
                <Box sx={userStyle.container}>
                    <Grid container spacing={2} sx={userStyle.textInput}>
                    <Grid item md={4} sm={6} xs={12} sx={{ width: '350px' }}>
                                <Grid sx={{ display: 'flex' }}  >
                                    <Grid sx={userStyle.spanIcons}><LocationOnIcon /></Grid>
                                    <FormControl size="small" fullWidth sx={{ display: 'flex' }}>
                                        <InputLabel id="demo-select-small">xxx</InputLabel>
                                        <Select
                                            labelId="demo-select-small"
                                            id="demo-select-small"
                                            value={draftEdit.draftEditLoc}
                                            onChange={(e) => { setDraftEdit({ ...draftEdit, DraftEditLoc: e.target.value }) }}
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
                                        value={draftEdit.draftEditSelect}
                                        onChange={(e) => { setDraftEdit({ ...draftEdit, DraftEditSelect: e.target.value }) }}
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
                                        // value={draftEdit.draftEditb}
                                        // onChange={(e) => { setDraftEdit({ ...draftEdit, DraftEditbrand: e.target.value }) }}
                                        label="Customer"
                                        fullWidth
                                    >
                                        <MenuItem value={1}>Walk-in Customer</MenuItem>
                                    </Select>
                                </FormControl>
                                <Grid sx={userStyle.spanIcons}><Draftcusmod /></Grid>
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
                                                            value={draftEdit.draftEditPayTerm}
                                                            onChange={(e) => { setDraftEdit({ ...draftEdit, DraftEditPayTerm: e.target.value }) }}
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
                                        value={draftEdit.draftEditPaySelect}
                                        onChange={(e) => { setDraftEdit({ ...draftEdit, DraftEditPaySelect: e.target.value }) }}
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
                                    // value={draftEdit.draftEditname}
                                    // onChange={(e) => { setDraftEdit({ ...draftEdit, DraftEditname: e.target.value }) }}
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
                                                        value={draftEdit.draftEditInvoiceSh}
                                                        onChange={(e) => { setDraftEdit({ ...draftEdit, DraftEditInvoiceSh: e.target.value }) }}
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
                                                        value={draftEdit.draftEditInvoiceNo}
                                                        onChange={(e) => { setDraftEdit({ ...draftEdit, DraftEditInvoiceNo: e.target.value }) }}
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
                                        value={draftEdit.draftEditTable}
                                        onChange={(e) => { setDraftEdit({ ...draftEdit, DraftEditTable: e.target.value }) }}
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
                                        value={draftEdit.draftEditStaff}
                                        onChange={(e) => { setDraftEdit({ ...draftEdit, DraftEditStaff: e.target.value }) }}
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
                                        value={draftEdit.draftEditbrand}
                                        onChange={(e) => { setDraftEdit({ ...draftEdit, DraftEditbrand: e.target.value }) }}
                                        type="search"
                                        label="Enter Product name / SKU / Scan bar code"
                                    />
                                </FormControl>
                                <Draftsearchplus />
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
                                        value={draftEdit.draftEditDisType}
                                        onChange={(e) => { setDraftEdit({ ...draftEdit, DraftEditDisType: e.target.value }) }}
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
                                        value={draftEdit.draftEditDisAmt}
                                        onChange={(e) => { setDraftEdit({ ...draftEdit, DraftEditDisAmt: e.target.value }) }}
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
                                        value={draftEdit.draftEditOrdTax}
                                        onChange={(e) => { setDraftEdit({ ...draftEdit, DraftEditOrdTax: e.target.value }) }}
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
                                    value={draftEdit.draftEditSell}
                                    onChange={(e) => { setDraftEdit({ ...draftEdit, DraftEditSell: e.target.value }) }}
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
                                    value={draftEdit.draftEditShipDet}
                                    onChange={(e) => { setDraftEdit({ ...draftEdit, DraftEditShipDet: e.target.value }) }} />
                            </FormControl>
                        </Grid>
                        <Grid item md={4} sm={6} xs={12}>
                            <InputLabel id="demo-select-small" sx={{ m: 1 }}>Shipping Address</InputLabel>
                            <FormControl size="small" fullWidth >
                                <TextareaAutosize aria-label="minimum height" placeholder='Shipping Address' minRows={3} style={{ border: '1px solid #b97df0' }}
                                    value={draftEdit.draftEditShipAdd}
                                    onChange={(e) => { setDraftEdit({ ...draftEdit, DraftEditShipAdd: e.target.value }) }} />
                            </FormControl>
                        </Grid>
                        <Grid item md={4} sm={6} xs={12} sx={{ paddingTop: '64px !important' }}>
                            <Grid sx={{ display: 'flex' }}  >
                                <Grid sx={userStyle.spanIcons}><FaInfo /></Grid>
                                <FormControl size="small" fullWidth >
                                    <InputLabel htmlFor="component-outlined" >Shipping Charges</InputLabel>
                                    <OutlinedInput
                                        id="component-outlined"
                                        value={draftEdit.draftEditShipChrg}
                                        onChange={(e) => { setDraftEdit({ ...draftEdit, DraftEditShipChrg: e.target.value }) }}
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
                                    value={draftEdit.draftEditShipStatus}
                                    onChange={(e) => { setDraftEdit({ ...draftEdit, DraftEditShipStatus: e.target.value }) }}
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
                                    value={draftEdit.draftEditDeliveredTo}
                                    onChange={(e) => { setDraftEdit({ ...draftEdit, DraftEditDeliveredTo: e.target.value }) }}
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

const Draftedit = () => {
  return (
    <>
           <Box sx={{display:'flex', }} >
                <Sidebar />
                <Box sx={{width:'100%',overflowX:'hidden'}}>
                    <Box component="main" sx={{ padding: '30px',}}><br /><br />
                        <Drafteditlist /><br /><br />
                        <Footer />
                    </Box>
                </Box>
            </Box>
         </>
  );
}

export default Draftedit;