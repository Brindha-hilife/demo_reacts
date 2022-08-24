import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import { Box, Button, Grid, Typography, FormControl, InputLabel, Select, MenuItem, OutlinedInput, Table, TableBody, TableCell, tableCellClasses, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { FaTrash, FaFileExcel, FaPrint, FaFilePdf, FaEdit, FaEye, FaFilter } from 'react-icons/fa';
// import Sidebar from '../../../header/Sidebar';
import $ from 'jquery';
import { Link } from 'react-router-dom';
import { sellStyle } from '../Sellstyle';
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";


function Sellreturnlist() {

    useEffect(() => {
        document.body.classList.add('unitbody');
    });

    //  JQUERY
    $(document).ready(function () {
        setTimeout(function () {
            $('#selltable').DataTable({
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
    const [sellRetForm, setSellRetForm] = useState({
        sellRetFormBusinessLoc: "", sellRetFormCustomer: "", sellRetFormDate: "", sellRetFormUser: "", sellRetFormPayStatus: "",
        sellRetFormShipStatus: "",
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
            <Typography variant="h5" sx={sellStyle.UnitHeaderText}>Sell Return</Typography>

            {/* Filter */}
            <Box sx={sellStyle.subContainer}>
                <Box>
                    <Accordion expanded={expanded === "panel1"} onChange={filterPanel("panel1")}>
                        <AccordionSummary
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography sx={sellStyle.filterHead}><FaFilter sx={{ p: 0 }} /> Filters</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Grid container spacing={5} sx={sellStyle.textInput}>
                                <Grid item md={3} sm={12} xs={12}>
                                    <FormControl size="small" fullWidth>
                                        <InputLabel id="demo-select-small">Business Location</InputLabel>
                                        <Select
                                            labelId="demo-select-small"
                                            id="demo-select-small"
                                            value={sellRetForm.sellRetFormBusinessLoc}
                                            onChange={(e) => { setSellRetForm({ ...sellRetForm, SellRetFormBusinessLoc: e.target.value }) }}
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
                                        <InputLabel id="demo-select-small">Customer</InputLabel>
                                        <Select
                                            labelId="demo-select-small"
                                            id="demo-select-small"
                                            value={sellRetForm.sellRetFormCustomer}
                                            onChange={(e) => { setSellRetForm({ ...sellRetForm, SellRetFormCustomer: e.target.value }) }}
                                            label="Customer"
                                        >
                                            <MenuItem value="">All </MenuItem>
                                            <MenuItem value={1}>xxx</MenuItem>
                                            <MenuItem value={2}>yyy</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item md={3} sm={12} xs={12}>
                                    <FormControl size="small" fullWidth>
                                        <InputLabel htmlFor="component-outlined"></InputLabel>
                                        <OutlinedInput
                                            id="component-outlined"
                                            value={sellRetForm.sellRetFormDate}
                                            onChange={(e) => { setSellRetForm({ ...sellRetForm, SellRetFormDate: e.target.value }) }}
                                            label=""
                                            type="date"
                                        />
                                    </FormControl>
                                </Grid>
                                <Grid item md={3} sm={12} xs={12}>
                                    <FormControl size="small" fullWidth>
                                        <InputLabel id="demo-select-small">User</InputLabel>
                                        <Select
                                            labelId="demo-select-small"
                                            id="demo-select-small"
                                            value={sellRetForm.sellRetFormUser}
                                            onChange={(e) => { setSellRetForm({ ...sellRetForm, SellRetFormUser: e.target.value }) }}
                                            label="User"
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
            <Box sx={sellStyle.container}>
                <Grid container spacing={2}>
                    <Grid item xs={8}>
                        <Typography sx={sellStyle.boxheadertxt}>Sell Return</Typography>
                    </Grid>
                    <Grid item xs={4}>

                    </Grid>
                </Grid>
                <Grid container sx={sellStyle.gridContainer}>
                    <Grid >
                        <Button sx={sellStyle.exportBtnText}><FaFileExcel />&ensp;Export to CSV</Button>
                        <Button sx={sellStyle.exportBtnText}><FaFileExcel />&ensp;Export to Excel</Button>
                        <Button sx={sellStyle.exportBtnText}><FaPrint />&ensp;Print</Button>
                        <Button sx={sellStyle.exportBtnText}><FaFilePdf />&ensp;Export to PDF</Button>
                    </Grid>
                </Grid>
                <Box>
                    <TableContainer component={Paper} sx={sellStyle.tablecontainer}>
                        <Table sx={{ minWidth: 700 }} aria-label="customized table" id="selltable">
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell>Date</StyledTableCell>
                                    <StyledTableCell align="left">Invoice No.</StyledTableCell>
                                    <StyledTableCell align="left">Parent Sale</StyledTableCell>
                                    <StyledTableCell align="left">Customer name</StyledTableCell>
                                    <StyledTableCell align="left">Location</StyledTableCell>
                                    <StyledTableCell align="left">Payment Status</StyledTableCell>
                                    <StyledTableCell align="left">Total amount</StyledTableCell>
                                    <StyledTableCell align="left">Payment due</StyledTableCell>
                                    <StyledTableCell align="left">Action</StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <StyledTableRow>
                                    <StyledTableCell component="th" scope="row"></StyledTableCell>
                                    <StyledTableCell align="left"></StyledTableCell>
                                    <StyledTableCell align="left"></StyledTableCell>
                                    <StyledTableCell align="left"></StyledTableCell>
                                    <StyledTableCell align="left"></StyledTableCell>
                                    <StyledTableCell align="left"></StyledTableCell>
                                    <StyledTableCell align="left"></StyledTableCell>
                                    <StyledTableCell align="left"></StyledTableCell>
                                    <StyledTableCell >
                                        <Button sx={sellStyle.buttonEdit}><Link to="/" style={{ textDecoration: 'none', color: '#fff' }}><FaEdit />&ensp;Edit</Link></Button>
                                        <Button sx={sellStyle.buttonView}><FaEye />&ensp;View</Button>
                                        <Button sx={sellStyle.buttonDelete}><FaTrash />&ensp;Delete</Button>
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

export default Sellreturnlist;
