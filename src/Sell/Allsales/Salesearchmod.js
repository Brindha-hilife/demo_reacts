import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Usersale from '../User.module.css';
import { userStyle } from '../Userstyle';
import { styled } from '@mui/material/styles';
import { Grid, FormControl, InputLabel, OutlinedInput, Button, Dialog, DialogTitle, DialogContent, DialogActions, IconButton, TextareaAutosize } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';

function Salesearchmod() {

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

export default Salesearchmod;