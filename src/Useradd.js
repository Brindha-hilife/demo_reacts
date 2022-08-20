import  React, {useState} from 'react';
import { userStyle } from './Userstyle';
import {
    Box, Container, Grid, FormControl, InputLabel, OutlinedInput, Select, MenuItem,
    Typography, FormGroup, FormControlLabel, Checkbox, Button, TextareaAutosize, 
} from '@mui/material';
import { FcInfo } from "react-icons/fc";


function Useradd() {
  
    // ****** Text Field ****** //
    
    const [useraddform, setUseraddform] = useState({ 
        prefix:"", firstname:"", lastname:"", email:"", username:"", password:"", confirmpassword:"", 
        role:"", salescomnper:"", maxsale:"", gender:"", maritalstatus:"", bloodgroup:"", mobilenumber:"",
        alternative:"", familycontact:"", facebooklink:"", twiterlink:"", media1:"", media2:"", custom1:"",
        custom2:"", custom3:"", custom4:"", guardianname:"", proofname:"", proofnumber:"", permanentadd:"",
        currentadd:"", accountholder:"", accountnumber:"", bankname:"", bankcode:"", branch:"", taxpayerid:"",
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
                                    onChange={(e)=> { setUseraddform({...useraddform, Prefix: e.target.value})}}
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
                                    onChange={(e)=> { setUseraddform({...useraddform, Firstname: e.target.value})}}
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
                                    onChange={(e)=> { setUseraddform({...useraddform, Lastname: e.target.value})}}
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
                                    onChange={(e)=> { setUseraddform({...useraddform, Email: e.target.value})}}
                                    label="Email *"
                                    type="email"
                                />
                            </FormControl>
                        </Grid>
                        <Grid item md={7} sm={6} xs={12}>
                            <FormGroup>
                                <span><FormControlLabel control={<Checkbox defaultChecked />} label="Is active ?" /><FcInfo /></span>
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
                                    onChange={(e)=> { setUseraddform({...useraddform, Username: e.target.value})}}
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
                                    onChange={(e)=> { setUseraddform({...useraddform, Password: e.target.value})}}
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
                                    onChange={(e)=> { setUseraddform({...useraddform, Confirmpassword: e.target.value})}}
                                    label="Confirm Password *"
                                    type="password"
                                />
                            </FormControl>
                        </Grid>
                        <Grid item md={7} sm={6} xs={12}>
                            <FormControl size="small" fullWidth>
                                <InputLabel id="demo-select-small">Role *</InputLabel>
                                <Select
                                    labelId="demo-select-small"
                                    id="demo-select-small"
                                    value={useraddform.role}
                                    onChange={(e)=> { setUseraddform({...useraddform, Role: e.target.value})}}
                                    label="Role *"
                                >
                                    <MenuItem value="">Admin</MenuItem>
                                    <MenuItem value={1}>Cashier</MenuItem>
                                    <MenuItem value={2}>Admin - Franchiese</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item md={5} sm={6} xs={12}></Grid>
                        <Grid item md={4} sm={6} xs={12}>
                            <Typography variant='subtitle1' sx={{ opacity: '0.9', mt: 1 }}>Access locations <FcInfo /></Typography>
                        </Grid>
                        <Grid item md={8} sm={6} xs={12}>
                            <Grid display="block">
                                <Grid>
                                    <FormGroup>
                                        <span><FormControlLabel control={<Checkbox defaultChecked />} label="All Locations" /><FcInfo /></span>
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
                            <FormControl size="small" fullWidth>
                                <InputLabel htmlFor="component-outlined">Sales Commission Percentage (%)</InputLabel>
                                <OutlinedInput
                                    id="component-outlined"
                                    value={useraddform.salescomnper}
                                    onChange={(e)=> { setUseraddform({...useraddform, Salescomnper: e.target.value})}}
                                    label="Sales Commission Percentage (%) *"
                                    type="number"
                                />
                            </FormControl>
                        </Grid>
                        <Grid item md={4} sm={6} xs={12}>
                            <FormControl size="small" fullWidth>
                                <InputLabel htmlFor="component-outlined">Max sales discount percent </InputLabel>
                                <OutlinedInput
                                    id="component-outlined"
                                    value={useraddform.maxsale}
                                    onChange={(e)=> { setUseraddform({...useraddform, Maxsale: e.target.value})}}
                                    label="Max sales discount percent"
                                    type="number"
                                />
                            </FormControl>
                        </Grid>
                        <Grid item md={4} sm={6} xs={12}></Grid>
                        <Grid item md={12} sm={12} xs={12}>
                            <FormGroup>
                                <span><FormControlLabel control={<Checkbox />} label="Allow Selected Contacts" /><FcInfo /></span>
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
                            {/* *********************************************** */}

                        </Grid>
                        <Grid item md={3} sm={6} xs={12}>
                            <FormControl size="small" fullWidth>
                                <InputLabel id="demo-select-small">Gender</InputLabel>
                                <Select
                                    labelId="demo-select-small"
                                    id="demo-select-small"
                                    value={useraddform.gender}
                                    onChange={(e)=> { setUseraddform({...useraddform, Gender: e.target.value})}}
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
                                    onChange={(e)=> { setUseraddform({...useraddform, Maritalstatus: e.target.value})}}
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
                                    onChange={(e)=> { setUseraddform({...useraddform, Bloodgroup: e.target.value})}}
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
                                    onChange={(e)=> { setUseraddform({...useraddform, Mobilenumber: e.target.value})}}
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
                                    onChange={(e)=> { setUseraddform({...useraddform, Alternative: e.target.value})}}
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
                                    onChange={(e)=> { setUseraddform({...useraddform, Familycontact: e.target.value})}}   
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
                                    onChange={(e)=> { setUseraddform({...useraddform, Facebooklink: e.target.value})}}
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
                                    onChange={(e)=> { setUseraddform({...useraddform, Twiterlink: e.target.value})}}
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
                                    onChange={(e)=> { setUseraddform({...useraddform, Media1: e.target.value})}}
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
                                    onChange={(e)=> { setUseraddform({...useraddform, Media2: e.target.value})}}
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
                                    onChange={(e)=> { setUseraddform({...useraddform, Custom1: e.target.value})}}
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
                                    onChange={(e)=> { setUseraddform({...useraddform, Custom2: e.target.value})}}
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
                                    onChange={(e)=> { setUseraddform({...useraddform, Custom3: e.target.value})}}
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
                                    onChange={(e)=> { setUseraddform({...useraddform, Custom4: e.target.value})}}
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
                                    onChange={(e)=> { setUseraddform({...useraddform, Guardianname: e.target.value})}}
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
                                    onChange={(e)=> { setUseraddform({...useraddform, Proofnumber: e.target.value})}}
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
                                    onChange={(e)=> { setUseraddform({...useraddform, Proofnumber: e.target.value})}}
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
                                    onChange={(e)=> { setUseraddform({...useraddform, Permanentadd: e.target.value})}}
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
                                    onChange={(e)=> { setUseraddform({...useraddform, Currentadd: e.target.value})}}
                                />
                            </FormControl>
                        </Grid>
                    </Grid>
                    <hr  />              
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
                                    onChange={(e)=> { setUseraddform({...useraddform, Accountholder: e.target.value})}}
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
                                    onChange={(e)=> { setUseraddform({...useraddform, Accountnumber: e.target.value})}}
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
                                    onChange={(e)=> { setUseraddform({...useraddform, Bankname: e.target.value})}}
                                    label="Bank Name"
                                    type="text"
                                />
                            </FormControl>
                        </Grid>
                        <Grid item md={3} sm={6} xs={12}>
                            <FormControl size="small" fullWidth>
                                <InputLabel htmlFor="component-outlined">Bank Identifier Code</InputLabel>
                                <OutlinedInput
                                    id="component-outlined"
                                    value={useraddform.bankcode}
                                    onChange={(e)=> { setUseraddform({...useraddform, Bankcode: e.target.value})}}
                                    label="Bank Identifier Code"
                                    type="text"
                                />
                            </FormControl>
                        </Grid>
                        <Grid item md={3} sm={6} xs={12}>
                            <FormControl size="small" fullWidth>
                                <InputLabel htmlFor="component-outlined">Branch</InputLabel>
                                <OutlinedInput
                                    id="component-outlined"
                                    value={useraddform.branch}
                                    onChange={(e)=> { setUseraddform({...useraddform, Branch: e.target.value})}}
                                    label="Branch"
                                    type="text"
                                />
                            </FormControl>
                        </Grid>
                        <Grid item md={3} sm={6} xs={12}>
                            <FormControl size="small" fullWidth>
                                <InputLabel htmlFor="component-outlined">Tax Payer ID</InputLabel>
                                <OutlinedInput
                                    id="component-outlined"
                                    value={useraddform.taxpayerid}
                                    onChange={(e)=> { setUseraddform({...useraddform, Taxpayerid: e.target.value})}}
                                    label="Tax Payer ID"
                                    type="text"
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