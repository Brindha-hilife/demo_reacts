import * as React from 'react';
import { commonstyle } from './Commonstyle';
import { styled } from '@mui/material/styles';
import {Box, Container, Grid, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, tableCellClasses} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import {  FaEdit, FaTrash } from "react-icons/fa";
import $ from 'jquery';
import { Link } from 'react-router-dom';

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
    function createData(roles, action) {
        return {roles, action };
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
            <Container sx={commonstyle.container}>
                <Grid container spacing={10} sx={{ paddingTop: '30px' }}>
                    <Grid item md={6} sm={6} xs={6}>
                        <Typography variant="h6" >All roles</Typography>
                    </Grid>
                    <Grid item md={6} sm={6} xs={6} >
                        <Button sx={commonstyle.button_add}><Link to="roleadd" style={commonstyle.button_linkadd}><AddIcon /> Add</Link></Button>
                    </Grid>
                </Grid>
                <TableContainer component={Paper} style={{boxShadow:"none",padding: '20px'}} >
                    <Table  aria-label="simple table" id="rolestable">
                        <TableHead align="left" >                       
                            <TableRow>
                                <StyledTableCell  sx={{width: '600px !important'}} >Roles</StyledTableCell>                                
                                <StyledTableCell   >Action</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody align="left">
                            {rows.map((row) => (
                                <StyledTableRow 
                                    key={row.name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <StyledTableCell component="th" scope="row"  >
                                        {row.roles}
                                    </StyledTableCell>                              
                                    <StyledTableCell >
                                        <Grid>
                                            <Button sx={commonstyle.button_edit}><Link to="roleedit" style={commonstyle.button_linkadd}><FaEdit />&ensp;Edit</Link></Button>
                                            <Button sx={commonstyle.button_delete}><FaTrash />&ensp;Delete</Button>
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

export default Roles;