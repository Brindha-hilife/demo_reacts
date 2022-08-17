import * as React from 'react';
import './product.css';
import {
    Box, Container, Grid, FormControl, InputLabel, OutlinedInput, Select, MenuItem,
    Typography, FormGroup, FormControlLabel, Checkbox, Button, TextField
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { FcInfo } from "react-icons/fc";

function Useradd() {
    const [value, setValue] = React.useState(null);

    // ****** Text Field ****** //
    //Prefix
    const [prefix, setPrefix] = React.useState('');

    const handleChange1 = (event) => {
        setPrefix(event.target.value);
    };
    //First Name
    const [firstname, setFirstname] = React.useState('');

    const handleChange2 = (event) => {
        setFirstname(event.target.value);
    };
    //Last Name
    const [lastname, setLastname] = React.useState('');

    const handleChange3 = (event) => {
        setLastname(event.target.value);
    };
    //Email
    const [email, setEmail] = React.useState('');

    const handleChange4 = (event) => {
        setEmail(event.target.value);
    };
    //Username
    const [username, setUsername] = React.useState('');

    const handleChange5 = (event) => {
        setUsername(event.target.value);
    };
    //password
    const [password, setPassword] = React.useState('');

    const handleChange6 = (event) => {
        setPassword(event.target.value);
    };
    //Confirm Password
    const [confirmpassword, setConfirmpassword] = React.useState('');

    const handleChange7 = (event) => {
        setConfirmpassword(event.target.value);
    };
    //Role
    const [salescomnper, setSalescomnper] = React.useState('');

    const handleChange8 = (event) => {
        setSalescomnper(event.target.value);
    };
    //Sales Commission Percentage
    const [role, setRole] = React.useState('');

    const handleChange9 = (event) => {
        setRole(event.target.value);
    };
    //Max sales discount percent
    const [maxsale, setMaxsale] = React.useState('');

    const handleChange10 = (event) => {
        setMaxsale(event.target.value);
    };
    //Gender
    const [gender, setGender] = React.useState('');

    const handleChange11 = (event) => {
        setGender(event.target.value);
    };
    //Marital Status
    const [maritalstatus, setMaritalstatus] = React.useState('');

    const handleChange12 = (event) => {
        setMaritalstatus(event.target.value);
    };
    //Blood Group
    const [bloodgroup, setBloodgroup] = React.useState('');

    const handleChange13 = (event) => {
        setBloodgroup(event.target.value);
    };



    return (
        <Box>
            <Container sx={{ paddingTop: '10px' }}>
                <Grid display="flex">
                    <Typography variant="h6">Add user</Typography>
                </Grid>
            </Container><br />
            <Container sx={{
                bgcolor: '#fff', height: 'auto', borderTop: '5px solid #7009ab;', borderLeft: '0px',
                borderRight: '0px', borderBottom: '0px', borderRadius: '10px', boxShadow: '6px 6px 6px 9px #dedbdbae'
            }}>
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
                                value={prefix}
                                onChange={handleChange1}
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
                                value={firstname}
                                onChange={handleChange2}
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
                                value={lastname}
                                onChange={handleChange3}
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
                                value={email}
                                onChange={handleChange4}
                                label="Email *"
                                type="email"
                            />
                        </FormControl>
                    </Grid>
                    <Grid item md={7} sm={6} xs={12}>
                        <FormGroup>
                        <span>  <FormControlLabel control={<Checkbox defaultChecked />} label="Is active ?" /><FcInfo /></span>       
                        </FormGroup>
                    </Grid>
                </Grid>
            </Container>
            <Container sx={{
                bgcolor: '#fff', height: 'auto', borderLeft: '0px',paddingTop:'10px',
                borderRight: '0px', borderBottom: '0px', borderRadius: '5px', boxShadow: '6px 6px 6px 9px #dedbdbae', marginTop:'50px'
            }}>
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
                                value={username}
                                onChange={handleChange5}
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
                                value={password}
                                onChange={handleChange6}
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
                                value={confirmpassword}
                                onChange={handleChange7}
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
                        value={role}
                        label="Role *"
                        onChange={handleChange8}
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
                            <FormControlLabel control={<Checkbox  />} label="xxx" />
                        </FormGroup>
                            </Grid>
                            <Grid>
                            <FormGroup>
                            <FormControlLabel control={<Checkbox  />} label="yyy" />
                        </FormGroup>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
            <Container sx={{
                bgcolor: '#fff', height: 'auto', borderLeft: '0px',paddingTop:'10px',
                borderRight: '0px', borderBottom: '0px', borderRadius: '5px', boxShadow: '6px 6px 6px 9px #dedbdbae', marginTop:'50px'
            }}>
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
                                value={salescomnper}
                                onChange={handleChange9}
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
                                value={maxsale}
                                onChange={handleChange10}
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
                <Container sx={{
                bgcolor: '#fff', height: 'auto', borderLeft: '0px',paddingTop:'10px',
                borderRight: '0px', borderBottom: '0px', borderRadius: '5px', boxShadow: '6px 6px 6px 9px #dedbdbae', marginTop:'50px'
            }}>
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
                    <InputLabel id="demo-select-small">Date of birth</InputLabel>
                      <DatePicker
          label="Date of birth"
          value={1}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
        </FormControl>
                      </Grid>
                      <Grid item md={3} sm={6} xs={12}>
                      <FormControl size="small" fullWidth>
                    <InputLabel id="demo-select-small">Gender</InputLabel>
                    <Select
                        labelId="demo-select-small"
                        id="demo-select-small"
                        value={gender}
                        label="Gender"
                        onChange={handleChange11}
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
                        value={maritalstatus}
                        label="Marital Status"
                        onChange={handleChange12}
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
                                value={bloodgroup}
                                onChange={handleChange13}
                                label="Blood Group"
                                type="text"
                            />
                        </FormControl>
                        </Grid>
                        <Grid item md={3} sm={6} xs={12}>
                        
                        </Grid>
                        <Grid item md={3} sm={6} xs={12}>
                        
                        </Grid>
                        <Grid item md={3} sm={6} xs={12}>
                        
                        </Grid>
                        <Grid item md={3} sm={6} xs={12}>
                        
                        </Grid>
                        <Grid item md={3} sm={6} xs={12}>
                        
                        </Grid>
                        <Grid item md={3} sm={6} xs={12}>
                        
                        </Grid>
                        <Grid item md={3} sm={6} xs={12}>
                        
                        </Grid>
                        <Grid item md={3} sm={6} xs={12}>
                        
                        </Grid>
                        <Grid item md={4} sm={6} xs={12}>
                        
                        </Grid>
                        <Grid item md={4} sm={6} xs={12}>
                        
                        </Grid>
                        <Grid item md={4} sm={6} xs={12}>
                        
                        </Grid>
                        <Grid item md={4} sm={6} xs={12}>
                        
                        </Grid>
                        <Grid item md={4} sm={6} xs={12}>
                        
                        </Grid>
                        <Grid item md={4} sm={6} xs={12}>
                        
                        </Grid>
                        <Grid item md={4} sm={6} xs={12}>
                        
                        </Grid>
                        <Grid item md={4} sm={6} xs={12}>
                        
                        </Grid>
                        <Grid item md={6} sm={6} xs={12}>
                        
                        </Grid>
                        <Grid item md={6} sm={6} xs={12}>
                        
                        </Grid>
                    </Grid>
                    </Container>
        </Box>
    );
}

export default Useradd;