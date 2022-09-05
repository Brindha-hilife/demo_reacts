import React from 'react';
import { Box, Table, TableBody, TableContainer, TableHead, Paper, Button, Grid, Typography } from '@mui/material';
import { FaFileCsv, FaPrint, FaFilePdf, FaTrash } from 'react-icons/fa';
import { AiFillFileExcel } from 'react-icons/ai';
import $ from 'jquery';
import { userStyle } from '../../PageStyle';
import Sidebar from '../../../header/Sidebar';
import Footer from '../../../footer/Footer';
import { StyledTableRow, StyledTableCell } from '../../Table';
import Brandcreate from './Create';
import Brandedit from './Edit';

//  JQUERY 
$(document).ready(function () {
  setTimeout(function () {
    $('#brandtable').DataTable({
      language: { search: '', searchPlaceholder: "Search..." },
      lengthMenu: [25, 50, 100, 200, 500, 1000],
      // overflow-X: true
    });
  }, 1000);
});

function Brandlisttable() {

  return (
    <Box>
      {/* header text */}
      <Typography sx={userStyle.HeaderText}>Brands <Typography sx={userStyle.SubHeaderText}>Manage your Brands</Typography></Typography>
      {/* content start */}
      <Box sx={userStyle.container}>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Typography sx={userStyle.importheadtext}>All your brands</Typography>
          </Grid>
          <Grid item xs={4}>
            <Brandcreate />
          </Grid>
        </Grid>
        <Grid container sx={userStyle.gridcontainer}>
          <Grid >
            <Button sx={userStyle.buttongrp}><FaFileCsv />&ensp;Export to CSV</Button>
            <Button sx={userStyle.buttongrp}><AiFillFileExcel />&ensp;Export to Excel</Button>
            <Button sx={userStyle.buttongrp}><FaPrint />&ensp;Print</Button>
            <Button sx={userStyle.buttongrp}><FaFilePdf />&ensp;Export to PDF</Button>
          </Grid>
        </Grid><br />
        <Box>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table" id="brandtable">
              <TableHead>
                <StyledTableRow>
                  <StyledTableCell>Brand</StyledTableCell>
                  <StyledTableCell >Note</StyledTableCell>
                  <StyledTableCell >Action</StyledTableCell>
                </StyledTableRow>
              </TableHead>
              <TableBody align="left">
                <StyledTableRow>
                  <StyledTableCell component="th" scope="row">TEST</StyledTableCell>
                  <StyledTableCell ></StyledTableCell>
                  <StyledTableCell >
                    <Brandedit>
                    </Brandedit>&ensp;
                    <Button sx={userStyle.buttondelete}><FaTrash></FaTrash>&ensp;Delete</Button>
                  </StyledTableCell>
                </StyledTableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
      { /* content end */}
    </Box>
  );
}

function Brandlist() {
  return (
    <Box sx={{ display: 'flex', }} >
      <Sidebar />
      <Box sx={{ width: '100%', overflowX: 'hidden' }}>
        <Box component="main" sx={{ padding: '30px', }}><br /><br />
          <Brandlisttable />
          <Footer />
        </Box>
      </Box>
    </Box>
  );
}
export default Brandlist;

