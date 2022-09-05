import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import { Box, Button, Grid, Typography, Select, MenuItem, OutlinedInput, Table, TableBody, TableCell, tableCellClasses, TableContainer, TableHead, TableRow, Paper, FormControl, InputLabel } from '@mui/material';
import { FaTrash, FaFileExcel, FaPrint, FaFilePdf, FaEdit, FaEye, FaFilter } from 'react-icons/fa';
// import Sidebar from '../../../header/Sidebar';
import $ from 'jquery';
import { Link } from 'react-router-dom';
import { expStyle } from './Expstyle';
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";



function Expenseslist() {

    useEffect(() => {
        document.body.classList.add('unitbody');
    });

    //  JQUERY
    $(document).ready(function () {
        setTimeout(function () {
            $('#draftstable').DataTable({
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

    // Filter
    // Filter Textarea
    const [draftForm, setDraftForm] = useState({
        draftFormBusinessLoc: "", draftFormCustomer: "", draftFormDate: "", draftFormUser: "", draftFormPayStatus: "",
        draftFormShipStatus: "",
    });

    // / Accordion style
    const Accordion = styled((props) => (
        <MuiAccordion disableGutters elevation={0} square {...props} />
    ))(({ theme }) => ({
        border: `1px solid ${theme.palette.divider}`,
        padding: 0,
        "&:not(:last-child)": {
            borderBottom: 0,
        },
        "&:before": {
            display: "none",
        },
    }));
    // Accordion Header Style
    const AccordionSummary = styled((props) => <MuiAccordionSummary {...props} />)(
        ({ theme }) => ({
            backgroundColor: "white",
            flexDirection: "row-reverse",
            "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
                transform: "rotate(90deg)",
            },
            "& .MuiAccordionSummary-content": {
                marginLeft: theme.spacing(1),
            },
        })
    );
    // Accordion Body Style
    const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
        padding: theme.spacing(3),
        borderTop: "1px solid rgba(0, 0, 0, .125)",
    }));
    // / Accordion expand
    const [expanded, setExpanded] = useState("panel1");
    const filterPanel = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    return (
        <Box>
            <Typography variant="h5" sx={expStyle.UnitHeaderText}>Expenses</Typography>

            {/* Filter */}
            <Box sx={expStyle.subContainer}>
                <Box>
                    <Accordion expanded={expanded === "panel1"} onChange={filterPanel("panel1")}>
                        <AccordionSummary
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography sx={expStyle.filterHead}><FaFilter sx={{ p: 0 }} /> Filters</Typography>
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
                </Box>
            </Box><br />

            {/* Table */}
            <Box sx={expStyle.container}>
                <Grid container spacing={2}>
                    <Grid item xs={8}>
                        <Typography sx={expStyle.boxheadertxt}>All Expenses</Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <Button sx={expStyle.buttonAdd} ><Link to="/" style={{ textDecoration: 'none', color: 'white' }}> Add</Link></Button>
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
                                <TableRow>
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
                                </TableRow>
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

export default Expenseslist;
