import * as React from 'react';
import {sellStyle} from '../Sellstyle';
import { styled } from '@mui/material/styles';
import {Box, Container, Grid, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, tableCellClasses,
    } from '@mui/material';
import { AiFillFileExcel } from "react-icons/ai";
import { FaFileCsv, FaPrint, FaFilePdf, FaEdit, FaEye, FaTrash } from "react-icons/fa";
import $ from 'jquery';
import { Link } from 'react-router-dom';
import Discountmod from './Create';

function Users() {

    // ****** Data Table ****** //
    $(document).ready(function () {
        setTimeout(function () {
            $('#usertable').DataTable({
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
    function createData(username, name, role, email, action) {
        return { username, name, role, email, action };
    }

    const rows = [
        createData('sample', 'hilife', 'admin', 'admin@gmail.com'),
    ];

    return (
        <Box>
            <Container sx={{ paddingTop: '10px' }}>
                <Grid display="flex">
                    <Typography variant="h5" >Discount</Typography>
                </Grid>
            </Container><br />
            <Box sx={sellStyle.container}>
                <Grid container spacing={10} sx={{ paddingTop: '30px' }}>
                    <Grid item md={6} sm={6} xs={6}>
                        
                    </Grid>
                    <Grid item md={6} sm={6} xs={6} ><Discountmod /></Grid>    
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
                    <Table  aria-label="simple table" id="usertable" 
                     
                    >
                        <TableHead align="left">
                            <TableRow>
                                <StyledTableCell>Username</StyledTableCell>
                                <StyledTableCell >Name</StyledTableCell>
                                <StyledTableCell >Role</StyledTableCell>
                                <StyledTableCell >Email</StyledTableCell>
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
                                     Styled   {row.username}
                                    </StyledTableCell>
                                    <StyledTableCell >{row.name}</StyledTableCell>
                                    <StyledTableCell >{row.role}</StyledTableCell>
                                    <StyledTableCell >{row.email}</StyledTableCell>
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
                </TableContainer><br/><br />
            </Box>
        </Box>
    );
}

export default Users;