import React, { useState } from 'react';
import { userStyle } from '../Userstyle';
import {
    Box, Container, Grid, FormControl, InputLabel, OutlinedInput, Select, MenuItem,
    Typography, FormGroup, FormControlLabel, Checkbox, Button, TextareaAutosize, Tooltip, IconButton, NativeSelect, InputAdornment
} from '@mui/material';
import { FcInfo } from "react-icons/fc";

function Useradd() {

    // ****** Text Field ****** //

    const [useraddform, setUseraddform] = useState({
        prefix: "", firstname: "", lastname: "", email: "", username: "", password: "", confirmpassword: "",
        role: "", salescomnper: "", maxsale: "", dob: "", gender: "", maritalstatus: "", bloodgroup: "", mobilenumber: "",
        alternative: "", familycontact: "", facebooklink: "", twiterlink: "", media1: "", media2: "", custom1: "",
        custom2: "", custom3: "", custom4: "", guardianname: "", proofname: "", proofnumber: "", permanentadd: "",
        currentadd: "", accountholder: "", accountnumber: "", bankname: "", bankcode: "", branch: "", taxpayerid: "",
    });

    return (
        <Box>
            <form action=''>
                <Container sx={{ paddingTop: '10px' }}>
                    <Grid display="flex">
                        <Typography variant="h6">Add user</Typography>
                    </Grid>
                </Container><br />
                <Container sx={userStyle.container}>
                    <Grid container spacing={4} sx={{
                        padding: '40px 20px',
                        '& .MuiOutlinedInput-notchedOutline': {
                            border: '1px solid #b97df0',
                        },
                    }}>
                        <Grid item md={2} sm={6} xs={12}>
                            <FormControl size="small" fullWidth >
                                <InputLabel htmlFor="component-outlined" >Prefix</InputLabel>
                                <OutlinedInput
                                    id="component-outlined"
                                    value={useraddform.prefix}
                                    onChange={(e) => { setUseraddform({ ...useraddform, Prefix: e.target.value }) }}
                                    label="Prefix"
                                    type="text"
                                />
                            </FormControl>
                        </Grid>
                        <Grid item md={5} sm={6} xs={12}>
                            <FormControl size="small" fullWidth>
                                <InputLabel htmlFor="component-outlined">First Name *</InputLabel>
                                <OutlinedInput
                                    id="component-outlined"
                                    value={useraddform.firstname}
                                    onChange={(e) => { setUseraddform({ ...useraddform, Firstname: e.target.value }) }}
                                    label="First Name *"
                                    type="text"
                                />
                            </FormControl>
                        </Grid>
                        <Grid item md={5} sm={6} xs={12}>
                            <FormControl size="small" fullWidth>
                                <InputLabel htmlFor="component-outlined">Last Name</InputLabel>
                                <OutlinedInput
                                    id="component-outlined"
                                    value={useraddform.lastname}
                                    onChange={(e) => { setUseraddform({ ...useraddform, Lastname: e.target.value }) }}
                                    label="Last Name"
                                    type="text"
                                />
                            </FormControl>
                        </Grid>
                        <Grid item md={5} sm={6} xs={12}>
                            <FormControl size="small" fullWidth>
                                <InputLabel htmlFor="component-outlined">Email *</InputLabel>
                                <OutlinedInput
                                    id="component-outlined"
                                    value={useraddform.email}
                                    onChange={(e) => { setUseraddform({ ...useraddform, Email: e.target.value }) }}
                                    label="Email *"
                                    type="email"
                                />
                            </FormControl>
                        </Grid>
                        <Grid item md={7} sm={6} xs={12}>
                            <FormGroup>
                                <span><FormControlLabel control={<Checkbox defaultChecked />} label="Is active ?" />
                                    <Tooltip title="Check/Uncheck to make a user active/inactive.">
                                        <IconButton>
                                            <FcInfo />
                                        </IconButton>
                                    </Tooltip></span>
                            </FormGroup>
                        </Grid>
                    </Grid>
                </Container>
                <Container sx={userStyle.sub_container}>
                    <Grid display="flex" >
                        <Typography variant="h6" >Roles and Permissions</Typography>
                    </Grid>
                    <Grid container spacing={4} sx={{
                        padding: '40px 20px',
                        '& .MuiOutlinedInput-notchedOutline': {
                            border: '1px solid #b97df0',
                        },
                    }}>
                        <Grid item md={12}>
                            <FormGroup>
                                <FormControlLabel control={<Checkbox defaultChecked />} label="Allow login" />
                            </FormGroup>
                        </Grid>
                        <Grid item md={4} sm={6} xs={12}>
                            <FormControl size="small" fullWidth >
                                <InputLabel htmlFor="component-outlined" >Username</InputLabel>
                                <OutlinedInput
                                    id="component-outlined"
                                    value={useraddform.username}
                                    onChange={(e) => { setUseraddform({ ...useraddform, Username: e.target.value }) }}
                                    label="Username"
                                    type="text"
                                />
                            </FormControl>
                            <Typography variant='body2' sx={{ opacity: '0.9', mt: 1 }}>Leave blank to auto generate username</Typography>
                        </Grid>
                        <Grid item md={4} sm={6} xs={12}>
                            <FormControl size="small" fullWidth>
                                <InputLabel htmlFor="component-outlined">Password *</InputLabel>
                                <OutlinedInput
                                    id="component-outlined"
                                    value={useraddform.password}
                                    onChange={(e) => { setUseraddform({ ...useraddform, Password: e.target.value }) }}
                                    label="Password *"
                                    type="password"
                                />
                            </FormControl>
                        </Grid>
                        <Grid item md={4} sm={6} xs={12}>
                            <FormControl size="small" fullWidth>
                                <InputLabel htmlFor="component-outlined">Confirm Password *</InputLabel>
                                <OutlinedInput
                                    id="component-outlined"
                                    value={useraddform.confirmpassword}
                                    onChange={(e) => { setUseraddform({ ...useraddform, Confirmpassword: e.target.value }) }}
                                    label="Confirm Password *"
                                    type="password"
                                />
                            </FormControl>
                        </Grid>
                        <Grid item md={7} sm={6} xs={12}>
                            <FormControl size="small" fullWidth>
                                <InputLabel htmlFor="uncontrolled-native">Role *
                                    <Tooltip title="Admin can access all location " style={{fontSize:'32px'}}>
                                        <IconButton>
                                            <FcInfo />
                                        </IconButton>
                                    </Tooltip></InputLabel>
                                <NativeSelect
                                defaultValue={0}
                                    inputProps={{
                                        name: 'Role',
                                        id: 'uncontrolled-native',
                                        
                                    }}
                                    value={useraddform.role}
                                    onChange={(e) => { setUseraddform({ ...useraddform, Role: e.target.value }) }}
                                    label="Role *"
                                >
                                    <option value={0}></option>
                                    <option value={1}>Admin</option>
                                    <option value={2}>Cashier</option>
                                    <option value={3}>Admin - Franchiese</option>
                                </NativeSelect>
                            </FormControl>
                        </Grid>
                        <Grid item md={5} sm={6} xs={12}></Grid>
                        <Grid item md={4} sm={6} xs={12}>
                            <Typography variant='subtitle1' sx={{ opacity: '0.9', mt: 1 }}>Access locations
                                <Tooltip title="Choose all locations this role can access. All data for the selected location
                            will only be displayed to the user. For Example: You can use this to define Store Manager / Cashier/ Stock manager / Branch Manager, or particular Location.">
                                    <IconButton>
                                        <FcInfo />
                                    </IconButton>
                                </Tooltip>
                            </Typography>
                        </Grid>
                        <Grid item md={8} sm={6} xs={12}>
                            <Grid display="block">
                                <Grid>
                                    <FormGroup>
                                        <span><FormControlLabel control={<Checkbox defaultChecked />} label="All Locations" />
                                            <Tooltip title="If All Locations selected this role will have permission to access all business locations">
                                                <IconButton>
                                                    <FcInfo />
                                                </IconButton>
                                            </Tooltip></span>
                                    </FormGroup>
                                </Grid>
                                <Grid>
                                    <FormGroup>
                                        <FormControlLabel control={<Checkbox />} label="xxx" />
                                    </FormGroup>
                                </Grid>
                                <Grid>
                                    <FormGroup>
                                        <FormControlLabel control={<Checkbox />} label="yyy" />
                                    </FormGroup>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
                <Container sx={userStyle.sub_container}>
                    <Grid display="flex" >
                        <Typography variant="h6" >Sales</Typography>
                    </Grid>
                    <Grid container spacing={4} sx={{
                        padding: '40px 20px',
                        '& .MuiOutlinedInput-notchedOutline': {
                            border: '1px solid #b97df0',
                        },
                    }}>
                        <Grid item md={4} sm={6} xs={12}>
                            <FormControl variant="outlined" size="small" fullWidth>
                                <InputLabel htmlFor="outlined-adornment-password">Sales Commission Percentage (%)</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-password"
                                    type="number"
                                    endAdornment={
                                        <Tooltip title='Used only if Sales Commission Agent Type setting is: "Logged in user" or "Select from users list"' placement="top">
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    edge="end"
                                                    value={useraddform.salescomnper}
                                                    onChange={(e) => { setUseraddform({ ...useraddform, Salescomnper: e.target.value }) }}
                                                >
                                                    <FcInfo />
                                                </IconButton>
                                            </InputAdornment>
                                        </Tooltip>
                                    }
                                    label="Sales Commission Percentage (%)"
                                />
                            </FormControl>

                        </Grid>
                        <Grid item md={4} sm={6} xs={12}>
                            <FormControl variant="outlined" size="small" fullWidth>
                                <InputLabel htmlFor="outlined-adornment-password">Sales Commission Percentage (%)</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-password"
                                    type="number"
                                    endAdornment={
                                        <Tooltip title='Maximum discount percentage that a user can give during sale. Leave it blank for no constraints' placement="top">
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    edge="end"
                                                    value={useraddform.maxsale}
                                                    onChange={(e) => { setUseraddform({ ...useraddform, Maxsale: e.target.value }) }}
                                                >
                                                    <FcInfo />
                                                </IconButton>
                                            </InputAdornment>
                                        </Tooltip>
                                    }
                                    label="Max sales discount percent"
                                />
                            </FormControl>
                        </Grid>
                        <Grid item md={4} sm={6} xs={12}></Grid>
                        <Grid item md={12} sm={12} xs={12}>
                            <FormGroup>
                                <span><FormControlLabel control={<Checkbox />} label="Allow Selected Contacts" />
                                    <Tooltip title="Only allow access to selected contacts in sells/purchase customer/supplier search box">
                                        <IconButton>
                                            <FcInfo />
                                        </IconButton>
                                    </Tooltip></span>
                            </FormGroup>
                        </Grid>
                    </Grid>
                </Container>
                <Container sx={userStyle.sub_container}>
                    <Grid display="flex" >
                        <Typography variant="h6" >More Informations</Typography>
                    </Grid>
                    <Grid container spacing={4} sx={{
                        padding: '40px 20px',
                        '& .MuiOutlinedInput-notchedOutline': {
                            border: '1px solid #b97df0',
                        },
                    }}>
                        <Grid item md={3} sm={6} xs={12}>
                            <FormControl size="small" fullWidth>
                                <InputLabel htmlFor="component-outlined"></InputLabel>
                                <OutlinedInput
                                    id="component-outlined"
                                    value={useraddform.dob}
                                    onChange={(e) => { setUseraddform({ ...useraddform, Dob: e.target.value }) }}
                                    label=""
                                    type="date"
                                />
                            </FormControl>
                        </Grid>
                        <Grid item md={3} sm={6} xs={12}>
                            <FormControl size="small" fullWidth>
                                <InputLabel id="demo-select-small">Gender</InputLabel>
                                <Select
                                    labelId="demo-select-small"
                                    id="demo-select-small"
                                    value={useraddform.gender}
                                    onChange={(e) => { setUseraddform({ ...useraddform, Gender: e.target.value }) }}
                                    label="Gender"
                                >
                                    <MenuItem value=""><em>Please Select</em></MenuItem>
                                    <MenuItem value={1}>Male</MenuItem>
                                    <MenuItem value={2}>Female</MenuItem>
                                    <MenuItem value={3}>Others</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item md={3} sm={6} xs={12}>
                            <FormControl size="small" fullWidth>
                                <InputLabel id="demo-select-small">Marital Status</InputLabel>
                                <Select
                                    labelId="demo-select-small"
                                    id="demo-select-small"
                                    value={useraddform.maritalstatus}
                                    onChange={(e) => { setUseraddform({ ...useraddform, Maritalstatus: e.target.value }) }}
                                    label="Marital Status"
                                >
                                    <MenuItem value=""><em>Marital Status</em></MenuItem>
                                    <MenuItem value={1}>Married</MenuItem>
                                    <MenuItem value={2}>Unmarried</MenuItem>
                                    <MenuItem value={2}>Divorced</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item md={3} sm={6} xs={12}>
                            <FormControl size="small" fullWidth>
                                <InputLabel htmlFor="component-outlined">Blood Group</InputLabel>
                                <OutlinedInput
                                    id="component-outlined"
                                    value={useraddform.bloodgroup}
                                    onChange={(e) => { setUseraddform({ ...useraddform, Bloodgroup: e.target.value }) }}
                                    label="Blood Group"
                                    type="text"
                                />
                            </FormControl>
                        </Grid>
                        <Grid item md={3} sm={6} xs={12}>
                            <FormControl size="small" fullWidth>
                                <InputLabel htmlFor="component-outlined">Mobile Number</InputLabel>
                                <OutlinedInput
                                    id="component-outlined"
                                    value={useraddform.mobilenumber}
                                    onChange={(e) => { setUseraddform({ ...useraddform, Mobilenumber: e.target.value }) }}
                                    label="Mobile Number"
                                    type="number"
                                />
                            </FormControl>
                        </Grid>
                        <Grid item md={3} sm={6} xs={12}>
                            <FormControl size="small" fullWidth>
                                <InputLabel htmlFor="component-outlined">Alternate contact number</InputLabel>
                                <OutlinedInput
                                    id="component-outlined"
                                    value={useraddform.alternative}
                                    onChange={(e) => { setUseraddform({ ...useraddform, Alternative: e.target.value }) }}
                                    label="Alternate contact number"
                                    type="number"
                                />
                            </FormControl>
                        </Grid>
                        <Grid item md={3} sm={6} xs={12}>
                            <FormControl size="small" fullWidth>
                                <InputLabel htmlFor="component-outlined">Family contact number</InputLabel>
                                <OutlinedInput
                                    id="component-outlined"
                                    value={useraddform.familycontact}
                                    onChange={(e) => { setUseraddform({ ...useraddform, Familycontact: e.target.value }) }}
                                    label="Family contact number"
                                    type="number"
                                />
                            </FormControl>
                        </Grid>
                        <Grid item md={3} sm={6} xs={12}>
                            <FormControl size="small" fullWidth>
                                <InputLabel htmlFor="component-outlined">Facebook Link</InputLabel>
                                <OutlinedInput
                                    id="component-outlined"
                                    value={useraddform.facebooklink}
                                    onChange={(e) => { setUseraddform({ ...useraddform, Facebooklink: e.target.value }) }}
                                    label="Facebook Link"
                                    type="text"
                                />
                            </FormControl>
                        </Grid>
                        <Grid item md={3} sm={6} xs={12}>
                            <FormControl size="small" fullWidth>
                                <InputLabel htmlFor="component-outlined">Twitter Link</InputLabel>
                                <OutlinedInput
                                    id="component-outlined"
                                    value={useraddform.twiterlink}
                                    onChange={(e) => { setUseraddform({ ...useraddform, Twiterlink: e.target.value }) }}
                                    label="Twitter Link"
                                    type="text"
                                />
                            </FormControl>
                        </Grid>
                        <Grid item md={3} sm={6} xs={12}>
                            <FormControl size="small" fullWidth>
                                <InputLabel htmlFor="component-outlined">Social Media 1</InputLabel>
                                <OutlinedInput
                                    id="component-outlined"
                                    value={useraddform.media1}
                                    onChange={(e) => { setUseraddform({ ...useraddform, Media1: e.target.value }) }}
                                    label="Social Media 1"
                                    type="text"
                                />
                            </FormControl>
                        </Grid>
                        <Grid item md={3} sm={6} xs={12}>

                        </Grid>
                        <Grid item md={3} sm={6} xs={12}>

                        </Grid>
                        <Grid item md={3} sm={6} xs={12}>
                            <FormControl size="small" fullWidth>
                                <InputLabel htmlFor="component-outlined">Social Media 2</InputLabel>
                                <OutlinedInput
                                    id="component-outlined"
                                    value={useraddform.media2}
                                    onChange={(e) => { setUseraddform({ ...useraddform, Media2: e.target.value }) }}
                                    label="Social Media 2"
                                    type="text"
                                />
                            </FormControl>
                        </Grid>
                        <Grid item md={3} sm={6} xs={12}>
                            <FormControl size="small" fullWidth>
                                <InputLabel htmlFor="component-outlined">Custom field 1</InputLabel>
                                <OutlinedInput
                                    id="component-outlined"
                                    value={useraddform.custom1}
                                    onChange={(e) => { setUseraddform({ ...useraddform, Custom1: e.target.value }) }}
                                    label="Custom field 1"
                                    type="text"
                                />
                            </FormControl>
                        </Grid>
                        <Grid item md={3} sm={6} xs={12}>
                            <FormControl size="small" fullWidth>
                                <InputLabel htmlFor="component-outlined">Custom field 2</InputLabel>
                                <OutlinedInput
                                    id="component-outlined"
                                    value={useraddform.custom2}
                                    onChange={(e) => { setUseraddform({ ...useraddform, Custom2: e.target.value }) }}
                                    label="Custom field 2"
                                    type="text"
                                />
                            </FormControl>
                        </Grid>
                        <Grid item md={3} sm={6} xs={12}>
                            <FormControl size="small" fullWidth>
                                <InputLabel htmlFor="component-outlined">Custom field 3</InputLabel>
                                <OutlinedInput
                                    id="component-outlined"
                                    value={useraddform.custom3}
                                    onChange={(e) => { setUseraddform({ ...useraddform, Custom3: e.target.value }) }}
                                    label="Custom field 3"
                                    type="text"
                                />
                            </FormControl>
                        </Grid>
                        <Grid item md={3} sm={6} xs={12}>
                            <FormControl size="small" fullWidth>
                                <InputLabel htmlFor="component-outlined">Custom field 4</InputLabel>
                                <OutlinedInput
                                    id="component-outlined"
                                    value={useraddform.custom4}
                                    onChange={(e) => { setUseraddform({ ...useraddform, Custom4: e.target.value }) }}
                                    label="Custom field 4"
                                    type="text"
                                />
                            </FormControl>
                        </Grid>
                        <Grid item md={3} sm={6} xs={12}>
                            <FormControl size="small" fullWidth>
                                <InputLabel htmlFor="component-outlined">Guardian Name</InputLabel>
                                <OutlinedInput
                                    id="component-outlined"
                                    value={useraddform.guardianname}
                                    onChange={(e) => { setUseraddform({ ...useraddform, Guardianname: e.target.value }) }}
                                    label="Guardian Name"
                                    type="text"
                                />
                            </FormControl>
                        </Grid>
                        <Grid item md={3} sm={6} xs={12}>
                            <FormControl size="small" fullWidth>
                                <InputLabel htmlFor="component-outlined">ID proof name</InputLabel>
                                <OutlinedInput
                                    id="component-outlined"
                                    value={useraddform.proofname}
                                    onChange={(e) => { setUseraddform({ ...useraddform, Proofnumber: e.target.value }) }}
                                    label="ID proof name"
                                    type="text"
                                />
                            </FormControl>
                        </Grid>
                        <Grid item md={3} sm={6} xs={12}>
                            <FormControl size="small" fullWidth>
                                <InputLabel htmlFor="component-outlined">ID proof number</InputLabel>
                                <OutlinedInput
                                    id="component-outlined"
                                    value={useraddform.proofnumber}
                                    onChange={(e) => { setUseraddform({ ...useraddform, Proofnumber: e.target.value }) }}
                                    label="ID proof number"
                                    type="text"
                                />
                            </FormControl>
                        </Grid>
                        <Grid item md={6} sm={6} xs={12}>
                            <InputLabel id="demo-select-small">Permanent Address </InputLabel>
                            <FormControl size="small" fullWidth>
                                <TextareaAutosize
                                    aria-label="minimum height"
                                    minRows={3}
                                    placeholder="Permanent Address"
                                    className='users_txtarea'
                                    value={useraddform.permanentadd}
                                    onChange={(e) => { setUseraddform({ ...useraddform, Permanentadd: e.target.value }) }}
                                />
                            </FormControl>
                        </Grid>
                        <Grid item md={6} sm={6} xs={12}>
                            <InputLabel id="demo-select-small">Current Address </InputLabel>
                            <FormControl size="small" fullWidth>
                                <TextareaAutosize
                                    aria-label="minimum height"
                                    minRows={3}
                                    placeholder="Current Address"
                                    className='users_txtarea'
                                    value={useraddform.currentadd}
                                    onChange={(e) => { setUseraddform({ ...useraddform, Currentadd: e.target.value }) }}
                                />
                            </FormControl>
                        </Grid>
                    </Grid>
                    <hr />
                    <Grid display="flex" >
                        <Typography variant="h6" >Bank Details</Typography>
                    </Grid>
                    <Grid container spacing={4} sx={{
                        padding: '40px 20px',
                        '& .MuiOutlinedInput-notchedOutline': {
                            border: '1px solid #b97df0',
                        },
                    }}>
                        <Grid item md={3} sm={6} xs={12}>
                            <FormControl size="small" fullWidth>
                                <InputLabel htmlFor="component-outlined">Account Holder's Name</InputLabel>
                                <OutlinedInput
                                    id="component-outlined"
                                    value={useraddform.accountholder}
                                    onChange={(e) => { setUseraddform({ ...useraddform, Accountholder: e.target.value }) }}
                                    label="Account Holder's Name"
                                    type="text"
                                />
                            </FormControl>
                        </Grid>
                        <Grid item md={3} sm={6} xs={12}>
                            <FormControl size="small" fullWidth>
                                <InputLabel htmlFor="component-outlined">Account Number</InputLabel>
                                <OutlinedInput
                                    id="component-outlined"
                                    value={useraddform.accountnumber}
                                    onChange={(e) => { setUseraddform({ ...useraddform, Accountnumber: e.target.value }) }}
                                    label="Account Number"
                                    type="text"
                                />
                            </FormControl>
                        </Grid>
                        <Grid item md={3} sm={6} xs={12}>
                            <FormControl size="small" fullWidth>
                                <InputLabel htmlFor="component-outlined">Bank Name</InputLabel>
                                <OutlinedInput
                                    id="component-outlined"
                                    value={useraddform.bankname}
                                    onChange={(e) => { setUseraddform({ ...useraddform, Bankname: e.target.value }) }}
                                    label="Bank Name"
                                    type="text"
                                />
                            </FormControl>
                        </Grid>
                        <Grid item md={3} sm={6} xs={12}>
                            <FormControl variant="outlined" size="small" fullWidth>
                                <InputLabel htmlFor="outlined-adornment-password">Bank Identifier Code</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-password"
                                    type="text"
                                    endAdornment={
                                        <Tooltip title='A unique code to identify the bank in your country. for example: IFSC code' placement="top">
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    edge="end"
                                                    value={useraddform.bankcode}
                                                    onChange={(e) => { setUseraddform({ ...useraddform, Bankcode: e.target.value }) }}
                                                >
                                                    <FcInfo />
                                                </IconButton>
                                            </InputAdornment>
                                        </Tooltip>
                                    }
                                    label="Bank Identifier Code"
                                />
                            </FormControl>
                        </Grid>
                        <Grid item md={3} sm={6} xs={12}>
                            <FormControl size="small" fullWidth>
                                <InputLabel htmlFor="component-outlined">Branch</InputLabel>
                                <OutlinedInput
                                    id="component-outlined"
                                    value={useraddform.branch}
                                    onChange={(e) => { setUseraddform({ ...useraddform, Branch: e.target.value }) }}
                                    label="Branch"
                                    type="text"
                                />
                            </FormControl>
                        </Grid>
                        <Grid item md={3} sm={6} xs={12}>
                            <FormControl variant="outlined" size="small" fullWidth>
                                <InputLabel htmlFor="outlined-adornment-password">Tax Payer ID</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-password"
                                    type="text"
                                    endAdornment={
                                        <Tooltip title='Tax number id of the employee, for example, PAN card in India' placement="top">
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    edge="end"
                                                    value={useraddform.taxpayerid}
                                                    onChange={(e) => { setUseraddform({ ...useraddform, Taxpayerid: e.target.value }) }}
                                                >
                                                    <FcInfo />
                                                </IconButton>
                                            </InputAdornment>
                                        </Tooltip>
                                    }
                                    label="Tax Payer ID"
                                />
                            </FormControl>

                        </Grid>
                    </Grid>
                </Container><br />
                <Grid container sx={{ marginTop: '20px', marginBottom: '20px', justifyContent: 'center' }}>
                    <Grid >
                        <Button sx={userStyle.button_add}>Save</Button>
                    </Grid>
                </Grid>
            </form>
        </Box>
    );
}

export default Useradd;