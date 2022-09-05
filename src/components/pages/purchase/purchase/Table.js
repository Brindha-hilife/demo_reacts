import React from 'react';
import { Button, Grid ,Typography,Box,Table,TableFooter,TableBody,TableContainer,TableHead,TableRow,Paper } from '@mui/material';
import { FaFileCsv, FaPrint, FaFilePdf, FaEdit, FaTrash } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { AiFillFileExcel } from "react-icons/ai";
import $ from 'jquery';
import { userStyle } from '../../PageStyle';
import { StyledTableRow, StyledTableCell} from '../../Table';

//  JQUERY 
$(document).ready(function () {
    setTimeout(function(){
    $('#example').DataTable({
      language: {search: '', searchPlaceholder: "Search..."},
      lengthMenu: [25, 50, 100, 200, 500, 1000],
      // overflow-X: true
    });
     } ,1000);
});


const Purchasetable = () => {
  return (
    <>
      <Box>
      { /* Table header  */ }
        <Grid container>
            <Grid item xs={8}>
                <Typography  sx={userStyle.importheadtext}>All your Purchases</Typography>
            </Grid>
            <Grid item xs={4} sx={{textAlign:'right !important'}}>
                <Link to="/purchase/purchasecreate" style={{textDecoration:'none', color: 'white'}}><Button sx={userStyle.button_add}>ADD</Button></Link>
            </Grid>
        </Grid>
        { /* Table export btn */ }
        <Grid container sx={userStyle.gridcontainer}>
            <Button sx={userStyle.buttongrp}><FaFileCsv />&ensp;Export to CSV</Button>
            <Button sx={userStyle.buttongrp}><AiFillFileExcel />&ensp;Export to Excel</Button>
            <Button sx={userStyle.buttongrp}><FaPrint />&ensp;Print</Button>
            <Button sx={userStyle.buttongrp}><FaFilePdf />&ensp;Export to PDF</Button>
        </Grid><br />
        { /* Table start */ }
        <Box>
            <TableContainer component={Paper} >
                <Table aria-label="customized table" id="example" >
                    <TableHead>
                        <StyledTableRow>
                            <StyledTableCell> Action </StyledTableCell>
                            <StyledTableCell> Date</StyledTableCell>
                            <StyledTableCell>Reference No</StyledTableCell>
                            <StyledTableCell> Location </StyledTableCell>
                            <StyledTableCell> Supplier </StyledTableCell>
                            <StyledTableCell> Purchase Status</StyledTableCell>
                            <StyledTableCell> Payment status</StyledTableCell>
                            <StyledTableCell> Grand Total</StyledTableCell>
                            <StyledTableCell> Payment Due</StyledTableCell>
                            <StyledTableCell> Added By</StyledTableCell>
                        </StyledTableRow>
                    </TableHead>
                    <TableBody>
                        <StyledTableRow>
                            <StyledTableCell>
                                <Grid>
                                <Link to="/purchase/purchaseedit" style={{textDecoration:'none', color:'white','&:hover':{color:'red', backgroundColor:'yellow'}}}><Button sx={userStyle.buttonedit}><FaEdit />&ensp;Edit</Button></Link>
                                    <Button sx={userStyle.buttondelete}><FaTrash />&ensp;Delete</Button>
                                </Grid>
                            </StyledTableCell>
                            <StyledTableCell>29/08/2022</StyledTableCell>
                            <StyledTableCell>REF0001</StyledTableCell>
                            <StyledTableCell>XYZ</StyledTableCell>
                            <StyledTableCell>TEST</StyledTableCell>
                            <StyledTableCell>Active</StyledTableCell>
                            <StyledTableCell>Received</StyledTableCell>
                            <StyledTableCell></StyledTableCell>
                            <StyledTableCell></StyledTableCell>
                            <StyledTableCell></StyledTableCell>
                        </StyledTableRow>
                    </TableBody>
                    { /* table footer start  */ }
                    <TableFooter sx={{backgroundColor: '#9591914f', height: '75px'}}>
                        <TableRow className="table2_total" >
                            <StyledTableCell colSpan={5} sx={{color: 'black', fontSize: '20px', textAlign: 'center'}}>Total: 0.0</StyledTableCell>
                            <StyledTableCell align="left"></StyledTableCell>
                            <StyledTableCell align="left"></StyledTableCell>
                            <StyledTableCell align="left" sx={{color: 'black', fontSize: '16px'}}>0.00</StyledTableCell>
                            <StyledTableCell align="left" sx={{color: 'black', fontSize: '16px'}}>Purchase Due - 0.00 <br /> Purchase Return - 0.00</StyledTableCell>
                            <StyledTableCell align="left"></StyledTableCell>
                        </TableRow>
                    </TableFooter>
                    { /* table footer end */ }
                </Table>
            </TableContainer>
        </Box>
        { /* Table end */ }
      </Box>
    </>
  )
}

export default Purchasetable;