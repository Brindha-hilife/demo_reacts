import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { sellStyle } from '../Sellstyle';
import { styled } from '@mui/material/styles';
import { Grid, FormControl, InputLabel, OutlinedInput, Button, Dialog, DialogTitle, DialogContent, DialogActions, IconButton, TextareaAutosize } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';

function Discountcreate() {

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
const [discountAddMod, setDiscountAddMod] = useState(false);

const modAddOpen = () => {
    setDiscountAddMod(true);
};
const modAddClose = () => {
    setDiscountAddMod(false);
};

const [disAddForm, setDisAddForm] = useState({
    prefixadd: "", firstnamead: "", lastnameadd: "", emailadd: "", contactadd: "", addressadd: "", salescomnperadd: ""
});



    return (
        <Box>
            <Box>
                <Button sx={sellStyle.button_add} onClick={handleClickOpenadd} ><AddIcon /> Add</Button>
            </Box>

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
                        Add Discount
                    </BootstrapDialogTitle>
                    <DialogContent dividers>
                        <Grid container spacing={3}>
                            <Grid item md={12} sm={12} xs={12}>
                                <FormControl size="small" fullWidth>
                                    <InputLabel htmlFor="component-outlined">Name *</InputLabel>
                                    <OutlinedInput
                                        id="component-outlined"
                                        value={disAddForm.prefixadd}
                                        onChange={(e) => { setDisAddForm({ ...disAddForm, Prefixadd: e.target.value }) }}
                                        label="Name *"
                                        type="text"
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item md={12} sm={12} xs={12}>
                                <FormControl size="small" fullWidth>
                                    <InputLabel htmlFor="component-outlined">Products</InputLabel>
                                    <OutlinedInput
                                        id="component-outlined"
                                        value={disAddForm.firstnamead}
                                        onChange={(e) => { setDisAddForm({ ...disAddForm, Firstnamead: e.target.value }) }}
                                        label="First Name *"
                                        type="text"
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item md={6} sm={12} xs={12}>
                            <FormControl size="small" fullWidth>
                                <InputLabel id="demo-select-small">Brand</InputLabel>
                                <Select
                                    labelId="demo-select-small"
                                    id="demo-select-small"
                                    value={productAdd.productAddapplicable}
                                    onChange={(e) => { setProductAdd({ ...productAdd, productAddapplicable: e.target.value }) }}
                                    label="Brand"
                                >
                                    <MenuItem value="">
                                        <em>Please Select</em>
                                    </MenuItem>
                                    <MenuItem value={1}>xxx</MenuItem>
                                </Select>
                            </FormControl>
                            </Grid>
                            <Grid item md={6} sm={12} xs={12}>
                            <FormControl size="small" fullWidth>
                                <InputLabel id="demo-select-small">Category</InputLabel>
                                <Select
                                    labelId="demo-select-small"
                                    id="demo-select-small"
                                    value={productAdd.productAddapplicable}
                                    onChange={(e) => { setProductAdd({ ...productAdd, productAddapplicable: e.target.value }) }}
                                    label="Categotry"
                                >
                                    <MenuItem value="">
                                        <em>Please Select</em>
                                    </MenuItem>
                                </Select>
                            </FormControl>
                            </Grid>
                            <Grid item md={6} sm={12} xs={12}>
                            <FormControl size="small" fullWidth>
                                <InputLabel id="demo-select-small">Location *</InputLabel>
                                <Select
                                    labelId="demo-select-small"
                                    id="demo-select-small"
                                    value={productAdd.productAddapplicable}
                                    onChange={(e) => { setProductAdd({ ...productAdd, productAddapplicable: e.target.value }) }}
                                    label="Location *"
                                >
                                    <MenuItem value="">
                                        <em>Please Select</em>
                                    </MenuItem>
                                    <MenuItem value={1}>xxx</MenuItem>
                                    <MenuItem value={2}>yyy</MenuItem>
                                </Select>
                            </FormControl>
                            </Grid>
                            <Grid item md={6} sm={12} xs={12}>
                            <FormControl variant="outlined" size="small" fullWidth>
                                <InputLabel htmlFor="outlined-adornment-password">Priority</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-password"
                                    endAdornment={
                                        <Tooltip title='Discount with higher priority will have higher weightage, however priority will not be considered for exact matches' placement="top">
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    edge="end"
                                                    value={productEdit.producteditsku}
                                                    onChange={(e) => { setProductEdit({ ...productEdit, Producteditsku: e.target.value }) }}
                                                >
                                                    <FcInfo />
                                                </IconButton>
                                            </InputAdornment>
                                        </Tooltip>
                                    }
                                    label="Priority"
                                />
                            </FormControl>
                            </Grid>
                            <Grid item md={6} sm={12} xs={12}>
                            <FormControl size="small" fullWidth>
                                <InputLabel id="demo-select-small">Discount Type *</InputLabel>
                                <Select
                                    labelId="demo-select-small"
                                    id="demo-select-small"
                                    value={productAdd.productAddapplicable}
                                    onChange={(e) => { setProductAdd({ ...productAdd, productAddapplicable: e.target.value }) }}
                                    label="Discount Type *"
                                >
                                    <MenuItem value="">
                                        <em>Please Select</em>
                                    </MenuItem>
                                    <MenuItem value={0}>Fixed</MenuItem>
                                    <MenuItem value={1}>Percentage</MenuItem>
                                </Select>
                            </FormControl>
                            </Grid>
                            <Grid item md={6} sm={12} xs={12}>
                            <FormControl size="small" fullWidth>
                                    <InputLabel htmlFor="component-outlined">Discount Amount *</InputLabel>
                                    <OutlinedInput
                                        id="component-outlined"
                                        value={disAddForm.prefixadd}
                                        onChange={(e) => { setDisAddForm({ ...disAddForm, Prefixadd: e.target.value }) }}
                                        label="Discount Amount *"
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
                        <Button onClick={handleCloseadd} variant='contained' color="error">Close</Button>
                    </DialogActions>
                </BootstrapDialog>
            </form>
        </Box>
    );
}

export default Discountcreate;