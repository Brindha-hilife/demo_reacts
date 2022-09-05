import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { userStyle } from '../../PageStyle';
import {
    Box, Grid, FormControl, InputLabel, OutlinedInput, Select, MenuItem, Button,
    Dialog, DialogTitle, DialogContent, DialogActions, IconButton,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Sidebar from '../../../header/Sidebar';
import { FaPlus } from 'react-icons/fa';


function Createbrandmod() {

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

    // Unit Modal
    const [unitmodal, setUnitmodal] = useState(false);

    const unitModOpen = () => {
        setUnitmodal(true);
    };
    const unitModClose = () => {
        setUnitmodal(false);
    };

    // ************* Modal ************* //
    // ****** Unit Modal ****** //

    const [productAddUnitMod, setProductAddUnitMod] = useState({
        productAddunitprodname: "", productAddunitshortname: "", productAddunitallow: ""
    });

    // ****** Brand Modal ****** //

    const [productAddBrandMod, setProductAddBrandMod] = useState({
        prodaddBrdModBrdName: "", prodaddBrdModShortDes: "",
    });

    return (
        <Box>
            <Grid sx={userStyle.spanIcons} onClick={unitModOpen}  ><FaPlus /></Grid>
            <Dialog
                onClose={unitModClose}
                aria-labelledby="customized-dialog-title1"
                open={unitmodal}
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
                <BootstrapDialogTitle id="customized-dialog-title1" onClose={unitModClose}>
                    Add Unit
                </BootstrapDialogTitle>
                <DialogContent dividers>
                    <Grid container spacing={3}>
                        <Grid item md={12} sm={12} xs={12}>
                            <FormControl size="small" fullWidth>
                                <InputLabel htmlFor="component-outlined">Product Name *</InputLabel>
                                <OutlinedInput
                                    id="component-outlined"
                                    value={productAddUnitMod.productAddunitprodname}
                                    onChange={(e) => { setProductAddUnitMod({ ...productAddUnitMod, productAddunitprodname: e.target.value }) }}
                                    label="Product Name"
                                />
                            </FormControl>
                        </Grid>
                        <Grid item md={12} sm={12} xs={12}>
                            <FormControl size="small" fullWidth>
                                <InputLabel htmlFor="component-outlined">Short Name</InputLabel>
                                <OutlinedInput
                                    id="component-outlined"
                                    value={productAddUnitMod.productAddunitshortname}
                                    onChange={(e) => { setProductAddUnitMod({ ...productAddUnitMod, productAddshortprodname: e.target.value }) }}
                                    label="Short Name"
                                />
                            </FormControl>
                        </Grid>
                        <Grid item md={12} sm={12} xs={12}>
                            <FormControl size="small" fullWidth>
                                <InputLabel id="demo-select-small">Allow decimal *</InputLabel>
                                <Select
                                    labelId="demo-select-small"
                                    id="demo-select-small"
                                    value={productAddUnitMod.productAddunitallow}
                                    onChange={(e) => { setProductAddUnitMod({ ...productAddUnitMod, productAddunitallow: e.target.value }) }}
                                    label="Allow decimal"
                                >
                                    <MenuItem value="">
                                        <em>Please Select</em>
                                    </MenuItem>
                                    <MenuItem value={1}>Yes</MenuItem>
                                    <MenuItem value={2}>No</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus variant='contained' color="success">
                        Save
                    </Button>
                    <Button onClick={unitModClose} variant='contained' color="error">Close</Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
}

export default Createbrandmod;