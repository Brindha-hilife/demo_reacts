import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import { Box, Grid, FormControl, InputLabel, OutlinedInput, Button, Dialog, DialogTitle, DialogContent, DialogActions, IconButton, } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { expStyle } from './Expstyle';

function Expcategoryadd() {

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
    const [categorymodadd, setCategorymodadd] = useState(false);

    const openAdd = () => {
        setCategorymodadd(true);
    };
    const closeAdd = () => {
        setCategorymodadd(false);
    };

    const [cateAddForm, setCateAddForm] = useState({
        cateAddFormName: "", cateAddFormCode: "",
    });



    return (
        <Box>
            <Box>
                <Button sx={expStyle.buttonAdd} onClick={openAdd} >Add</Button>
            </Box>

            <form action=''>
                <BootstrapDialog
                    onClose={closeAdd}
                    aria-labelledby="customized-dialog-title1"
                    open={categorymodadd}
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
                    <BootstrapDialogTitle id="customized-dialog-title1" onClose={closeAdd}>
                        Add Expense Category
                    </BootstrapDialogTitle>
                    <DialogContent dividers>
                        <Grid container spacing={3}>
                            <Grid item md={12} sm={12} xs={12}>
                                <FormControl size="small" fullWidth>
                                    <InputLabel htmlFor="component-outlined">Category name *</InputLabel>
                                    <OutlinedInput
                                        id="component-outlined"
                                        value={cateAddForm.cateAddFormName}
                                        onChange={(e) => { setCateAddForm({ ...cateAddForm, CateAddFormName: e.target.value }) }}
                                        label="Category name *"
                                        type="text"
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item md={12} sm={12} xs={12}>
                                <FormControl size="small" fullWidth>
                                    <InputLabel htmlFor="component-outlined">Category Code</InputLabel>
                                    <OutlinedInput
                                        id="component-outlined"
                                        value={cateAddForm.cateAddFormCode}
                                        onChange={(e) => { setCateAddForm({ ...cateAddForm, CateAddFormCode: e.target.value }) }}
                                        label="Category Code"
                                        type="text"
                                    />
                                </FormControl>
                            </Grid>
                        </Grid>
                    </DialogContent>
                    <DialogActions>
                        <Button autoFocus variant='contained' color="success">
                            Save
                        </Button>
                        <Button onClick={closeAdd} variant='contained' color="error">Close</Button>
                    </DialogActions>
                </BootstrapDialog>
            </form>
        </Box>
    );
}

export default Expcategoryadd;