import * as React from 'react';
import './user.css';
import {Box, Container, Grid, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import {  FaEdit, FaTrash } from "react-icons/fa";
import $ from 'jquery';

function Roles() {

    // ****** Data Table ****** //
    $(document).ready(function () {
        setTimeout(function () {
            $('#rolestable').DataTable({
                language: { search: '', searchPlaceholder: "Search..." },
                lengthMenu: [25, 50, 100, 200, 500, 1000],
            });
        }, 1000);
    });

    // ****** Table Data ****** //
    function createData(roles) {
        return {roles };
    }

    const rows = [
        createData('sample'),
    ];

    return (
        <Box>
            <Container sx={{ paddingTop: '10px' }}>
                <Grid display="flex">
                    <Typography variant="h5" >Roles</Typography>
                    <Typography variant='body2' sx={{ marginLeft: '10px', marginTop: '10px' }}>Manage roles</Typography>
                </Grid>
            </Container><br />
            <Container sx={{
                bgcolor: '#fff', height: '400px', borderTop: '5px solid #7009ab;', borderLeft: '0px',
                borderRight: '0px', borderBottom: '0px', borderRadius: '10px', boxShadow: '6px 6px 6px 9px #dedbdbae'
            }}>
                <Grid container spacing={10} sx={{ paddingTop: '30px' }}>
                    <Grid item md={6} sm={6} xs={6}>
                        <Typography variant="h6" >All roles</Typography>
                    </Grid>
                    <Grid item md={6} sm={6} xs={6} >
                        <Button className="users_addbtn"><AddIcon /> Add</Button>
                    </Grid>
                    <Grid item md={6} sm={6} xs={6} >
                        
                    </Grid>
                </Grid>
                
                <TableContainer component={Paper}  >
                    <Table sx={{ padding: '20px' }} aria-label="simple table" id="rolestable">
                        <TableHead align="left" >                       
                            <TableRow>
                                <TableCell  sx={{width: '600px !important'}} >Roles</TableCell>                                
                                <TableCell   >Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody align="left">
                            {rows.map((row) => (
                                <TableRow 
                                    key={row.name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row"  >
                                        {row.roles}
                                    </TableCell>                              
                                    <TableCell >
                                        <Grid>
                                            <Button className='users_tbtnedit'><FaEdit />&ensp;Edit</Button>
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

export default Roles;