import React, { useState } from 'react';
import { stockStyle } from './Stockstyle';
import {
    Box, Container, Grid, FormControl, InputLabel, OutlinedInput, Select, MenuItem, Paper, TableCell, TextareaAutosize, 
    Typography, Button, Table, Tooltip, IconButton, TableContainer, TableHead, TableRow, TableBody, NativeSelect
} from '@mui/material';
import { FcInfo } from "react-icons/fc";
import { FaSearch } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { makeStyles, } from "@material-ui/core/styles";

function Stocktranscreate() {

    // ******** Text field ******** //
    const [stockTranAdd, setStockTranAdd] = useState({
        stockTranAddRefNo: "", stockTranAddStatus: "", stockTranAddLocFrm: "", stockTranAddLocTo: "",
        stockTranAddSearch: "", stockTranAddShipChrg: "", stockTranAddAddNote: "",
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
                        <Typography variant="h6" sx={{ color: '#7009ab' }}>Add Stock Transfer</Typography>&ensp;
                    </Grid><br />
                </Container><br />
                <Box sx={stockStyle.subContainer}>
                    <Grid container spacing={3} sx={{ padding: '10px' }}>
                        <Grid item md={4} sm={12} xs={12} >
                            <FormControl size="small" fullWidth >
                                <InputLabel htmlFor="component-outlined" ></InputLabel>
                                <OutlinedInput
                                    id="component-outlined"
                                    // value={stockTranAdd.stockTranAddname}
                                    // onChange={(e) => { setStockTranAdd({ ...stockTranAdd, stockTranAddname: e.target.value }) }}
                                    label="Sale Date *"
                                    type='date'
                                />
                            </FormControl>
                        </Grid>
                        <Grid item md={4} sm={12} xs={12} >
                            <FormControl size="small" fullWidth >
                                <InputLabel htmlFor="component-outlined" >Reference No</InputLabel>
                                <OutlinedInput
                                    id="component-outlined"
                                    value={stockTranAdd.stockTranAddRefNo}
                                    onChange={(e) => { setStockTranAdd({ ...stockTranAdd, StockTranAddRefNo: e.target.value }) }}
                                    label="Reference No"
                                    type='text'
                                />
                            </FormControl>
                        </Grid>
                        <Grid item md={4} sm={12} xs={12} >
                            <FormControl size="small" fullWidth>
                                <InputLabel htmlFor="uncontrolled-native">Status *
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
                                    value={stockTranAdd.stockTranAddStatus}
                                    onChange={(e) => { setStockTranAdd({ ...stockTranAdd, StockTranAddStatus: e.target.value }) }}
                                    label="Status *"
                                >
                                    <option value={0}></option>
                                    <option value={1}>Admin</option>
                                    <option value={2}>Cashier</option>
                                    <option value={3}>Admin - Franchiese</option>
                                </NativeSelect>
                            </FormControl>
                        </Grid>
                        <Grid item md={6} sm={12} xs={12}>
                            <FormControl size="small" fullWidth sx={{ display: 'flex' }}>
                                <InputLabel id="demo-select-small">Location (Form) *</InputLabel>
                                <Select
                                    labelId="demo-select-small"
                                    id="demo-select-small"
                                    value={stockTranAdd.stockTranAddLocFrm}
                                    onChange={(e) => { setStockTranAdd({ ...stockTranAdd, StockTranAddLocFrm: e.target.value }) }}
                                    label="Location (Form) *"
                                    fullWidth
                                >
                                    <MenuItem value={1}><em>Please Select</em></MenuItem>
                                    <MenuItem value={2}>xxx</MenuItem>
                                    <MenuItem value={3}>yyy</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item md={6} sm={12} xs={12}>
                            <FormControl size="small" fullWidth sx={{ display: 'flex' }}>
                                <InputLabel id="demo-select-small">Location (To) *</InputLabel>
                                <Select
                                    labelId="demo-select-small"
                                    id="demo-select-small"
                                    value={stockTranAdd.stockTranAddLocTo}
                                    onChange={(e) => { setStockTranAdd({ ...stockTranAdd, stockTranAddLocTo: e.target.value }) }}
                                    label="Location (Form) *"
                                    fullWidth
                                >
                                    <MenuItem value={1}><em>Please Select</em></MenuItem>
                                    <MenuItem value={2}>xxx</MenuItem>
                                    <MenuItem value={3}>yyy</MenuItem>
                                </Select>
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
                                        value={stockTranAdd.stockTranAddSearch}
                                        onChange={(e) => { setStockTranAdd({ ...stockTranAdd, StockTranAddSearch: e.target.value }) }}
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
                                    <TableCell sx={stockStyle.tableHead}>Discount</TableCell>
                                    <TableCell sx={stockStyle.tableHead}>Subtotal</TableCell>
                                    <TableCell sx={stockStyle.tableHead}><AiOutlineClose /></TableCell>
                                </TableRow>
                            </TableHead><br />
                            <TableBody>
                                <TableRow>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                    <TableCell align="right"><b>Items:</b> 0.00</TableCell>
                                    <TableCell align="right"><b>Total:</b> 0.00</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer><br />
                </Box><br />
                <Box sx={stockStyle.subContainer}>
                    <Grid container spacing={3}>
                        <Grid item md={4} sm={12} xs={12}>
                            <FormControl size="small" fullWidth sx={{ marginTop: '35px' }}>
                                <InputLabel htmlFor="component-outlined" >Shipping Charges</InputLabel>
                                <OutlinedInput
                                    id="component-outlined"
                                    value={stockTranAdd.stockTranAddShipChrg}
                                    onChange={(e) => { setStockTranAdd({ ...stockTranAdd, StockTranAddShipChrg: e.target.value }) }}
                                    label="Shipping Charges"
                                    type="text"
                                />
                            </FormControl>
                        </Grid>
                        <Grid item md={4} sm={12} xs={12}>
                            <InputLabel id="demo-select-small" sx={{ m: 1 }}>Additional Notes </InputLabel>
                            <FormControl size="small" fullWidth >
                                <TextareaAutosize aria-label="minimum height" minRows={3} style={{ border: '1px solid #b97df0' }}
                                    value={stockTranAdd.stockTranAddAddNote}
                                    onChange={(e) => { setStockTranAdd({ ...stockTranAdd, StockTranAddAddNote: e.target.value }) }} />
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

export default Stocktranscreate;