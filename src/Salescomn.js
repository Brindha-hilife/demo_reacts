import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './user.css';
import { styled } from '@mui/material/styles';
import { userStyle } from './Userstyle';
import {Box, Container, Grid, FormControl, InputLabel, OutlinedInput,
    Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button,
    Dialog, DialogTitle, DialogContent, DialogActions, IconButton, TextareaAutosize, tableCellClasses
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import { AiFillFileExcel } from "react-icons/ai";
import { FaFileCsv, FaPrint, FaFilePdf, FaEdit, FaEye, FaTrash } from "react-icons/fa";
import $ from 'jquery';


function Salescomn() {

    // ****** Data Table ****** //
    $(document).ready(function () {
        setTimeout(function () {
            $('#salestable').DataTable({
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

    // ****** Table Data ****** //
    function createData(name, email, contact_number, address, sales_comm, action) {
        return { name, email, contact_number, address, sales_comm, action };
    }

    const rows = [
        createData('sample', 'admin@gmail.com', '2453245', 'sample', 52),
    ];

    // ****** Sales Modal ****** //
    const BootstrapDialog = styled(Dialog)(({ theme }) => ({
        '& .MuiDialogContent-root': {
            padding: theme.spacing(2),
        },
        '& .MuiDialogActions-root': {
            padding: theme.spacing(1),
        },
    }));

    const BootstrapDialogTitle = (props) => {
        const { children, onClose, ...other } = props;

        return (
            <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
                {children}
                {onClose ? (
                    <IconButton
                        aria-label="close"
                        onClick={onClose}
                        sx={{
                            position: 'absolute',
                            right: 8,
                            top: 8,
                            color: (theme) => theme.palette.grey[500],
                        }}
                    >
                        <CloseIcon />
                    </IconButton>
                ) : null}
            </DialogTitle>
        );
    };

    BootstrapDialogTitle.propTypes = {
        children: PropTypes.node,
        onClose: PropTypes.func.isRequired,
    };

    // ****** Sales Modal Textfield ****** //
    // ****** Add Modal ****** //
    const [salesmodaladd, setSalesmodaladd] = useState(false);

    const handleClickOpenadd = () => {
        setSalesmodaladd(true);
    };
    const handleCloseadd = () => {
        setSalesmodaladd(false);
    };

    const [salesComnAddForm, setSalesComnAddForm] = useState({ 
        prefixadd:"", firstnamead:"", lastnameadd:"", emailadd:"", contactadd:"", addressadd:"", salescomnperadd:""
    });

    
    // ****** Edit Modal ****** //
    const [salesmodaledit, setSalesmodaledit] = useState(false);

    const handleClickOpenedit = () => {
        setSalesmodaledit(true);
    };
    const handleCloseedit = () => {
        setSalesmodaledit(false);
    };

    
    // ****** Text Field ****** //
    
    const [salesComnEditForm, setSalesComnEditForm] = useState({ 
        prefixedit:"", firstnameedit:"", lastnameedit:"", emailedit:"", contactedit:"", addressedit:"", salescomnperedit:""
    });
    

    return (
        <Box>
            <Container sx={{ paddingTop: '10px' }}>
                <Grid display="flex">
                    <Typography variant="h5" >Sales Commission Agents</Typography>
                </Grid>
            </Container><br />
            <Container sx={userStyle.container}>
                <Grid container spacing={10} sx={{ paddingTop: '30px' }}>
                    <Grid item md={6} sm={6} xs={6} ></Grid>
                    <Grid item md={6} sm={6} xs={6} >
                        <Button sx={userStyle.button_add} onClick={handleClickOpenadd} ><AddIcon /> Add</Button>
                    </Grid>
                </Grid>
                <TableContainer component={Paper} style={{boxShadow:"none",padding: '20px'}} >
                    <Grid container sx={userStyle.grid_container}>
                        <Grid >
                            <Button sx={userStyle.button_grp}><FaFileCsv />&ensp;Export to CSV</Button>
                            <Button sx={userStyle.button_grp}><AiFillFileExcel />&ensp;Export to Excel</Button>
                            <Button sx={userStyle.button_grp}><FaPrint />&ensp;Print</Button>
                            <Button sx={userStyle.button_grp}><FaFilePdf />&ensp;Export to PDF</Button>
                        </Grid>
                    </Grid>
                    <Table sx={{ padding: '20px' }} aria-label="simple table" id="salestable">
                        <TableHead align="left">
                            <TableRow>
                                <StyledTableCell>Name</StyledTableCell>
                                <StyledTableCell >Email</StyledTableCell>
                                <StyledTableCell >Contact Number</StyledTableCell>
                                <StyledTableCell >Address</StyledTableCell>
                                <StyledTableCell >Sales Commission Percentage&ensp;(%)</StyledTableCell>
                                <StyledTableCell >Action</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody align="left">
                            {rows.map((row) => (
                                <StyledTableRow
                                    key={row.name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <StyledTableCell component="th" scope="row">
                                        {row.name}
                                    </StyledTableCell>
                                    <StyledTableCell >{row.email}</StyledTableCell>
                                    <StyledTableCell >{row.contact_number}</StyledTableCell>
                                    <StyledTableCell >{row.address}</StyledTableCell>
                                    <StyledTableCell>{row.sales_comm}</StyledTableCell>
                                    <StyledTableCell >
                                        <Grid>
                                            <Button sx={userStyle.button_edit} onClick={handleClickOpenedit}><FaEdit />&ensp;Edit</Button>
                                            <Button sx={userStyle.button_view}><FaEye />&ensp;View</Button>
                                            <Button sx={userStyle.button_delete}><FaTrash />&ensp;Delete</Button>
                                        </Grid>
                                    </StyledTableCell>
                                </StyledTableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Container>

            {/************* Modal *************/}
            {/************* Add Modal *************/}
            <>
                <form action=''>
                    <BootstrapDialog
                        onClose={handleCloseadd}
                        aria-labelledby="customized-dialog-title1"
                        open={salesmodaladd}
                        sx={{
                            '& .MuiOutlinedInput-notchedOutline': {
                                border: '1px solid #b97df0',
                            },
                            '& .MuiDialog-paper': {
                                marginTop: '-400px',
                                transformOrigin: '0 0 0'
                            }
                        }}
                    >
                        <BootstrapDialogTitle id="customized-dialog-title1" onClose={handleCloseadd}>
                            Add sales commission agent
                        </BootstrapDialogTitle>
                        <DialogContent dividers>
                            <Grid container spacing={3}>
                                <Grid item md={2} sm={12} xs={12}>
                                    <FormControl size="small" fullWidth>
                                        <InputLabel htmlFor="component-outlined">Prefix</InputLabel>
                                        <OutlinedInput
                                            id="component-outlined"
                                            value={salesComnAddForm.prefixadd}
                                            onChange={(e)=> { setSalesComnAddForm({...salesComnAddForm, Prefixadd: e.target.value})}}
                                            label="Prefix"
                                            type="text"
                                        />
                                    </FormControl>
                                </Grid>
                                <Grid item md={5} sm={12} xs={12}>
                                    <FormControl size="small" fullWidth>
                                        <InputLabel htmlFor="component-outlined">First Name *</InputLabel>
                                        <OutlinedInput
                                            id="component-outlined"
                                            value={salesComnAddForm.firstnamead}
                                            onChange={(e)=> { setSalesComnAddForm({...salesComnAddForm, Firstnamead: e.target.value})}}
                                            label="First Name *"
                                            type="text"
                                        />
                                    </FormControl>
                                </Grid>
                                <Grid item md={5} sm={12} xs={12}>
                                    <FormControl size="small" fullWidth>
                                        <InputLabel id="demo-select-small">Last Name </InputLabel>
                                        <OutlinedInput
                                            labelId="demo-select-small"
                                            id="demo-select-small"
                                            value={salesComnAddForm.lastnameadd}
                                            onChange={(e)=> { setSalesComnAddForm({...salesComnAddForm, Lastnameadd: e.target.value})}}
                                            label="Last Name"
                                            type="text"
                                        />
                                    </FormControl>
                                </Grid>
                                <Grid item md={6} sm={12} xs={12}>
                                    <FormControl size="small" fullWidth>
                                        <InputLabel id="demo-select-small">Email </InputLabel>
                                        <OutlinedInput
                                            labelId="demo-select-small"
                                            id="demo-select-small"
                                            value={salesComnAddForm.emailadd}
                                            onChange={(e)=> { setSalesComnAddForm({...salesComnAddForm, emailadd: e.target.value})}}
                                            label="Email"
                                            type="email"
                                        />
                                    </FormControl>
                                </Grid>
                                <Grid item md={6} sm={12} xs={12}>
                                    <FormControl size="small" fullWidth>
                                        <InputLabel id="demo-select-small">Contact Number </InputLabel>
                                        <OutlinedInput
                                            labelId="demo-select-small"
                                            id="demo-select-small"
                                            value={salesComnAddForm.contactadd}
                                            onChange={(e)=> { setSalesComnAddForm({...salesComnAddForm, Contactadd: e.target.value})}}
                                            label="Contact Number"
                                            type="number"
                                        />
                                    </FormControl>
                                </Grid>
                                <Grid item md={12} sm={12} xs={12}>
                                    <InputLabel id="demo-select-small">Address </InputLabel>
                                    <FormControl size="small" fullWidth>
                                        <TextareaAutosize
                                            aria-label="minimum height"
                                            minRows={3}
                                            placeholder="Address"
                                            className='users_txtarea'
                                            value={salesComnAddForm.addressadd}
                                            onChange={(e)=> { setSalesComnAddForm({...salesComnAddForm, Addressadd: e.target.value})}}
                                       />
                                    </FormControl>
                                </Grid>
                                <Grid item md={6} sm={12} xs={12}>
                                    <FormControl size="small" fullWidth>
                                        <InputLabel id="demo-select-small">Sales Commission Percentage (%)</InputLabel>
                                        <OutlinedInput
                                            labelId="demo-select-small"
                                            id="demo-select-small"
                                            value={salesComnAddForm.salescomnperadd}
                                            onChange={(e)=> { setSalesComnAddForm({...salesComnAddForm, Salescomnperadd: e.target.value})}}
                                            label="Sales Commission Percentage (%)"
                                            type="number"
                                        />
                                    </FormControl>
                                </Grid>
                            </Grid>
                        </DialogContent>
                        <DialogActions>
                            <Button autoFocus variant='contained' color="success">
                                Save
                            </Button>
                            <Button onClick={handleCloseadd} variant='contained' color="error">Close</Button>
                        </DialogActions>
                    </BootstrapDialog>
                </form>
            </>

            {/************* Edit Modal *************/}
            <>
                <form action=''>
                    <BootstrapDialog
                        onClose={handleCloseedit}
                        aria-labelledby="customized-dialog-title1"
                        open={salesmodaledit}
                        sx={{
                            '& .MuiOutlinedInput-notchedOutline': {
                                border: '1px solid #b97df0',
                            },
                            '& .MuiDialog-paper': {
                                marginTop: '-400px',
                                transformOrigin: '0 0 0'
                            }
                        }}
                    >
                        <BootstrapDialogTitle id="customized-dialog-title1" onClose={handleCloseedit}>
                            Edit sales commission agent
                        </BootstrapDialogTitle>
                        <DialogContent dividers>
                            <Grid container spacing={3}>
                                <Grid item md={2} sm={12} xs={12}>
                                    <FormControl size="small" fullWidth>
                                        <InputLabel htmlFor="component-outlined">Prefix</InputLabel>
                                        <OutlinedInput
                                            id="component-outlined"
                                            value={salesComnEditForm.prefixedit}
                                            onChange={(e)=> { setSalesComnEditForm({...salesComnEditForm, Prefixedit: e.target.value})}}
                                            label="Prefix"
                                            type="text"
                                        />
                                    </FormControl>
                                </Grid>
                                <Grid item md={5} sm={12} xs={12}>
                                    <FormControl size="small" fullWidth>
                                        <InputLabel htmlFor="component-outlined">First Name *</InputLabel>
                                        <OutlinedInput
                                            id="component-outlined"
                                            value={salesComnEditForm.firstnameedit}
                                            onChange={(e)=> { setSalesComnEditForm({...salesComnEditForm, Firstnameedit: e.target.value})}}
                                            label="First Name *"
                                            type="text"
                                        />
                                    </FormControl>
                                </Grid>
                                <Grid item md={5} sm={12} xs={12}>
                                    <FormControl size="small" fullWidth>
                                        <InputLabel id="demo-select-small">Last Name </InputLabel>
                                        <OutlinedInput
                                            labelId="demo-select-small"
                                            id="demo-select-small"
                                            value={salesComnEditForm.lastnameedit}
                                            onChange={(e)=> { setSalesComnEditForm({...salesComnEditForm, Lastnameedit: e.target.value})}}
                                            label="Last Name"
                                            type="text"
                                        />
                                    </FormControl>
                                </Grid>
                                <Grid item md={6} sm={12} xs={12}>
                                    <FormControl size="small" fullWidth>
                                        <InputLabel id="demo-select-small">Email </InputLabel>
                                        <OutlinedInput
                                            labelId="demo-select-small"
                                            id="demo-select-small"
                                            value={salesComnEditForm.emailedit}
                                            onChange={(e)=> { setSalesComnEditForm({...salesComnEditForm, Emailedit: e.target.value})}}
                                            label="Email"
                                            type="email"
                                        />
                                    </FormControl>
                                </Grid>
                                <Grid item md={6} sm={12} xs={12}>
                                    <FormControl size="small" fullWidth>
                                        <InputLabel id="demo-select-small">Contact Number </InputLabel>
                                        <OutlinedInput
                                            labelId="demo-select-small"
                                            id="demo-select-small"
                                            value={salesComnEditForm.contactedit}
                                            onChange={(e)=> { setSalesComnEditForm({...salesComnEditForm, Contactedit: e.target.value})}}
                                            label="Contact Number"
                                            type="number"
                                        />
                                    </FormControl>
                                </Grid>
                                <Grid item md={12} sm={12} xs={12}>
                                    <InputLabel id="demo-select-small">Address </InputLabel>
                                    <FormControl size="small" fullWidth>
                                        <TextareaAutosize
                                            aria-label="minimum height"
                                            minRows={3}
                                            placeholder="Address"
                                            className='users_txtarea'
                                            value={salesComnEditForm.addressedit}
                                            onChange={(e)=> { setSalesComnEditForm({...salesComnEditForm, Addressedit: e.target.value})}}
                                        />
                                    </FormControl>
                                </Grid>
                                <Grid item md={6} sm={12} xs={12}>
                                    <FormControl size="small" fullWidth>
                                        <InputLabel id="demo-select-small">Sales Commission Percentage (%)</InputLabel>
                                        <OutlinedInput
                                            labelId="demo-select-small"
                                            id="demo-select-small"
                                            value={salesComnEditForm.salescomnperedit}
                                            onChange={(e)=> { setSalesComnEditForm({...salesComnEditForm, Salescomnperedit: e.target.value})}}                                            label="Sales Commission Percentage (%)"
                                            type="number"
                                        />
                                    </FormControl>
                                </Grid>
                            </Grid>
                        </DialogContent>
                        <DialogActions>
                            <Button autoFocus variant='contained' color="success">
                                Save
                            </Button>
                            <Button onClick={handleCloseedit} variant='contained' color="error">Close</Button>
                        </DialogActions>
                    </BootstrapDialog>
                </form>
            </>
        </Box>
    );
}

export default Salescomn;