import React, { useState } from 'react';
import { Box, Button, Grid,Accordion,AccordionSummary,AccordionDetails, Typography, Select, MenuItem, OutlinedInput, Table, TableBody, TableContainer, TableHead, Paper, FormControl, InputLabel } from '@mui/material';
import { FaTrash, FaFileExcel, FaPrint, FaFilePdf, FaEdit, FaEye, FaFilter } from 'react-icons/fa';
import Sidebar from '../../../header/Sidebar';
import Footer from '../../../footer/Footer';
import { StyledTableRow, StyledTableCell} from '../../Table';
import $ from 'jquery';
import { Link } from 'react-router-dom';
import { expStyle } from '../Expensestyle';



function Expensestablelist() {


    //  JQUERY
    $(document).ready(function () {
        setTimeout(function () {
            $('#draftstable').DataTable({
                language: { search: '', searchPlaceholder: "Search..." },
                lengthMenu: [25, 50, 100, 200, 500, 1000],
            });
        }, 1000);
    });

    // Filter
    // Filter Textarea
    const [draftForm, setDraftForm] = useState({
        draftFormBusinessLoc: "", draftFormCustomer: "", draftFormDate: "", draftFormUser: "", draftFormPayStatus: "",
        draftFormShipStatus: "",
    });

    // / Accordion expand
    const [expanded, setExpanded] = useState("panel1");
    const filterPanel = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    return (
        <Box>
            <Typography sx={expStyle.UnitHeaderText}>Expenses</Typography>

            {/* Filter */}
            <Accordion expanded={expanded === "panel1"} onChange={filterPanel("panel1")} sx={expStyle.container}>
                        <AccordionSummary
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography sx={{color: 'rgb(94, 53, 177) !important',}}><FaFilter sx={{ p: 0 }} /> Filters</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Grid container spacing={5} sx={expStyle.textInput}>
                                <Grid item md={3} sm={12} xs={12}>
                                    <FormControl size="small" fullWidth>
                                        <InputLabel id="demo-select-small">Business Location</InputLabel>
                                        <Select
                                            labelId="demo-select-small"
                                            id="demo-select-small"
                                            value={draftForm.draftFormBusinessLoc}
                                            onChange={(e) => { setDraftForm({ ...draftForm, DraftFormBusinessLoc: e.target.value }) }}
                                            label="Business Location"
                                        >
                                            <MenuItem value="">All </MenuItem>
                                            <MenuItem value={1}>xxx</MenuItem>
                                            <MenuItem value={2}>yyy</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item md={3} sm={12} xs={12}>
                                    <FormControl size="small" fullWidth>
                                        <InputLabel id="demo-select-small">Expense for</InputLabel>
                                        <Select
                                            labelId="demo-select-small"
                                            id="demo-select-small"
                                            value={draftForm.draftFormCustomer}
                                            onChange={(e) => { setDraftForm({ ...draftForm, DraftFormCustomer: e.target.value }) }}
                                            label="Expense for"
                                        >
                                            <MenuItem value="">All </MenuItem>
                                            <MenuItem value={1}>xxx</MenuItem>
                                            <MenuItem value={2}>yyy</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item md={3} sm={12} xs={12}>
                                    <FormControl size="small" fullWidth>
                                        <InputLabel id="demo-select-small">Contact</InputLabel>
                                        <Select
                                            labelId="demo-select-small"
                                            id="demo-select-small"
                                            value={draftForm.draftFormUser}
                                            onChange={(e) => { setDraftForm({ ...draftForm, DraftFormUser: e.target.value }) }}
                                            label="Contact"
                                        >
                                            <MenuItem value="">All </MenuItem>
                                            <MenuItem value={1}>xxx</MenuItem>
                                            <MenuItem value={2}>yyy</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item md={3} sm={12} xs={12}>
                                    <FormControl size="small" fullWidth>
                                        <InputLabel id="demo-select-small">Expense Category</InputLabel>
                                        <Select
                                            labelId="demo-select-small"
                                            id="demo-select-small"
                                            value={draftForm.draftFormUser}
                                            onChange={(e) => { setDraftForm({ ...draftForm, DraftFormUser: e.target.value }) }}
                                            label="Contact"
                                        >
                                            <MenuItem value="">All </MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item md={3} sm={12} xs={12}>
                                    <FormControl size="small" fullWidth>
                                        <InputLabel htmlFor="component-outlined"></InputLabel>
                                        <OutlinedInput
                                            id="component-outlined"
                                            value={draftForm.draftFormDate}
                                            onChange={(e) => { setDraftForm({ ...draftForm, DraftFormDate: e.target.value }) }}
                                            label=""
                                            type="date"
                                        />
                                    </FormControl>
                                </Grid>
                                <Grid item md={3} sm={12} xs={12}>
                                    <FormControl size="small" fullWidth>
                                        <InputLabel id="demo-select-small">Payment Status</InputLabel>
                                        <Select
                                            labelId="demo-select-small"
                                            id="demo-select-small"
                                            value={draftForm.draftFormUser}
                                            onChange={(e) => { setDraftForm({ ...draftForm, DraftFormUser: e.target.value }) }}
                                            label="Payment Status"
                                        >
                                            <MenuItem value="">All </MenuItem>
                                            <MenuItem value={1}>xxx</MenuItem>
                                            <MenuItem value={2}>yyy</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                            </Grid>
                        </AccordionDetails>
                    </Accordion><br />

            {/* Table */}
            <Box sx={expStyle.container}>
                <Grid container spacing={2}>
                    <Grid item xs={8}>
                         <Typography sx={expStyle.boxheadertxt}>All Expenses</Typography>
                    </Grid>
                    <Grid item xs={4}>
                     <Link to="/expense/expense/create" style={{ textDecoration: 'none', color: 'white' }}><Button sx={expStyle.buttonAdd} >ADD</Button></Link>
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
                        <Table sx={{ minWidth: 700 }} aria-label="customized table" id="draftstable">
                            <TableHead>
                                <StyledTableRow>
                                    <StyledTableCell >Action</StyledTableCell>
                                    <StyledTableCell align="left">Date</StyledTableCell>
                                    <StyledTableCell align="left">Reference No.</StyledTableCell>
                                    <StyledTableCell align="left">Recurring details</StyledTableCell>
                                    <StyledTableCell align="left">Expense Category</StyledTableCell>
                                    <StyledTableCell align="left">Location</StyledTableCell>
                                    <StyledTableCell align="left">Payment status</StyledTableCell>
                                    <StyledTableCell align="left">Tax</StyledTableCell>
                                    <StyledTableCell align="left">Total Amount</StyledTableCell>
                                    <StyledTableCell align="left">Expense For</StyledTableCell>
                                    <StyledTableCell align="left">Contact</StyledTableCell>
                                    <StyledTableCell align="left">Expense Note</StyledTableCell>
                                    <StyledTableCell align="left">Added By</StyledTableCell>
                                </StyledTableRow>
                            </TableHead>
                            <TableBody>
                                <StyledTableRow>
                                    <StyledTableCell component="th" scope="row">
                                        <Button sx={expStyle.buttonEdit}><Link to="/" style={{ textDecoration: 'none', color: '#fff' }}><FaEdit />&ensp;Edit</Link></Button>
                                        <Button sx={expStyle.buttonView}><FaEye />&ensp;View</Button>
                                        <Button sx={expStyle.buttonDelete}><FaTrash />&ensp;Delete</Button>
                                    </StyledTableCell>
                                    <StyledTableCell align="left"></StyledTableCell>
                                    <StyledTableCell align="left"></StyledTableCell>
                                    <StyledTableCell align="left"></StyledTableCell>
                                    <StyledTableCell align="left"></StyledTableCell>
                                    <StyledTableCell align="left"></StyledTableCell>
                                    <StyledTableCell align="left"></StyledTableCell>
                                    <StyledTableCell align="left"></StyledTableCell>
                                    <StyledTableCell align="left"></StyledTableCell>
                                    <StyledTableCell align="left"></StyledTableCell>
                                    <StyledTableCell align="left"></StyledTableCell>
                                    <StyledTableCell align="left"></StyledTableCell>
                                    <StyledTableCell align="left"></StyledTableCell>
                                </StyledTableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
            </Box>
        </Box>
    );
}

function Expenselist(){
    return(
        <>
            <Box sx={{display:'flex',}} >
                <Sidebar />
                <Box sx={{ width: '100%', overflowX:'hidden' }}>
                    <Box component="main" sx={{ padding: '30px',}}><br /><br />
                        <Expensestablelist /><br /><br />
                        <Footer />
                    </Box>
                </Box>
            </Box>
        </>
    );
}

export default Expenselist;
