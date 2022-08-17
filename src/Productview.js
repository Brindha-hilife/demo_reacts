import * as React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import './product.css';
import {
    Box, Container, Grid, FormControl, InputLabel, OutlinedInput, Select, MenuItem,
    Typography, Autocomplete, TextField, FormGroup, FormControlLabel, Checkbox,
    Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button,
    Dialog, DialogTitle, DialogContent, DialogActions, IconButton


} from '@mui/material';
import MUIEditor, { MUIEditorState } from "react-mui-draft-wysiwyg";
import CloseIcon from '@mui/icons-material/Close';







function Productview() {

    // Unit Modal
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

    // Unit Modal
    const [unitmodal, setUnitmodal] = React.useState(false);

    const handleClickOpen1 = () => {
        setUnitmodal(true);
    };
    const handleClose1 = () => {
        setUnitmodal(false);
    };
    // Brand Modal
    const [brandmodal, setBrandmodal] = React.useState(false);

    const handleClickOpen2 = () => {
        setBrandmodal(true);
    };
    const handleClose2 = () => {
        setBrandmodal(false);
    };


    // Text Editor
    const [editorState, setEditorState] = React.useState(
        MUIEditorState.createEmpty(),
    )
    const onChange = newState => {
        setEditorState(newState)
    }

    //Text field
    //Product Name
    const [productname, setProductname] = React.useState('');

    const handleChange1 = (event) => {
        setProductname(event.target.value);
    };
    //SKU
    const [sku, setSku] = React.useState('');

    const handleChange2 = (event) => {
        setSku(event.target.value);
    };
    //Alert Quantity
    const [alertquantity, setAlertquantity] = React.useState('');

    const handleChange8 = (event) => {
        setAlertquantity(event.target.value);
    };
    //Exc. tax Purchase
    const [exc, setExc] = React.useState('');

    const handleChange12 = (event) => {
        setExc(event.target.value);
    };
    //Inc. tax Purchase
    const [inc, setInc] = React.useState('');

    const handleChange13 = (event) => {
        setInc(event.target.value);
    };
    //marg
    const [marg, setMarg] = React.useState('');

    const handleChange14 = (event) => {
        setMarg(event.target.value);
    };
    //Exc. tax Sales
    const [exctax, setExctax] = React.useState('');

    const handleChange15 = (event) => {
        setExctax(event.target.value);
    };
    //Inc. tax Sales
    const [inctax, setInctax] = React.useState('');

    const handleChange16 = (event) => {
        setInctax(event.target.value);
    };

    /************* Modal *************/
    // Unit Modal
    // Product Name
    const [modproductname, setModproductname] = React.useState('');

    const handleChange19 = (event) => {
        setModproductname(event.target.value);
    };
    // Short name
    const [modshortname, setModshortname] = React.useState('');

    const handleChange20 = (event) => {
        setModshortname(event.target.value);
    };
    // Allow decimal
    const [modallowdes, setModallowdes] = React.useState('');

    const handleChange21 = (event) => {
        setModallowdes(event.target.value);
    };



    // Brand Modal
    // Brand Name
    const [modbrandname, setModbrandname] = React.useState('');

    const handleChange17 = (event) => {
        setModbrandname(event.target.value);
    };
    //Short Description
    const [shortdes, setShortdes] = React.useState('');

    const handleChange18 = (event) => {
        setShortdes(event.target.value);
    };

    //Select
    //Barcode Type
    const [barcodetype, setBarcodetype] = React.useState('');

    const handleChange3 = (event) => {
        setBarcodetype(event.target.value);
    };
    //Unit
    const [unit, setUnit] = React.useState('');

    const handleChange4 = (event) => {
        setUnit(event.target.value);
    };
    //Brand
    const [brand, setBrand] = React.useState('');

    const handleChange5 = (event) => {
        setBrand(event.target.value);
    };
    //Category
    const [category, setCategory] = React.useState('');

    const handleChange6 = (event) => {
        setCategory(event.target.value);
    };
    //Sub Category
    const [subcategory, setSubcategory] = React.useState('');

    const handleChange7 = (event) => {
        setSubcategory(event.target.value);
    };
    //Applicable Tax
    const [applicabletax, setApplicabletax] = React.useState('');

    const handleChange9 = (event) => {
        setApplicabletax(event.target.value);
    };
    //Selling Price Tax Type
    const [sellingprice, setSellingprice] = React.useState('');

    const handleChange10 = (event) => {
        setSellingprice(event.target.value);
    };
    //Product Type
    const [producttype, setProducttype] = React.useState('');

    const handleChange11 = (event) => {
        setProducttype(event.target.value);
    };

    const top100Films = [
        { title: 'xxxx' },
        { title: 'yyyy' },
        { title: 'zzzz' },
        { title: 'aaaa' },
        { title: 'ssss' },
        { title: 'xxxx' },
        { title: 'dddd' },

    ];

    return (
        <Box>
            <Container sx={{paddingTop: '10px'}}>

                <Grid display="flex">
                    <Typography variant="h6">View Product</Typography>
                    <Typography variant='body2' sx={{ marginLeft: '10px', marginTop: '5px' }}>Products | View product</Typography>
                </Grid>
            </Container><br />
            <Container sx={{
                bgcolor: '#fff', height: 'auto', borderTop: '5px solid #7009ab;', borderLeft: '0px',
                borderRight: '0px', borderBottom: '0px', borderRadius: '10px', boxShadow: '6px 6px 6px 9px #dedbdbae'
            }}>
                <Grid container spacing={2} sx={{
                    padding: '40px 20px',
                    '& .MuiOutlinedInput-notchedOutline': {
                        border: '1px solid #b97df0',
                    },
                }}>
                    <Grid item md={3} sm={6} xs={12}>
                        <FormControl size="small" fullWidth >
                            <InputLabel htmlFor="component-outlined" >Product Name *</InputLabel>
                            <OutlinedInput
                                id="component-outlined"
                                value={productname}
                                onChange={handleChange1}
                                label="Product Name *"

                            />
                        </FormControl>
                    </Grid>
                    <Grid item md={3} sm={6} xs={12}>
                        <FormControl size="small" fullWidth>
                            <InputLabel htmlFor="component-outlined">SKU *</InputLabel>
                            <OutlinedInput
                                id="component-outlined"
                                value={sku}
                                onChange={handleChange2}
                                label="SKU *"

                            />
                        </FormControl>
                    </Grid>
                    <Grid item md={3} sm={6} xs={12}>
                        <FormControl size="small" fullWidth

                        >
                            <InputLabel id="demo-select-small">Barcode type</InputLabel>
                            <Select
                                labelId="demo-select-small"
                                id="demo-select-small"
                                value={barcodetype}
                                label="Barcode type"
                                onChange={handleChange3}

                            >
                                <MenuItem value="">
                                    Code 128 (C128)
                                </MenuItem>
                                <MenuItem value={1}>Code 39 (C39)</MenuItem>
                                <MenuItem value={2}>EAN-13</MenuItem>
                                <MenuItem value={3}>EAN-8</MenuItem>
                                <MenuItem value={4}>UPC-A</MenuItem>
                                <MenuItem value={5}>UPC-E</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item md={3} sm={6} xs={12}>
                        <FormControl size="small" fullWidth sx={{ display: 'flex' }}>
                            <InputLabel id="demo-select-small">Unit *</InputLabel>
                            <Grid sx={{ display: 'flex' }}  >
                                <Select
                                    labelId="demo-select-small"
                                    id="demo-select-small"
                                    value={unit}
                                    label="Unit *"
                                    onChange={handleChange4}
                                    fullWidth
                                >
                                    <MenuItem value="">
                                        <em>Please Select</em>
                                    </MenuItem>
                                    <MenuItem value={1}>yyy</MenuItem>
                                    <MenuItem value={2}>xxx</MenuItem>
                                </Select>
                                <Grid sx={{ fontSize: '24px', paddingLeft: '6px', margin: 'auto', border: '1px solid #b97df0', width: '33px', height: '40px', borderRadius: '2px', backgroundColor: '#b97df0', color: '#fff' }} onClick={handleClickOpen1} >+</Grid>
                            </Grid>

                        </FormControl>
                    </Grid>
                    <Grid item md={3} sm={6} xs={12}>
                        <FormControl size="small" fullWidth sx={{ display: 'flex' }}>
                            <InputLabel id="demo-select-small">Brand</InputLabel>
                            <Grid sx={{ display: 'flex' }}  >
                                <Select
                                    labelId="demo-select-small"
                                    id="demo-select-small"
                                    value={brand}
                                    label="Brand"
                                    onChange={handleChange5}
                                    fullWidth
                                >
                                    <MenuItem value="">
                                        <em>Please Select</em>
                                    </MenuItem>
                                    <MenuItem value={1}>yyy</MenuItem>
                                    <MenuItem value={2}>xxx</MenuItem>
                                </Select>
                                <Grid sx={{ fontSize: '24px', paddingLeft: '6px', margin: 'auto', border: '1px solid #b97df0', width: '33px', height: '40px', borderRadius: '2px', backgroundColor: '#b97df0', color: '#fff' }} onClick={handleClickOpen2} >+</Grid>                            </Grid>
                        </FormControl>
                    </Grid>
                    <Grid item md={3} sm={6} xs={12}>
                        <FormControl size="small" fullWidth>
                            <InputLabel id="demo-select-small">Category</InputLabel>
                            <Select
                                labelId="demo-select-small"
                                id="demo-select-small"
                                value={category}
                                label="Category"
                                onChange={handleChange6}
                            >
                                <MenuItem value="">
                                    <em>Please Select</em>
                                </MenuItem>
                                <MenuItem value={1}>yyy</MenuItem>
                                <MenuItem value={2}>xxx</MenuItem>

                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item md={3} sm={6} xs={12}>
                        <FormControl size="small" fullWidth>
                            <InputLabel id="demo-select-small">Sub Category</InputLabel>
                            <Select
                                labelId="demo-select-small"
                                id="demo-select-small"
                                value={subcategory}
                                label="Sub Category"
                                onChange={handleChange7}
                            >
                                <MenuItem value="">
                                    <em>Please Select</em>
                                </MenuItem>
                                <MenuItem value={1}>yyy</MenuItem>
                                <MenuItem value={2}>xxx</MenuItem>

                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item md={3} sm={6} xs={12}>
                        <FormControl size="small" fullWidth>
                            <Autocomplete
                                multiple
                                id="tags-outlined"
                                options={top100Films}
                                getOptionLabel={(option) => option.title}
                                filterSelectedOptions
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        label="Business Location"
                                        placeholder="Favorites"
                                    />
                                )}
                                size="small" fullWidth
                            />
                        </FormControl>
                    </Grid>
                    <Grid item md={3} sm={6} xs={12}>
                        <FormGroup>
                            <FormControlLabel control={<Checkbox defaultChecked />} label="Manage Stock" />
                        </FormGroup>
                    </Grid>
                    <Grid item md={3} sm={6} xs={12}>
                        <FormControl size="small" fullWidth>
                            <InputLabel htmlFor="component-outlined">Alert Quantity</InputLabel>
                            <OutlinedInput
                                id="component-outlined"
                                value={alertquantity}
                                onChange={handleChange8}
                                label="Alert Quantity"
                            />
                        </FormControl>
                    </Grid>
                    <Grid item md={3} sm={6} xs={12}>
                        <FormControl size="small" fullWidth>
                            <Button

                                component="label"
                                className='product_uploadbtn'
                            >
                                Upload Image
                                <input
                                    type="file"
                                    hidden
                                />
                            </Button>
                            <Typography variant='body2' sx={{ opacity: '0.9', mt: 1 }}>Max File size: 5MB</Typography>
                        </FormControl>
                    </Grid>
                    <Grid item md={3} sm={6} xs={12}></Grid>
                    <Grid item md={9} sm={12} xs={12}>
                        <MUIEditor editorState={editorState} onChange={onChange} />
                    </Grid>
                    <Grid item md={3} sm={12} xs={12}>
                        <FormControl size="small" fullWidth>
                            <Button
                                className='product_uploadbtn'
                            >
                                Upload File
                                <input
                                    type="file"
                                    hidden
                                />
                            </Button>
                            <Typography variant='body2' sx={{ opacity: '0.9', mt: 1 }}>
                                Max File size: 5MB <br />
                                Allowed File: .pdf, .csv, .zip, .doc, .docx, .jpeg, .jpg, .png
                            </Typography>
                        </FormControl>
                    </Grid>
                    <Grid item md={4} sm={12} xs={12}>
                        <FormControl size="small" fullWidth>
                            <InputLabel id="demo-select-small">Applicable Tax</InputLabel>
                            <Select
                                labelId="demo-select-small"
                                id="demo-select-small"
                                value={applicabletax}
                                label="Applicable Tax"
                                onChange={handleChange9}
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={1}>yyy</MenuItem>
                                <MenuItem value={2}>xxx</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item md={4} sm={12} xs={12}>
                        <FormControl size="small" fullWidth>
                            <InputLabel id="demo-select-small">Selling Price Tax Type *</InputLabel>
                            <Select
                                labelId="demo-select-small"
                                id="demo-select-small"
                                value={sellingprice}
                                label="Selling Price Tax Type"
                                onChange={handleChange10}
                            >
                                <MenuItem value="">
                                    Exclusive
                                </MenuItem>
                                <MenuItem value={1}>Inclusive</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item md={4} sm={12} xs={12}>
                        <FormControl size="small" fullWidth>
                            <InputLabel id="demo-select-small">Product Type</InputLabel>
                            <Select
                                value={producttype}
                                label="Product Type"
                                onChange={handleChange11}
                            >
                                <MenuItem value="">
                                    Single
                                </MenuItem>
                                <MenuItem value={1}>Variable</MenuItem>
                                <MenuItem value={1}>Combo</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item md={12} sm={12} xs={12} >
                        <TableContainer component={Paper} fullWidth>
                            <Table aria-label="simple table " sx={{ borderBlock: '1px solid #b97fd0' }} fullWidth>
                                <TableHead fullWidth>
                                    <TableRow fullWidth>
                                        <TableCell className='product_tablehd' align="center" colSpan={2} fullWidth>Default Purchase Price</TableCell>
                                        <TableCell className='product_tablehd' align="center" fullWidth>x Margin (%)</TableCell>
                                        <TableCell className='product_tablehd' align="center" fullWidth>Default Selling Price</TableCell>
                                        <TableCell className='product_tablehd' align="center" fullWidth>Product image</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody fullWidth>
                                    <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }} fullWidth>
                                        <TableCell component="th" scope="row" fullWidth>
                                            <FormControl size="small" fullWidth>
                                                <InputLabel htmlFor="component-outlined">Exc. tax *</InputLabel>
                                                <OutlinedInput
                                                    id="component-outlined"
                                                    value={exc}
                                                    onChange={handleChange12}
                                                    label="Exc. tax *"
                                                />
                                            </FormControl>
                                        </TableCell>
                                        <TableCell align="center" fullWidth>
                                            <FormControl size="small" fullWidth>
                                                <InputLabel htmlFor="component-outlined">Inc. tax *</InputLabel>
                                                <OutlinedInput
                                                    id="component-outlined"
                                                    value={inc}
                                                    onChange={handleChange13}
                                                    label="Inc. tax *"
                                                />
                                            </FormControl>
                                        </TableCell>
                                        <TableCell align="center" fullWidth>
                                            <FormControl size="small" fullWidth>
                                                <InputLabel htmlFor="component-outlined"></InputLabel>
                                                <OutlinedInput
                                                    id="component-outlined"
                                                    value={marg}
                                                    onChange={handleChange14}
                                                    label="Marg"
                                                />
                                            </FormControl>
                                        </TableCell>
                                        <TableCell align="center" fullWidth>
                                            <FormControl size="small" fullWidth>
                                                <InputLabel htmlFor="component-outlined">Exc. tax *</InputLabel>
                                                <OutlinedInput
                                                    id="component-outlined"
                                                    value={exctax}
                                                    onChange={handleChange15}
                                                    label="Exc. tax *"
                                                />
                                            </FormControl>
                                            <FormControl size="small" fullWidth>
                                                <InputLabel htmlFor="component-outlined">Inc. tax *</InputLabel>
                                                <OutlinedInput
                                                    id="component-outlined"
                                                    value={inctax}
                                                    onChange={handleChange16}
                                                    label="Inc. tax *"
                                                />
                                            </FormControl>
                                        </TableCell>
                                        <TableCell align="center" fullWidth>
                                            <Button
                                                className='product_uploadbtn'
                                            >
                                                Upload Image
                                                <input
                                                    type="file"
                                                    hidden
                                                />
                                            </Button>
                                            <Typography variant='body2' sx={{ opacity: '0.9', mt: 1 }}>Max File size: 5MB</Typography>
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Grid>

                    <Grid item md={4} sm={1} xs={1}></Grid>

                    <Grid item md={7} sm={10} xs={12}>
                        <Button className='product_saveadd'>Save And Add Another </Button><Button className='product_save'>Save</Button>
                    </Grid>
                    <Grid item md={1} sm={1} xs={1}></Grid>


                </Grid>

            </Container>

            {/************* Modal *************/}

            {/************* Unit Modal *************/}
            <div>

                <BootstrapDialog
                    onClose={handleClose1}
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
                    <BootstrapDialogTitle id="customized-dialog-title1" onClose={handleClose1}>
                        Add Unit
                    </BootstrapDialogTitle>
                    <DialogContent dividers>
                        <Grid container spacing={3}>
                            <Grid item md={12} sm={12} xs={12}>
                                <FormControl size="small" fullWidth>
                                    <InputLabel htmlFor="component-outlined">Product Name *</InputLabel>
                                    <OutlinedInput
                                        id="component-outlined"
                                        value={modproductname}
                                        onChange={handleChange19}
                                        label="Product Name"
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item md={12} sm={12} xs={12}>
                                <FormControl size="small" fullWidth>
                                    <InputLabel htmlFor="component-outlined">Short Name</InputLabel>
                                    <OutlinedInput
                                        id="component-outlined"
                                        value={modshortname}
                                        onChange={handleChange20}
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
                                        value={modallowdes}
                                        label="Allow decimal"
                                        onChange={handleChange21}
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
                        <Button onClick={handleClose1} variant='contained' color="error">Close</Button>
                    </DialogActions>
                </BootstrapDialog>
            </div>

            {/************* Brand Modal *************/}
            <div >
                <BootstrapDialog
                    onClose={handleClose2}
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
                    <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose2}>
                        Add Brand
                    </BootstrapDialogTitle>
                    <DialogContent dividers>
                        <Grid container spacing={3}>
                            <Grid item md={12} sm={12} xs={12}>
                                <FormControl size="small" fullWidth>
                                    <InputLabel htmlFor="component-outlined">Brand Name *</InputLabel>
                                    <OutlinedInput
                                        id="component-outlined"
                                        value={modbrandname}
                                        onChange={handleChange17}
                                        label="Brand Name *"
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item md={12} sm={12} xs={12}>
                                <FormControl size="small" fullWidth>
                                    <InputLabel htmlFor="component-outlined">Short Description</InputLabel>
                                    <OutlinedInput
                                        id="component-outlined"
                                        value={shortdes}
                                        onChange={handleChange18}
                                        label="Short Description"
                                    />
                                </FormControl>
                            </Grid>
                        </Grid>
                    </DialogContent>
                    <DialogActions>
                        <Button autoFocus variant='contained' color="success">Save</Button>
                        <Button onClick={handleClose2} variant='contained' color="error">Close</Button>
                    </DialogActions>
                </BootstrapDialog>
            </div>
            <br /> <br />

        </Box>

    );
}


export default Productview;