import React, { useState } from 'react';
import { Box, Grid, Button, Dialog, DialogTitle, DialogContent, DialogActions, IconButton, Typography, Radio, FormControl, InputLabel, OutlinedInput, Select, MenuItem, RadioGroup, Tooltip, FormControlLabel, InputAdornment } from '@mui/material';
import { FaInfo, FaIdBadge, FaUsers, FaBriefcase, FaMoneyBillAlt, FaEnvelope, FaCalendar, FaMobile, FaPhone, FaGlobe, FaPlus } from "react-icons/fa";
import { FcInfo } from "react-icons/fc";
// import { makeStyles, } from "@material-ui/core/styles";
import { userStyle } from '../../PageStyle';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

function Purchasesupplieradd() {

    // Modal
    const [purchaseMod, setPurchaseMod] = useState(false);

    const purchaseModOpen = () => {
        setPurchaseMod(true);
    };
    const purchaseModClose = () => {
        setPurchaseMod(false);
    };

 
    //***individual or business****//
    const [shown, setShown] = useState(true);
    //*** Date ****/
    const [shownDate, setShownDate] = useState(true);

    //  Add Text field
    const [purchaseSub, setpurchaseSub] = useState({
        purchaseSubContactType: "", purchaseSubContactId: "", purchaseSubBusinessName: "", purchaseSubGroup: "", purchaseSubPrefix: "", purchaseSubFistN: "", purchaseSubMiddleN: "", purchaseSubLastN: "", purchaseSubMobile: "",
        purchaseSubAlternateMob: "", purchaseSubLandline: "", purchaseSubEmail: "", purchaseSubDate: "", purchaseSubTaxNo: "", purchaseSubOpeningBal: "", purchaseSubPayTerm: "", purchaseSubAddressL1: "",
        purchaseSubAddressL2: "", purchaseSubCountry: "", purchaseSubState: "", purchaseSubCity: "", purchaseSubZipCode: "", purchaseSubCustom1: "", purchaseSubCustom2: "", purchaseSubCustom3: "",
        purchaseSubCustom4: "", purchaseSubCustom5: "", purchaseSubCustom6: "", purchaseSubCustom7: "", purchaseSubCustom8: "", purchaseSubCustom9: "", purchaseSubShipping: "",
    });

    //***more information***// 
    const [hidden, setHidden] = useState(true);


    return (
        <Box>
            <FaPlus onClick={purchaseModOpen} />
                <Dialog  onClose={purchaseModClose} aria-labelledby="customized-dialog-title" open={purchaseMod} maxWidth='md'>
                    <DialogTitle id="customized-dialog-title" onClose={purchaseModClose}>  Add contact</DialogTitle>
                        <DialogContent dividers>
                            <Box>
                                <Grid container spacing={4} >
                                    <Grid item xs={12} sm={6} md={4} lg={4}>
                                        <FormControl>
                                            <RadioGroup rowaria-labelledby="demo-row-radio-buttons-group-label"name="row-radio-buttons-group" sx={{ paddingLeft: '10px' }} >
                                                <FormControlLabel value="individual" onClick={() => { setShown(true); setShownDate(true) }} control={<Radio />} label="Individual" />
                                                <FormControlLabel value="business"onClick={() => { setShown(false); setShownDate(false) }} control={<Radio />} label="Business" />
                                            </RadioGroup>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={4} lg={4}>
                                        <Grid sx={{ display: 'flex' }}  >
                                            <Grid sx={userStyle.spanIcons}>  <FaIdBadge /></Grid>
                                                <FormControl size="small" fullWidth>
                                                    <InputLabel htmlFor="component-outlined">Contact Id</InputLabel>
                                                        <OutlinedInput id="component-outlined" type="text" label="Contact Id"
                                                            value={purchaseSub.purchaseSubContactId}
                                                            onChange={(event) => { setpurchaseSub({ ...purchaseSub, purchaseSubContactId: event.target.value }) }}
                                                        />
                                                </FormControl>
                                        </Grid>
                                        <Typography variant='body2' sx={{ mt: '5px' }}>Leave empty to autogenerate</Typography>
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={4} lg={4} >
                                    
                                    </Grid>
                                    {!shown ?
                                        <>
                                            <Grid item xs={12} sm={12} md={4} lg={3} >
                                                <Grid sx={{ display: 'flex' }}  >
                                                    <Grid sx={userStyle.spanIcons}><FaBriefcase /></Grid>
                                                        <FormControl size="small" fullWidth>
                                                            <InputLabel htmlFor="component-outlined">Business Name</InputLabel>
                                                            <OutlinedInput id="component-outlined" type="text"label="Business Name"
                                                                value={purchaseSub.purchaseSubBusinessName}
                                                                onChange={(event) => { setpurchaseSub({ ...purchaseSub, purchaseSubBusinessName: event.target.value }) }}
                                                            />
                                                        </FormControl>
                                                </Grid>
                                            </Grid>
                                            <Grid item md={8}> </Grid>
                                        </>
                                        :
                                        <>
                                            {/* 3rd grid start-individual */}
                                            <Grid item xs={12} sm={12} md={3} lg={3}>
                                                <Grid sx={{ display: 'flex' }}  >
                                                    <FormControl size="small" fullWidth>
                                                        <InputLabel htmlFor="component-outlined">prefix</InputLabel>
                                                            <OutlinedInput id="component-outlined"  type="text" label="Business Name"
                                                                value={purchaseSub.purchaseSubPrefix}
                                                                onChange={(event) => { setpurchaseSub({ ...purchaseSub, purchaseSubPrefix: event.target.value }) }}
                                                            />
                                                    </FormControl>
                                                </Grid>
                                            </Grid>
                                            <Grid item xs={12} sm={12} md={3} lg={3} >
                                                <Grid sx={{ display: 'flex' }}  >
                                                    <FormControl size="small" fullWidth>
                                                        <InputLabel htmlFor="component-outlined">First Name</InputLabel>
                                                            <OutlinedInput id="component-outlined"  type="text" label="First Name"
                                                                value={purchaseSub.purchaseSubFistN}
                                                                onChange={(event) => { setpurchaseSub({ ...purchaseSub, purchaseSubFistN: event.target.value }) }} 
                                                            />
                                                    </FormControl>
                                                </Grid>
                                            </Grid>
                                            <Grid item xs={12} sm={12} md={3} lg={3} >
                                                <Grid sx={{ display: 'flex' }}  >
                                                    <FormControl size="small" fullWidth>
                                                        <InputLabel htmlFor="component-outlined">Middle Name</InputLabel>
                                                            <OutlinedInput id="component-outlined"  type="text" label="Middle Name"
                                                                value={purchaseSub.purchaseSubMiddleN}
                                                                onChange={(event) => { setpurchaseSub({ ...purchaseSub, purchaseSubMiddleN: event.target.value }) }}   
                                                            />
                                                    </FormControl>
                                                </Grid>
                                            </Grid>
                                            <Grid item xs={12} sm={12} md={3} lg={3} >
                                                <Grid sx={{ display: 'flex' }}  >
                                                    <FormControl size="small" fullWidth>
                                                        <InputLabel htmlFor="component-outlined">Last Name</InputLabel>
                                                            <OutlinedInput   id="component-outlined"   type="text" label="Last Name"
                                                                value={purchaseSub.purchaseSubLastN}
                                                                onChange={(event) => { setpurchaseSub({ ...purchaseSub, purchaseSubLastN: event.target.value }) }}
                                                            />
                                                    </FormControl>
                                                </Grid>
                                            </Grid>
                                        </>
                                    }
                            {/* 4th grid start */}
                                    <Grid item xs={12} sm={12} md={3} lg={3} >
                                        <Grid sx={{ display: 'flex' }}  >
                                            <Grid sx={userStyle.spanIcons}> <FaMobile />  </Grid>
                                                <FormControl size="small" fullWidth>
                                                    <InputLabel htmlFor="component-outlined">Mobile *</InputLabel>
                                                        <OutlinedInput id="component-outlined" type="text" label="Mobile *"
                                                            value={purchaseSub.purchaseSubMobile}
                                                            onChange={(event) => { setpurchaseSub({ ...purchaseSub, purchaseSubMobile: event.target.value }) }}   
                                                        />
                                                </FormControl>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={3} lg={3} >
                                        <Grid sx={{ display: 'flex' }}  >
                                            <Grid sx={userStyle.spanIcons}>  <FaPhone /> </Grid>
                                                <FormControl size="small" fullWidth>
                                                    <InputLabel htmlFor="component-outlined">Alternate Mobile </InputLabel>
                                                    <OutlinedInput id="component-outlined"  type="text" label="Alternate Mobile"
                                                        value={purchaseSub.purchaseSubAlternateMob}
                                                        onChange={(event) => { setpurchaseSub({ ...purchaseSub, purchaseSubAlternateMob: event.target.value }) }}
                                                    />
                                                </FormControl>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={3} lg={3} >
                                        <Grid sx={{ display: 'flex' }}  >
                                            <Grid sx={userStyle.spanIcons}> <FaPhone /> </Grid>
                                                <FormControl size="small" fullWidth>
                                                    <InputLabel htmlFor="component-outlined">Landline No</InputLabel>
                                                        <OutlinedInput  id="component-outlined" label="Landline No" type="text"
                                                            value={purchaseSub.purchaseSubLandline}
                                                            onChange={(event) => { setpurchaseSub({ ...purchaseSub, purchaseSubLandline: event.target.value }) }} 
                                                        />
                                                </FormControl>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={3} lg={3} >
                                        <Grid sx={{ display: 'flex' }}  >
                                            <Grid sx={userStyle.spanIcons}> <FaEnvelope /> </Grid>
                                                <FormControl size="small" fullWidth>
                                                    <InputLabel htmlFor="component-outlined">Email</InputLabel>
                                                    <OutlinedInput  id="component-outlined"   type="text" label="Email"
                                                        value={purchaseSub.purchaseSubLandline}
                                                        onChange={(event) => { setpurchaseSub({ ...purchaseSub, purchaseSubLandline: event.target.value }) }}
                                                    />
                                                </FormControl>
                                            </Grid>
                                        </Grid>
                                    {shownDate ?
                                        <>
                                    {/* 5th grid start */}
                                    <Grid item xs={12} sm={12} md={4} lg={3} >
                                        <Grid sx={{ display: 'flex' }}  >
                                            <Grid sx={userStyle.spanIcons}> <FaCalendar /> </Grid>
                                                <FormControl size="small" fullWidth>
                                                    <InputLabel htmlFor="component-outlined"></InputLabel>
                                                    <OutlinedInput id="component-outlined" label=""type="date" />
                                                </FormControl>
                                            </Grid>
                                        </Grid>
                                        <Grid item md={8}> </Grid>
                                        </>
                                    : null}
                                    </Grid>
                                {/* more information button */}
                                <Grid container sx={userStyle.gridcontainer}>
                                    <Grid >
                                        <Button sx={userStyle.buttonadd} onClick={() => setHidden(s => !s)}>More Information<ArrowDropDownIcon /></Button>
                                    </Grid>
                                </Grid>
                                <Grid container>
                                        <Grid item xs={12} sm={12} md={12} lg={12} >
                                            <hr />
                                        </Grid>
                                    </Grid>

                                {/* taxno grid */}
                                {!hidden ?

                                <Grid container spacing={2} >
                                        <br />
                                        <Grid item xs={12} sm={12} md={4} lg={4} >
                                            <Grid sx={{ display: 'flex' }}  >
                                                <Grid sx={userStyle.spanIcons}><FaInfo /></Grid>
                                                <FormControl size="small" fullWidth>
                                                    <InputLabel htmlFor="component-outlined">Tax No</InputLabel>
                                                        <OutlinedInput id="component-outlined"  type="text" label="Tax No"
                                                            value={purchaseSub.purchaseSubTaxNo}
                                                            onChange={(event) => { setpurchaseSub({ ...purchaseSub, purchaseSubTaxNo: event.target.value }) }}
                                                        />
                                                </FormControl>
                                            </Grid>
                                        </Grid>
                                        <Grid item xs={12} sm={12} md={4} lg={4} >
                                            <Grid sx={{ display: 'flex' }}  >
                                                <Grid sx={userStyle.spanIcons}>  <FaMoneyBillAlt /> </Grid>
                                                    <FormControl size="small" fullWidth>
                                                        <InputLabel htmlFor="component-outlined">Opening Balance </InputLabel>
                                                            <OutlinedInput id="component-outlined" label="Opening Balance" type="text"
                                                            value={purchaseSub.purchaseSubOpeningBal}
                                                            onChange={(event) => { setpurchaseSub({ ...purchaseSub, purchaseSubOpeningBal: event.target.value }) }}
                                                            />
                                                    </FormControl>
                                            </Grid>
                                        </Grid>
                                        <Grid item xs={12} sm={12} md={4} lg={4} >
                                            <Grid sx={{ display: 'flex' }}  >
                                                <Grid sx={{ width: '210px' }}>
                                                    <FormControl variant="outlined" size="small" fullWidth>
                                                        <InputLabel htmlFor="outlined-adornment-password">Pay Term</InputLabel>
                                                            <OutlinedInput id="outlined-adornment-password" label="Pay Term"
                                                                endAdornment={
                                                                    // <Tooltip title="Payment to be paid for purchases/sales within the given time period. All upcoming
                                                                    //  or due payments will be displayed in dashboard - Payment Due section" classes={{ arrow: classes.arrow, tooltip: classes.tooltip }} arrow>
                                                                        <InputAdornment position="end">
                                                                            <IconButton aria-label="toggle password visibility" edge="end"
                                                                            // value={productEdit.producteditsku}
                                                                            // onChange={(e) => { setProductEdit({ ...productEdit, Producteditsku: e.target.value }) }}
                                                                            >
                                                                                <FcInfo />
                                                                            </IconButton>
                                                                        </InputAdornment>
                                                                    // </Tooltip>
                                                                            }
                                                            />
                                                    </FormControl>
                                                </Grid>
                                                <FormControl size="small" fullWidth sx={{ display: 'flex' }}>
                                                    <InputLabel id="demo-select-small">Please Select</InputLabel>
                                                        <Select labelId="demo-select-small" id="demo-select-small" fullWidth label="Please Select"
                                                            value={purchaseSub.purchaseSubPayTerm}
                                                            onChange={(event) => { setpurchaseSub({ ...purchaseSub, purchaseSubPayTerm: event.target.value }) }}   
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
                                        <Grid container spacing={2} >
                                            <Grid item xs={12} sm={12} md={12} lg={12} >
                                                <hr />
                                            </Grid>
                                        </Grid>
                                
                                        <Grid item xs={12} sm={6} md={6} lg={6}>
                                            <Grid sx={{ display: 'flex' }}  >
                                                <FormControl size="small" fullWidth>
                                                    <InputLabel htmlFor="component-outlined">Address Line 1</InputLabel>
                                                        <OutlinedInput id="component-outlined" type="text" label="Address Line 1"
                                                            value={purchaseSub.purchaseSubAddressL1}
                                                            onChange={(event) => { setpurchaseSub({ ...purchaseSub, purchaseSubAddressL1: event.target.value }) }}
                                                        />
                                                </FormControl>
                                            </Grid>
                                        </Grid>
                                        <Grid item xs={12} sm={6} md={6} lg={6}>
                                            <Grid sx={{ display: 'flex' }}  >
                                                <FormControl size="small" fullWidth>
                                                    <InputLabel htmlFor="component-outlined">Address Line 2 </InputLabel>
                                                        <OutlinedInput id="component-outlined"label="Address Line 2"  type="text"
                                                            value={purchaseSub.purchaseSubAddressL2}
                                                            onChange={(event) => { setpurchaseSub({ ...purchaseSub, purchaseSubAddressL2: event.target.value }) }} 
                                                        />
                                                </FormControl>
                                            </Grid>
                                        </Grid>
                                        <Grid item xs={12} sm={6} md={3} lg={3}>
                                            <Grid sx={{ display: 'flex' }}  >
                                                <Grid sx={userStyle.spanIcons}><LocationOnIcon /> </Grid>
                                                <FormControl size="small" fullWidth sx={{ display: 'flex' }}>
                                                    <InputLabel id="demo-select-small">City</InputLabel>
                                                        <Select  labelId="demo-select-small" id="demo-select-small" fullWidth label="City"
                                                            value={purchaseSub.purchaseSubCity}
                                                            onChange={(event) => { setpurchaseSub({ ...purchaseSub, purchaseSubCity: event.target.value }) }} 
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
                                                <Grid sx={userStyle.spanIcons}> <LocationOnIcon /> </Grid>
                                                <FormControl size="small" fullWidth sx={{ display: 'flex' }}>
                                                    <InputLabel id="demo-select-small">State</InputLabel>
                                                        <Select labelId="demo-select-small"id="demo-select-small" fullWidth label="State"
                                                            value={purchaseSub.purchaseSubState}
                                                            onChange={(event) => { setpurchaseSub({ ...purchaseSub, purchaseSubState: event.target.value }) }}
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
                                                <Grid sx={userStyle.spanIcons}> <FaGlobe /> </Grid>
                                                <FormControl size="small" fullWidth sx={{ display: 'flex' }}>
                                                    <InputLabel id="demo-select-small">Country</InputLabel>
                                                        <Select labelId="demo-select-small" fullWidth id="demo-select-small" label="country"
                                                            value={purchaseSub.purchaseSubCountry}
                                                            onChange={(event) => { setpurchaseSub({ ...purchaseSub, purchaseSubCountry: event.target.value }) }}
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
                                                <Grid sx={userStyle.spanIcons}> <LocationOnIcon /> </Grid>
                                                <FormControl size="small" fullWidth>
                                                    <InputLabel htmlFor="component-outlined">Zip Code </InputLabel>
                                                        <OutlinedInput  id="component-outlined"  type="text" label="Zip Code"
                                                            value={purchaseSub.purchaseSubZipCode}
                                                            onChange={(event) => { setpurchaseSub({ ...purchaseSub, purchaseSubZipCode: event.target.value }) }}
                                                        />
                                                </FormControl>
                                            </Grid>
                                        </Grid>
                                        <Grid item xs={12} sm={6} md={3} lg={3}>
                                            <Grid sx={{ display: 'flex' }}  >
                                                <FormControl size="small" fullWidth>
                                                    <InputLabel htmlFor="component-outlined">Custom Field 1 </InputLabel>
                                                        <OutlinedInput id="component-outlined" type="text"label="Custom 1 "
                                                            value={purchaseSub.purchaseSubCustom1}
                                                            onChange={(event) => { setpurchaseSub({ ...purchaseSub, purchaseSubCustom1: event.target.value }) }}
                                                        />
                                                </FormControl>
                                            </Grid>
                                        </Grid>
                                        <Grid item xs={12} sm={6} md={3} lg={3}>
                                            <Grid sx={{ display: 'flex' }}  >
                                                <FormControl size="small" fullWidth>
                                                    <InputLabel htmlFor="component-outlined">Custom Field 2 </InputLabel>
                                                        <OutlinedInput  id="component-outlined"  type="text" label="Custom 2 "
                                                            value={purchaseSub.purchaseSubCustom2}
                                                            onChange={(event) => { setpurchaseSub({ ...purchaseSub, purchaseSubCustom2: event.target.value }) }}
                                                        />
                                                </FormControl>
                                            </Grid>
                                        </Grid>
                                        <Grid item xs={12} sm={6} md={3} lg={3}>
                                            <Grid sx={{ display: 'flex' }}  >
                                                <FormControl size="small" fullWidth>
                                                    <InputLabel htmlFor="component-outlined">Custom Field 3</InputLabel>
                                                        <OutlinedInput  id="component-outlined"  type="text" label="Custom 3"
                                                            value={purchaseSub.purchaseSubCustom3}
                                                            onChange={(event) => { setpurchaseSub({ ...purchaseSub, purchaseSubCustom3: event.target.value }) }}
                                                        />
                                                </FormControl>
                                            </Grid>
                                        </Grid>
                                        <Grid item xs={12} sm={6} md={3} lg={3}>
                                            <Grid sx={{ display: 'flex' }}  >
                                                <FormControl size="small" fullWidth>
                                                    <InputLabel htmlFor="component-outlined">Custom Field 4 </InputLabel>
                                                        <OutlinedInput id="component-outlined" type="text" label="Custom 4"
                                                            value={purchaseSub.purchaseSubCustom4}
                                                            onChange={(event) => { setpurchaseSub({ ...purchaseSub, purchaseSubCustom4: event.target.value }) }}
                                                        />
                                                </FormControl>
                                            </Grid>
                                        </Grid>
                                        <Grid item xs={12} sm={6} md={3} lg={3}>
                                            <Grid sx={{ display: 'flex' }}  >
                                                <FormControl size="small" fullWidth>
                                                    <InputLabel htmlFor="component-outlined">Custom Field 5</InputLabel>
                                                        <OutlinedInput id="component-outlined" type="text" label="Custom 5"
                                                            value={purchaseSub.purchaseSubCustom5}
                                                            onChange={(event) => { setpurchaseSub({ ...purchaseSub, purchaseSubCustom5: event.target.value }) }}
                                                        />
                                                </FormControl>
                                            </Grid>
                                        </Grid>
                                        <Grid item xs={12} sm={6} md={3} lg={3}>
                                            <Grid sx={{ display: 'flex' }}  >
                                                <FormControl size="small" fullWidth>
                                                    <InputLabel htmlFor="component-outlined">Custom Field 6 </InputLabel>
                                                        <OutlinedInput id="component-outlined"  type="text" label="Custom 6"
                                                            value={purchaseSub.purchaseSubCustom6}
                                                            onChange={(event) => { setpurchaseSub({ ...purchaseSub, purchaseSubCustom6: event.target.value }) }}
                                                        />
                                                </FormControl>
                                            </Grid>
                                        </Grid>
                                        <Grid item xs={12} sm={6} md={3} lg={3}>
                                            <Grid sx={{ display: 'flex' }}  >
                                                <FormControl size="small" fullWidth>
                                                    <InputLabel htmlFor="component-outlined">Custom Field 7 </InputLabel>
                                                        <OutlinedInput  id="component-outlined" type="text" label="Custom 7"
                                                            value={purchaseSub.purchaseSubCustom7}
                                                            onChange={(event) => { setpurchaseSub({ ...purchaseSub, purchaseSubCustom7: event.target.value }) }}
                                                        />
                                                </FormControl>
                                            </Grid>
                                        </Grid>
                                        <Grid item xs={12} sm={6} md={3} lg={3}>
                                            <Grid sx={{ display: 'flex' }}  >
                                                <FormControl size="small" fullWidth>
                                                    <InputLabel htmlFor="component-outlined">Custom Field 8 </InputLabel>
                                                        <OutlinedInput  id="component-outlined"  type="text" label="Custom 8"
                                                            value={purchaseSub.purchaseSubCustom8}
                                                            onChange={(event) => { setpurchaseSub({ ...purchaseSub, purchaseSubCustom8: event.target.value }) }}
                                                        />
                                                </FormControl>
                                            </Grid>
                                        </Grid>
                                        <Grid item xs={12} sm={6} md={3} lg={3}>
                                            <Grid sx={{ display: 'flex' }}  >
                                                <FormControl size="small" fullWidth>
                                                    <InputLabel htmlFor="component-outlined">Custom Field 9 </InputLabel>
                                                        <OutlinedInput   id="component-outlined"  type="text" label="Custom 9 "
                                                            value={purchaseSub.purchaseSubCustom9}
                                                            onChange={(event) => { setpurchaseSub({ ...purchaseSub, purchaseSubCustom9: event.target.value }) }}
                                                        />
                                                </FormControl>
                                            </Grid>
                                        </Grid>
                                        <Grid item xs={12} sm={6} md={3} lg={3}>
                                            <Grid sx={{ display: 'flex' }}  >
                                                <FormControl size="small" fullWidth>
                                                    <InputLabel htmlFor="component-outlined">Custom Field 10 </InputLabel>
                                                        <OutlinedInput id="component-outlined" type="text" label="Custom 9 "
                                                            value={purchaseSub.purchaseSubCustom9}
                                                            onChange={(event) => { setpurchaseSub({ ...purchaseSub, purchaseSubCustom9: event.target.value }) }}
                                                        />
                                                </FormControl>
                                            </Grid>
                                        </Grid>
                                        <Grid item md={3}></Grid>
                                        <Grid item md={3}></Grid>
                                        <Grid item md={2}></Grid>
                                        <Grid item md={8}>
                                            <FormControl size="small" fullWidth>
                                                <InputLabel htmlFor="component-outlined">Shipping Address </InputLabel>
                                                    <OutlinedInput  id="component-outlined" type="text" label="Shipping Address "
                                                        value={purchaseSub.purchaseSubShipping}
                                                        onChange={(event) => { setpurchaseSub({ ...purchaseSub, purchaseSubShipping: event.target.value }) }}
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
            </Dialog>
        </Box>
    );
}

export default Purchasesupplieradd;
