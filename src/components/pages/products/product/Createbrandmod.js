import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { userStyle } from '../../PageStyle';
import {
    Box, Grid, FormControl, InputLabel, OutlinedInput, Select, MenuItem, Button,
    Dialog, DialogTitle, DialogContent, DialogActions, IconButton,
} from '@mui/material';
import { FaPlus } from 'react-icons/fa';
import CloseIcon from '@mui/icons-material/Close';
import Sidebar from '../../../header/Sidebar';


function Createunitmod() {

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


    // Brand Modal
    const [brandmodal, setBrandmodal] = useState(false);

    const brandModOpen = () => {
        setBrandmodal(true);
    };
    const brandModClose = () => {
        setBrandmodal(false);
    };

    // ****** Brand Modal ****** //
    const [productAddBrandMod, setProductAddBrandMod] = useState({
        prodaddBrdModBrdName: "", prodaddBrdModShortDes: "",
    });


    return (
        <Box>
            <Grid sx={userStyle.spanIcons} onClick={brandModOpen} ><FaPlus /></Grid>
            <Box >
                <Dialog
                    onClose={brandModClose}
                    aria-labelledby="customized-dialog-title"
                    open={brandmodal}
                    sx={{
                        '& .MuiOutlinedInput-notchedOutline': {
                            border: '1px solid #b97df0',
                        },
                        '& .MuiDialog-paper': {
                            marginTop: '-470px',
                            transformOrigin: '0 0 0'
                        }
                    }}
                >
                    <BootstrapDialogTitle id="customized-dialog-title" onClose={brandModClose}>
                        Add Brand
                    </BootstrapDialogTitle>
                    <DialogContent dividers>
                        <Grid container spacing={3}>
                            <Grid item md={12} sm={12} xs={12}>
                                <FormControl size="small" fullWidth>
                                    <InputLabel htmlFor="component-outlined">Brand Name *</InputLabel>
                                    <OutlinedInput
                                        id="component-outlined"
                                        value={productAddBrandMod.prodaddBrdModBrdName}
                                        onChange={(e) => { setProductAddBrandMod({ ...productAddBrandMod, prodaddBrdModBrdName: e.target.value }) }}
                                        label="Brand Name *"
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item md={12} sm={12} xs={12}>
                                <FormControl size="small" fullWidth>
                                    <InputLabel htmlFor="component-outlined">Short Description</InputLabel>
                                    <OutlinedInput
                                        id="component-outlined"
                                        value={productAddBrandMod.prodaddBrdModShortDes}
                                        onChange={(e) => { setProductAddBrandMod({ ...productAddBrandMod, prodaddBrdModShortDes: e.target.value }) }}
                                        label="Short Description"
                                    />
                                </FormControl>
                            </Grid>
                        </Grid>
                    </DialogContent>
                    <DialogActions>
                        <Button autoFocus variant='contained' color="success">Save</Button>
                        <Button onClick={brandModClose} variant='contained' color="error">Close</Button>
                    </DialogActions>
                </Dialog>
            </Box>
        </Box>
    );
}

export default Createunitmod;