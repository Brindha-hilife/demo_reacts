import * as React from 'react';
import {sellStyle} from '../Sellstyle';
import { styled } from '@mui/material/styles';
import {Box, Container, Grid, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, tableCellClasses, Tooltip, IconButton} from '@mui/material';
import { AiFillFileExcel } from "react-icons/ai";
import { FaFileCsv, FaPrint, FaFilePdf, FaEdit, FaEye, FaTrash } from "react-icons/fa";
import { FcInfo } from "react-icons/fc";
import $ from 'jquery';
import { Link } from 'react-router-dom';

function Supcriptionlist() {

    // ****** Data Table ****** //
    $(document).ready(function () {
        setTimeout(function () {
            $('#supscriptiontable').DataTable({
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
    function createData(date, subscriptionno, customername, location, interval, repetition, invoises, listgenerated,
        upcominginv) {
        return { date, subscriptionno, customername, location, interval, repetition,invoises, listgenerated,
            upcominginv };
    }

    const rows = [
        createData('sample','sample','sample','sample','sample','sample','sample','sample','sample','sample',),
    ];

    return (
        <Box>
            <Container sx={{ paddingTop: '10px' }}>
                <Grid display="flex">
                    <Typography variant="h5" >Subscriptions
                        <Tooltip title="If subscribed this invoice will be automatically generated at regular intervals. You can disable this feature in Settings > Business Settings > Modules">
                            <IconButton>
                                <FcInfo />
                            </IconButton>
                        </Tooltip>
                    </Typography>
                </Grid>
            </Container><br />
            <Container sx={sellStyle.container}>
                <Grid container spacing={10} sx={{ paddingTop: '30px' }}>
                    <Grid item md={6} sm={6} xs={6}>

                    </Grid>
                    <Grid item md={6} sm={6} xs={6} ></Grid>
                </Grid>
                <TableContainer component={Paper} style={{boxShadow:"none",}}>
                    <Grid container sx={sellStyle.gridContainer}>
                        <Grid >
                            <Button sx={sellStyle.buttonGrp}><FaFileCsv />&ensp;Export to CSV</Button>
                            <Button sx={sellStyle.buttonGrp}><AiFillFileExcel />&ensp;Export to Excel</Button>
                            <Button sx={sellStyle.buttonGrp}><FaPrint />&ensp;Print</Button>
                            <Button sx={sellStyle.buttonGrp}><FaFilePdf />&ensp;Export to PDF</Button>
                        </Grid>
                    </Grid>
                    <Table  aria-label="simple table" id="supscriptiontable" >
                        <TableHead align="left">
                            <TableRow>
                                <StyledTableCell>Date</StyledTableCell>
                                <StyledTableCell >Subscription No.</StyledTableCell>
                                <StyledTableCell >Customer name</StyledTableCell>
                                <StyledTableCell >Location</StyledTableCell>
                                <StyledTableCell >Subscription Interval</StyledTableCell>
                                <StyledTableCell >No. of Repetitions</StyledTableCell>
                                <StyledTableCell >Generated Invoices</StyledTableCell>
                                <StyledTableCell >List generated</StyledTableCell>
                                <StyledTableCell >Upcoming Invoice</StyledTableCell>
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
                                            <Button sx={sellStyle.buttonEdit}><Link to="/useredit" style={{textDecoration:'none', color:'#fff'}}><FaEdit />&ensp;Edit</Link></Button>
                                            <Button sx={sellStyle.buttonView}><FaEye />&ensp;View</Button>
                                            <Button sx={sellStyle.buttonDelete}><FaTrash />&ensp;Delete</Button>
                                        </Grid>
                                    </StyledTableCell>
                                </StyledTableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer><br/><br/>
            </Container>
        </Box>
    );
}

export default Supcriptionlist;