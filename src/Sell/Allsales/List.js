import React, { useEffect, useState } from 'react';
import { styled, alpha } from '@mui/material/styles';
import { Box, Button, Grid, Menu, Divider, Typography, FormGroup, FormControlLabel, Checkbox, FormControl, InputLabel, Select, MenuItem, OutlinedInput, Table, TableBody, TableCell, tableCellClasses, TableContainer, TableHead, TableRow, Paper, TableFooter } from '@mui/material';
import { FaTrash, FaFileExcel, FaPrint, FaFilePdf, FaEdit, FaEye, FaFilter, FaTruck, FaFileMedicalAlt, FaMoneyBillAlt, FaCopy, FaUndo, FaEnvelope } from 'react-icons/fa';
// import Sidebar from '../../../header/Sidebar';
import $ from 'jquery';
import { Link } from 'react-router-dom';
import { sellStyle } from '../Sellstyle';
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Salepaid from './Salepaymod';


function Saleslist() {

    useEffect(() => {
        document.body.classList.add('unitbody');
    });

    //  JQUERY
    $(document).ready(function () {
        setTimeout(function () {
            $('#saletable').DataTable({
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
    const [salesForm, setSalesForm] = useState({
        salesFormBusinessLoc: "", salesFormCustomer: "", salesFormDate: "", salesFormUser: "", salesFormPayStatus: "",
        salesFormShipStatus: "",
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

    const [anchorEl, setAnchorEl] = React.useState(null);
    const paidMod = Boolean(anchorEl);
    const paidModOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const paidModClose = () => {
        setAnchorEl(null);
    };

    const StyledMenu = styled((props) => (
        <Menu
            elevation={0}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            {...props}
        />
    ))(({ theme }) => ({
        '& .MuiPaper-root': {
            borderRadius: 6,
            marginTop: theme.spacing(1),
            minWidth: 180,
            color:
                theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
            boxShadow:
                'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
            '& .MuiMenu-list': {
                padding: '4px 0',
            },
            '& .MuiMenuItem-root': {
                '& .MuiSvgIcon-root': {
                    fontSize: 18,
                    color: theme.palette.text.secondary,
                    marginRight: theme.spacing(1.5),
                },
                '&:active': {
                    backgroundColor: alpha(
                        theme.palette.primary.main,
                        theme.palette.action.selectedOpacity,
                    ),
                },
            },
        },
    }));


    return (
        <Box>
            <Typography variant="h5" sx={sellStyle.UnitHeaderText}>Sales</Typography>

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
                                            value={salesForm.salesFormBusinessLoc}
                                            onChange={(e) => { setSalesForm({ ...salesForm, SalesFormBusinessLoc: e.target.value }) }}
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
                                            value={salesForm.salesFormCustomer}
                                            onChange={(e) => { setSalesForm({ ...salesForm, SalesFormCustomer: e.target.value }) }}
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
                                        <InputLabel id="demo-select-small">Payment Status</InputLabel>
                                        <Select
                                            labelId="demo-select-small"
                                            id="demo-select-small"
                                            value={salesForm.salesFormPayStatus}
                                            onChange={(e) => { setSalesForm({ ...salesForm, SalesFormPayStatus: e.target.value }) }}
                                            label="Payment Status"
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
                                            value={salesForm.salesFormDate}
                                            onChange={(e) => { setSalesForm({ ...salesForm, SalesFormDate: e.target.value }) }}
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
                                            value={salesForm.salesFormUser}
                                            onChange={(e) => { setSalesForm({ ...salesForm, SalesFormUser: e.target.value }) }}
                                            label="User"
                                        >
                                            <MenuItem value="">All </MenuItem>
                                            <MenuItem value={1}>xxx</MenuItem>
                                            <MenuItem value={2}>yyy</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item md={3} sm={12} xs={12}>
                                    <FormControl size="small" fullWidth>
                                        <InputLabel id="demo-select-small">Shipping Status</InputLabel>
                                        <Select
                                            labelId="demo-select-small"
                                            id="demo-select-small"
                                            value={salesForm.salesFormShipStatus}
                                            onChange={(e) => { setSalesForm({ ...salesForm, SalesFormShipStatus: e.target.value }) }}
                                            label="Shipping Status"
                                        >
                                            <MenuItem value="">All </MenuItem>
                                            <MenuItem value={1}>xxx</MenuItem>
                                            <MenuItem value={2}>yyy</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item md={3} sm={6} xs={12}>
                                    <FormGroup>
                                        <FormControlLabel control={<Checkbox />} label="Subscriptions" />
                                    </FormGroup>
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
                        <Typography sx={sellStyle.boxheadertxt}>All sales</Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <Button sx={sellStyle.buttonAdd} ><Link to="/" style={{ textDecoration: 'none', color: 'white' }}> Add </Link></Button>
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
                        <Table sx={{ minWidth: 700 }} aria-label="customized table" id="saletable">
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell>Action</StyledTableCell>
                                    <StyledTableCell align="left">Date</StyledTableCell>
                                    <StyledTableCell align="left">Invoice No.</StyledTableCell>
                                    <StyledTableCell align="left">Customer Name</StyledTableCell>
                                    <StyledTableCell align="left">Contact Number</StyledTableCell>
                                    <StyledTableCell align="left">Location</StyledTableCell>
                                    <StyledTableCell align="left">Payment Status</StyledTableCell>
                                    <StyledTableCell align="left">Payment Method</StyledTableCell>
                                    <StyledTableCell align="left">Total Amount</StyledTableCell>
                                    <StyledTableCell align="left">Total Paid</StyledTableCell>
                                    <StyledTableCell align="left">Sell Due</StyledTableCell>
                                    <StyledTableCell align="left">Sell Return Due</StyledTableCell>
                                    <StyledTableCell align="left">Shipping Status</StyledTableCell>
                                    <StyledTableCell align="left">Total Items</StyledTableCell>
                                    <StyledTableCell align="left">Types of Service</StyledTableCell>
                                    <StyledTableCell align="left">Custom Field 1</StyledTableCell>
                                    <StyledTableCell align="left">Added By</StyledTableCell>
                                    <StyledTableCell align="left">Sell Note</StyledTableCell>
                                    <StyledTableCell align="left">Staff Note</StyledTableCell>
                                    <StyledTableCell align="left">Shipping Details</StyledTableCell>
                                    <StyledTableCell align="left">Table</StyledTableCell>
                                    <StyledTableCell align="left">Service Staff</StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <StyledTableRow>
                                    <StyledTableCell component="th" scope="row">
                                        <Button
                                            id="demo-customized-button"
                                            aria-controls={paidMod ? 'demo-customized-menu' : undefined}
                                            aria-haspopup="true"
                                            aria-expanded={paidMod ? 'true' : undefined}
                                            variant="contained"
                                            disableElevation
                                            onClick={paidModOpen}
                                            endIcon={<KeyboardArrowDownIcon />}
                                            sx={sellStyle.actionsdropdown}
                                        >
                                            Actions
                                        </Button>
                                        <StyledMenu
                                            id="demo-customized-menu"
                                            MenuListProps={{
                                                'aria-labelledby': 'demo-customized-button',
                                            }}
                                            anchorEl={anchorEl}
                                            open={paidMod}
                                            onClose={paidModClose}
                                        >
                                            <MenuItem onClick={paidModClose} disableRipple><FaEye />&ensp;View</MenuItem>
                                            <MenuItem onClick={paidModClose} disableRipple><FaEdit />&ensp;Edit</MenuItem> 
                                            <MenuItem onClick={paidModClose} disableRipple><FaTrash />&ensp;Delete</MenuItem>
                                            <MenuItem onClick={paidModClose} disableRipple><FaTruck />&ensp;Edit Shipping</MenuItem>
                                            <MenuItem onClick={paidModClose} disableRipple><FaPrint />&ensp;Print Invoice</MenuItem>
                                            <MenuItem onClick={paidModClose} disableRipple><FaFileMedicalAlt />&ensp;Packing Slip</MenuItem>
                                            <Divider sx={{ my: 2 }} />
                                            <MenuItem onClick={paidModClose} disableRipple><FaMoneyBillAlt />&ensp;View Payments</MenuItem>
                                            <MenuItem onClick={paidModClose} disableRipple><FaCopy />&ensp;Duplicate Sell</MenuItem>
                                            <MenuItem onClick={paidModClose} disableRipple><FaUndo />&ensp;Sell Return</MenuItem>
                                            <MenuItem onClick={paidModClose} disableRipple><FaEye />&ensp;Invoice URL</MenuItem>   
                                            <MenuItem onClick={paidModClose} disableRipple><FaEnvelope />&ensp;New Sale Notification</MenuItem>                                                  
                                        </StyledMenu>
                                    </StyledTableCell>
                                    <StyledTableCell align="left">test</StyledTableCell>
                                    <StyledTableCell align="left">test</StyledTableCell>
                                    <StyledTableCell align="left">test</StyledTableCell>
                                    <StyledTableCell align="left">test</StyledTableCell>
                                    <StyledTableCell align="left">test</StyledTableCell>
                                    <StyledTableCell align="left"><Salepaid /></StyledTableCell>
                                    <StyledTableCell align="left">test</StyledTableCell>
                                    <StyledTableCell align="left">test</StyledTableCell>
                                    <StyledTableCell align="left">test</StyledTableCell>
                                    <StyledTableCell align="left">test</StyledTableCell>
                                    <StyledTableCell align="left">test</StyledTableCell>
                                    <StyledTableCell align="left">test</StyledTableCell>
                                    <StyledTableCell align="left">test</StyledTableCell>
                                    <StyledTableCell align="left">test</StyledTableCell>
                                    <StyledTableCell align="left">test</StyledTableCell>
                                    <StyledTableCell align="left">test</StyledTableCell>
                                    <StyledTableCell align="left">test</StyledTableCell>
                                    <StyledTableCell align="left">test</StyledTableCell>
                                    <StyledTableCell align="left">test</StyledTableCell>
                                    <StyledTableCell align="left">test</StyledTableCell>
                                    <StyledTableCell align="left">test</StyledTableCell>
                                </StyledTableRow>
                            </TableBody>
                            <TableFooter sx={{background:'#8080806e',height:'75px'}}>
                            <TableRow className="table2_total">
                            <StyledTableCell
                                    colSpan={6}
                                    align="right"
                                    padding="250px"
                                    sx={{ fontWeight: 700, fontSize: 18, color: "black", alignItems: 'center', justifyContent: 'center', textAlign:'center'}}
                                >
                                    Total:{" "}
                                </StyledTableCell>
                                <StyledTableCell align="center" colSpan={1} sx={{fontSize:'14px', fontWeight:'700'}}>Paid - 2</StyledTableCell>
                                <StyledTableCell align="center" colSpan={1} sx={{fontSize:'14px', fontWeight:'700'}}>Cash - 2</StyledTableCell>
                                <StyledTableCell colSpan={1} sx={{fontSize:'14px', fontWeight:'700'}}>₹ 0.00</StyledTableCell>
                                <StyledTableCell colSpan={1} sx={{fontSize:'14px', fontWeight:'700'}}>₹ 0.00</StyledTableCell>
                                <StyledTableCell colSpan={1} sx={{fontSize:'14px', fontWeight:'700'}}>₹ 0.00</StyledTableCell>
                                <StyledTableCell colSpan={1} sx={{fontSize:'14px', fontWeight:'700'}}>₹ 0.00</StyledTableCell>
                                <StyledTableCell colSpan={1}></StyledTableCell>
                                <StyledTableCell colSpan={1}></StyledTableCell> 
                                <StyledTableCell colSpan={1}></StyledTableCell>
                                <StyledTableCell colSpan={1}></StyledTableCell>
                                <StyledTableCell colSpan={1}></StyledTableCell>
                                <StyledTableCell colSpan={1}></StyledTableCell>
                                <StyledTableCell colSpan={1}></StyledTableCell>
                                <StyledTableCell colSpan={1}></StyledTableCell>
                                <StyledTableCell colSpan={1}></StyledTableCell>
                                <StyledTableCell colSpan={1}></StyledTableCell>
                            </TableRow>
                        </TableFooter>
                        </Table>
                    </TableContainer>
                </Box>
            </Box>
        </Box>
    );
}

export default Saleslist;
