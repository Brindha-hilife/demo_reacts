import React, { useEffect } from 'react';
import { styled } from '@mui/material/styles';
import { Box, Button, Grid, Typography, Table, TableBody, TableCell, tableCellClasses, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { FaTrash, FaFileExcel, FaPrint, FaFilePdf, FaEdit, FaEye, } from 'react-icons/fa';
// import Sidebar from '../../../header/Sidebar';
import $ from 'jquery';
import { Link } from 'react-router-dom';
import { sellStyle } from '../Sellstyle';
import Discreate from './Create';


function Subscriptionlist() {

    useEffect(() => {
        document.body.classList.add('unitbody');
    });

    //  JQUERY
    $(document).ready(function () {
        setTimeout(function () {
            $('#subscriptiontable').DataTable({
                language: { search: '', searchPlaceholder: "Search..." },
                lengthMenu: [25, 50, 100, 200, 500, 1000],
            });
        }, 1000);
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

    // ****** Table Data ****** //
    function createData(date, subscriptionno, customername, location, interval, repetitions, invoises, listgenerated,
        upcominginv) {
        return {
            date, subscriptionno, customername, location, interval, repetitions, invoises, listgenerated,
            upcominginv
        };
    }
    const rows = [
        createData('sample', 'sample', 'sample', 'sample', 'sample', 'sample', 'sample', 'sample', 'sample', 'sample',),
    ];

    
    return (
        <Box>
            <Typography variant="h5" sx={sellStyle.UnitHeaderText}>Discount</Typography>

            {/* Table */}
            <Box sx={sellStyle.container}>
            <Grid container spacing={2}>
              <Grid item xs={8}>
                <Typography  sx={sellStyle.boxheadertxt}>All your discounts</Typography>
              </Grid>
              <Grid item xs={4}>
                <Discreate></Discreate>
              </Grid>
            </Grid>
                <Grid container sx={sellStyle.gridContainer}>
                    <Grid >
                        <Button sx={sellStyle.exportBtnText}><FaFileExcel />&ensp;Export to CSV</Button>
                        <Button sx={sellStyle.exportBtnText}><FaFileExcel />&ensp;Export to Excel</Button>
                        <Button sx={sellStyle.exportBtnText}><FaPrint />&ensp;Print</Button>
                        <Button sx={sellStyle.exportBtnText}><FaFilePdf />&ensp;Export to PDF</Button>
                    </Grid>
                </Grid>
                <Box>
                    <TableContainer component={Paper} sx={sellStyle.tablecontainer}>
                        <Table sx={{ minWidth: 700 }} aria-label="customized table" id="subscriptiontable">
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell>Date</StyledTableCell>
                                    <StyledTableCell align="left">Starts At</StyledTableCell>
                                    <StyledTableCell align="left">Ends At</StyledTableCell>
                                    <StyledTableCell align="left">Discount Amount</StyledTableCell>
                                    <StyledTableCell align="left">Priority</StyledTableCell>
                                    <StyledTableCell align="left">Brand</StyledTableCell>
                                    <StyledTableCell align="left">General Invoices</StyledTableCell>
                                    <StyledTableCell align="left">Category</StyledTableCell>
                                    <StyledTableCell align="left">Location</StyledTableCell>
                                    <StyledTableCell align="left">Action</StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody align="left">
                                {rows.map((row) => (
                                    <StyledTableRow
                                        key={row.name}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <StyledTableCell component="th" scope="row">
                                            {row.date}
                                        </StyledTableCell>
                                        <StyledTableCell >{row.subscriptionno}</StyledTableCell>
                                        <StyledTableCell >{row.customername}</StyledTableCell>
                                        <StyledTableCell >{row.location}</StyledTableCell>
                                        <StyledTableCell >{row.interval}</StyledTableCell>
                                        <StyledTableCell >{row.repetitions}</StyledTableCell>
                                        <StyledTableCell >{row.invoises}</StyledTableCell>
                                        <StyledTableCell >{row.listgenerated}</StyledTableCell>
                                        <StyledTableCell >{row.upcominginv}</StyledTableCell>
                                        <StyledTableCell >
                                            <Grid>
                                                <Button sx={sellStyle.buttonEdit}><Link to="/useredit" style={{ textDecoration: 'none', color: '#fff' }}><FaEdit />&ensp;Edit</Link></Button>
                                                <Button sx={sellStyle.buttonView}><FaEye />&ensp;View</Button>
                                                <Button sx={sellStyle.buttonDelete}><FaTrash />&ensp;Delete</Button>
                                            </Grid>
                                        </StyledTableCell>
                                    </StyledTableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
            </Box>
        </Box>
    );
}

export default Subscriptionlist;
