import React from 'react';
import { Box, Table, TableBody, TableContainer, TableHead, Paper, Button, Grid, Typography, } from '@mui/material';
import { FaFileCsv, FaPrint, FaFilePdf, } from 'react-icons/fa';
import { AiFillFileExcel } from 'react-icons/ai';
import $ from 'jquery';
import { dashboardstyle } from './dashboardstyle';
import { StyledTableRow, StyledTableCell } from '../pages/Table';

//  JQUERY 
$(document).ready(function () {
    setTimeout(function () {
        $('#dashstocktable').DataTable({
            "dom": 'rtip'
        });
    });
});

$(document).ready(function () {
    setTimeout(function () {
        $('#dashrecenttable').DataTable({
            "dom": 'rtip'
        });
    });
});


function Dashboardtable() {
    return (
        <Box>
            <Grid container spacing={{ xs: 2, sm: 2, md: 3, lg: 3 }}>
                {/* Stock table */}
                <Grid item md={7} sm={12} xs={12}>
                    <Box sx={dashboardstyle.containerTable}>
                        <Grid container spacing={2}>
                            <Grid item xs={8}>
                                <Typography sx={dashboardstyle.importheadtext}>Stock Alert</Typography>
                            </Grid>
                            <Grid item xs={4}></Grid>
                        </Grid>
                        <hr />
                        <Grid container sx={{ padding: '20px' }}>
                            <Grid >
                                <Button sx={dashboardstyle.buttongrp}><FaFileCsv />&ensp;Export to CSV</Button>
                                <Button sx={dashboardstyle.buttongrp}><AiFillFileExcel />&ensp;Export to Excel</Button>
                                <Button sx={dashboardstyle.buttongrp}><FaPrint />&ensp;Print</Button>
                                <Button sx={dashboardstyle.buttongrp}><FaFilePdf />&ensp;Export to PDF</Button>
                            </Grid>
                        </Grid>
                        <Box>
                            <TableContainer component={Paper} sx={{ padding: '20px' }}>
                                <Table sx={{ minWidth: 700, }} aria-label="customized table" id="dashstocktable">
                                    <TableHead>
                                        <StyledTableRow>
                                            <StyledTableCell>Code</StyledTableCell>
                                            <StyledTableCell >Product</StyledTableCell>
                                            <StyledTableCell >Warehouse</StyledTableCell>
                                            <StyledTableCell >Quantity</StyledTableCell>
                                        </StyledTableRow>
                                    </TableHead>
                                    <TableBody align="left"></TableBody>
                                </Table>
                            </TableContainer>
                        </Box>
                    </Box>
                </Grid>

                {/* Top selling products table */}
                <Grid item md={5} sm={12} xs={12}>
                    <Box sx={dashboardstyle.containerTable}>
                        <Grid container spacing={2}>
                            <Grid item xs={8}>
                                <Typography sx={dashboardstyle.importheadtext}>Top Selling Products()</Typography>
                            </Grid>
                            <Grid item xs={4}></Grid>
                        </Grid>
                        <hr />
                        <Box>
                            <TableContainer component={Paper}>
                                <Table sx={{ minWidth: 700, }} aria-label="customized table">
                                    <TableHead>
                                        <StyledTableRow>
                                            <StyledTableCell>Product</StyledTableCell>
                                            <StyledTableCell>Quantity</StyledTableCell>
                                            <StyledTableCell>Grand Total</StyledTableCell>
                                        </StyledTableRow>
                                    </TableHead>
                                    <TableBody align="left"></TableBody>
                                </Table>
                            </TableContainer>
                        </Box>
                    </Box>
                </Grid>
            </Grid><br/><br/>
           
            <Grid container spacing={{ xs: 2, sm: 2, md: 3, lg: 3 }}>
                 {/* Recent sales table */}
                <Grid item md={7} sm={12} xs={12}>
                    <Box sx={dashboardstyle.containerTable}>
                        <Grid container spacing={2}>
                            <Grid item xs={8}>
                                <Typography sx={dashboardstyle.importheadtext}>Recent Sales</Typography>
                            </Grid>
                            <Grid item xs={4}></Grid>
                        </Grid>
                        <hr />
                        <Grid container sx={{ padding: '20px' }}>
                            <Grid >
                                <Button sx={dashboardstyle.buttongrp}><FaFileCsv />&ensp;Export to CSV</Button>
                                <Button sx={dashboardstyle.buttongrp}><AiFillFileExcel />&ensp;Export to Excel</Button>
                                <Button sx={dashboardstyle.buttongrp}><FaPrint />&ensp;Print</Button>
                                <Button sx={dashboardstyle.buttongrp}><FaFilePdf />&ensp;Export to PDF</Button>
                            </Grid>
                        </Grid>
                        <Box>
                            <TableContainer component={Paper} sx={{ padding: '20px' }}>
                                <Table sx={{ minWidth: 700, }} aria-label="customized table" id="dashrecenttable">
                                    <TableHead>
                                        <StyledTableRow>
                                            <StyledTableCell >Reference</StyledTableCell>
                                            <StyledTableCell >Customer</StyledTableCell>
                                            <StyledTableCell >Status</StyledTableCell>
                                            <StyledTableCell >Grand Total</StyledTableCell>
                                            <StyledTableCell >Paid</StyledTableCell>
                                            <StyledTableCell >Due</StyledTableCell>
                                            <StyledTableCell >Payment Status</StyledTableCell>
                                        </StyledTableRow>
                                    </TableHead>
                                    <TableBody align="left"></TableBody>
                                </Table>
                            </TableContainer>
                        </Box>
                    </Box>
                </Grid>
                
                {/* Top 5 customers */}
                <Grid item md={5} sm={12} xs={12}>
                    <Box sx={dashboardstyle.containerTable}>
                        <Grid container spacing={2}>
                            <Grid item xs={8}>
                                <Typography sx={dashboardstyle.importheadtext}>Top 5 Customers()</Typography>
                            </Grid>
                            <Grid item xs={4}></Grid>
                        </Grid>
                        <hr />
                        <Box></Box>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Dashboardtable;