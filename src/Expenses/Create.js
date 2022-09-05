import React, { useState } from 'react';
import { expStyle } from './Expstyle';
import {
    Box, Grid, FormControl, InputLabel, OutlinedInput, Select, MenuItem, TextareaAutosize, 
    Typography, FormGroup, FormControlLabel, Checkbox, Button, Tooltip, IconButton,  
} from '@mui/material';
import { FcInfo } from "react-icons/fc";
import { FaInfo, FaMoneyBillAlt } from "react-icons/fa";
import { makeStyles, } from "@material-ui/core/styles";

function Expensescreate() {

    // ******** Text field ******** //
    const [expAdd, setExpAdd] = useState({
        expAddBusinessLoc: "", expAddExpCategory: "", expAddRefNo: "", expAddExpFor: "",
        expAddExpForContact: "", expAddAppTax: "", expAddTotAmt: "", expAddExpNote: "",
        expAddNoOfRep: "", expAddAmt: "", expAddPayMethod: "", expAddPayAcc: "", expAddCrdNo: "", expAddCrdName: "",
        expAddCrdTransNo: "", expAddCrdType: "", expAddMonth: "", expAddYear: "", expAddSecCode: "", expAddChequeNo: "",
        expAddBankAccNo: "", expAddTrans: "", expAddPayNote: "",
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

    //   //***individual or business****//
    //   const [shown, setShown] = useState(true);
    //   //*** Date ****/
    //   const [shownDate, setShownDate] = useState(true);

    return (
        <Box>
            <form action=''>
                        <Typography variant="h6" sx={{ color: '#7009ab' }}>Add Expense</Typography>&ensp;
                    <Box sx={expStyle.subContainer}>
                        <Grid container spacing={3} sx={expStyle.textInput}>
                            <Grid item md={4} sm={6} xs={12} >
                            <FormControl size="small" fullWidth>
                                        <InputLabel id="demo-select-small">Business Location</InputLabel>
                                        <Select
                                            labelId="demo-select-small"
                                            id="demo-select-small"
                                            value={expAdd.expAddBusinessLoc}
                                            onChange={(e) => { setExpAdd({ ...expAdd, ExpAddBusinessLoc: e.target.value }) }}
                                            label="Business Location"
                                        >
                                            <MenuItem value="">All </MenuItem>
                                            <MenuItem value={1}>xxx</MenuItem>
                                            <MenuItem value={2}>yyy</MenuItem>
                                        </Select>
                                    </FormControl>
                            </Grid>
                            <Grid item md={4} sm={6} xs={12} >
                            <FormControl size="small" fullWidth>
                                        <InputLabel id="demo-select-small">Expense Category</InputLabel>
                                        <Select
                                            labelId="demo-select-small"
                                            id="demo-select-small"
                                            value={expAdd.expAddExpCategory}
                                            onChange={(e) => { setExpAdd({ ...expAdd, ExpAddExpCategory: e.target.value }) }}
                                            label="Expense Category"
                                        >
                                            <MenuItem value="">All </MenuItem>
                                            <MenuItem value={1}>xxx</MenuItem>
                                            <MenuItem value={2}>yyy</MenuItem>
                                        </Select>
                                    </FormControl>
                            </Grid>
                            <Grid item md={4} sm={6} xs={12} >
                                <FormControl size="small" fullWidth >
                                    <InputLabel htmlFor="component-outlined" >Reference No</InputLabel>
                                    <OutlinedInput
                                        id="component-outlined"
                                        type='text'
                                        value={expAdd.expAddRefNo}
                                        onChange={(e) => { setExpAdd({ ...expAdd, ExpAddRefNo: e.target.value }) }}
                                        label="Reference No"
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item md={4} sm={6} xs={12} >
                                <FormControl size="small" fullWidth >
                                    <InputLabel htmlFor="component-outlined" ></InputLabel>
                                    <OutlinedInput
                                        id="component-outlined"
                                        type='date'
                                        // value={expAdd.expAddRefNo}
                                        // onChange={(e) => { setExpAdd({ ...expAdd, expAddRefNo: e.target.value }) }}
                                        // label="Reference No"
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item md={4} sm={6} xs={12}>
                            <FormControl size="small" fullWidth>
                                        <InputLabel id="demo-select-small">Expense For</InputLabel>
                                        <Select
                                            labelId="demo-select-small"
                                            id="demo-select-small"
                                            value={expAdd.expAddExpFor}
                                            onChange={(e) => { setExpAdd({ ...expAdd, ExpAddExpFor: e.target.value }) }}
                                            label="Expense For"
                                        >
                                            <MenuItem value="">Please Select </MenuItem>
                                            <MenuItem value={1}>None</MenuItem>
                                            <MenuItem value={2}>xxx</MenuItem>
                                        </Select>
                                    </FormControl>
                            </Grid>
                            <Grid item md={4} sm={6} xs={12}>
                            <FormControl size="small" fullWidth>
                                        <InputLabel id="demo-select-small">Expense For Contact</InputLabel>
                                        <Select
                                            labelId="demo-select-small"
                                            id="demo-select-small"
                                            value={expAdd.expAddExpForContact}
                                            onChange={(e) => { setExpAdd({ ...expAdd, ExpAddExpForContact: e.target.value }) }}
                                            label="Expense For Contact"
                                        >
                                            <MenuItem value="">Please Select </MenuItem>
                                            <MenuItem value={1}>xxx</MenuItem>
                                            <MenuItem value={2}>yyy</MenuItem>
                                        </Select>
                                    </FormControl>
                            </Grid>
                            <Grid item md={4} sm={6} xs={12}>
                            <FormControl size="small" fullWidth>
                                <Button
                                    component="label"
                                    sx={expStyle.uploadBtn}
                                >
                                    Upload Image
                                    <input
                                        type="file"
                                        hidden
                                    />
                                </Button>
                                <Typography variant='body2' sx={{ opacity: '0.9', mt: 1 }}>Max File size: 5MB <br/> Allowed File: .pdf, .csv, .zip, .doc, .docx, .jpeg, .jpg, .png</Typography>
                            </FormControl>
                            </Grid>
                            <Grid item md={4} sm={6} xs={12}>
                                <Grid sx={{ display: 'flex' }}  >
                                    <Grid sx={expStyle.spanIcons}><FaInfo /></Grid>
                                    <FormControl size="small" fullWidth >
                                        <InputLabel htmlFor="component-outlined" >Applicatble Tax</InputLabel>
                                        <OutlinedInput
                                            id="component-outlined"
                                            value={expAdd.expAddAppTax}
                                            onChange={(e) => { setExpAdd({ ...expAdd, ExpAddAppTax: e.target.value }) }}
                                            label="Applicatble Tax"
                                        />
                                    </FormControl>
                                </Grid>
                            </Grid>
                            <Grid item md={4} sm={6} xs={12} >
                                <FormControl size="small" fullWidth >
                                    <InputLabel htmlFor="component-outlined" >Total Amount</InputLabel>
                                    <OutlinedInput
                                        id="component-outlined"
                                        type='text'
                                        value={expAdd.expAddTotAmt}
                                        onChange={(e) => { setExpAdd({ ...expAdd, ExpAddTotAmt: e.target.value }) }}
                                        label="Total Amount"
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item md={4} sm={6} xs={12}>
                                <InputLabel id="demo-select-small" sx={{ m: 1 }}>Expense Note</InputLabel>
                                <FormControl size="small" fullWidth >
                                    <TextareaAutosize aria-label="minimum height" minRows={3} style={{ border: '1px solid #b97df0' }}
                                        value={expAdd.expAddExpNote}
                                        onChange={(e) => { setExpAdd({ ...expAdd, ExpAddExpNote: e.target.value }) }} />
                                </FormControl>
                            </Grid>
                            <Grid item md={4} sm={6} xs={12}>
                            <FormGroup>
                                <span><FormControlLabel control={<Checkbox />} label="Subscribe?" />
                                    <Tooltip classes={{ arrow: classes.arrow, tooltip: classes.tooltip }} title="If checked expense will be refunded and will be added to net profit" arrow>
                                        <IconButton>
                                            <FcInfo />
                                        </IconButton>
                                    </Tooltip>
                                </span>
                            </FormGroup>
                            </Grid>
                        </Grid>
                    </Box><br/>
                    <Box sx={expStyle.subContainer}>
                        <Grid container spacing={2} sx={expStyle.textInput}>
                            <Grid item md={4} sm={6} xs={12}>
                                <FormGroup>
                                    <span><FormControlLabel control={<Checkbox />} label="Subscribe?" />
                                        <Tooltip classes={{ arrow: classes.arrow, tooltip: classes.tooltip }} title="If checked this expense will be automatically generated at regular intervals." arrow>
                                            <IconButton>
                                                <FcInfo />
                                            </IconButton>
                                        </Tooltip>
                                    </span>
                                </FormGroup>
                            </Grid>
                            <Grid item md={4} sm={6} xs={12}>
                                <Grid sx={{ display: 'flex' }}  >
                                        <Grid sx={{ width: '210px' }}>
                                            <FormControl size="small" fullWidth >
                                                <InputLabel id="demo-select-small">Recurring interval *</InputLabel>
                                                <OutlinedInput
                                                    id="component-outlined"
                                                    // value={posAdd.posAddbrand}
                                                    // onChange={(e) => { setPosAdd({ ...posAdd, PosAddbrand: e.target.value }) }}
                                                    type="search"
                                                    label="Subscriptin Interval *"
                                                />
                                            </FormControl>
                                        </Grid>
                                        <FormControl size="small" fullWidth sx={{ display: 'flex' }}>
                                            <InputLabel id="demo-select-small">Please Select</InputLabel>
                                            <Select
                                                labelId="demo-select-small"
                                                id="demo-select-small"
                                                label="Please Select"
                                                // value={posCus.posCusPayTerm}
                                                // onChange={(event) => { setPosCus({ ...posCus, posCusPayTerm: event.target.value }) }}
                                                fullWidth
                                            >
                                                <MenuItem value=""> Days</MenuItem>  
                                                <MenuItem value={1}>Months</MenuItem>
                                                <MenuItem value={2}>Years</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                </Grid>
                                <Grid item md={4} sm={6} xs={12}>
                                    <FormControl size="small" fullWidth >
                                        <InputLabel id="demo-select-small">No. of Repetitions</InputLabel>
                                        <OutlinedInput
                                            id="component-outlined"
                                            value={expAdd.expAddbrand}
                                            onChange={(e) => { setExpAdd({ ...expAdd, ExpAddNoOfRep: e.target.value }) }}
                                            type="search"
                                            label="No. of Repetitions"
                                        />
                                    </FormControl>
                                    <Typography varient="body2" sx={{ mt: '5px' }}>If blank expense will be generated infinite times</Typography>
                                </Grid>
                        </Grid>
                    </Box>
                    <Box sx={expStyle.subContainer}>
                    <Typography variant="h6" >Add payment</Typography>
                    <Grid container spacing={3} sx={expStyle.textInput}>
                        <Grid item md={4} sm={6} xs={12}>
                            <Grid sx={{ display: 'flex' }}  >
                                <Grid sx={expStyle.spanIcons}><FaMoneyBillAlt /></Grid>
                                <FormControl size="small" fullWidth >
                                    <InputLabel htmlFor="component-outlined" >Amount *</InputLabel>
                                    <OutlinedInput
                                        id="component-outlined"
                                        value={expAdd.expAddAmt}
                                        onChange={(e) => { setExpAdd({ ...expAdd, expAddAmt: e.target.value }) }}
                                        label="Amount *"
                                        type='number'
                                    />
                                </FormControl>
                            </Grid>
                        </Grid>
                        <Grid item md={4} sm={6} xs={12} >
                            <Grid sx={{ display: 'flex' }}  >
                                {/* <Grid sx={expStyle.spanIcons}><FaMoneyBillAlt /></Grid> */}
                                <FormControl size="small" fullWidth >
                                    <InputLabel htmlFor="component-outlined" ></InputLabel>
                                    <OutlinedInput
                                        id="component-outlined"
                                        type='date'
                                    // value={expAdd.expAddname}
                                    // onChange={(e) => { setExpAdd({ ...expAdd, expAddname: e.target.value }) }}
                                    // label="Shipping Charges"
                                    />
                                </FormControl>
                            </Grid>
                        </Grid>
                        <Grid item md={4} sm={6} xs={12}>
                            <Grid sx={{ display: 'flex' }}  >
                                <Grid sx={expStyle.spanIcons}><FaMoneyBillAlt /></Grid>
                                <FormControl size="small" fullWidth sx={{ display: 'flex' }}>
                                    <InputLabel id="demo-select-small">Payment Method *</InputLabel>
                                    <Select
                                        labelId="demo-select-small"
                                        id="demo-select-small"
                                        value={expAdd.expAddPayMethod}
                                        onChange={(e) => { setExpAdd({ ...expAdd, expAddPayMethod: e.target.value }) }}
                                        label="Payment Method *"
                                        fullWidth
                                    >
                                        <MenuItem value="">Advance</MenuItem>
                                        <MenuItem value={1}>Cash</MenuItem>
                                        <MenuItem value={2} 
                                        // onClick={() => { setShown(true)}} 
                                        >Card</MenuItem>
                                        <MenuItem value={2}>Cheque</MenuItem>
                                        <MenuItem value={2}>Bank Transfer</MenuItem>
                                        <MenuItem value={2}>Other</MenuItem>
                                        <MenuItem value={2}>Custom Payment 1</MenuItem>
                                        <MenuItem value={2}>Custom Payment 2</MenuItem>
                                        <MenuItem value={2}>Custom Payment 3</MenuItem>
                                        <MenuItem value={2}>Custom Payment 4</MenuItem>
                                        <MenuItem value={2}>Custom Payment 5</MenuItem>
                                        <MenuItem value={2}>Custom Payment 6</MenuItem>
                                        <MenuItem value={2}>Custom Payment 7</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                        </Grid>
                        <Grid item md={4} sm={6} xs={12}>
                            <Grid sx={{ display: 'flex' }}  >
                                <Grid sx={expStyle.spanIcons}><FaMoneyBillAlt /></Grid>
                                <FormControl size="small" fullWidth sx={{ display: 'flex' }}>
                                    <InputLabel id="demo-select-small">Payment Account</InputLabel>
                                    <Select
                                        labelId="demo-select-small"
                                        id="demo-select-small"
                                        value={expAdd.expAddPayAcc}
                                        onChange={(e) => { setExpAdd({ ...expAdd, expAddPayAcc: e.target.value }) }}
                                        label="Payment Account"
                                        fullWidth
                                    >
                                        <MenuItem value=""><em>None</em></MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                        </Grid>
                        <Grid item md={8} sm={12} xs={12}></Grid>
                        {/* {shown ? */}
                        <>
                        {/* ****** Dropdown options ****** */}
                        {/* ****** Card Section ****** */}
                        <Grid item md={4} sm={6} xs={12}>
                            <FormControl size="small" fullWidth >
                                <InputLabel htmlFor="component-outlined" >Card Number</InputLabel>
                                <OutlinedInput
                                    id="component-outlined"
                                    value={expAdd.expAddCrdNo}
                                    onChange={(e) => { setExpAdd({ ...expAdd, expAddCrdNo: e.target.value }) }}
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
                                    value={expAdd.expAddCrdName}
                                    onChange={(e) => { setExpAdd({ ...expAdd, expAddCrdName: e.target.value }) }}
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
                                    value={expAdd.expAddCrdTransNo}
                                    onChange={(e) => { setExpAdd({ ...expAdd, expAddCrdTransNo: e.target.value }) }}
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
                                    value={expAdd.expAddCrdType}
                                    onChange={(e) => { setExpAdd({ ...expAdd, expAddCrdType: e.target.value }) }}
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
                                    value={expAdd.expAddMonth}
                                    onChange={(e) => { setExpAdd({ ...expAdd, expAddMonth: e.target.value }) }}
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
                                    value={expAdd.expAddYear}
                                    onChange={(e) => { setExpAdd({ ...expAdd, expAddYear: e.target.value }) }}
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
                                    value={expAdd.expAddSecCode}
                                    onChange={(e) => { setExpAdd({ ...expAdd, expAddSecCode: e.target.value }) }}
                                    label="Security Code"
                                    type='text'
                                />
                            </FormControl>
                        </Grid>
                        </>
                            {/* // : null } */}
                        {/* ****** Cheque Section ****** */}
                        <Grid item md={12} sm={12} xs={12}>
                            <FormControl size="small" fullWidth >
                                <InputLabel htmlFor="component-outlined" >Cheque No.</InputLabel>
                                <OutlinedInput
                                    id="component-outlined"
                                    value={expAdd.expAddChequeNo}
                                    onChange={(e) => { setExpAdd({ ...expAdd, expAddChequeNo: e.target.value }) }}
                                    label="Cheque No."
                                    type='text'
                                />
                            </FormControl>
                        </Grid>

                        {/* ****** Bank Section ****** */}
                        <Grid item md={12} sm={12} xs={12}>
                            <FormControl size="small" fullWidth >
                                <InputLabel htmlFor="component-outlined" >Bank Account No.</InputLabel>
                                <OutlinedInput
                                    id="component-outlined"
                                    value={expAdd.expAddBankAccNo}
                                    onChange={(e) => { setExpAdd({ ...expAdd, expAddBankAccNo: e.target.value }) }}
                                    label="Bank Account No."
                                    type='text'
                                />
                            </FormControl>
                        </Grid>

                        {/* ****** Transaction Section ****** */}
                        <Grid item md={12} sm={12} xs={12}>
                            <FormControl size="small" fullWidth >
                                <InputLabel htmlFor="component-outlined" >Transaction No.</InputLabel>
                                <OutlinedInput
                                    id="component-outlined"
                                    value={expAdd.expAddTrans}
                                    onChange={(e) => { setExpAdd({ ...expAdd, expAddTrans: e.target.value }) }}
                                    label="Transaction No."
                                    type='text'
                                />
                            </FormControl>
                        </Grid>

                        {/* *************** End ************ */}

                        <Grid item md={12} sm={12} xs={12}>
                            <InputLabel id="demo-select-small" sx={{ m: 1 }}>Payment Note</InputLabel>
                            <FormControl size="small" fullWidth >
                                <TextareaAutosize aria-label="minimum height" minRows={3} style={{ border: '1px solid #b97df0' }}
                                    value={expAdd.expAddPayNote}
                                    onChange={(e) => { setExpAdd({ ...expAdd, expAddPayNote: e.target.value }) }} />
                            </FormControl><br /><br />
                            <hr />
                        </Grid>
                        <Grid container style={{ justifyContent: "right", }} sx={expStyle.textInput}>
                            <Typography variant='subtitle1'><b>Payment due:</b> ₹ 0.00</Typography>
                        </Grid>
                    </Grid>
                </Box>
                <Grid container sx={expStyle.gridContainer}>
                    <Grid >
                        <Button sx={expStyle.buttonAdd}>Save  </Button>
                    </Grid>
                </Grid>
            </form >
        </Box >
    );
}

export default Expensescreate;