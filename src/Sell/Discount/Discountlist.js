import * as React from 'react';
import {userStyle} from '../Userstyle';
import { styled } from '@mui/material/styles';
import {Box, Container, Grid, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, tableCellClasses} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { AiFillFileExcel } from "react-icons/ai";
import { FaFileCsv, FaPrint, FaFilePdf, FaEdit, FaEye, FaTrash } from "react-icons/fa";
import $ from 'jquery';
import { Link } from 'react-router-dom';

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
            <Container sx={userStyle.container}>
                <Grid container spacing={10} sx={{ paddingTop: '30px' }}>
                    <Grid item md={6} sm={6} xs={6}>
                        <Typography variant="h6" >All your discounts</Typography>
                    </Grid>
                    <Grid item md={6} sm={6} xs={6} >
                        <Button sx={userStyle.button_add} ><Link to="useradd"  style={{textDecoration:'none', color: '#a5becc'}}><AddIcon /> Add</Link></Button>
                    </Grid>
                </Grid>
                <TableContainer component={Paper} style={{boxShadow:"none",}}>
                    <Grid container sx={userStyle.grid_container}>
                        <Grid >
                            <Button sx={userStyle.button_grp}><FaFileCsv />&ensp;Export to CSV</Button>
                            <Button sx={userStyle.button_grp}><AiFillFileExcel />&ensp;Export to Excel</Button>
                            <Button sx={userStyle.button_grp}><FaPrint />&ensp;Print</Button>
                            <Button sx={userStyle.button_grp}><FaFilePdf />&ensp;Export to PDF</Button>
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
                                            <Button sx={userStyle.button_edit}><Link to="/useredit" style={{textDecoration:'none', color:'#fff'}}><FaEdit />&ensp;Edit</Link></Button>
                                            <Button sx={userStyle.button_view}><FaEye />&ensp;View</Button>
                                            <Button sx={userStyle.button_delete}><FaTrash />&ensp;Delete</Button>
                                        </Grid>
                                    </StyledTableCell>
                                </StyledTableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer><br/><br />
            </Container>
        </Box>
    );
}

export default Users;