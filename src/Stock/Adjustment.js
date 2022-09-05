import React, { useState } from 'react';
import { stockStyle } from './Stockstyle';
import {
    Box, Container, Grid, FormControl, InputLabel, OutlinedInput, Select, MenuItem, Paper, TableCell, TextareaAutosize, InputAdornment,
    Typography, Button, Table, Tooltip, IconButton, TableContainer, TableHead, TableRow, TableBody, NativeSelect
} from '@mui/material';
import { FcInfo } from "react-icons/fc";
import { FaSearch, FaTrash } from "react-icons/fa";
import { makeStyles, } from "@material-ui/core/styles";

function Stockadjcreate() {

    // ******** Text field ******** //
    const [stockAdjAdd, setStockAdjAdd] = useState({
        stockAdjAddRefNo: "", stockAdjAddAdjType: "",
        stockAdjAddSearch: "", stockAdjAddShipChrg: "", stockAdjAddAddNote: "", stockAdjAddBusiLoc: "",
    });

    // Tooltip function
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
            fontSize: "17px !important",
            color: "#7009AB !important",
            backgroundColor: "white !important",
            boxShadow: '6px 6px 6px 9px #dedbdbae',
            padding: "20px",
        }
    }));
    const classes = useStyles();

    return (
        <Box>
            <form action=''>
                <Container sx={{ paddingTop: '10px', }}>
                    <Grid display="flex">
                        <Typography variant="h6" sx={{ color: '#7009ab' }}>Add Stock Adjustment</Typography>&ensp;
                    </Grid><br />
                </Container><br />
                <Box sx={stockStyle.subContainer}>
                    <Grid container spacing={3} sx={{ padding: '10px' }}>
                        <Grid item md={3} sm={6} xs={12}>
                            <FormControl size="small" fullWidth sx={{ display: 'flex' }}>
                                <InputLabel id="demo-select-small">Business Location *</InputLabel>
                                <Select
                                    labelId="demo-select-small"
                                    id="demo-select-small"
                                    value={stockAdjAdd.stockAdjAddBusiLoc}
                                    onChange={(e) => { setStockAdjAdd({ ...stockAdjAdd, stockAdjAddStaff: e.target.value }) }}
                                    label="Select Service Staff"
                                    fullWidth
                                >
                                    <MenuItem value={1}><em>Please Select</em></MenuItem>
                                    <MenuItem value={2}>xxx</MenuItem>
                                    <MenuItem value={3}>yyy</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item md={3} sm={6} xs={12} >
                            <FormControl size="small" fullWidth >
                                <InputLabel htmlFor="component-outlined" >Reference No</InputLabel>
                                <OutlinedInput
                                    id="component-outlined"
                                    value={stockAdjAdd.stockAdjAddRefNo}
                                    onChange={(e) => { setStockAdjAdd({ ...stockAdjAdd, stockAdjAddRefNo: e.target.value }) }}
                                    label="Reference No"
                                    type='text'
                                />
                            </FormControl>
                        </Grid>
                        <Grid item md={3} sm={6} xs={12} >
                            <FormControl size="small" fullWidth >
                                <InputLabel htmlFor="component-outlined" ></InputLabel>
                                <OutlinedInput
                                    id="component-outlined"
                                    // value={stockAdjAdd.stockAdjAddname}
                                    // onChange={(e) => { setStockAdjAdd({ ...stockAdjAdd, stockAdjAddname: e.target.value }) }}
                                    label="Sale Date *"
                                    type='date'
                                />
                            </FormControl>
                        </Grid>
                        <Grid item md={3} sm={6} xs={12} >
                            <FormControl size="small" fullWidth>
                                <InputLabel htmlFor="uncontrolled-native">Adjustment type *
                                    <Tooltip classes={{ arrow: classes.arrow, tooltip: classes.tooltip }} arrow title="Stock transfer will not be editable if status is completed " style={{ fontSize: '32px' }}>
                                        <IconButton>
                                            <FcInfo />
                                        </IconButton>
                                    </Tooltip></InputLabel>
                                <NativeSelect
                                    defaultValue={0}
                                    inputProps={{
                                        name: 'Role',
                                        id: 'uncontrolled-native',

                                    }}
                                    value={stockAdjAdd.stockAdjAddStatus}
                                    onChange={(e) => { setStockAdjAdd({ ...stockAdjAdd, stockAdjAddStatus: e.target.value }) }}
                                    label="Status *"
                                >
                                    <option value={0}></option>
                                    <option value={1}>Normal</option>
                                    <option value={2}>Abnormal</option>
                                </NativeSelect>
                            </FormControl>
                        </Grid>
                    </Grid>
                </Box>
                <Box sx={stockStyle.subContainer} style={{ minHeight: '300px', }}>
                    <Grid display="flex" >
                        <Typography variant="h6" >Search Products</Typography>
                    </Grid>
                    <Grid container style={{ justifyContent: "center", padding: '10px' }} sx={stockStyle.textInput}>
                        <Grid md={8} sx={12} xs={12}>
                            <Grid sx={{ display: 'flex' }}  >
                                <Grid sx={stockStyle.spanIcons}>
                                    < FaSearch />
                                </Grid>
                                <FormControl size="small" fullWidth >
                                    <InputLabel id="demo-select-small">Enter Product name / SKU / Scan bar code</InputLabel>
                                    <OutlinedInput
                                        id="component-outlined"
                                        value={stockAdjAdd.stockAdjAddSearch}
                                        onChange={(e) => { setStockAdjAdd({ ...stockAdjAdd, stockAdjAddSearch: e.target.value }) }}
                                        type="search"
                                        label="Enter Product name / SKU / Scan bar code"
                                    />
                                </FormControl>
                            </Grid>
                        </Grid>
                    </Grid>
                    <br />
                    <TableContainer component={Paper} sx={stockStyle.tablecontainer}>
                        <Table aria-label="customized table" id="">
                            <TableHead >
                                <TableRow >
                                    <TableCell sx={stockStyle.tableHead}>Product</TableCell>
                                    <TableCell sx={stockStyle.tableHead}>Quantity</TableCell>
                                    <TableCell sx={stockStyle.tableHead}>Unit Price</TableCell>
                                    <TableCell sx={stockStyle.tableHead}>Subtotal</TableCell>
                                    <TableCell sx={stockStyle.tableHead}><FaTrash /></TableCell>
                                </TableRow>
                            </TableHead><br />
                            <TableBody>
                                <TableRow>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                    <TableCell align="right"><b>Total Amount:</b> 0.00</TableCell>
                                    <TableCell align="right"></TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer><br />
                </Box><br />
                <Box sx={stockStyle.subContainer}>
                    <Grid container spacing={3}>
                        <Grid item md={4} sm={12} xs={12}>
                            <FormControl variant="outlined" size="small" fullWidth sx={{ marginTop: '35px' }}>
                                <InputLabel htmlFor="outlined-adornment-password">Total amount recovered</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-password"
                                    endAdornment={
                                        <Tooltip classes={{ arrow: classes.arrow, tooltip: classes.tooltip }} arrow title="Amountt recovered from insurance or selling of scraps or others.">
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    edge="end"
                                                    value={stockAdjAdd.stockAdjAddsku}
                                                    onChange={(e) => { setStockAdjAdd({ ...stockAdjAdd, stockAdjAddsku: e.target.value }) }}
                                                >
                                                    <FcInfo />
                                                </IconButton>
                                            </InputAdornment>
                                        </Tooltip>
                                    }
                                    label="Total amount recovered"
                                />
                            </FormControl>
                        </Grid>
                        <Grid item md={4} sm={12} xs={12}>
                            <InputLabel id="demo-select-small" sx={{ m: 1 }}>Reason </InputLabel>
                            <FormControl size="small" fullWidth >
                                <TextareaAutosize aria-label="minimum height" placeholder='Reason' minRows={3} style={{ border: '1px solid #b97df0' }}
                                    value={stockAdjAdd.stockAdjAddAddNote}
                                    onChange={(e) => { setStockAdjAdd({ ...stockAdjAdd, stockAdjAddAddNote: e.target.value }) }} />
                            </FormControl>

                        </Grid>
                        <Grid item md={4} sm={12} xs={12}></Grid>
                    </Grid>
                    <Grid >
                        <Box sx={{ float: 'right' }}>
                            <Button sx={stockStyle.buttonAdd} >Save  </Button>
                        </Box><br /><br />
                    </Grid>
                </Box>
            </form >
        </Box >
    );
}

export default Stockadjcreate;