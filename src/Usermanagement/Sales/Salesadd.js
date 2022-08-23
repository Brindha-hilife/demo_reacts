import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Usersale from '../User.module.css';
import { userStyle } from '../Userstyle';
import { styled } from '@mui/material/styles';
import { Grid, FormControl, InputLabel, OutlinedInput, Button, Dialog, DialogTitle, DialogContent, DialogActions, IconButton, TextareaAutosize } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';

function Salesadd() {

    // ****** Sales Modal ****** //
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


// ****** Sales Modal Textfield ****** //
// ****** Add Modal ****** //
const [salesmodaladd, setSalesmodaladd] = useState(false);

const handleClickOpenadd = () => {
    setSalesmodaladd(true);
};
const handleCloseadd = () => {
    setSalesmodaladd(false);
};

const [salesComnAddForm, setSalesComnAddForm] = useState({
    prefixadd: "", firstnamead: "", lastnameadd: "", emailadd: "", contactadd: "", addressadd: "", salescomnperadd: ""
});



    return (
        <>
            <>
                <Button sx={userStyle.button_add} onClick={handleClickOpenadd} ><AddIcon /> Add</Button>
            </>

            <form action=''>
                <BootstrapDialog
                    onClose={handleCloseadd}
                    aria-labelledby="customized-dialog-title1"
                    open={salesmodaladd}
                    sx={{
                        '& .MuiOutlinedInput-notchedOutline': {
                            border: '1px solid #b97df0',
                        },
                        '& .MuiDialog-paper': {
                            marginTop: '-400px',
                            transformOrigin: '0 0 0'
                        }
                    }}
                >
                    <BootstrapDialogTitle id="customized-dialog-title1" onClose={handleCloseadd}>
                        Add sales commission agent
                    </BootstrapDialogTitle>
                    <DialogContent dividers>
                        <Grid container spacing={3}>
                            <Grid item md={2} sm={12} xs={12}>
                                <FormControl size="small" fullWidth>
                                    <InputLabel htmlFor="component-outlined">Prefix</InputLabel>
                                    <OutlinedInput
                                        id="component-outlined"
                                        value={salesComnAddForm.prefixadd}
                                        onChange={(e) => { setSalesComnAddForm({ ...salesComnAddForm, Prefixadd: e.target.value }) }}
                                        label="Prefix"
                                        type="text"
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item md={5} sm={12} xs={12}>
                                <FormControl size="small" fullWidth>
                                    <InputLabel htmlFor="component-outlined">First Name *</InputLabel>
                                    <OutlinedInput
                                        id="component-outlined"
                                        value={salesComnAddForm.firstnamead}
                                        onChange={(e) => { setSalesComnAddForm({ ...salesComnAddForm, Firstnamead: e.target.value }) }}
                                        label="First Name *"
                                        type="text"
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item md={5} sm={12} xs={12}>
                                <FormControl size="small" fullWidth>
                                    <InputLabel id="demo-select-small">Last Name </InputLabel>
                                    <OutlinedInput
                                        labelId="demo-select-small"
                                        id="demo-select-small"
                                        value={salesComnAddForm.lastnameadd}
                                        onChange={(e) => { setSalesComnAddForm({ ...salesComnAddForm, Lastnameadd: e.target.value }) }}
                                        label="Last Name"
                                        type="text"
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item md={6} sm={12} xs={12}>
                                <FormControl size="small" fullWidth>
                                    <InputLabel id="demo-select-small">Email </InputLabel>
                                    <OutlinedInput
                                        labelId="demo-select-small"
                                        id="demo-select-small"
                                        value={salesComnAddForm.emailadd}
                                        onChange={(e) => { setSalesComnAddForm({ ...salesComnAddForm, emailadd: e.target.value }) }}
                                        label="Email"
                                        type="email"
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item md={6} sm={12} xs={12}>
                                <FormControl size="small" fullWidth>
                                    <InputLabel id="demo-select-small">Contact Number </InputLabel>
                                    <OutlinedInput
                                        labelId="demo-select-small"
                                        id="demo-select-small"
                                        value={salesComnAddForm.contactadd}
                                        onChange={(e) => { setSalesComnAddForm({ ...salesComnAddForm, Contactadd: e.target.value }) }}
                                        label="Contact Number"
                                        type="number"
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item md={12} sm={12} xs={12}>
                                <InputLabel id="demo-select-small">Address </InputLabel>
                                <FormControl size="small" fullWidth>
                                    <TextareaAutosize
                                        aria-label="minimum height"
                                        minRows={3}
                                        placeholder="Address"
                                        className={Usersale.users_txtarea}
                                        value={salesComnAddForm.addressadd}
                                        onChange={(e) => { setSalesComnAddForm({ ...salesComnAddForm, Addressadd: e.target.value }) }}
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item md={6} sm={12} xs={12}>
                                <FormControl size="small" fullWidth>
                                    <InputLabel id="demo-select-small">Sales Commission Percentage (%)</InputLabel>
                                    <OutlinedInput
                                        labelId="demo-select-small"
                                        id="demo-select-small"
                                        value={salesComnAddForm.salescomnperadd}
                                        onChange={(e) => { setSalesComnAddForm({ ...salesComnAddForm, Salescomnperadd: e.target.value }) }}
                                        label="Sales Commission Percentage (%)"
                                        type="number"
                                    />
                                </FormControl>
                            </Grid>
                        </Grid>
                    </DialogContent>
                    <DialogActions>
                        <Button autoFocus variant='contained' color="success">
                            Save
                        </Button>
                        <Button onClick={handleCloseadd} variant='contained' color="error">Close</Button>
                    </DialogActions>
                </BootstrapDialog>
            </form>
        </>
    );
}

export default Salesadd;