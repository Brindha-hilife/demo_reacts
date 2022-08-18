import * as React from 'react';
import './user.css';
import {Box, Container, Grid, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { AiFillFileExcel } from "react-icons/ai";
import { FaFileCsv, FaPrint, FaFilePdf, FaEdit, FaEye, FaTrash } from "react-icons/fa";
import $ from 'jquery';
// import Useradd from './Useradd';
// import Useredit form './Useredit';
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

    // ****** Table Data ****** //
    function createData(name, calories, fat, carbs, protein) {
        return { name, calories, fat, carbs, protein };
    }

    const rows = [
        createData('sample', 'hilife', 'admin', 'admin@gmail.com'),
    ];

    return (
        <Box>
            <Container sx={{ paddingTop: '10px' }}>

                <Grid display="flex">
                    <Typography variant="h5" >Users</Typography>
                    <Typography variant='body2' sx={{ marginLeft: '10px', marginTop: '10px' }}>Manage users</Typography>
                </Grid>
            </Container><br />
            <Container sx={{
                bgcolor: '#fff', height: '400px', borderTop: '5px solid #7009ab;', borderLeft: '0px',
                borderRight: '0px', borderBottom: '0px', borderRadius: '10px', boxShadow: '6px 6px 6px 9px #dedbdbae'
            }}>
                <Grid container spacing={10} sx={{ paddingTop: '30px' }}>
                    <Grid item md={6} sm={6} xs={6}>
                        <Typography variant="h6" >All users</Typography>
                    </Grid>
                    <Grid item md={6} sm={6} xs={6} >
                        <Button className="users_addbtn" ><Link to="" className='user_linkbtn'><AddIcon /> Add</Link></Button>
                    </Grid>
                </Grid>
                <Grid container sx={{ marginTop: '20px', marginBottom: '20px', justifyContent: 'center' }}>
                    <Grid >
                        <Button className='users_btngrp'><FaFileCsv />&ensp;Export to CSV</Button>
                        <Button className='users_btngrp'><AiFillFileExcel />&ensp;Export to Excel</Button>
                        <Button className='users_btngrp'><FaPrint />&ensp;Print</Button>
                        <Button className='users_btngrp'><FaFilePdf />&ensp;Export to PDF</Button>
                    </Grid>

                </Grid>
                <TableContainer component={Paper}  >
                    <Table sx={{ padding: '20px' }} aria-label="simple table" id="usertable">
                        <TableHead align="left">
                            <TableRow>
                                <TableCell>Username</TableCell>
                                <TableCell >Name</TableCell>
                                <TableCell >Role</TableCell>
                                <TableCell >Email</TableCell>
                                <TableCell >Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody align="left">
                            {rows.map((row) => (
                                <TableRow
                                    key={row.name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {row.name}
                                    </TableCell>
                                    <TableCell >{row.calories}</TableCell>
                                    <TableCell >{row.fat}</TableCell>
                                    <TableCell >{row.carbs}</TableCell>
                                    <TableCell >
                                        <Grid>
                                            <Button className='users_tbtnedit'><Link to="/useredit" className='user_linkbtn'><FaEdit />&ensp;Edit</Link></Button>
                                            <Button className='users_tbtnview'><FaEye />&ensp;View</Button>
                                            <Button className='users_tbtndelt'><FaTrash />&ensp;Delete</Button>
                                        </Grid>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Container>
        </Box>
    );
}

export default Users;