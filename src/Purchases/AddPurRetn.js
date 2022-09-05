import React, { useState } from 'react';
import { purchaseStyle } from './Purchasestyle';
import { styled } from '@mui/material/styles';
import {
    Box, Grid, FormControl, InputLabel, OutlinedInput, Select, MenuItem, Paper, TableCell,
    Typography, Button, Table, TableContainer, TableHead, TableRow, TableBody, tableCellClasses,
} from '@mui/material';
import { FaSearch, FaUserAlt, FaTrash, } from "react-icons/fa";
// import {Link} from 'react-router-dom';



function Purchasereturncreate() {

    // ******** Text field ******** //
    const [purchaseRetAdd, setPurchaseRetAdd] = useState({
        purchaseRetAddSuppler: "", purchaseRetAddBusinessLoc: "", purchaseRetAddRefNo: "", purchaseRetAddDate: "", purchaseRetAddPurTax: "",
        purchaseRetAddSearch: "",
    });


    // Table Style
    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: theme.palette.common.white,
            color: theme.palette.common.black,
        },
        [`&.${tableCellClasses.body}`]: {
            fontSize: 14,
        },
    }));
    const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        '&:last-child td, &:last-child th': {
            border: 0,
        },
    }));

    return (
        <Box>
            <form action=''>
                <Typography variant="h6" sx={{ color: '#7009ab' }}>Add Purchase Return</Typography>
                <Box sx={purchaseStyle.container}>
                    <Grid container spacing={3} sx={purchaseStyle.textInput}>
                        <Grid item md={3} sm={6} xs={12}>
                            <Grid sx={{ display: 'flex' }}  >
                                <Grid sx={purchaseStyle.spanIcons}><FaUserAlt /></Grid>
                                <FormControl size="small" fullWidth sx={{ display: 'flex' }}>
                                    <InputLabel id="demo-select-small">Supplier *</InputLabel>
                                    <Select
                                        labelId="demo-select-small"
                                        id="demo-select-small"
                                        value={purchaseRetAdd.purchaseRetAddSupplier}
                                        onChange={(e) => { setPurchaseRetAdd({ ...purchaseRetAdd, PurchaseRetAddSupplier: e.target.value }) }}
                                        label="Customer"
                                        fullWidth
                                    >
                                        <MenuItem value={1}>Please Select</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                        </Grid>
                        <Grid item md={3} sm={6} xs={12}>
                            <FormControl size="small" fullWidth>
                                <InputLabel id="demo-select-small">Business Location *</InputLabel>
                                <Select
                                    labelId="demo-select-small"
                                    id="demo-select-small"
                                    value={purchaseRetAdd.purchaseRetAddBusinessLoc}
                                    onChange={(e) => { setPurchaseRetAdd({ ...purchaseRetAdd, PurchaseRetAddBusinessLoc: e.target.value }) }}
                                    label="Business Location *"
                                >
                                    <MenuItem value="">Please Select </MenuItem>
                                    <MenuItem value={1}>xxx</MenuItem>
                                    <MenuItem value={2}>yyyy</MenuItem>
                                    <MenuItem value={2}>zzz</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item md={3} sm={6} xs={12}>
                            <FormControl variant="outlined" size="small" fullWidth>
                                <InputLabel htmlFor="outlined-adornment-password">Reference No</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-password"
                                    label="SKU *"
                                />
                            </FormControl>
                        </Grid>
                        <Grid item md={3} sm={6} xs={12}>
                            <FormControl size="small" fullWidth>
                                <InputLabel htmlFor="component-outlined"></InputLabel>
                                <OutlinedInput
                                    id="component-outlined"
                                    label="Contact Id"
                                    value={purchaseRetAdd.purchaseRetAddRefNo}
                                    onChange={(event) => { setPurchaseRetAdd({ ...purchaseRetAdd, PurchaseRetAddRefNo: event.target.value }) }}
                                    type="date"
                                />
                            </FormControl>
                        </Grid>
                        <Grid item md={3} sm={6} xs={12}>
                            <FormControl size="small" fullWidth>
                                <Button
                                    component="label"
                                    sx={purchaseStyle.uploadBtn}
                                >
                                    Browse
                                    <input
                                        type="file"
                                        hidden
                                    />
                                </Button>
                                <Typography variant='body2' sx={{ opacity: '0.9', mt: 1 }}>Max File size: 5MB <br />Allowed File: .pdf, .csv, .zip, .doc, .docx, .jpeg, .jpg, .png</Typography>
                            </FormControl>
                        </Grid>
                    </Grid>
                </Box>
                <Box sx={purchaseStyle.container} style={{ minHeight: '300px', }}>
                    <Grid display="flex" >
                        <Typography variant="h6" >Search Products</Typography>
                    </Grid>
                    <Grid container style={{ justifyContent: "center", padding: '10px' }} sx={purchaseStyle.textInput} spacing={3}>
                        <Grid item md={8} sx={12} xs={12} >
                            <Grid sx={{ display: 'flex' }}  >
                                <Grid sx={purchaseStyle.spanIcons}>
                                    < FaSearch />
                                </Grid>
                                <FormControl size="small" fullWidth >
                                    <InputLabel id="demo-select-small">Enter Product name / SKU / Scan bar code</InputLabel>
                                    <OutlinedInput
                                        id="component-outlined"
                                        value={purchaseRetAdd.purchaseRetAddSearch}
                                        onChange={(e) => { setPurchaseRetAdd({ ...purchaseRetAdd, PurchaseRetAddSearch: e.target.value }) }}
                                        type="search"
                                        label="Enter Product name / SKU / Scan bar code"
                                    />
                                </FormControl>
                            </Grid>
                        </Grid>
                        <br /><br />
                        <br />
                        <Grid item md={12} sm={12} xs={12}>
                            <TableContainer component={Paper} sx={purchaseStyle.tablecontainer}>
                                <Table aria-label="customized table" id="">
                                    <TableHead >
                                        <StyledTableRow >
                                            <StyledTableCell align="center" sx={purchaseStyle.tableHead}>Product</StyledTableCell>
                                            <StyledTableCell align="center" sx={purchaseStyle.tableHead}>Quantity</StyledTableCell>
                                            <StyledTableCell align="center" sx={purchaseStyle.tableHead}>Unit Price</StyledTableCell>
                                            <StyledTableCell align="center" sx={purchaseStyle.tableHead}>Subtotal</StyledTableCell>
                                            <StyledTableCell align="center" sx={purchaseStyle.tableHead}><FaTrash /></StyledTableCell>
                                        </StyledTableRow>
                                    </TableHead><br />
                                    <TableBody>
                                        <StyledTableRow>
                                            <StyledTableCell align="center"></StyledTableCell>
                                            <StyledTableCell align="center"></StyledTableCell>
                                            <StyledTableCell align="center"></StyledTableCell>
                                            <StyledTableCell align="center"></StyledTableCell>
                                            <StyledTableCell align="center"><b>Total Amount:</b> 0.00  </StyledTableCell>

                                        </StyledTableRow>
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Grid>
                        <Grid item md={5} sm={12} xs={12}>
                            <FormControl size="small" fullWidth>
                                <InputLabel id="demo-select-small">Purchase Tax</InputLabel>
                                <Select
                                    labelId="demo-select-small"
                                    id="demo-select-small"
                                    value={purchaseRetAdd.purchaseRetAddPurTax}
                                    onChange={(e) => { setPurchaseRetAdd({ ...purchaseRetAdd, PurchaseRetAddPurTax: e.target.value }) }}
                                    label="Purchase Tax"
                                >
                                    <MenuItem value="">None</MenuItem>
                                    <MenuItem value={1}>GST</MenuItem>
                                    <MenuItem value={2}>CGST</MenuItem>
                                    <MenuItem value={2}>TAX</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item md={7} sm={12} xs={12}></Grid>
                    </Grid>
                </Box><br />
                <Box style={{ marginRight: '20px' }}>
                    <Button sx={purchaseStyle.buttonAdd}>Submit</Button><br />
                </Box>
            </form>
        </Box>
    );
}
export default Purchasereturncreate;