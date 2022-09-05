import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { sellStyle } from '../Sellstyle';
import { styled } from '@mui/material/styles';
import {
    Box, Grid, FormControl, InputLabel, OutlinedInput, Button, Dialog, DialogTitle, DialogContent, DialogActions, IconButton, Checkbox,
    Select, MenuItem, Tooltip, InputAdornment, FormGroup, FormControlLabel,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { FcInfo } from 'react-icons/fc';
import { FaEdit } from 'react-icons/fa';
import { makeStyles,} from "@material-ui/core/styles";

function Diseditmod() {

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
    const [discountEditMod, setDiscountEditMod] = useState(false);

    const disEditOpen = () => {
        setDiscountEditMod(true);
    };
    const disEditClose = () => {
        setDiscountEditMod(false);
    };

    const [disEditForm, setDisEditForm] = useState({
        disEditName: "", disEditProducts: "", DisEditBrand: "", disEditCategory: "", disEditLocation: "", disEditPriority: "", disEditDiscountType: "",
        disEditDiscountAmt: "", disEditStartsAt: "", disEditEndsAt: "", disEditSellingPriceGrp: ""
    });

    // Tooltip
    const useStyles = makeStyles(theme => ({
        arrow: {
            fontSize: 25,
            color: "7009AB !important",
            "&::before": {
              backgroundColor: "7009AB !important",
              boxShadow: '6px 6px 6px 9px #dedbdbae',
            }
          },
         tooltip: {
            fontSize:"17px !important",
            color: "#7009AB !important",
            backgroundColor: "white !important",
            boxShadow: '6px 6px 6px 9px #dedbdbae',
            padding:"20px",
         }
        }));
        const classes = useStyles();


    return (
        <Box>
            <Box>
                <Button sx={sellStyle.buttonEdit} onClick={disEditOpen}><FaEdit />&ensp;Edit</Button>
            </Box>

            <form action=''>
                <BootstrapDialog
                    onClose={disEditClose}
                    aria-labelledby="customized-dialog-title1"
                    open={discountEditMod}
                    sx={{
                        '& .MuiOutlinedInput-notchedOutline': {
                            border: '1px solid #b97df0',
                        },
                    }}
                >
                    <BootstrapDialogTitle id="customized-dialog-title1" onClose={disEditClose}>
                        Edit Discount
                    </BootstrapDialogTitle>
                    <DialogContent dividers>
                        <Grid container spacing={3}>
                            <Grid item md={12} sm={12} xs={12}>
                                <FormControl size="small" fullWidth>
                                    <InputLabel htmlFor="component-outlined">Name *</InputLabel>
                                    <OutlinedInput
                                        id="component-outlined"
                                        value={disEditForm.disEditName}
                                        onChange={(e) => { setDisEditForm({ ...disEditForm, DisEditName: e.target.value }) }}
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
                                        value={disEditForm.disEditProducts}
                                        onChange={(e) => { setDisEditForm({ ...disEditForm, DisEditProducts: e.target.value }) }}
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
                                        value={disEditForm.disEditBrand}
                                        onChange={(e) => { setDisEditForm({ ...disEditForm, DisEditBrand: e.target.value }) }}
                                        label="Applicable Tax"
                                    >
                                        <MenuItem value="">
                                            <em>Please Select</em>
                                        </MenuItem>
                                        <MenuItem value={1}>yyy</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item md={6} sm={12} xs={12}>
                                <FormControl size="small" fullWidth>
                                    <InputLabel id="demo-select-small">Category</InputLabel>
                                    <Select
                                        labelId="demo-select-small"
                                        id="demo-select-small"
                                        value={disEditForm.disEditCategory}
                                        onChange={(e) => { setDisEditForm({ ...disEditForm, DisEditCategory: e.target.value }) }}
                                        label="Applicable Tax"
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
                                        value={disEditForm.disEditLocation}
                                        onChange={(e) => { setDisEditForm({ ...disEditForm, DisEditLocation: e.target.value }) }}
                                        label="Location *"
                                    >
                                        <MenuItem value="">
                                            <em>Please Select</em>
                                        </MenuItem>
                                        <MenuItem value={1}>yyy</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item md={6} sm={12} xs={12}>
                                <FormControl variant="outlined" size="small" fullWidth>
                                    <InputLabel htmlFor="outlined-adornment-password">Priority</InputLabel>
                                    <OutlinedInput
                                        id="outlined-adornment-password"
                                        endAdornment={
                                            <Tooltip classes={{ arrow: classes.arrow,tooltip: classes.tooltip }} arrow title='Discount with higher priority will have higher weightage, however priority will not be considered for exact mathces' placement="top">
                                                <InputAdornment position="end">
                                                    <IconButton
                                                        aria-label="toggle password visibility"
                                                        edge="end"
                                                        value={disEditForm.disEditPriority}
                                                        onChange={(e) => { setDisEditForm({ ...disEditForm, DisEditPriority: e.target.value }) }}
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
                                        value={disEditForm.disEditDiscountType}
                                        onChange={(e) => { setDisEditForm({ ...disEditForm, DisEditDiscountType: e.target.value }) }}
                                        label="Discount Type *"
                                    >
                                        <MenuItem value="">
                                            <em>Please Select</em>
                                        </MenuItem>
                                        <MenuItem value={1}>yyy</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item md={6} sm={12} xs={12}>
                                <FormControl size="small" fullWidth>
                                    <InputLabel htmlFor="component-outlined">Discount Amount *</InputLabel>
                                    <OutlinedInput
                                        id="component-outlined"
                                        value={disEditForm.disEditDiscountAmt}
                                        onChange={(e) => { setDisEditForm({ ...disEditForm, DisEditDiscountAmt: e.target.value }) }}
                                        label="Name *"
                                        type="text"
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item md={6} sm={12} xs={12}>
                                <FormControl size="small" fullWidth>
                                    <InputLabel htmlFor="component-outlined">Start At</InputLabel>
                                    <OutlinedInput
                                        id="component-outlined"
                                        value={disEditForm.disEditStartsAt}
                                        onChange={(e) => { setDisEditForm({ ...disEditForm, DisEditStartsAt: e.target.value }) }}
                                        label="Name *"
                                        type="text"
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item md={6} sm={12} xs={12}>
                                <FormControl size="small" fullWidth>
                                    <InputLabel htmlFor="component-outlined">Ends At</InputLabel>
                                    <OutlinedInput
                                        id="component-outlined"
                                        value={disEditForm.disEditEndsAt}
                                        onChange={(e) => { setDisEditForm({ ...disEditForm, DisEditEndsAt: e.target.value }) }}
                                        label="Ends At"
                                        type="text"
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item md={6} sm={12} xs={12}>
                                <FormControl size="small" fullWidth>
                                    <InputLabel id="demo-select-small">Selling Price Group</InputLabel>
                                    <Select
                                        labelId="demo-select-small"
                                        id="demo-select-small"
                                        value={disEditForm.disEditSellingPriceGrp}
                                        onChange={(e) => { setDisEditForm({ ...disEditForm, DisEditSellingPriceGrp: e.target.value }) }}
                                        label="Selling Price Group"
                                    >
                                        <MenuItem value="">
                                            <em>All</em>
                                        </MenuItem>
                                        <MenuItem value={1}>Default Selling Price</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item md={6} sm={12} xs={12}></Grid>
                            <Grid item md={6} sm={12} xs={12}>
                                <FormGroup>
                                    <FormControlLabel control={<Checkbox />} label=" Apply in customer groups" />
                                </FormGroup>
                            </Grid>
                            <Grid item md={6} sm={12} xs={12}>
                                <FormGroup>
                                    <FormControlLabel control={<Checkbox defaultChecked />} label=" Is active" />
                                </FormGroup>
                            </Grid>
                        </Grid>
                    </DialogContent>
                    <DialogActions>
                        <Button autoFocus variant='contained' color="success">
                            Save
                        </Button>
                        <Button onClick={disEditClose} variant='contained' color="error">Close</Button>
                    </DialogActions>
                </BootstrapDialog>
            </form>
        </Box>
    );
}

export default Diseditmod;