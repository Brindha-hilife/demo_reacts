import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import { userStyle } from '../Userstyle';
import {Box, Container, Grid, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button,tableCellClasses } from '@mui/material';
import { AiFillFileExcel } from "react-icons/ai";
import { FaFileCsv, FaPrint, FaFilePdf, FaEye, FaTrash } from "react-icons/fa";
import Salesadd from './Salesadd';
import Salesedit from './Salesedit';
import $ from 'jquery';



function Salescomn() {

    // ****** Data Table ****** //
    $(document).ready(function () {
        setTimeout(function () {
            $('#salestable').DataTable({
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
    function createData(name, email, contact_number, address, sales_comm, action) {
        return { name, email, contact_number, address, sales_comm, action };
    }

    const rows = [
        createData('sample', 'admin@gmail.com', '2453245', 'sample', 52),
    ];

    return (
        <Box>
            <Container sx={{ paddingTop: '10px' }}>
                <Grid display="flex">
                    <Typography variant="h5" >Sales Commission Agents</Typography>
                </Grid>
            </Container><br />
            <Container sx={userStyle.container}>
                <Grid container spacing={10} sx={{ paddingTop: '30px' }}>
                    <Grid item md={6} sm={6} xs={6} ></Grid>
                    <Grid item md={6} sm={6} xs={6} ><Salesadd /></Grid>
                </Grid>
                <TableContainer component={Paper} style={{boxShadow:"none",padding: '20px'}} >
                    <Grid container sx={userStyle.grid_container}>
                        <Grid >
                            <Button sx={userStyle.button_grp}><FaFileCsv />&ensp;Export to CSV</Button>
                            <Button sx={userStyle.button_grp}><AiFillFileExcel />&ensp;Export to Excel</Button>
                            <Button sx={userStyle.button_grp}><FaPrint />&ensp;Print</Button>
                            <Button sx={userStyle.button_grp}><FaFilePdf />&ensp;Export to PDF</Button>
                        </Grid>
                    </Grid>
                    <Table sx={{ padding: '20px' }} aria-label="simple table" id="salestable">
                        <TableHead align="left">
                            <TableRow>
                                <StyledTableCell>Name</StyledTableCell>
                                <StyledTableCell >Email</StyledTableCell>
                                <StyledTableCell >Contact Number</StyledTableCell>
                                <StyledTableCell >Address</StyledTableCell>
                                <StyledTableCell >Sales Commission Percentage&ensp;(%)</StyledTableCell>
                                <StyledTableCell >Action</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody align="left">
                            {rows.map((row) => (
                                <StyledTableRow
                                    key={row.name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <StyledTableCell component="th" scope="row">
                                        {row.name}
                                    </StyledTableCell>
                                    <StyledTableCell >{row.email}</StyledTableCell>
                                    <StyledTableCell >{row.contact_number}</StyledTableCell>
                                    <StyledTableCell >{row.address}</StyledTableCell>
                                    <StyledTableCell>{row.sales_comm}</StyledTableCell>
                                    <StyledTableCell >
                                        <Grid>
                                            <Salesedit />
                                            <Button sx={userStyle.button_view}><FaEye />&ensp;View</Button>
                                            <Button sx={userStyle.button_delete}><FaTrash />&ensp;Delete</Button>
                                        </Grid>
                                    </StyledTableCell>
                                </StyledTableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Container>
        </Box>
    );
}

export default Salescomn;