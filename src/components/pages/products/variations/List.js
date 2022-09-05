import React from 'react';
import { Box, Table, TableBody, TableContainer, TableHead, Paper, Button, Grid, Typography } from '@mui/material';
import { FaFileCsv, FaPrint, FaFilePdf, FaTrash } from 'react-icons/fa';
import { AiFillFileExcel } from 'react-icons/ai';
import $ from 'jquery';
import { userStyle } from '../../PageStyle';
import Sidebar from '../../../header/Sidebar';
import Footer from '../../../footer/Footer';
import Variationadd from './Create';
import Variationedit from './Edit';

import { StyledTableRow, StyledTableCell } from '../../Table';
//  JQUERY 
$(document).ready(function () {
  setTimeout(function () {
    $('#variationtable').DataTable({
      language: { search: '', searchPlaceholder: "Search..." },
      lengthMenu: [25, 50, 100, 200, 500, 1000],
    });
  }, 1000);
});

function Variationslisttable() {

  return (
    <Box >
      {/* header text */}
      <Typography sx={userStyle.HeaderText}>Variations<Typography sx={userStyle.SubHeaderText}>Manage product variations</Typography></Typography>
      {/* content start */}
      <Box sx={userStyle.container}>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Typography sx={userStyle.importheadtext}>All variations</Typography>
          </Grid>
          <Grid item xs={4}>
            <Variationadd />
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
            <Table sx={{ minWidth: 700 }} aria-label="customized table" id="variationtable">
              <TableHead>
                <StyledTableRow>
                  <StyledTableCell>Variations</StyledTableCell>
                  <StyledTableCell>Values</StyledTableCell>
                  <StyledTableCell>Action</StyledTableCell>
                </StyledTableRow>
              </TableHead>
              <TableBody align="left">
                <StyledTableRow>
                  <StyledTableCell component="th" scope="row"> Pieces </StyledTableCell>
                  <StyledTableCell>Pc(s)</StyledTableCell>
                  <StyledTableCell>
                    <Variationedit></Variationedit>  &ensp;
                    <Button sx={userStyle.buttondelete}><FaTrash />&ensp;Delete</Button>
                  </StyledTableCell>
                </StyledTableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
      {/* content end */}
    </Box>
  );
}

function Variationslist() {
  return (
    <Box sx={{ display: 'flex' }} >
      <Sidebar />
      <Box fullwidth sx={{ width: '100%', overflowX: 'hidden' }} >
        <Box component="main" sx={{ flexGrow: 1, padding: '30px' }}><br /><br />
          <Variationslisttable />
          <Footer />
        </Box>
      </Box>
    </Box>

  );
}

export default Variationslist;

