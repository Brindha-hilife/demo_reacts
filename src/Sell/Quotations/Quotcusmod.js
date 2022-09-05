import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Grid, Button, Dialog, DialogTitle, DialogContent, DialogActions, IconButton, Typography, Radio, FormControl, InputLabel, OutlinedInput, Select, MenuItem, RadioGroup, Tooltip, FormControlLabel, InputAdornment } from '@mui/material';
import { styled } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';
import { FaInfo, FaIdBadge, FaUsers, FaBriefcase, FaMoneyBillAlt, FaEnvelope, FaCalendar, FaMobile, FaPhone, FaGlobe, FaPlus } from "react-icons/fa";
import { FcInfo } from "react-icons/fc";
import { makeStyles, } from "@material-ui/core/styles";
import { sellStyle } from '../Sellstyle';
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

function Quotcusmod() {

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
    const [quotMod, setquotMod] = useState(false);

    const quotModOpen = () => {
        setquotMod(true);
    };
    const quotModClose = () => {
        setquotMod(false);
    };

    // Radio
    const classes = useStyles();
    //***individual or business****//
    const [shown, setShown] = useState(true);
    //*** Date ****/
    const [shownDate, setShownDate] = useState(true);

    //  Add Text field
    const [quotCus, setQuotCus] = useState({
        quotCusContactType: "", quotCusContactId: "", quotCusBusinessName: "", quotCusGroup: "", quotCusPrefix: "", quotCusFistN: "", quotCusMiddleN: "", quotCusLastN: "", quotCusMobile: "",
        quotCusAlternateMob: "", quotCusLandline: "", quotCusEmail: "", quotCusDate: "", quotCusTaxNo: "", quotCusOpeningBal: "", quotCusPayTerm: "", quotCusAddressL1: "",
        quotCusAddressL2: "", quotCusCountry: "", quotCusState: "", quotCusCity: "", quotCusZipCode: "", quotCusCustom1: "", quotCusCustom2: "", quotCusCustom3: "",
        quotCusCustom4: "", quotCusCustom5: "", quotCusCustom6: "", quotCusCustom7: "", quotCusCustom8: "", quotCusCustom9: "", quotCusShipping: "",
    });

    //***more information***// 
    const [hidden, setHidden] = useState(true);


    return (
        <Box>
            <FaPlus onClick={quotModOpen} />
            <BootstrapDialog
                onClose={quotModClose}
                aria-labelledby="customized-dialog-title"
                open={quotMod}
                maxWidth='md'
            >
                <BootstrapDialogTitle id="customized-dialog-title" onClose={quotModClose}>
                    Add contact
                </BootstrapDialogTitle>
                <DialogContent dividers>
                    <Box>
                        <Grid container spacing={4} >
                            <Grid item xs={12} sm={6} md={4} lg={4}>
                                <FormControl>
                                    <RadioGroup
                                        row
                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                        name="row-radio-buttons-group"
                                        sx={{ paddingLeft: '30px' }} >
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
                                    <Grid sx={sellStyle.spanIcons}>
                                        <FaIdBadge />
                                    </Grid>
                                    <FormControl size="small" fullWidth>
                                        <InputLabel htmlFor="component-outlined">Contact Id</InputLabel>
                                        <OutlinedInput
                                            id="component-outlined"
                                            label="Contact Id"
                                            value={quotCus.quotCusContactId}
                                            onChange={(event) => { setQuotCus({ ...quotCus, quotCusContactId: event.target.value }) }}
                                            type="text"
                                        />
                                    </FormControl>
                                </Grid>
                                <Typography variant='body2' sx={{ mt: '5px' }}>Leave empty to autogenerate</Typography>
                            </Grid>
                            <Grid item xs={12} sm={12} md={4} lg={4} >
                                <Grid sx={{ display: 'flex' }}  >
                                    <Grid sx={sellStyle.spanIcons}><FaUsers /></Grid>
                                    <FormControl size="small" fullWidth>
                                        <InputLabel htmlFor="component-outlined">Customer Group</InputLabel>
                                        <Select
                                            labelId="demo-select-small"
                                            id="demo-select-small"
                                            label="contact type*"
                                            value={quotCus.quotCusGroup}
                                            onChange={(event) => { setQuotCus({ ...quotCus, quotCusGroup: event.target.value }) }}
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
                                            <Grid sx={sellStyle.spanIcons}><FaBriefcase /></Grid>
                                            <FormControl size="small" fullWidth>
                                                <InputLabel htmlFor="component-outlined">Business Name</InputLabel>
                                                <OutlinedInput
                                                    id="component-outlined"
                                                    label="Business Name"
                                                    value={quotCus.quotCusBusinessName}
                                                    onChange={(event) => { setQuotCus({ ...quotCus, quotCusBusinessName: event.target.value }) }}
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
                                                    value={quotCus.quotCusPrefix}
                                                    onChange={(event) => { setQuotCus({ ...quotCus, quotCusPrefix: event.target.value }) }}
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
                                                    value={quotCus.quotCusFistN}
                                                    onChange={(event) => { setQuotCus({ ...quotCus, quotCusFistN: event.target.value }) }}
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
                                                    value={quotCus.quotCusMiddleN}
                                                    onChange={(event) => { setQuotCus({ ...quotCus, quotCusMiddleN: event.target.value }) }}
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
                                                    value={quotCus.quotCusLastN}
                                                    onChange={(event) => { setQuotCus({ ...quotCus, quotCusLastN: event.target.value }) }}
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
                                    <Grid sx={sellStyle.spanIcons}> <FaMobile />
                                    </Grid>
                                    <FormControl size="small" fullWidth>
                                        <InputLabel htmlFor="component-outlined">Mobile *</InputLabel>
                                        <OutlinedInput
                                            id="component-outlined"
                                            label="Mobile *"
                                            value={quotCus.quotCusMobile}
                                            onChange={(event) => { setQuotCus({ ...quotCus, quotCusMobile: event.target.value }) }}
                                            type="text"
                                        />
                                    </FormControl>
                                </Grid>
                            </Grid>
                            <Grid item xs={12} sm={12} md={3} lg={3} >
                                <Grid sx={{ display: 'flex' }}  >
                                    <Grid sx={sellStyle.spanIcons}>  <FaPhone />
                                    </Grid>
                                    <FormControl size="small" fullWidth>
                                        <InputLabel htmlFor="component-outlined">Alternate Mobile </InputLabel>
                                        <OutlinedInput
                                            id="component-outlined"
                                            label="Alternate Mobile"
                                            value={quotCus.quotCusAlternateMob}
                                            onChange={(event) => { setQuotCus({ ...quotCus, quotCusAlternateMob: event.target.value }) }}
                                            type="text"
                                        />
                                    </FormControl>
                                </Grid>
                            </Grid>
                            <Grid item xs={12} sm={12} md={3} lg={3} >
                                <Grid sx={{ display: 'flex' }}  >
                                    <Grid sx={sellStyle.spanIcons}> <FaPhone />
                                    </Grid>
                                    <FormControl size="small" fullWidth>
                                        <InputLabel htmlFor="component-outlined">Landline No</InputLabel>
                                        <OutlinedInput
                                            id="component-outlined"
                                            label="Landline No"
                                            value={quotCus.quotCusLandline}
                                            onChange={(event) => { setQuotCus({ ...quotCus, quotCusLandline: event.target.value }) }}
                                            type="text"
                                        />
                                    </FormControl>
                                </Grid>
                            </Grid>
                            <Grid item xs={12} sm={12} md={3} lg={3} >
                                <Grid sx={{ display: 'flex' }}  >
                                    <Grid sx={sellStyle.spanIcons}>   <FaEnvelope />
                                    </Grid>
                                    <FormControl size="small" fullWidth>
                                        <InputLabel htmlFor="component-outlined">Email</InputLabel>
                                        <OutlinedInput
                                            id="component-outlined"
                                            label="Email"
                                            value={quotCus.quotCusLandline}
                                            onChange={(event) => { setQuotCus({ ...quotCus, quotCusLandline: event.target.value }) }}
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
                                            <Grid sx={sellStyle.spanIcons}>  <FaCalendar />
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
                        <Grid container sx={sellStyle.container_more}>
                            <Grid >
                                <Button sx={sellStyle.buttonAdd} onClick={() => setHidden(s => !s)}>More Information<ArrowDropDownIcon /></Button>
                            </Grid>
                        </Grid>

                        {/* taxno grid */}
                        {!hidden ?

                            <Grid container spacing={2} >
                                <br />
                                <Grid item xs={12} sm={12} md={4} lg={4} >

                                    <Grid sx={{ display: 'flex' }}  >
                                        <Grid sx={sellStyle.spanIcons}>   <FaInfo />
                                        </Grid>
                                        <FormControl size="small" fullWidth>
                                            <InputLabel htmlFor="component-outlined">Tax No</InputLabel>
                                            <OutlinedInput
                                                id="component-outlined"
                                                label="Tax No"
                                                value={quotCus.quotCusTaxNo}
                                                onChange={(event) => { setQuotCus({ ...quotCus, quotCusTaxNo: event.target.value }) }}
                                                type="text"
                                            />
                                        </FormControl>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12} sm={12} md={4} lg={4} >
                                    <Grid sx={{ display: 'flex' }}  >
                                        <Grid sx={sellStyle.spanIcons}>    <FaMoneyBillAlt />
                                        </Grid>
                                        <FormControl size="small" fullWidth>
                                            <InputLabel htmlFor="component-outlined">Opening Balance </InputLabel>
                                            <OutlinedInput
                                                id="component-outlined"
                                                label="Opening Balance"
                                                value={quotCus.quotCusOpeningBal}
                                                onChange={(event) => { setQuotCus({ ...quotCus, quotCusOpeningBal: event.target.value }) }}
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
                                                value={quotCus.quotCusPayTerm}
                                                onChange={(event) => { setQuotCus({ ...quotCus, quotCusPayTerm: event.target.value }) }}
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
                                        <Grid sx={sellStyle.spanIcons}><FaMoneyBillAlt /></Grid>
                                        <FormControl size="small" fullWidth>
                                            <InputLabel htmlFor="component-outlined">Credit Limit</InputLabel>
                                            <OutlinedInput
                                                id="component-outlined"
                                                label="Business Name"
                                                value={quotCus.quotCusBusinessName}
                                                onChange={(event) => { setQuotCus({ ...quotCus, quotCusBusinessName: event.target.value }) }}
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
                                                value={quotCus.quotCusAddressL1}
                                                onChange={(event) => { setQuotCus({ ...quotCus, quotCusAddressL1: event.target.value }) }}
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
                                                value={quotCus.quotCusAddressL2}
                                                onChange={(event) => { setQuotCus({ ...quotCus, quotCusAddressL2: event.target.value }) }}
                                                type="text"
                                            />
                                        </FormControl>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12} sm={6} md={3} lg={3}>
                                    <Grid sx={{ display: 'flex' }}  >
                                        <Grid sx={sellStyle.spanLoc}>    <LocationOnIcon />
                                        </Grid>
                                        <FormControl size="small" fullWidth sx={{ display: 'flex' }}>
                                            <InputLabel id="demo-select-small">City</InputLabel>
                                            <Select
                                                labelId="demo-select-small"
                                                id="demo-select-small"
                                                label="City"
                                                value={quotCus.quotCusCity}
                                                onChange={(event) => { setQuotCus({ ...quotCus, quotCusCity: event.target.value }) }}
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
                                        <Grid sx={sellStyle.spanLoc}>    <LocationOnIcon />
                                        </Grid>
                                        <FormControl size="small" fullWidth sx={{ display: 'flex' }}>
                                            <InputLabel id="demo-select-small">State</InputLabel>
                                            <Select
                                                labelId="demo-select-small"
                                                id="demo-select-small"
                                                label="State"
                                                value={quotCus.quotCusState}
                                                onChange={(event) => { setQuotCus({ ...quotCus, quotCusState: event.target.value }) }}
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
                                        <Grid sx={sellStyle.spanIcons}>     <FaGlobe />
                                        </Grid>
                                        <FormControl size="small" fullWidth sx={{ display: 'flex' }}>
                                            <InputLabel id="demo-select-small">Country</InputLabel>
                                            <Select
                                                labelId="demo-select-small"
                                                id="demo-select-small"
                                                label="country"
                                                value={quotCus.quotCusCountry}
                                                onChange={(event) => { setQuotCus({ ...quotCus, quotCusCountry: event.target.value }) }}
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
                                        <Grid sx={sellStyle.spanLoc}>    <LocationOnIcon />
                                        </Grid>
                                        <FormControl size="small" fullWidth>
                                            <InputLabel htmlFor="component-outlined">Zip Code </InputLabel>
                                            <OutlinedInput
                                                id="component-outlined"
                                                label="Zip Code"
                                                value={quotCus.quotCusZipCode}
                                                onChange={(event) => { setQuotCus({ ...quotCus, quotCusZipCode: event.target.value }) }}
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
                                                value={quotCus.quotCusCustom1}
                                                onChange={(event) => { setQuotCus({ ...quotCus, quotCusCustom1: event.target.value }) }}
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
                                                value={quotCus.quotCusCustom2}
                                                onChange={(event) => { setQuotCus({ ...quotCus, quotCusCustom2: event.target.value }) }}
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
                                                value={quotCus.quotCusCustom3}
                                                onChange={(event) => { setQuotCus({ ...quotCus, quotCusCustom3: event.target.value }) }}
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
                                                value={quotCus.quotCusCustom4}
                                                onChange={(event) => { setQuotCus({ ...quotCus, quotCusCustom4: event.target.value }) }}
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
                                                value={quotCus.quotCusCustom5}
                                                onChange={(event) => { setQuotCus({ ...quotCus, quotCusCustom5: event.target.value }) }}
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
                                                value={quotCus.quotCusCustom6}
                                                onChange={(event) => { setQuotCus({ ...quotCus, quotCusCustom6: event.target.value }) }}
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
                                                value={quotCus.quotCusCustom7}
                                                onChange={(event) => { setQuotCus({ ...quotCus, quotCusCustom7: event.target.value }) }}
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
                                                value={quotCus.quotCusCustom8}
                                                onChange={(event) => { setQuotCus({ ...quotCus, quotCusCustom8: event.target.value }) }}
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
                                                value={quotCus.quotCusCustom9}
                                                onChange={(event) => { setQuotCus({ ...quotCus, quotCusCustom9: event.target.value }) }}
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
                                                value={quotCus.quotCusCustom9}
                                                onChange={(event) => { setQuotCus({ ...quotCus, quotCusCustom9: event.target.value }) }}
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
                                            value={quotCus.quotCusShipping}
                                            onChange={(event) => { setQuotCus({ ...quotCus, quotCusShipping: event.target.value }) }}
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
                    <Button variant="contained" color="error" autoFocus onClick={quotModClose}>
                        Close
                    </Button>
                </DialogActions>
            </BootstrapDialog>
        </Box>
    );
}

export default Quotcusmod;
