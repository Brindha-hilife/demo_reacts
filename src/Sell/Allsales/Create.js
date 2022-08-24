import React, { useState } from 'react';
import { sellStyle } from '../Sellstyle';
import {
    Box, Container, Grid, FormControl, InputLabel, OutlinedInput, Select, MenuItem,
    Typography, FormGroup, FormControlLabel, Checkbox, Button, TextareaAutosize, Tooltip, IconButton, NativeSelect, InputAdornment
} from '@mui/material';
import { FcInfo  } from "react-icons/fc";
import { FaInfo } from "react-icons/fa";

function Salescreate() {

    // ******** Text field ******** //
    const [productAdd, setProductAdd] = useState({
        productAddname: "", productAddsku: "", productAddbarcode: "", productAddunit: "",
        productAddbrand: "", productAddcategory: "", productAddsubcat: "", productAddbusinessloc: "",
        productAddalert: "", productAddapplicable: "", productAddsellingtax: "", productAddproducttype: "",
        productAddexc: "", productAddinc: "", productAddmarg: "", productAddexctax: "", productAddinctax: "",

    });

    return (
        <Box>
            <form action=''>
                <Container sx={{ paddingTop: '10px', }}>
                    <Grid display="flex">
                        <Typography variant="h6" sx={{ color: '#7009ab' }}>Add Sale</Typography>&ensp;
                    </Grid><br />
                    <Box>
                        <Grid container >
                            <Grid item md={4} sm={6} xs={12} sx={{ width: '350px' }}>
                                <Grid sx={{ display: 'flex' }}  >
                                    <Grid sx={sellStyle.spanIcons}><FcInfo /></Grid>
                                    <FormControl size="small" fullWidth sx={{ display: 'flex' }}>
                                        <Select
                                            labelId="demo-select-small"
                                            id="demo-select-small"
                                            value={productAdd.productAddbrand}
                                            onChange={(e) => { setProductAdd({ ...productAdd, productAddbrand: e.target.value }) }} label="Brand"
                                            fullWidth
                                        >
                                            <MenuItem value=""><em>Please Select</em></MenuItem>
                                            <MenuItem value={1}>yyy</MenuItem>
                                            <MenuItem value={2}>xxx</MenuItem>
                                        </Select>
                                    </FormControl>
                                    <Grid sx={sellStyle.spanIcons}>
                                        <Tooltip title="Business location from where your want to sell">
                                            <IconButton>
                                                <FcInfo />
                                            </IconButton>
                                        </Tooltip>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item md={8}></Grid>
                        </Grid>
                    </Box>
                </Container><br />
                <Box sx={sellStyle.subContainer}>
                    <Grid container spacing={2} sx={sellStyle.textInput}>
                        <Grid item md={4} sm={6} xs={12}>
                            <Grid sx={{ display: 'flex' }}  >
                                <Grid sx={sellStyle.spanIcons}><FaInfo /></Grid>
                                <FormControl size="small" fullWidth sx={{ display: 'flex' }}>
                                    <InputLabel id="demo-select-small">Discount Type *</InputLabel>
                                    <Select
                                        labelId="demo-select-small"
                                        id="demo-select-small"
                                        value={productAdd.productAddbrand}
                                        onChange={(e) => { setProductAdd({ ...productAdd, productAddbrand: e.target.value }) }} label="Brand"
                                        fullWidth
                                        label="Discount Type *"
                                    >
                                        <MenuItem value=""><em>Please Select</em></MenuItem>
                                        <MenuItem value={1}>yyy</MenuItem>
                                        <MenuItem value={2}>xxx</MenuItem>
                                    </Select>
                                </FormControl>
                                <Grid sx={sellStyle.spanIcons}><FcInfo /></Grid>
                            </Grid>
                        </Grid>
                        <Grid item md={4} sm={6} xs={12}></Grid>
                        <Grid item md={4} sm={6} xs={12}>
                            <FormGroup>
                                <span><FormControlLabel control={<Checkbox />} label="Subscribe?" />
                                    <Tooltip title="If subscribed this invoice will be automatically generated at regular intervals. You can disable this feature in Settings > Business Settings > Modules">
                                        <IconButton>
                                            <FcInfo />
                                        </IconButton>
                                    </Tooltip>
                                </span>
                            </FormGroup>
                        </Grid>

                    </Grid>
                </Box>
                <Box sx={sellStyle.subContainer}>
                    <Grid container spacing={3} sx={sellStyle.textInput}>
                        <Grid item md={4} sm={6} xs={12}>
                            <Grid sx={{ display: 'flex' }}  >
                                <Grid sx={sellStyle.spanIcons}><FaInfo /></Grid>
                                <FormControl size="small" fullWidth sx={{ display: 'flex' }}>
                                    <InputLabel id="demo-select-small">Brand</InputLabel>
                                    <Select
                                        labelId="demo-select-small"
                                        id="demo-select-small"
                                        value={productAdd.productAddbrand}
                                        onChange={(e) => { setProductAdd({ ...productAdd, productAddbrand: e.target.value }) }} label="Brand"
                                        fullWidth
                                    >
                                        <MenuItem value=""><em>Please Select</em></MenuItem>
                                        <MenuItem value={1}>yyy</MenuItem>
                                        <MenuItem value={2}>xxx</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                        </Grid>
                        <Grid item md={4} sm={6} xs={12}>
                            <Grid sx={{ display: 'flex' }}  >
                                <Grid sx={sellStyle.spanIcons}><FaInfo /></Grid>
                                <FormControl size="small" fullWidth >
                                <InputLabel htmlFor="component-outlined" >Product Name *</InputLabel>
                                <OutlinedInput
                                    id="component-outlined"
                                    value={productAdd.productAddname}
                                    onChange={(e) => { setProductAdd({ ...productAdd, productAddname: e.target.value }) }}
                                    label="Product Name *"
                                />
                            </FormControl>
                            </Grid>
                        </Grid>
                        <Grid item md={4} sm={6} xs={12}>
                            <Grid display="block">
                                
                                <Typography variant='subtitle1'><b>Discount Amount:</b> (-) 0.00</Typography>
                                <br />
                                
                                <Typography variant='subtitle1'><b>Order Tax:</b> (+) 0.00</Typography>
                               
                            </Grid>
                        </Grid>
                    </Grid>

                </Box>
                <Box sx={sellStyle.subContainer}>

                </Box>
                <Box sx={sellStyle.subContainer}>

                </Box>
                <Grid container sx={sellStyle.gridContainer}>
                            <Grid >
                                <Button sx={sellStyle.buttonAdd}>Save</Button>
                                <Button sx={sellStyle.buttonAdd}>Save And Print </Button>
                            </Grid>
                        </Grid>
            </form >
        </Box >
    );
}

export default Salescreate;