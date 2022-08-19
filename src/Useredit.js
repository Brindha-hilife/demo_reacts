import  React, {useState} from 'react';
import { commonstyle } from './Commonstyle';
import {
    Box, Container, Grid, FormControl, InputLabel, OutlinedInput, Select, MenuItem,
    Typography, FormGroup, FormControlLabel, Checkbox, Button, TextareaAutosize, 
} from '@mui/material';
import { FcInfo } from "react-icons/fc";


function Useredit() {
  

    // ****** Text Field ****** //
    
    const [usereditform, setUsereditform] = useState({ 
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
                        <Typography variant="h6">Edit user</Typography>
                    </Grid>
                </Container><br />
                <Container sx={commonstyle.container}>
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
                                    value={usereditform.prefix}
                                    onChange={(e)=> { setUsereditform({...usereditform, Prefix: e.target.value})}}
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
                                    value={usereditform.firstname}
                                    onChange={(e)=> { setUsereditform({...usereditform, Firstname: e.target.value})}}
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
                                    value={usereditform.lastname}
                                    onChange={(e)=> { setUsereditform({...usereditform, Lastname: e.target.value})}}
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
                                    value={usereditform.email}
                                    onChange={(e)=> { setUsereditform({...usereditform, Email: e.target.value})}}
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
                <Container sx={commonstyle.sub_container}>
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
                                    value={usereditform.username}
                                    onChange={(e)=> { setUsereditform({...usereditform, Username: e.target.value})}}
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
                                    value={usereditform.password}
                                    onChange={(e)=> { setUsereditform({...usereditform, Password: e.target.value})}}
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
                                    value={usereditform.confirmpassword}
                                    onChange={(e)=> { setUsereditform({...usereditform, Confirmpassword: e.target.value})}}
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
                                    value={usereditform.role}
                                    onChange={(e)=> { setUsereditform({...usereditform, Role: e.target.value})}}
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
                <Container sx={commonstyle.sub_container}>
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
                                    value={usereditform.salescomnper}
                                    onChange={(e)=> { setUsereditform({...usereditform, Salescomnper: e.target.value})}}
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
                                    value={usereditform.maxsale}
                                    onChange={(e)=> { setUsereditform({...usereditform, Maxsale: e.target.value})}}
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
                <Container sx={commonstyle.sub_container}>
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
                                    value={usereditform.gender}
                                    onChange={(e)=> { setUsereditform({...usereditform, Gender: e.target.value})}}
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
                                    value={usereditform.maritalstatus}
                                    onChange={(e)=> { setUsereditform({...usereditform, Maritalstatus: e.target.value})}}
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
                                    value={usereditform.bloodgroup}
                                    onChange={(e)=> { setUsereditform({...usereditform, Bloodgroup: e.target.value})}}
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
                                    value={usereditform.mobilenumber}
                                    onChange={(e)=> { setUsereditform({...usereditform, Mobilenumber: e.target.value})}}
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
                                    value={usereditform.alternative}
                                    onChange={(e)=> { setUsereditform({...usereditform, Alternative: e.target.value})}}
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
                                    value={usereditform.familycontact} 
                                    onChange={(e)=> { setUsereditform({...usereditform, Familycontact: e.target.value})}}   
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
                                    value={usereditform.facebooklink}
                                    onChange={(e)=> { setUsereditform({...usereditform, Facebooklink: e.target.value})}}
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
                                    value={usereditform.twiterlink}
                                    onChange={(e)=> { setUsereditform({...usereditform, Twiterlink: e.target.value})}}
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
                                    value={usereditform.media1}
                                    onChange={(e)=> { setUsereditform({...usereditform, Media1: e.target.value})}}
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
                                    value={usereditform.media2}
                                    onChange={(e)=> { setUsereditform({...usereditform, Media2: e.target.value})}}
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
                                    value={usereditform.custom1}
                                    onChange={(e)=> { setUsereditform({...usereditform, Custom1: e.target.value})}}
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
                                    value={usereditform.custom2}
                                    onChange={(e)=> { setUsereditform({...usereditform, Custom2: e.target.value})}}
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
                                    value={usereditform.custom3}
                                    onChange={(e)=> { setUsereditform({...usereditform, Custom3: e.target.value})}}
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
                                    value={usereditform.custom4}
                                    onChange={(e)=> { setUsereditform({...usereditform, Custom4: e.target.value})}}
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
                                    value={usereditform.guardianname}
                                    onChange={(e)=> { setUsereditform({...usereditform, Guardianname: e.target.value})}}
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
                                    value={usereditform.proofname}
                                    onChange={(e)=> { setUsereditform({...usereditform, Proofnumber: e.target.value})}}
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
                                    value={usereditform.proofnumber}
                                    onChange={(e)=> { setUsereditform({...usereditform, Proofnumber: e.target.value})}}
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
                                    value={usereditform.permanentadd}
                                    onChange={(e)=> { setUsereditform({...usereditform, Permanentadd: e.target.value})}}
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
                                    value={usereditform.currentadd}
                                    onChange={(e)=> { setUsereditform({...usereditform, Currentadd: e.target.value})}}
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
                                    value={usereditform.accountholder}
                                    onChange={(e)=> { setUsereditform({...usereditform, Accountholder: e.target.value})}}
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
                                    value={usereditform.accountnumber}
                                    onChange={(e)=> { setUsereditform({...usereditform, Accountnumber: e.target.value})}}
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
                                    value={usereditform.bankname}
                                    onChange={(e)=> { setUsereditform({...usereditform, Bankname: e.target.value})}}
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
                                    value={usereditform.bankcode}
                                    onChange={(e)=> { setUsereditform({...usereditform, Bankcode: e.target.value})}}
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
                                    value={usereditform.branch}
                                    onChange={(e)=> { setUsereditform({...usereditform, Branch: e.target.value})}}
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
                                    value={usereditform.taxpayerid}
                                    onChange={(e)=> { setUsereditform({...usereditform, Taxpayerid: e.target.value})}}
                                    label="Tax Payer ID"
                                    type="text"
                                />
                            </FormControl>
                        </Grid>
                    </Grid>
                </Container><br />
                <Grid container sx={{ marginTop: '20px', marginBottom: '20px', justifyContent: 'center' }}>
                    <Grid >
                        <Button sx={commonstyle.button_add}>Save</Button>
                    </Grid>
                </Grid>
            </form>
        </Box>
    );
}

export default Useredit;