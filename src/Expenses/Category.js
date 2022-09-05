import React  from 'react';
import { Box, Paper, Button, Grid, Typography, Table, TableBody, TableCell, tableCellClasses, TableContainer, TableHead, TableRow } from '@mui/material';
import { styled } from '@mui/material/styles';
import { FaFileExcel, FaPrint, FaTrash, FaFilePdf } from 'react-icons/fa';
import $ from 'jquery';
import { expStyle } from './Expstyle';
import Expcategoryadd from './Categoryadd';
import Expcategoryedit from './Categoryedit';

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

    return (
        <Box>
            <Typography variant="h5" sx={expStyle.UnitHeaderText}>Expense Categories <Typography sx={expStyle.UnitSubHeaderText}>Manage your expense categories</Typography></Typography>
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
                                <TableRow>
                                    <StyledTableCell>Category Name</StyledTableCell>
                                    <StyledTableCell align="left">Category Code</StyledTableCell>
                                    <StyledTableCell align="left">Action</StyledTableCell>
                                </TableRow>
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
export default Expcategorylist;