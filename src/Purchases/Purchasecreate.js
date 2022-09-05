import React, { useState } from 'react';
import { purchaseStyle } from './Purchasestyle';
import { styled } from '@mui/material/styles';
import {
    Box, Grid, FormControl, InputLabel, OutlinedInput, Select, MenuItem, Paper, TableCell, InputAdornment, TextareaAutosize,
    Typography, Button, Table, Tooltip, IconButton, TableContainer, TableHead, TableRow, TableBody, tableCellClasses,
} from '@mui/material';
import { FcInfo } from "react-icons/fc";
import { FaInfo, FaSearch, FaMoneyBillAlt, FaUserAlt, FaTrash, FaPlus } from "react-icons/fa";
import { makeStyles, } from "@material-ui/core/styles";
import Purchasecusmod from './Purchasecusmod';
// import {Link} from 'react-router-dom';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';



function Purchasecreate() {

    // ******** Text field ******** //
    const [purchaseAdd, setPurchaseAdd] = useState({
        purchaseAddSupplier: "", purchaseAddRefNo: "", purchaseAddDate: "", purchaseAddPurchaseStatus: "",
        purchaseAddBusinessLoc: "", purchaseAddPayTerm: "", purchaseAddPaySelect: "", purchaseAddSearch: "",
        purchaseAddDisType: "", purchaseAddDisAmt: "", purchaseAddPurTax: "",
        purchaseAddAddNote: "", purchaseAddShipDet: "", purchaseAddAddShipChrg: "",
        purchaseAddDeliveredTo: "", purchaseAddAmt: "", purchaseAddPayMethod: "", purchaseAddPayAcc: "", purchaseAddCrdNo: "", purchaseAddCrdName: "",
        purchaseAddCrdTransNo: "", purchaseAddCrdType: "", purchaseAddMonth: "", purchaseAddYear: "", purchaseAddSecCode: "", purchaseAddChequeNo: "",
        purchaseAddBankAccNo: "", purchaseAddTrans: "", purchaseAddPayNote: "",
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

    // Table Style
    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        // [`&.${tableCellClasses.head}`]: {
        //     backgroundColor: theme.palette.common.white,
        //     color: theme.palette.common.black,
        // },
        [`&.${tableCellClasses.body}`]: {
            fontSize: 14,
        },
    }));
    const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        '&:last-child td, &:last-child th': {
            border: 0,
        },
    }));

    //*** Add Additional Expense Button ***// 
    const [hidden, setHidden] = useState(true);

    //*** Payment Method Dropdown ***//
    const [shownCash, setShownCash] = useState(true);
    const [shownCard, setShownCard] = useState(false);
    const [shownCheque, setShownCheque] = useState(false);
    const [shownBank, setShownBank] = useState(false);
    const [shownCustom1, setShownCustom1] = useState(false);
    const [shownCustom2, setShownCustom2] = useState(false);
    const [shownCustom3, setShownCustom3] = useState(false);
    const [shownCustom4, setShownCustom4] = useState(false);
    const [shownCustom5, setShownCustom5] = useState(false);
    const [shownCustom6, setShownCustom6] = useState(false);
    const [shownCustom7, setShownCustom7] = useState(false);


    return (
        <Box>
            <form action=''>
                <Typography variant="h6" sx={{ color: '#7009ab' }}>Add Purchase</Typography>
                <Box sx={purchaseStyle.container}>
                    <Grid container spacing={3} sx={purchaseStyle.textInput}>
                        <Grid item md={3} sm={6} xs={12}>
                            <Grid sx={{ display: 'flex' }}  >
                                <Grid sx={purchaseStyle.spanIcons}><FaUserAlt /></Grid>
                                <FormControl size="small" fullWidth sx={{ display: 'flex' }}>
                                    <InputLabel id="demo-select-small">Supplier *</InputLabel>
                                    <Select
                                        labelId="demo-select-small"
                                        id="demo-select-small"
                                        value={purchaseAdd.purchaseAddSupplier}
                                        onChange={(e) => { setPurchaseAdd({ ...purchaseAdd, purchaseAddSupplier: e.target.value }) }}
                                        label="Customer"
                                        fullWidth
                                    >
                                        <MenuItem value={1}>Please Select</MenuItem>
                                    </Select>
                                </FormControl>
                                <Grid sx={purchaseStyle.spanIcons}>
                                    <Purchasecusmod />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item md={3} sm={6} xs={12}>
                            <FormControl variant="outlined" size="small" fullWidth>
                                <InputLabel htmlFor="outlined-adornment-password">Reference No</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-password"
                                    endAdornment={
                                        <Tooltip title='Leave empty to autogenerate' classes={{ arrow: classes.arrow, tooltip: classes.tooltip }} arrow>
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    edge="end"
                                                    value={purchaseAdd.purchaseAddRefNo}
                                                    onChange={(e) => { setPurchaseAdd({ ...purchaseAdd, PurchaseAddRefNo: e.target.value }) }}
                                                    type="text"
                                                >
                                                    <FcInfo />
                                                </IconButton>
                                            </InputAdornment>
                                        </Tooltip>
                                    }
                                    label="SKU *"
                                />
                            </FormControl>
                        </Grid>
                        <Grid item md={3} sm={6} xs={12}>
                            <FormControl size="small" fullWidth>
                                <InputLabel htmlFor="component-outlined"></InputLabel>
                                <OutlinedInput
                                    id="component-outlined"
                                    label="Contact Id"
                                    value={purchaseAdd.purchaseAddDate}
                                    onChange={(e) => { setPurchaseAdd({ ...purchaseAdd, purchaseAddDate: e.target.value }) }}
                                    type="date"
                                />
                            </FormControl>
                        </Grid>
                        <Grid item md={3} sm={6} xs={12}>
                            <FormControl size="small" fullWidth>
                                <InputLabel id="demo-select-small">Purchase Status</InputLabel>
                                <Select
                                    labelId="demo-select-small"
                                    id="demo-select-small"
                                    value={purchaseAdd.purchaseAddPurchaseStatus}
                                    onChange={(e) => { setPurchaseAdd({ ...purchaseAdd, PurchaseAddPurchaseStatus: e.target.value }) }}
                                    label="Business Location"
                                >
                                    <MenuItem value="">Please Select </MenuItem>
                                    <MenuItem value={1}>Received</MenuItem>
                                    <MenuItem value={2}>Pending</MenuItem>
                                    <MenuItem value={2}>Ordered</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item md={3} sm={6} xs={12}>
                            <InputLabel id="demo-select-small">Address</InputLabel>
                        </Grid>
                        <Grid item md={3} sm={6} xs={12}>
                            <FormControl size="small" fullWidth>
                                <InputLabel id="demo-select-small">Purchase Status</InputLabel>
                                <Select
                                    labelId="demo-select-small"
                                    id="demo-select-small"
                                    value={purchaseAdd.purchaseAddBusinessLoc}
                                    onChange={(e) => { setPurchaseAdd({ ...purchaseAdd, PurchaseAddBusinessLoc: e.target.value }) }}
                                    label="Business Location"
                                >
                                    <MenuItem value="">All </MenuItem>
                                    <MenuItem value={1}>xxx</MenuItem>
                                    <MenuItem value={2}>yyy</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item md={3} sm={6} xs={12}>
                            <Grid sx={{ display: 'flex' }}  >
                                <Grid sx={{ width: '210px' }}>
                                    <FormControl variant="outlined" size="small" fullWidth>
                                        <InputLabel htmlFor="outlined-adornment-password">Pay Term</InputLabel>
                                        <OutlinedInput
                                            id="outlined-adornment-password"
                                            endAdornment={
                                                <Tooltip title="Payment to be paid for purchases/sales within the given time period. All upcoming
                                                         or due payments will be displayed in dashboard - Payment Due section" classes={{ arrow: classes.arrow, tooltip: classes.tooltip }} arrow>
                                                    <InputAdornment position="end">
                                                        <IconButton
                                                            aria-label="toggle password visibility"
                                                            edge="end"
                                                            value={purchaseAdd.purchaseAddPayTerm}
                                                            onChange={(e) => { setPurchaseAdd({ ...purchaseAdd, PurchaseAddPayTerm: e.target.value }) }}
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
                                <FormControl size="small" fullWidth sx={{ display: 'flex' }}>
                                    <InputLabel id="demo-select-small">Please Select</InputLabel>
                                    <Select
                                        labelId="demo-select-small"
                                        id="demo-select-small"
                                        label="Please Select"
                                        value={purchaseAdd.purchaseAddPaySelect}
                                        onChange={(e) => { setPurchaseAdd({ ...purchaseAdd, PurchaseAddPaySelect: e.target.value }) }}
                                        fullWidth
                                    >
                                        <MenuItem value="">
                                            <em>Please Select</em>
                                        </MenuItem>
                                        <MenuItem value={1}>month</MenuItem>
                                        <MenuItem value={2}>Days</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                        </Grid>
                        <Grid item md={3} sm={6} xs={12}>
                            <FormControl size="small" fullWidth>
                                <Button
                                    component="label"
                                    sx={purchaseStyle.uploadBtn}
                                >
                                    Upload Image
                                    <input
                                        type="file"
                                        hidden
                                    />
                                </Button>
                                <Typography variant='body2' sx={{ opacity: '0.9', mt: 1 }}>Max File size: 5MB <br />Allowed File: .pdf, .csv, .zip, .doc, .docx, .jpeg, .jpg, .png</Typography>
                            </FormControl>
                        </Grid>
                    </Grid>
                </Box>
                <Box sx={purchaseStyle.container} style={{ minHeight: '300px', }}>
                    <Grid container style={{ justifyContent: "center", padding: '10px' }} sx={purchaseStyle.textInput} >
                        <Grid md={8} sx={12} xs={12} >
                            <Grid sx={{ display: 'flex' }}  >
                                <Grid sx={purchaseStyle.spanIcons}>
                                    < FaSearch />
                                </Grid>
                                <FormControl size="small" fullWidth >
                                    <InputLabel id="demo-select-small">Enter Product name / SKU / Scan bar code</InputLabel>
                                    <OutlinedInput
                                        id="component-outlined"
                                        value={purchaseAdd.purchaseAddSearch}
                                        onChange={(e) => { setPurchaseAdd({ ...purchaseAdd, PurchaseAddSearch: e.target.value }) }}
                                        type="search"
                                        label="Enter Product name / SKU / Scan bar code"
                                    />
                                </FormControl>

                            </Grid>

                        </Grid>
                        <Grid md={2} sx={12} xs={12} style={{ marginLeft: '30px', marginTop: '5px' }}>
                            <Typography variant='subtitle1' sx={{ color: '#337ab7', cursor: 'pointer', textDecoration: 'underline' }}><FaPlus />&ensp;Add new product</Typography>
                        </Grid>
                    </Grid>
                    <br />
                    <TableContainer component={Paper} sx={purchaseStyle.tablecontainer}>
                        <Table aria-label="customized table" id="">
                            <TableHead >
                                <TableRow >
                                    <TableCell sx={purchaseStyle.tableHead1}>#</TableCell>
                                    <TableCell sx={purchaseStyle.tableHead1}>Product Name</TableCell>
                                    <TableCell sx={purchaseStyle.tableHead1}>Purchase Quantity</TableCell>
                                    <TableCell sx={purchaseStyle.tableHead1}>Unit Cost (Before Discount)</TableCell>
                                    <TableCell sx={purchaseStyle.tableHead1}>Discount Percent</TableCell>
                                    <TableCell sx={purchaseStyle.tableHead1}>Unit Cost (Before tax)</TableCell>
                                    <TableCell sx={purchaseStyle.tableHead1}>Line Total</TableCell>
                                    <TableCell sx={purchaseStyle.tableHead1}>Profit Margin %</TableCell>
                                    <TableCell sx={purchaseStyle.tableHead1}>Unit Selling Price (Inc.tax)</TableCell>
                                    <TableCell sx={purchaseStyle.tableHead1}><FaTrash /></TableCell>
                                </TableRow>
                            </TableHead><br />
                            <TableBody>
                                <StyledTableRow>
                                    <StyledTableCell></StyledTableCell>
                                    <StyledTableCell></StyledTableCell>
                                    <StyledTableCell></StyledTableCell>
                                    <StyledTableCell></StyledTableCell>
                                    <StyledTableCell></StyledTableCell>
                                    <StyledTableCell></StyledTableCell>
                                    <StyledTableCell></StyledTableCell>
                                    <StyledTableCell align="right"><b>Total Items:</b> 0.00 <br /> <b>Net Total Amount:</b> 0.00  </StyledTableCell>
                                    <StyledTableCell></StyledTableCell>
                                    <StyledTableCell align="right"></StyledTableCell>
                                </StyledTableRow>
                            </TableBody>
                        </Table>
                    </TableContainer><br />
                </Box><br />
                <Box sx={purchaseStyle.container}>
                    <Grid container spacing={3} sx={purchaseStyle.textInput}>
                        <Grid item md={4} sm={6} xs={12}>
                            <Grid sx={{ display: 'flex' }}  >
                                <Grid sx={purchaseStyle.spanIcons}><FaInfo /></Grid>
                                <FormControl size="small" fullWidth sx={{ display: 'flex' }}>
                                    <InputLabel id="demo-select-small">Discount Type *</InputLabel>
                                    <Select
                                        labelId="demo-select-small"
                                        id="demo-select-small"
                                        value={purchaseAdd.purchaseAddDisType}
                                        onChange={(e) => { setPurchaseAdd({ ...purchaseAdd, PurchaseAddDisType: e.target.value }) }}
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
                                <Grid sx={purchaseStyle.spanIcons}><FaInfo /></Grid>
                                <FormControl size="small" fullWidth >
                                    <InputLabel htmlFor="component-outlined" >Discount Amount *</InputLabel>
                                    <OutlinedInput
                                        id="component-outlined"
                                        value={purchaseAdd.purchaseAddDisAmt}
                                        onChange={(e) => { setPurchaseAdd({ ...purchaseAdd, PurchaseAddDisAmt: e.target.value }) }}
                                        label="Discount Amount *"
                                    />
                                </FormControl>
                            </Grid>
                        </Grid>
                        <Grid item md={4} sm={6} xs={12}>
                            <Grid display="block">
                                <Typography variant='subtitle1'><b>Discount:</b> (-) 0.00</Typography>
                                <br />
                                <Typography variant='subtitle1'><b>Purchase Tax:</b> (+) 0.00</Typography>
                            </Grid>
                        </Grid>
                        <Grid item md={4} sm={6} xs={12}>
                            <Grid sx={{ display: 'flex' }}  >
                                <Grid sx={purchaseStyle.spanIcons}><FaInfo /></Grid>
                                <FormControl size="small" fullWidth sx={{ display: 'flex' }}>
                                    <InputLabel id="demo-select-small">Purchase Tax </InputLabel>
                                    <Select
                                        labelId="demo-select-small"
                                        id="demo-select-small"
                                        value={purchaseAdd.purchaseAddPurTax}
                                        onChange={(e) => { setPurchaseAdd({ ...purchaseAdd, PurchaseAddPurTax: e.target.value }) }}
                                        label="Purchase Tax *"
                                        fullWidth
                                    >
                                        <MenuItem value=""><em>None</em></MenuItem>
                                        <MenuItem value={1}>GST</MenuItem>
                                        <MenuItem value={2}>CGST</MenuItem>
                                        <MenuItem value={3}>TAX</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                        </Grid>
                        <Grid item md={12} sm={12} xs={12}>
                            <InputLabel id="demo-select-small" sx={{ m: 1 }}>Additional Notes</InputLabel>
                            <FormControl size="small" fullWidth >
                                <TextareaAutosize aria-label="minimum height" minRows={3} style={{ border: '1px solid #b97df0' }}
                                    value={purchaseAdd.purchaseAddAddNote}
                                    onChange={(e) => { setPurchaseAdd({ ...purchaseAdd, PurchaseAddAddNote: e.target.value }) }}
                                />
                            </FormControl>
                        </Grid>
                    </Grid>
                </Box><br />
                <Box sx={purchaseStyle.container}>
                    <Grid container spacing={3} sx={purchaseStyle.textInput}>
                        <Grid item md={4} sm={6} xs={12}>
                            <FormControl size="small" fullWidth >
                                <InputLabel htmlFor="component-outlined" >Shipping Detais</InputLabel>
                                <OutlinedInput
                                    id="component-outlined"
                                    value={purchaseAdd.purchaseAddShipDet}
                                    onChange={(e) => { setPurchaseAdd({ ...purchaseAdd, PurchaseAddShipDet: e.target.value }) }}
                                    label="Shipping Detais"
                                />
                            </FormControl>
                        </Grid>
                        <Grid item md={4} sm={6} xs={12}></Grid>
                        <Grid item md={4} sm={6} xs={12}>
                            <FormControl size="small" fullWidth >
                                <InputLabel htmlFor="component-outlined" >(+) Additional Shipping charges</InputLabel>
                                <OutlinedInput
                                    id="component-outlined"
                                    value={purchaseAdd.purchaseAddDisAmt}
                                    onChange={(e) => { setPurchaseAdd({ ...purchaseAdd, purchaseAddDisAmt: e.target.value }) }}
                                    label="(+) Additional Shipping charges"
                                />
                            </FormControl>
                        </Grid>
                        <Grid container sx={purchaseStyle.gridContainer}>
                            <Grid >
                                <Button sx={purchaseStyle.buttonAdd} onClick={() => setHidden(s => !s)}><FaPlus />&ensp;Add additional expenses&ensp;<ArrowDropDownIcon /></Button>
                            </Grid>
                        </Grid>

                        {!hidden ?
                            <Grid container >
                                <Grid item md={5} sm={12} xs={12}></Grid>
                                <Grid item md={7} sm={12} xs={12}>
                                    <TableContainer component={Paper} sx={purchaseStyle.tablecontainer}>
                                        <Table>
                                            <TableHead>
                                                <TableRow>
                                                    <TableCell>Additional expense name</TableCell>
                                                    <TableCell>Amount</TableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                <TableRow>
                                                    <TableCell>
                                                        <FormControl size="small" fullWidth >
                                                            <InputLabel htmlFor="component-outlined" >Name</InputLabel>
                                                            <OutlinedInput
                                                                id="component-outlined"
                                                                value={purchaseAdd.purchaseAddAmt}
                                                                onChange={(e) => { setPurchaseAdd({ ...purchaseAdd, purchaseAddAmt: e.target.value }) }}
                                                                label="Name"
                                                                type='number'
                                                            />
                                                        </FormControl>
                                                    </TableCell>
                                                    <TableCell>
                                                        <FormControl size="small" fullWidth >
                                                            <InputLabel htmlFor="component-outlined" >Amount</InputLabel>
                                                            <OutlinedInput
                                                                id="component-outlined"
                                                                value={purchaseAdd.purchaseAddAmt}
                                                                onChange={(e) => { setPurchaseAdd({ ...purchaseAdd, purchaseAddAmt: e.target.value }) }}
                                                                label="Amount"
                                                                type='number'
                                                            />
                                                        </FormControl>
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell>
                                                        <FormControl size="small" fullWidth >
                                                            <InputLabel htmlFor="component-outlined" >Name</InputLabel>
                                                            <OutlinedInput
                                                                id="component-outlined"
                                                                value={purchaseAdd.purchaseAddAmt}
                                                                onChange={(e) => { setPurchaseAdd({ ...purchaseAdd, purchaseAddAmt: e.target.value }) }}
                                                                label="Name"
                                                                type='number'
                                                            />
                                                        </FormControl>
                                                    </TableCell>
                                                    <TableCell>
                                                        <FormControl size="small" fullWidth >
                                                            <InputLabel htmlFor="component-outlined" >Amount</InputLabel>
                                                            <OutlinedInput
                                                                id="component-outlined"
                                                                value={purchaseAdd.purchaseAddAmt}
                                                                onChange={(e) => { setPurchaseAdd({ ...purchaseAdd, purchaseAddAmt: e.target.value }) }}
                                                                label="Amount"
                                                                type='number'
                                                            />
                                                        </FormControl>
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell>
                                                        <FormControl size="small" fullWidth >
                                                            <InputLabel htmlFor="component-outlined" >Name</InputLabel>
                                                            <OutlinedInput
                                                                id="component-outlined"
                                                                value={purchaseAdd.purchaseAddAmt}
                                                                onChange={(e) => { setPurchaseAdd({ ...purchaseAdd, purchaseAddAmt: e.target.value }) }}
                                                                label="Name"
                                                                type='number'
                                                            />
                                                        </FormControl>
                                                    </TableCell>
                                                    <TableCell>
                                                        <FormControl size="small" fullWidth >
                                                            <InputLabel htmlFor="component-outlined" >Amount</InputLabel>
                                                            <OutlinedInput
                                                                id="component-outlined"
                                                                value={purchaseAdd.purchaseAddAmt}
                                                                onChange={(e) => { setPurchaseAdd({ ...purchaseAdd, purchaseAddAmt: e.target.value }) }}
                                                                label="Amount"
                                                                type='number'
                                                            />
                                                        </FormControl>
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell>
                                                        <FormControl size="small" fullWidth >
                                                            <InputLabel htmlFor="component-outlined" >Name</InputLabel>
                                                            <OutlinedInput
                                                                id="component-outlined"
                                                                value={purchaseAdd.purchaseAddAmt}
                                                                onChange={(e) => { setPurchaseAdd({ ...purchaseAdd, purchaseAddAmt: e.target.value }) }}
                                                                label="Name"
                                                                type='number'
                                                            />
                                                        </FormControl>
                                                    </TableCell>
                                                    <TableCell>
                                                        <FormControl size="small" fullWidth >
                                                            <InputLabel htmlFor="component-outlined" >Amount</InputLabel>
                                                            <OutlinedInput
                                                                id="component-outlined"
                                                                value={purchaseAdd.purchaseAddAmt}
                                                                onChange={(e) => { setPurchaseAdd({ ...purchaseAdd, purchaseAddAmt: e.target.value }) }}
                                                                label="Amount"
                                                                type='number'
                                                            />
                                                        </FormControl>
                                                    </TableCell>
                                                </TableRow>
                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                </Grid>
                            </Grid>
                            : null}
                        <Grid container style={{ justifyContent: "right", }} sx={purchaseStyle.textInput}>
                            <Typography variant='subtitle1'><b>Purchase Total:</b> ₹ 0.00</Typography>
                        </Grid>
                    </Grid>
                </Box>
                <Box sx={purchaseStyle.container}>
                    <Typography variant="h6" >Add payment</Typography>
                    <Grid container spacing={3} sx={purchaseStyle.textInput}>
                        <Grid item md={12} sm={12} xs={12}>
                            <Typography variant="body2" ><b>Advance Balance:</b> ₹ 0</Typography>
                        </Grid>
                        <Grid item md={4} sm={6} xs={12}>
                            <Grid sx={{ display: 'flex' }}  >
                                <Grid sx={purchaseStyle.spanIcons}><FaMoneyBillAlt /></Grid>
                                <FormControl size="small" fullWidth >
                                    <InputLabel htmlFor="component-outlined" >Amount *</InputLabel>
                                    <OutlinedInput
                                        id="component-outlined"
                                        value={purchaseAdd.purchaseAddAmt}
                                        onChange={(e) => { setPurchaseAdd({ ...purchaseAdd, purchaseAddAmt: e.target.value }) }}
                                        label="Amount *"
                                        type='number'
                                    />
                                </FormControl>
                            </Grid>
                        </Grid>
                        <Grid item md={4} sm={6} xs={12} >
                            <Grid sx={{ display: 'flex' }}  >
                                {/* <Grid sx={purchaseStyle.spanIcons}><FaMoneyBillAlt /></Grid> */}
                                <FormControl size="small" fullWidth >
                                    <InputLabel htmlFor="component-outlined" ></InputLabel>
                                    <OutlinedInput
                                        id="component-outlined"
                                        type='date'
                                        value={purchaseAdd.purchaseAddname}
                                        onChange={(e) => { setPurchaseAdd({ ...purchaseAdd, purchaseAddname: e.target.value }) }}
                                    // label="Shipping Charges"
                                    />
                                </FormControl>
                            </Grid>
                        </Grid>
                        <Grid item md={4} sm={6} xs={12}>
                            <Grid sx={{ display: 'flex' }}  >
                                <Grid sx={purchaseStyle.spanIcons}><FaMoneyBillAlt /></Grid>
                                <FormControl size="small" fullWidth sx={{ display: 'flex' }}>
                                    <InputLabel id="demo-select-small">Payment Method *</InputLabel>
                                    <Select
                                        labelId="demo-select-small"
                                        id="demo-select-small"
                                        value={purchaseAdd.purchaseAddPayMethod}
                                        onChange={(e) => { setPurchaseAdd({ ...purchaseAdd, purchaseAddPayMethod: e.target.value }) }}
                                        label="Payment Method *"
                                        fullWidth
                                    >
                                        <MenuItem value="" onClick={() => { setShownCash(false); setShownCard(false); setShownCheque(false); setShownBank(false); setShownCustom1(false); setShownCustom2(false); setShownCustom3(false); setShownCustom4(false); setShownCustom5(false); setShownCustom6(false); setShownCustom7(false); }}>Advance</MenuItem>
                                        <MenuItem value={1} onClick={() => setShownCash(true)} >Cash</MenuItem>
                                        <MenuItem value={2} onClick={() => { setShownCard(true); setShownCash(true); setShownCheque(false); setShownBank(false); setShownCustom1(false); setShownCustom2(false); setShownCustom3(false); setShownCustom4(false); setShownCustom5(false); setShownCustom6(false); setShownCustom7(false); }}>Card</MenuItem>
                                        <MenuItem value={3} onClick={() => { setShownCheque(true); setShownCash(true); setShownCard(false); setShownBank(false); setShownCustom1(false); setShownCustom2(false); setShownCustom3(false); setShownCustom4(false); setShownCustom5(false); setShownCustom6(false); setShownCustom7(false); }}>Cheque</MenuItem>
                                        <MenuItem value={4} onClick={() => { setShownBank(true); setShownCash(true); setShownCheque(false); setShownCard(false); setShownCustom1(false); setShownCustom2(false); setShownCustom3(false); setShownCustom4(false); setShownCustom5(false); setShownCustom6(false); setShownCustom7(false); }}>Bank Transfer</MenuItem>
                                        <MenuItem value={5} onClick={() => { setShownCash(true); setShownCard(false); setShownCheque(false); setShownBank(false); setShownCustom1(false); setShownCustom2(false); setShownCustom3(false); setShownCustom4(false); setShownCustom5(false); setShownCustom6(false); setShownCustom7(false); }}>Other</MenuItem>
                                        <MenuItem value={6} onClick={() => { setShownCustom1(true); setShownCash(true); setShownBank(false); setShownCheque(false); setShownCard(false); setShownCustom2(false); setShownCustom3(false); setShownCustom4(false); setShownCustom5(false); setShownCustom6(false); setShownCustom7(false); }}>Custom Payment 1</MenuItem>
                                        <MenuItem value={7} onClick={() => { setShownCustom2(true); setShownCash(true); setShownBank(false); setShownCheque(false); setShownCard(false); setShownCustom1(false); setShownCustom3(false); setShownCustom4(false); setShownCustom5(false); setShownCustom6(false); setShownCustom7(false); }}>Custom Payment 2</MenuItem>
                                        <MenuItem value={8} onClick={() => { setShownCustom3(true); setShownCash(true); setShownBank(false); setShownCheque(false); setShownCard(false); setShownCustom1(false); setShownCustom2(false); setShownCustom4(false); setShownCustom5(false); setShownCustom6(false); setShownCustom7(false); }}>Custom Payment 3</MenuItem>
                                        <MenuItem value={9} onClick={() => { setShownCustom4(true); setShownCash(true); setShownBank(false); setShownCheque(false); setShownCard(false); setShownCustom1(false); setShownCustom2(false); setShownCustom3(false); setShownCustom5(false); setShownCustom6(false); setShownCustom7(false); }}>Custom Payment 4</MenuItem>
                                        <MenuItem value={10} onClick={() => { setShownCustom5(true); setShownCash(true); setShownBank(false); setShownCheque(false); setShownCard(false); setShownCustom1(false); setShownCustom2(false); setShownCustom3(false); setShownCustom4(false); setShownCustom6(false); setShownCustom7(false); }}>Custom Payment 5</MenuItem>
                                        <MenuItem value={11} onClick={() => { setShownCustom6(true); setShownCash(true); setShownBank(false); setShownCheque(false); setShownCard(false); setShownCustom1(false); setShownCustom2(false); setShownCustom3(false); setShownCustom4(false); setShownCustom5(false); setShownCustom7(false); }}>Custom Payment 6</MenuItem>
                                        <MenuItem value={12} onClick={() => { setShownCustom7(true); setShownCash(true); setShownBank(false); setShownCheque(false); setShownCard(false); setShownCustom1(false); setShownCustom2(false); setShownCustom3(false); setShownCustom4(false); setShownCustom5(false); setShownCustom6(false); }}>Custom Payment 7</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                        </Grid>

                        {shownCash ?
                            <>
                                <Grid item md={4} sm={6} xs={12}>
                                    <Grid sx={{ display: 'flex' }}  >
                                        <Grid sx={purchaseStyle.spanIcons}><FaMoneyBillAlt /></Grid>
                                        <FormControl size="small" fullWidth sx={{ display: 'flex' }}>
                                            <InputLabel id="demo-select-small">Payment Account</InputLabel>
                                            <Select
                                                labelId="demo-select-small"
                                                id="demo-select-small"
                                                value={purchaseAdd.purchaseAddPayAcc}
                                                onChange={(e) => { setPurchaseAdd({ ...purchaseAdd, purchaseAddPayAcc: e.target.value }) }}
                                                label="Payment Account"
                                                fullWidth
                                            >
                                                <MenuItem value=""><em>None</em></MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                </Grid>
                                <Grid item md={8} sm={12} xs={12}></Grid>
                            </>
                            : null}

                        {/* ****** Dropdown options ****** */}
                        {/* ****** Card Section ****** */}
                        {shownCard ?
                            <>
                                <Grid item md={4} sm={6} xs={12}>
                                    <FormControl size="small" fullWidth >
                                        <InputLabel htmlFor="component-outlined" >Card Number</InputLabel>
                                        <OutlinedInput
                                            id="component-outlined"
                                            value={purchaseAdd.purchaseAddCrdNo}
                                            onChange={(e) => { setPurchaseAdd({ ...purchaseAdd, purchaseAddCrdNo: e.target.value }) }}
                                            label="Card Number"
                                            type='text'
                                        />
                                    </FormControl>
                                </Grid>
                                <Grid item md={4} sm={6} xs={12}>
                                    <FormControl size="small" fullWidth >
                                        <InputLabel htmlFor="component-outlined" >Card Holder Name</InputLabel>
                                        <OutlinedInput
                                            id="component-outlined"
                                            value={purchaseAdd.purchaseAddCrdName}
                                            onChange={(e) => { setPurchaseAdd({ ...purchaseAdd, purchaseAddCrdName: e.target.value }) }}
                                            label="Card Holder Name"
                                            type="text"
                                        />
                                    </FormControl>
                                </Grid>
                                <Grid item md={4} sm={6} xs={12}>
                                    <FormControl size="small" fullWidth >
                                        <InputLabel htmlFor="component-outlined" >Card Transaction No</InputLabel>
                                        <OutlinedInput
                                            id="component-outlined"
                                            value={purchaseAdd.purchaseAddCrdTransNo}
                                            onChange={(e) => { setPurchaseAdd({ ...purchaseAdd, purchaseAddCrdTransNo: e.target.value }) }}
                                            label="Card Transaction No"
                                            type='text'
                                        />
                                    </FormControl>
                                </Grid>
                                <Grid item md={3} sm={12} xs={12}>
                                    <FormControl size="small" fullWidth sx={{ display: 'flex' }}>
                                        <InputLabel id="demo-select-small">Card Type</InputLabel>
                                        <Select
                                            labelId="demo-select-small"
                                            id="demo-select-small"
                                            value={purchaseAdd.purchaseAddCrdType}
                                            onChange={(e) => { setPurchaseAdd({ ...purchaseAdd, purchaseAddCrdType: e.target.value }) }}
                                            label="Card Type"
                                            fullWidth
                                        >
                                            <MenuItem value="">Credit Card</MenuItem>
                                            <MenuItem value={1}>Debit Card</MenuItem>
                                            <MenuItem value={2}>Visa</MenuItem>
                                            <MenuItem value={3}>MasterCard</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item md={3} sm={12} xs={12}>
                                    <FormControl size="small" fullWidth >
                                        <InputLabel htmlFor="component-outlined" >Month</InputLabel>
                                        <OutlinedInput
                                            id="component-outlined"
                                            value={purchaseAdd.purchaseAddMonth}
                                            onChange={(e) => { setPurchaseAdd({ ...purchaseAdd, purchaseAddMonth: e.target.value }) }}
                                            label="Month"
                                            type='text'
                                        />
                                    </FormControl>
                                </Grid>
                                <Grid item md={3} sm={12} xs={12}>
                                    <FormControl size="small" fullWidth >
                                        <InputLabel htmlFor="component-outlined" >Year</InputLabel>
                                        <OutlinedInput
                                            id="component-outlined"
                                            value={purchaseAdd.purchaseAddYear}
                                            onChange={(e) => { setPurchaseAdd({ ...purchaseAdd, purchaseAddYear: e.target.value }) }}
                                            label="Year"
                                            type='text'
                                        />
                                    </FormControl>
                                </Grid>
                                <Grid item md={3} sm={12} xs={12}>
                                    <FormControl size="small" fullWidth >
                                        <InputLabel htmlFor="component-outlined" >Security Code</InputLabel>
                                        <OutlinedInput
                                            id="component-outlined"
                                            value={purchaseAdd.purchaseAddSecCode}
                                            onChange={(e) => { setPurchaseAdd({ ...purchaseAdd, purchaseAddSecCode: e.target.value }) }}
                                            label="Security Code"
                                            type='text'
                                        />
                                    </FormControl>
                                </Grid>
                            </>
                            : null}

                        {/* ****** Cheque Section ****** */}
                        {shownCheque ?
                            <>
                                <Grid item md={12} sm={12} xs={12}>
                                    <FormControl size="small" fullWidth >
                                        <InputLabel htmlFor="component-outlined" >Cheque No.</InputLabel>
                                        <OutlinedInput
                                            id="component-outlined"
                                            value={purchaseAdd.purchaseAddChequeNo}
                                            onChange={(e) => { setPurchaseAdd({ ...purchaseAdd, purchaseAddChequeNo: e.target.value }) }}
                                            label="Cheque No."
                                            type='text'
                                        />
                                    </FormControl>
                                </Grid>
                            </>
                            : null}

                        {/* ****** Bank Section ****** */}
                        {shownBank ?
                            <>
                                <Grid item md={12} sm={12} xs={12}>
                                    <FormControl size="small" fullWidth >
                                        <InputLabel htmlFor="component-outlined" >Bank Account No.</InputLabel>
                                        <OutlinedInput
                                            id="component-outlined"
                                            value={purchaseAdd.purchaseAddBankAccNo}
                                            onChange={(e) => { setPurchaseAdd({ ...purchaseAdd, purchaseAddBankAccNo: e.target.value }) }}
                                            label="Bank Account No."
                                            type='text'
                                        />
                                    </FormControl>
                                </Grid>
                            </>
                            : null}

                        {/* ****** Transaction Section ****** */}
                        {shownCustom1 ?
                            <>
                                <Grid item md={12} sm={12} xs={12}>
                                    <FormControl size="small" fullWidth >
                                        <InputLabel htmlFor="component-outlined" >Transaction No.</InputLabel>
                                        <OutlinedInput
                                            id="component-outlined"
                                            value={purchaseAdd.purchaseAddTrans}
                                            onChange={(e) => { setPurchaseAdd({ ...purchaseAdd, purchaseAddTrans: e.target.value }) }}
                                            label="Transaction No."
                                            type='text'
                                        />
                                    </FormControl>
                                </Grid>
                            </>
                            : null}

                        {shownCustom2 ?
                            <>
                                <Grid item md={12} sm={12} xs={12}>
                                    <FormControl size="small" fullWidth >
                                        <InputLabel htmlFor="component-outlined" >Transaction No.</InputLabel>
                                        <OutlinedInput
                                            id="component-outlined"
                                            value={purchaseAdd.purchaseAddTrans}
                                            onChange={(e) => { setPurchaseAdd({ ...purchaseAdd, purchaseAddTrans: e.target.value }) }}
                                            label="Transaction No."
                                            type='text'
                                        />
                                    </FormControl>
                                </Grid>
                            </>
                            : null}

                        {shownCustom3 ?
                            <>
                                <Grid item md={12} sm={12} xs={12}>
                                    <FormControl size="small" fullWidth >
                                        <InputLabel htmlFor="component-outlined" >Transaction No.</InputLabel>
                                        <OutlinedInput
                                            id="component-outlined"
                                            value={purchaseAdd.purchaseAddTrans}
                                            onChange={(e) => { setPurchaseAdd({ ...purchaseAdd, purchaseAddTrans: e.target.value }) }}
                                            label="Transaction No."
                                            type='text'
                                        />
                                    </FormControl>
                                </Grid>
                            </>
                            : null}

                        {shownCustom4 ?
                            <>
                                <Grid item md={12} sm={12} xs={12}>
                                    <FormControl size="small" fullWidth >
                                        <InputLabel htmlFor="component-outlined" >Transaction No.</InputLabel>
                                        <OutlinedInput
                                            id="component-outlined"
                                            value={purchaseAdd.purchaseAddTrans}
                                            onChange={(e) => { setPurchaseAdd({ ...purchaseAdd, purchaseAddTrans: e.target.value }) }}
                                            label="Transaction No."
                                            type='text'
                                        />
                                    </FormControl>
                                </Grid>
                            </>
                            : null}

                        {shownCustom5 ?
                            <>
                                <Grid item md={12} sm={12} xs={12}>
                                    <FormControl size="small" fullWidth >
                                        <InputLabel htmlFor="component-outlined" >Transaction No.</InputLabel>
                                        <OutlinedInput
                                            id="component-outlined"
                                            value={purchaseAdd.purchaseAddTrans}
                                            onChange={(e) => { setPurchaseAdd({ ...purchaseAdd, purchaseAddTrans: e.target.value }) }}
                                            label="Transaction No."
                                            type='text'
                                        />
                                    </FormControl>
                                </Grid>
                            </>
                            : null}

                        {shownCustom6 ?
                            <>
                                <Grid item md={12} sm={12} xs={12}>
                                    <FormControl size="small" fullWidth >
                                        <InputLabel htmlFor="component-outlined" >Transaction No.</InputLabel>
                                        <OutlinedInput
                                            id="component-outlined"
                                            value={purchaseAdd.purchaseAddTrans}
                                            onChange={(e) => { setPurchaseAdd({ ...purchaseAdd, purchaseAddTrans: e.target.value }) }}
                                            label="Transaction No."
                                            type='text'
                                        />
                                    </FormControl>
                                </Grid>
                            </>
                            : null}

                        {shownCustom7 ?
                            <>
                                <Grid item md={12} sm={12} xs={12}>
                                    <FormControl size="small" fullWidth >
                                        <InputLabel htmlFor="component-outlined" >Transaction No.</InputLabel>
                                        <OutlinedInput
                                            id="component-outlined"
                                            value={purchaseAdd.purchaseAddTrans}
                                            onChange={(e) => { setPurchaseAdd({ ...purchaseAdd, purchaseAddTrans: e.target.value }) }}
                                            label="Transaction No."
                                            type='text'
                                        />
                                    </FormControl>
                                </Grid>
                            </>
                            : null}

                        {/* *************** End ************ */}

                        <Grid item md={12} sm={12} xs={12}>
                            <InputLabel id="demo-select-small" sx={{ m: 1 }}>Payment Note</InputLabel>
                            <FormControl size="small" fullWidth >
                                <TextareaAutosize aria-label="minimum height" minRows={3} style={{ border: '1px solid #b97df0' }}
                                    value={purchaseAdd.purchaseAddPayNote}
                                    onChange={(e) => { setPurchaseAdd({ ...purchaseAdd, purchaseAddPayNote: e.target.value }) }} />
                            </FormControl><br /><br />
                            <hr />
                        </Grid>
                        <Grid container style={{ justifyContent: "right", }} sx={purchaseStyle.textInput}>
                            <Grid>
                                <Typography variant='subtitle1'><b>Payment due:</b> ₹ 0.00</Typography>
                            </Grid>
                            <Grid>
                                <br /> <br /><Button sx={purchaseStyle.buttonAdd}>Save</Button><br />
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
            </form >
        </Box >
    );
}

export default Purchasecreate;