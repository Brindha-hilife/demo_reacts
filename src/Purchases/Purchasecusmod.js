import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Grid, Button, Dialog, DialogTitle, DialogContent, DialogActions, IconButton, Typography, Radio, FormControl, InputLabel, OutlinedInput, Select, MenuItem, RadioGroup, Tooltip, FormControlLabel, InputAdornment } from '@mui/material';
import { styled } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';
import { FaInfo, FaIdBadge, FaUsers, FaBriefcase, FaMoneyBillAlt, FaEnvelope, FaCalendar, FaMobile, FaPhone, FaGlobe, FaPlus } from "react-icons/fa";
import { FcInfo } from "react-icons/fc";
import { makeStyles, } from "@material-ui/core/styles";
import { purchaseStyle } from './Purchasestyle';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';




const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

const BootstrapDialogTitle = (props) => {
    const { children, onClose, ...other } = props;

    return (
        <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
            {children}
            {onClose ? (
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>
            ) : null}
        </DialogTitle>
    );
};

BootstrapDialogTitle.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
};

function Purchasecusmod() {

    // Tooltip
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

    // Modal
    const [purchaseMod, setPurchaseMod] = useState(false);

    const purchaseModOpen = () => {
        setPurchaseMod(true);
    };
    const purchaseModClose = () => {
        setPurchaseMod(false);
    };

    // Radio
    const classes = useStyles();
    //***individual or business****//
    const [shown, setShown] = useState(true);
    //*** Date ****/
    const [shownDate, setShownDate] = useState(true);

    //  Add Text field
    const [purchaseCus, setPurchaseCus] = useState({
        purchaseCusContactType: "", purchaseCusContactId: "", purchaseCusBusinessName: "", purchaseCusGroup: "", purchaseCusPrefix: "", purchaseCusFistN: "", purchaseCusMiddleN: "", purchaseCusLastN: "", purchaseCusMobile: "",
        purchaseCusAlternateMob: "", purchaseCusLandline: "", purchaseCusEmail: "", purchaseCusDate: "", purchaseCusTaxNo: "", purchaseCusOpeningBal: "", purchaseCusPayTerm: "", purchaseCusAddressL1: "",
        purchaseCusAddressL2: "", purchaseCusCountry: "", purchaseCusState: "", purchaseCusCity: "", purchaseCusZipCode: "", purchaseCusCustom1: "", purchaseCusCustom2: "", purchaseCusCustom3: "",
        purchaseCusCustom4: "", purchaseCusCustom5: "", purchaseCusCustom6: "", purchaseCusCustom7: "", purchaseCusCustom8: "", purchaseCusCustom9: "", purchaseCusShipping: "",
    });

    //***more information***// 
    const [hidden, setHidden] = useState(true);


    return (
        <Box>
            <FaPlus onClick={purchaseModOpen} />
            <BootstrapDialog
                onClose={purchaseModClose}
                aria-labelledby="customized-dialog-title"
                open={purchaseMod}
                maxWidth='md'
            >
                <BootstrapDialogTitle id="customized-dialog-title" onClose={purchaseModClose}>
                    Add contact
                </BootstrapDialogTitle>
                <DialogContent dividers>
                    <Box>
                        <Grid container spacing={4} sx={purchaseStyle.textInput}>
                            <Grid item xs={12} sm={6} md={4} lg={4}>
                                <FormControl>
                                    <RadioGroup
                                        row
                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                        name="row-radio-buttons-group"
                                        sx={{ paddingLeft: '20x' }} >
                                        <FormControlLabel value="individual"
                                            onClick={() => { setShown(true); setShownDate(true) }} control={<Radio />}
                                            label="Individual"
                                        />
                                        <FormControlLabel value="business"
                                            onClick={() => { setShown(false); setShownDate(false) }} control={<Radio />}
                                            label="Business"
                                        />
                                    </RadioGroup>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={6} md={4} lg={4}>
                                <Grid sx={{ display: 'flex' }}  >
                                    <Grid sx={purchaseStyle.spanIcons}>
                                        <FaIdBadge />
                                    </Grid>
                                    <FormControl size="small" fullWidth>
                                        <InputLabel htmlFor="component-outlined">Contact Id</InputLabel>
                                        <OutlinedInput
                                            id="component-outlined"
                                            label="Contact Id"
                                            value={purchaseCus.purchaseCusContactId}
                                            onChange={(event) => { setPurchaseCus({ ...purchaseCus, purchaseCusContactId: event.target.value }) }}
                                            type="text"
                                        />
                                    </FormControl>
                                </Grid>
                                <Typography variant='body2' sx={{ mt: '5px' }}>Leave empty to autogenerate</Typography>
                            </Grid>
                            <Grid item xs={12} sm={12} md={4} lg={4} >
                                <Grid sx={{ display: 'flex' }}  >
                                    <Grid sx={purchaseStyle.spanIcons}><FaUsers /></Grid>
                                    <FormControl size="small" fullWidth>
                                        <InputLabel htmlFor="component-outlined">Customer Group</InputLabel>
                                        <Select
                                            labelId="demo-select-small"
                                            id="demo-select-small"
                                            label="contact type*"
                                            value={purchaseCus.purchaseCusGroup}
                                            onChange={(event) => { setPurchaseCus({ ...purchaseCus, purchaseCusGroup: event.target.value }) }}
                                            fullWidth >
                                            <MenuItem value={1} >None</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                            </Grid>
                            {!shown ?
                                <>
                                    <Grid item xs={12} sm={12} md={4} lg={3} >
                                        <Grid sx={{ display: 'flex' }}  >
                                            <Grid sx={purchaseStyle.spanIcons}><FaBriefcase /></Grid>
                                            <FormControl size="small" fullWidth>
                                                <InputLabel htmlFor="component-outlined">Business Name</InputLabel>
                                                <OutlinedInput
                                                    id="component-outlined"
                                                    label="Business Name"
                                                    value={purchaseCus.purchaseCusBusinessName}
                                                    onChange={(event) => { setPurchaseCus({ ...purchaseCus, purchaseCusBusinessName: event.target.value }) }}
                                                    type="text"
                                                />
                                            </FormControl>
                                        </Grid>
                                    </Grid>
                                    <Grid item md={8}  > </Grid>
                                </>
                                :
                                <>
                                    {/* 3rd grid start-individual */}
                                    <Grid item xs={12} sm={12} md={3} lg={3}>
                                        <Grid sx={{ display: 'flex' }}  >
                                            <FormControl size="small" fullWidth>
                                                <InputLabel htmlFor="component-outlined">prefix</InputLabel>
                                                <OutlinedInput
                                                    id="component-outlined"
                                                    label="Business Name"
                                                    value={purchaseCus.purchaseCusPrefix}
                                                    onChange={(event) => { setPurchaseCus({ ...purchaseCus, purchaseCusPrefix: event.target.value }) }}
                                                    type="text"
                                                />
                                            </FormControl>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={3} lg={3} >
                                        <Grid sx={{ display: 'flex' }}  >
                                            <FormControl size="small" fullWidth>
                                                <InputLabel htmlFor="component-outlined">First Name</InputLabel>
                                                <OutlinedInput
                                                    id="component-outlined"
                                                    label="First Name"
                                                    value={purchaseCus.purchaseCusFistN}
                                                    onChange={(event) => { setPurchaseCus({ ...purchaseCus, purchaseCusFistN: event.target.value }) }}
                                                    type="text"
                                                />
                                            </FormControl>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={3} lg={3} >
                                        <Grid sx={{ display: 'flex' }}  >

                                            <FormControl size="small" fullWidth>
                                                <InputLabel htmlFor="component-outlined">Middle Name</InputLabel>
                                                <OutlinedInput
                                                    id="component-outlined"
                                                    label="Middle Name"
                                                    value={purchaseCus.purchaseCusMiddleN}
                                                    onChange={(event) => { setPurchaseCus({ ...purchaseCus, purchaseCusMiddleN: event.target.value }) }}
                                                    type="text"
                                                />
                                            </FormControl>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={3} lg={3} >
                                        <Grid sx={{ display: 'flex' }}  >
                                            <FormControl size="small" fullWidth>
                                                <InputLabel htmlFor="component-outlined">Last Name</InputLabel>
                                                <OutlinedInput
                                                    id="component-outlined"
                                                    label="Last Name"
                                                    value={purchaseCus.purchaseCusLastN}
                                                    onChange={(event) => { setPurchaseCus({ ...purchaseCus, purchaseCusLastN: event.target.value }) }}
                                                    type="text" />
                                            </FormControl>
                                        </Grid>
                                    </Grid>
                                </>
                            }



                            {/* <Grid item md={8} ></Grid> */}


                            {/* 4th grid start */}
                            <Grid item xs={12} sm={12} md={3} lg={3} >
                                <Grid sx={{ display: 'flex' }}  >
                                    <Grid sx={purchaseStyle.spanIcons}> <FaMobile />
                                    </Grid>
                                    <FormControl size="small" fullWidth>
                                        <InputLabel htmlFor="component-outlined">Mobile *</InputLabel>
                                        <OutlinedInput
                                            id="component-outlined"
                                            label="Mobile *"
                                            value={purchaseCus.purchaseCusMobile}
                                            onChange={(event) => { setPurchaseCus({ ...purchaseCus, purchaseCusMobile: event.target.value }) }}
                                            type="text"
                                        />
                                    </FormControl>
                                </Grid>
                            </Grid>
                            <Grid item xs={12} sm={12} md={3} lg={3} >
                                <Grid sx={{ display: 'flex' }}  >
                                    <Grid sx={purchaseStyle.spanIcons}>  <FaPhone />
                                    </Grid>
                                    <FormControl size="small" fullWidth>
                                        <InputLabel htmlFor="component-outlined">Alternate Mobile </InputLabel>
                                        <OutlinedInput
                                            id="component-outlined"
                                            label="Alternate Mobile"
                                            value={purchaseCus.purchaseCusAlternateMob}
                                            onChange={(event) => { setPurchaseCus({ ...purchaseCus, purchaseCusAlternateMob: event.target.value }) }}
                                            type="text"
                                        />
                                    </FormControl>
                                </Grid>
                            </Grid>
                            <Grid item xs={12} sm={12} md={3} lg={3} >
                                <Grid sx={{ display: 'flex' }}  >
                                    <Grid sx={purchaseStyle.spanIcons}> <FaPhone />
                                    </Grid>
                                    <FormControl size="small" fullWidth>
                                        <InputLabel htmlFor="component-outlined">Landline No</InputLabel>
                                        <OutlinedInput
                                            id="component-outlined"
                                            label="Landline No"
                                            value={purchaseCus.purchaseCusLandline}
                                            onChange={(event) => { setPurchaseCus({ ...purchaseCus, purchaseCusLandline: event.target.value }) }}
                                            type="text"
                                        />
                                    </FormControl>
                                </Grid>
                            </Grid>
                            <Grid item xs={12} sm={12} md={3} lg={3} >
                                <Grid sx={{ display: 'flex' }}  >
                                    <Grid sx={purchaseStyle.spanIcons}>   <FaEnvelope />
                                    </Grid>
                                    <FormControl size="small" fullWidth>
                                        <InputLabel htmlFor="component-outlined">Email</InputLabel>
                                        <OutlinedInput
                                            id="component-outlined"
                                            label="Email"
                                            value={purchaseCus.purchaseCusLandline}
                                            onChange={(event) => { setPurchaseCus({ ...purchaseCus, purchaseCusLandline: event.target.value }) }}
                                            type="text"
                                        />
                                    </FormControl>
                                </Grid>
                            </Grid>
                            {shownDate ?
                                <>
                                    {/* 5th grid start */}
                                    <Grid item xs={12} sm={12} md={4} lg={3} >
                                        <Grid sx={{ display: 'flex' }}  >
                                            <Grid sx={purchaseStyle.spanIcons}>  <FaCalendar />
                                            </Grid>
                                            <FormControl size="small" fullWidth>
                                                <InputLabel htmlFor="component-outlined"></InputLabel>
                                                <OutlinedInput
                                                    id="component-outlined"
                                                    label=""
                                                    type="date"
                                                />
                                            </FormControl>
                                        </Grid>
                                    </Grid>
                                    <Grid item md={8}  > </Grid>
                                </>
                                : null}
                        </Grid>
                        {/* more information button */}
                        <Grid container sx={purchaseStyle.container_more}>
                            <Grid >
                                <Button sx={purchaseStyle.buttonAdd} onClick={() => setHidden(s => !s)}>More Information<ArrowDropDownIcon /></Button>
                            </Grid>
                        </Grid>

                        {/* taxno grid */}
                        {!hidden ?

                            <Grid container spacing={2}  sx={purchaseStyle.textInput}>
                                <br />
                                <Grid item xs={12} sm={12} md={4} lg={4} >

                                    <Grid sx={{ display: 'flex' }}  >
                                        <Grid sx={purchaseStyle.spanIcons}>   <FaInfo />
                                        </Grid>
                                        <FormControl size="small" fullWidth>
                                            <InputLabel htmlFor="component-outlined">Tax No</InputLabel>
                                            <OutlinedInput
                                                id="component-outlined"
                                                label="Tax No"
                                                value={purchaseCus.purchaseCusTaxNo}
                                                onChange={(event) => { setPurchaseCus({ ...purchaseCus, purchaseCusTaxNo: event.target.value }) }}
                                                type="text"
                                            />
                                        </FormControl>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12} sm={12} md={4} lg={4} >
                                    <Grid sx={{ display: 'flex' }}  >
                                        <Grid sx={purchaseStyle.spanIcons}>    <FaMoneyBillAlt />
                                        </Grid>
                                        <FormControl size="small" fullWidth>
                                            <InputLabel htmlFor="component-outlined">Opening Balance </InputLabel>
                                            <OutlinedInput
                                                id="component-outlined"
                                                label="Opening Balance"
                                                value={purchaseCus.purchaseCusOpeningBal}
                                                onChange={(event) => { setPurchaseCus({ ...purchaseCus, purchaseCusOpeningBal: event.target.value }) }}
                                                type="text" />
                                        </FormControl>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12} sm={12} md={4} lg={4} >
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
                                                                // value={productEdit.producteditsku}
                                                                // onChange={(e) => { setProductEdit({ ...productEdit, Producteditsku: e.target.value }) }}
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
                                                value={purchaseCus.purchaseCusPayTerm}
                                                onChange={(event) => { setPurchaseCus({ ...purchaseCus, purchaseCusPayTerm: event.target.value }) }}
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
                                <Grid item xs={12} sm={12} md={4} lg={4} >
                                    <Grid sx={{ display: 'flex' }}  >
                                        <Grid sx={purchaseStyle.spanIcons}><FaMoneyBillAlt /></Grid>
                                        <FormControl size="small" fullWidth>
                                            <InputLabel htmlFor="component-outlined">Credit Limit</InputLabel>
                                            <OutlinedInput
                                                id="component-outlined"
                                                label="Business Name"
                                                value={purchaseCus.purchaseCusBusinessName}
                                                onChange={(event) => { setPurchaseCus({ ...purchaseCus, purchaseCusBusinessName: event.target.value }) }}
                                                type="text"
                                            />
                                        </FormControl>
                                    </Grid>
                                </Grid>
                                <Grid item lg={8}> </Grid>
                                <Grid item xs={12} sm={6} md={6} lg={6}>
                                    <Grid sx={{ display: 'flex' }}  >
                                        <FormControl size="small" fullWidth>
                                            <InputLabel htmlFor="component-outlined">Address Line 1</InputLabel>
                                            <OutlinedInput
                                                id="component-outlined"
                                                label="Address Line 1"
                                                value={purchaseCus.purchaseCusAddressL1}
                                                onChange={(event) => { setPurchaseCus({ ...purchaseCus, purchaseCusAddressL1: event.target.value }) }}
                                                type="text" />
                                        </FormControl>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12} sm={6} md={6} lg={6}>
                                    <Grid sx={{ display: 'flex' }}  >

                                        <FormControl size="small" fullWidth>
                                            <InputLabel htmlFor="component-outlined">Address Line 2 </InputLabel>
                                            <OutlinedInput
                                                id="component-outlined"
                                                label="Address Line 2"
                                                value={purchaseCus.purchaseCusAddressL2}
                                                onChange={(event) => { setPurchaseCus({ ...purchaseCus, purchaseCusAddressL2: event.target.value }) }}
                                                type="text"
                                            />
                                        </FormControl>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12} sm={6} md={3} lg={3}>
                                    <Grid sx={{ display: 'flex' }}  >
                                        <Grid sx={purchaseStyle.spanLoc}>    <LocationOnIcon />
                                        </Grid>
                                        <FormControl size="small" fullWidth sx={{ display: 'flex' }}>
                                            <InputLabel id="demo-select-small">City</InputLabel>
                                            <Select
                                                labelId="demo-select-small"
                                                id="demo-select-small"
                                                label="City"
                                                value={purchaseCus.purchaseCusCity}
                                                onChange={(event) => { setPurchaseCus({ ...purchaseCus, purchaseCusCity: event.target.value }) }}
                                                fullWidth
                                            >
                                                <MenuItem value="">
                                                </MenuItem>
                                                <MenuItem value={1}>xxx</MenuItem>
                                                <MenuItem value={2}>yyy</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12} sm={6} md={3} lg={3}>
                                    <Grid sx={{ display: 'flex' }}  >
                                        <Grid sx={purchaseStyle.spanLoc}>    <LocationOnIcon />
                                        </Grid>
                                        <FormControl size="small" fullWidth sx={{ display: 'flex' }}>
                                            <InputLabel id="demo-select-small">State</InputLabel>
                                            <Select
                                                labelId="demo-select-small"
                                                id="demo-select-small"
                                                label="State"
                                                value={purchaseCus.purchaseCusState}
                                                onChange={(event) => { setPurchaseCus({ ...purchaseCus, purchaseCusState: event.target.value }) }}
                                                fullWidth
                                            >
                                                <MenuItem value="">
                                                </MenuItem>
                                                <MenuItem value={1}>xxx</MenuItem>
                                                <MenuItem value={2}>yyy</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12} sm={6} md={3} lg={3}>
                                    <Grid sx={{ display: 'flex' }}  >
                                        <Grid sx={purchaseStyle.spanIcons}>     <FaGlobe />
                                        </Grid>
                                        <FormControl size="small" fullWidth sx={{ display: 'flex' }}>
                                            <InputLabel id="demo-select-small">Country</InputLabel>
                                            <Select
                                                labelId="demo-select-small"
                                                id="demo-select-small"
                                                label="country"
                                                value={purchaseCus.purchaseCusCountry}
                                                onChange={(event) => { setPurchaseCus({ ...purchaseCus, purchaseCusCountry: event.target.value }) }}
                                                fullWidth  >
                                                <MenuItem value="">
                                                </MenuItem>
                                                <MenuItem value={1}>xxx</MenuItem>
                                                <MenuItem value={2}>yyy</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12} sm={6} md={3} lg={3}>
                                    <Grid sx={{ display: 'flex' }}  >
                                        <Grid sx={purchaseStyle.spanLoc}>    <LocationOnIcon />
                                        </Grid>
                                        <FormControl size="small" fullWidth>
                                            <InputLabel htmlFor="component-outlined">Zip Code </InputLabel>
                                            <OutlinedInput
                                                id="component-outlined"
                                                label="Zip Code"
                                                value={purchaseCus.purchaseCusZipCode}
                                                onChange={(event) => { setPurchaseCus({ ...purchaseCus, purchaseCusZipCode: event.target.value }) }}
                                                type="text"
                                            />
                                        </FormControl>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12} sm={6} md={3} lg={3}>
                                    <Grid sx={{ display: 'flex' }}  >
                                        <FormControl size="small" fullWidth>
                                            <InputLabel htmlFor="component-outlined">Custom Field 1 </InputLabel>
                                            <OutlinedInput
                                                id="component-outlined"
                                                label="Custom 1 "
                                                value={purchaseCus.purchaseCusCustom1}
                                                onChange={(event) => { setPurchaseCus({ ...purchaseCus, purchaseCusCustom1: event.target.value }) }}
                                                type="text"
                                            />
                                        </FormControl>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12} sm={6} md={3} lg={3}>
                                    <Grid sx={{ display: 'flex' }}  >
                                        <FormControl size="small" fullWidth>
                                            <InputLabel htmlFor="component-outlined">Custom Field 2 </InputLabel>
                                            <OutlinedInput
                                                id="component-outlined"
                                                label="Custom 2 "
                                                value={purchaseCus.purchaseCusCustom2}
                                                onChange={(event) => { setPurchaseCus({ ...purchaseCus, purchaseCusCustom2: event.target.value }) }}
                                                type="text"
                                            />
                                        </FormControl>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12} sm={6} md={3} lg={3}>
                                    <Grid sx={{ display: 'flex' }}  >
                                        <FormControl size="small" fullWidth>
                                            <InputLabel htmlFor="component-outlined">Custom Field 3</InputLabel>
                                            <OutlinedInput
                                                id="component-outlined"
                                                label="Custom 3"
                                                value={purchaseCus.purchaseCusCustom3}
                                                onChange={(event) => { setPurchaseCus({ ...purchaseCus, purchaseCusCustom3: event.target.value }) }}
                                                type="text"
                                            />
                                        </FormControl>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12} sm={6} md={3} lg={3}>
                                    <Grid sx={{ display: 'flex' }}  >
                                        <FormControl size="small" fullWidth>
                                            <InputLabel htmlFor="component-outlined">Custom Field 4 </InputLabel>
                                            <OutlinedInput
                                                id="component-outlined"
                                                label="Custom 4"
                                                value={purchaseCus.purchaseCusCustom4}
                                                onChange={(event) => { setPurchaseCus({ ...purchaseCus, purchaseCusCustom4: event.target.value }) }}
                                                type="text"
                                            />
                                        </FormControl>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12} sm={6} md={3} lg={3}>
                                    <Grid sx={{ display: 'flex' }}  >
                                        <FormControl size="small" fullWidth>
                                            <InputLabel htmlFor="component-outlined">Custom Field 5</InputLabel>
                                            <OutlinedInput
                                                id="component-outlined"
                                                label="Custom 5"
                                                value={purchaseCus.purchaseCusCustom5}
                                                onChange={(event) => { setPurchaseCus({ ...purchaseCus, purchaseCusCustom5: event.target.value }) }}
                                                type="text"
                                            />
                                        </FormControl>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12} sm={6} md={3} lg={3}>
                                    <Grid sx={{ display: 'flex' }}  >
                                        <FormControl size="small" fullWidth>
                                            <InputLabel htmlFor="component-outlined">Custom Field 6 </InputLabel>
                                            <OutlinedInput
                                                id="component-outlined"
                                                label="Custom 6"
                                                value={purchaseCus.purchaseCusCustom6}
                                                onChange={(event) => { setPurchaseCus({ ...purchaseCus, purchaseCusCustom6: event.target.value }) }}
                                                type="text"
                                            />
                                        </FormControl>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12} sm={6} md={3} lg={3}>
                                    <Grid sx={{ display: 'flex' }}  >
                                        <FormControl size="small" fullWidth>
                                            <InputLabel htmlFor="component-outlined">Custom Field 7 </InputLabel>
                                            <OutlinedInput
                                                id="component-outlined"
                                                label="Custom 7"
                                                value={purchaseCus.purchaseCusCustom7}
                                                onChange={(event) => { setPurchaseCus({ ...purchaseCus, purchaseCusCustom7: event.target.value }) }}
                                                type="text"
                                            />
                                        </FormControl>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12} sm={6} md={3} lg={3}>
                                    <Grid sx={{ display: 'flex' }}  >
                                        <FormControl size="small" fullWidth>
                                            <InputLabel htmlFor="component-outlined">Custom Field 8 </InputLabel>
                                            <OutlinedInput
                                                id="component-outlined"
                                                label="Custom 8"
                                                value={purchaseCus.purchaseCusCustom8}
                                                onChange={(event) => { setPurchaseCus({ ...purchaseCus, purchaseCusCustom8: event.target.value }) }}
                                                type="text"
                                            />
                                        </FormControl>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12} sm={6} md={3} lg={3}>
                                    <Grid sx={{ display: 'flex' }}  >
                                        <FormControl size="small" fullWidth>
                                            <InputLabel htmlFor="component-outlined">Custom Field 9 </InputLabel>
                                            <OutlinedInput
                                                id="component-outlined"
                                                label="Custom 9 "
                                                value={purchaseCus.purchaseCusCustom9}
                                                onChange={(event) => { setPurchaseCus({ ...purchaseCus, purchaseCusCustom9: event.target.value }) }}
                                                type="text"
                                            />
                                        </FormControl>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12} sm={6} md={3} lg={3}>
                                    <Grid sx={{ display: 'flex' }}  >
                                        <FormControl size="small" fullWidth>
                                            <InputLabel htmlFor="component-outlined">Custom Field 10 </InputLabel>
                                            <OutlinedInput
                                                id="component-outlined"
                                                label="Custom 9 "
                                                value={purchaseCus.purchaseCusCustom9}
                                                onChange={(event) => { setPurchaseCus({ ...purchaseCus, purchaseCusCustom9: event.target.value }) }}
                                                type="text"
                                            />
                                        </FormControl>
                                    </Grid>
                                </Grid>
                                <Grid item md={3}  ></Grid>
                                <Grid item md={3}  ></Grid>
                                <Grid item md={2}  ></Grid>
                                <Grid item md={8}  >
                                    <FormControl size="small" fullWidth>
                                        <InputLabel htmlFor="component-outlined">Shipping Address </InputLabel>
                                        <OutlinedInput
                                            id="component-outlined"
                                            label="Shipping Address "
                                            value={purchaseCus.purchaseCusShipping}
                                            onChange={(event) => { setPurchaseCus({ ...purchaseCus, purchaseCusShipping: event.target.value }) }}
                                            type="text"
                                        />
                                    </FormControl>
                                </Grid>
                                <Grid item md={2}></Grid>
                            </Grid>
                            : null}
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button variant="contained" color="success" autoFocus  >
                        Save
                    </Button>
                    <Button variant="contained" color="error" autoFocus onClick={purchaseModClose}>
                        Close
                    </Button>
                </DialogActions>
            </BootstrapDialog>
        </Box>
    );
}

export default Purchasecusmod;
