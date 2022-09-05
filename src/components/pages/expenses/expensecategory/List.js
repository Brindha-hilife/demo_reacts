import React  from 'react';
import { Box, Paper, Button, Grid, Typography, Table, TableBody, TableContainer, TableHead, } from '@mui/material';
import { FaFileExcel, FaPrint, FaTrash, FaFilePdf } from 'react-icons/fa';
import $ from 'jquery';
import { expStyle } from '../Expensestyle';
import Sidebar from '../../../header/Sidebar';
import Footer from '../../../footer/Footer';
import { StyledTableRow, StyledTableCell} from '../../Table';
import Expcategoryadd from './Create';
import Expcategoryedit from './Edit';

function Expcategorylist() {

//  JQUERY
$(document).ready(function () {
    setTimeout(function () {
        $('#example').DataTable({
            language: { search: '', searchPlaceholder: "Search..." },
            lengthMenu: [25, 50, 100, 200, 500, 1000],
        });
    }, 1000);
});

return (
        <Box>
            <Typography sx={expStyle.UnitHeaderText}>Expense Categories <Typography sx={expStyle.UnitSubHeaderText}>Manage your expense categories</Typography></Typography>
            <Box sx={expStyle.container}>
                <Grid container spacing={2}>
                    <Grid item xs={8}>
                        <Typography sx={expStyle.boxheadertxt}>All your expense categories</Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <Expcategoryadd />
                    </Grid>
                </Grid>
                <Grid container sx={expStyle.gridContainer}>
                    <Grid >
                        <Button sx={expStyle.exportBtnText}><FaFileExcel />&ensp;Export to CSV</Button>
                        <Button sx={expStyle.exportBtnText}><FaFileExcel />&ensp;Export to Excel</Button>
                        <Button sx={expStyle.exportBtnText}><FaPrint />&ensp;Print</Button>
                        <Button sx={expStyle.exportBtnText}><FaFilePdf />&ensp;Export to PDF</Button>
                    </Grid>
                </Grid>
                <Box>
                    <TableContainer component={Paper} sx={expStyle.tablecontainer}>
                        <Table sx={{ minWidth: 700 }} aria-label="customized table" id="example">
                            <TableHead>
                                <StyledTableRow>
                                    <StyledTableCell>Category Name</StyledTableCell>
                                    <StyledTableCell align="left">Category Code</StyledTableCell>
                                    <StyledTableCell align="left">Action</StyledTableCell>
                                </StyledTableRow>
                            </TableHead>
                            <TableBody>
                                <StyledTableRow>
                                    <StyledTableCell component="th" scope="row">test </StyledTableCell>
                                    <StyledTableCell align="left">test</StyledTableCell>
                                    <StyledTableCell align="left">
                                        <Expcategoryedit />
                                        <Button variant="contained" color="error" size="small" sx={{ textTransform: 'Capitalize' }}><FaTrash></FaTrash>&ensp;Delete</Button>
                                    </StyledTableCell>
                                </StyledTableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
            </Box>
        </Box>
    );
}

const Expensecategorylist = ()=>{
    return(
      <>
         <Box sx={{display:'flex',}} >
            <Sidebar />
            <Box sx={{ width: '100%', overflowX:'hidden' }}>
                <Box component="main" sx={{ padding: '30px',}}><br /><br />
                    <Expcategorylist /><br /><br />
                    <Footer />
                </Box>
            </Box>
         </Box>
      </>
    );
}
export default Expensecategorylist;