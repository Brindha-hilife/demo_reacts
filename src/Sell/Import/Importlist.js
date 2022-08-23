import React, { useEffect } from 'react';
import { FaDownload } from 'react-icons/fa';
import { styled } from '@mui/material/styles';
import { Box, Container, Table, TableBody, TableCell, TableContainer, tableCellClasses, TableHead, TableRow, Paper, Button, Grid, Typography } from '@mui/material';
import { sellStyle } from '../Sellstyle';

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
    '&:nth-of-type(even)': {
        backgroundColor: theme.palette.action.hover,
    },

    root: {

        overflowX: "auto"
    },
    table: {
        minWidth: 700
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

function Sellimport() {
    useEffect(() => {
        document.body.classList.add('importbody');
    });
    return (
        <Box>
            <Container>
                <Container sx={{ paddingTop: '10px' }}>
                    <Grid display="flex">
                        <Typography variant="h5" >Import Sales</Typography>
                    </Grid>
                </Container><br />
                <Container sx={sellStyle.subContainer}>
                    <Typography variant="subtitle1" >File To Import:</Typography>
                    <Grid container spacing={2}>
                        <Grid item md={8}>
                            <Button variant="contained" component="label" sx={{ textTransform: 'Capitalize' }}>
                                Upload
                                <input hidden accept="image/*" multiple type="file" />
                            </Button>
                        </Grid>
                        <Grid item md={4}>
                            <Button variant="contained" color="primary" sx={{ textTransform: 'Capitalize' }}>Upload and review</Button>
                        </Grid>
                    </Grid>
                    <br /><br />
                    <Button variant="contained" color="success" sx={{ textTransform: 'Capitalize' }}><FaDownload />&ensp;Download template file</Button>
                </Container><br /><br />
                <Container sx={sellStyle.subContainer}>
                    <Typography variant='h6'>Instructions</Typography><br /><br />
                    <TableContainer component={Paper} sx={{
                        padding: 1,
                        width: '100%',
                        // height:400,
                        margin: 'auto',
                        overflow: 'auto',
                        "&::-webkit-scrollbar": {
                            width: 20
                        },
                        "&::-webkit-scrollbar-track": {
                            backgroundColor: 'pink'
                        },
                        "&::-webkit-scrollbar-thumb": {
                            backgroundColor: 'blue'
                        }
                    }} >
                        <Table md={{ maxHeight: '5px', overflow: 'auto' }} aria-label="customized table">
                            <TableBody>
                                <TableRow>
                                    <TableCell >1.</TableCell>
                                    <TableCell align="left">Upload sales data in excel format</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell >2.</TableCell>
                                    <TableCell align="left">Choose business location and column by which sell lines will be grouped</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell >3.</TableCell>
                                    <TableCell align="left">Choose respective sales fields for each column</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell >4.</TableCell>
                                    <TableCell>
                                        <Table>
                                            <TableHead >
                                                <TableRow>
                                                    <StyledTableCell sx={sellStyle.tableHead}>Importable fields</StyledTableCell>
                                                    <StyledTableCell align="left" sx={sellStyle.tableHead}>Instructions</StyledTableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                <StyledTableRow>
                                                    <StyledTableCell component="th" scope="row">Invoice No.</StyledTableCell>
                                                    <StyledTableCell align="left"></StyledTableCell>
                                                </StyledTableRow>
                                                <StyledTableRow>
                                                    <StyledTableCell component="th" scope="row">Customer name</StyledTableCell>
                                                    <StyledTableCell align="left"></StyledTableCell>
                                                </StyledTableRow>
                                                <StyledTableRow>
                                                    <StyledTableCell component="th" scope="row">Customer Phone number</StyledTableCell>
                                                    <StyledTableCell align="left">Either customer email id or phone number required  </StyledTableCell>
                                                </StyledTableRow>
                                                <StyledTableRow>
                                                    <StyledTableCell component="th" scope="row">Customer Email</StyledTableCell>
                                                    <StyledTableCell align="left">Either customer email id or phone number required</StyledTableCell>
                                                </StyledTableRow>
                                                <StyledTableRow>
                                                    <StyledTableCell component="th" scope="row">Sale Date</StyledTableCell>
                                                    <StyledTableCell align="left">Sale date time format should be "Y-m-d H:i:s" (2020-07-15 17:45:32)</StyledTableCell>
                                                </StyledTableRow>
                                                <StyledTableRow>
                                                    <StyledTableCell component="th" scope="row">Product Name</StyledTableCell>
                                                    <StyledTableCell align="left">Either product name (for single and combo only) or product sku required</StyledTableCell>
                                                </StyledTableRow>
                                                <StyledTableRow>
                                                    <StyledTableCell component="th" scope="row">Product SKU</StyledTableCell>
                                                    <StyledTableCell align="left">Either product name (for single and combo only) or product sku required</StyledTableCell>
                                                </StyledTableRow>
                                                <StyledTableRow>
                                                    <StyledTableCell component="th" scope="row">Quantity</StyledTableCell>
                                                    <StyledTableCell align="left">Required</StyledTableCell>
                                                </StyledTableRow>
                                                <StyledTableRow>
                                                    <StyledTableCell component="th" scope="row">Product Unit</StyledTableCell>
                                                    <StyledTableCell align="left"></StyledTableCell>
                                                </StyledTableRow>
                                                <StyledTableRow>
                                                    <StyledTableCell component="th" scope="row">Unit Price</StyledTableCell>
                                                    <StyledTableCell align="left"></StyledTableCell>
                                                </StyledTableRow>
                                                <StyledTableRow>
                                                    <StyledTableCell component="th" scope="row">Item Tax</StyledTableCell>
                                                    <StyledTableCell align="left"></StyledTableCell>
                                                </StyledTableRow>
                                                <StyledTableRow>
                                                    <StyledTableCell component="th" scope="row">Item Discount</StyledTableCell>
                                                    <StyledTableCell align="left"></StyledTableCell>
                                                </StyledTableRow>
                                                <StyledTableRow>
                                                    <StyledTableCell component="th" scope="row">Item Description</StyledTableCell>
                                                    <StyledTableCell align="left"></StyledTableCell>
                                                </StyledTableRow>
                                                <StyledTableRow>
                                                    <StyledTableCell component="th" scope="row">Order Total</StyledTableCell>
                                                    <StyledTableCell align="left"></StyledTableCell>
                                                </StyledTableRow>
                                                <StyledTableRow>
                                                    <StyledTableCell component="th" scope="row">Types of service</StyledTableCell>
                                                    <StyledTableCell align="left"></StyledTableCell>
                                                </StyledTableRow>
                                                <StyledTableRow>
                                                    <StyledTableCell component="th" scope="row">Custom Field 1</StyledTableCell>
                                                    <StyledTableCell align="left"></StyledTableCell>
                                                </StyledTableRow>
                                                <StyledTableRow>
                                                    <StyledTableCell component="th" scope="row">Custom Field 2</StyledTableCell>
                                                    <StyledTableCell align="left"></StyledTableCell>
                                                </StyledTableRow>
                                                <StyledTableRow>
                                                    <StyledTableCell component="th" scope="row">Custom Field 3</StyledTableCell>
                                                    <StyledTableCell align="left"></StyledTableCell>
                                                </StyledTableRow>
                                                <StyledTableRow>
                                                    <StyledTableCell component="th" scope="row">Custom Field 4</StyledTableCell>
                                                    <StyledTableCell align="left"></StyledTableCell>
                                                </StyledTableRow>
                                            </TableBody>
                                        </Table>
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Container>
                <Container sx={sellStyle.subContainer}>
                    <Typography variant='h6'>Imports</Typography><br /><br />
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell sx={sellStyle.tableHead}>Import batch</TableCell>
                                <TableCell sx={sellStyle.tableHead}>Import time</TableCell>
                                <TableCell sx={sellStyle.tableHead}>Created By</TableCell>
                                <TableCell sx={sellStyle.tableHead}>Invoices</TableCell>
                                <TableCell sx={sellStyle.tableHead}>Action</TableCell>
                            </TableRow>
                        </TableHead>
                    </Table>
                </Container>
            </Container>
        </Box>
    );
}

export default Sellimport;