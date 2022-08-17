import * as React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import './user.css';
import {Box, Container, Grid, FormControl, InputLabel, OutlinedInput,
    Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button,
    Dialog, DialogTitle, DialogContent, DialogActions, IconButton, TextareaAutosize
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

    // ****** Table Data ****** //
    function createData(name, calories, fat, carbs, protein) {
        return { name, calories, fat, carbs, protein };
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
    const [salesmodaladd, setSalesmodaladd] = React.useState(false);

    const handleClickOpenadd = () => {
        setSalesmodaladd(true);
    };
    const handleCloseadd = () => {
        setSalesmodaladd(false);
    };

    // Prefix
    const [prefixadd, setPrefixadd] = React.useState('');

    const handleChange1 = (event) => {
        setPrefixadd(event.target.value);
    };
    // First Name
    const [firstnameadd, setFirstnameadd] = React.useState('');

    const handleChange2 = (event) => {
        setFirstnameadd(event.target.value);
    };
    // Last Name
    const [lastnameadd, setLastnameadd] = React.useState('');

    const handleChange3 = (event) => {
        setLastnameadd(event.target.value);
    };
    // Email
    const [emailadd, setEmailadd] = React.useState('');

    const handleChange4 = (event) => {
        setEmailadd(event.target.value);
    };
    // Contact Number
    const [contactadd, setContactadd] = React.useState('');

    const handleChange5 = (event) => {
        setContactadd(event.target.value);
    };

    // Sales Commission Percentage
    const [salescomnadd, setSalescomnadd] = React.useState('');

    const handleChange6 = (event) => {
        setSalescomnadd(event.target.value);
    };

    // ****** Edit Modal ****** //
    const [salesmodaledit, setSalesmodaledit] = React.useState(false);

    const handleClickOpenedit = () => {
        setSalesmodaledit(true);
    };
    const handleCloseedit = () => {
        setSalesmodaledit(false);
    };

    // Prefix
    const [prefixedit, setPrefixedit] = React.useState('');

    const handleChange7 = (event) => {
        setPrefixedit(event.target.value);
    };
    // First Name
    const [firstnameedit, setFirstnameedit] = React.useState('');

    const handleChange8 = (event) => {
        setFirstnameedit(event.target.value);
    };
    // Last Name
    const [lastnameedit, setLastnameedit] = React.useState('');

    const handleChange9 = (event) => {
        setLastnameedit(event.target.value);
    };
    // Email
    const [emailedit, setEmailedit] = React.useState('');

    const handleChange10 = (event) => {
        setEmailedit(event.target.value);
    };
    // Contact Number
    const [contactedit, setContactedit] = React.useState('');

    const handleChange11 = (event) => {
        setContactedit(event.target.value);
    };

    // Sales Commission Percentage
    const [salescomnedit, setSalescomnedit] = React.useState('');

    const handleChange12 = (event) => {
        setSalescomnedit(event.target.value);
    };

    return (
        <Box>
            <Container sx={{ paddingTop: '10px' }}>

                <Grid display="flex">
                    <Typography variant="h5" >Suppliers</Typography>
                    <Typography variant='body2' sx={{ marginLeft: '10px', marginTop: '10px' }}>Manage your Suppliers</Typography>
                </Grid>
            </Container><br />
            <Container sx={{
                bgcolor: '#fff', height: '400px', borderTop: '5px solid #7009ab;', borderLeft: '0px',
                borderRight: '0px', borderBottom: '0px', borderRadius: '10px', boxShadow: '6px 6px 6px 9px #dedbdbae'
            }}>
                <Grid container spacing={10} sx={{ paddingTop: '30px' }}>
                    <Grid item md={6} sm={6} xs={6}>
                        <Typography variant="h6" >All your Suppliers</Typography>
                    </Grid>
                    <Grid item md={6} sm={6} xs={6} >
                        <Button className="users_addbtn"><AddIcon onClick={handleClickOpenadd} /> Add</Button>
                    </Grid>
                </Grid>
                <Grid container sx={{ marginTop: '20px', marginBottom: '20px', justifyContent: 'center' }}>
                    <Grid >
                        <Button className='users_btngrp'><FaFileCsv />&ensp;Export to CSV</Button>
                        <Button className='users_btngrp'><AiFillFileExcel />&ensp;Export to Excel</Button>
                        <Button className='users_btngrp'><FaPrint />&ensp;Print</Button>
                        <Button className='users_btngrp'><FaFilePdf />&ensp;Export to PDF</Button>
                    </Grid>

                </Grid>
                <TableContainer component={Paper}  >
                    <Table sx={{ padding: '20px' }} aria-label="simple table" id="salestable">
                        <TableHead align="left">
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell >Email</TableCell>
                                <TableCell >Contact Number</TableCell>
                                <TableCell >Address</TableCell>
                                <TableCell >Sales Commission Percentage&ensp;(%)</TableCell>
                                <TableCell >Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody align="left">
                            {rows.map((row) => (
                                <TableRow
                                    key={row.name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {row.name}
                                    </TableCell>
                                    <TableCell >{row.calories}</TableCell>
                                    <TableCell >{row.fat}</TableCell>
                                    <TableCell >{row.carbs}</TableCell>
                                    <TableCell>{row.protein}</TableCell>
                                    <TableCell >
                                        <Grid>
                                            <Button className='users_tbtnedit' onClick={handleClickOpenedit}><FaEdit />&ensp;Edit</Button>
                                            <Button className='users_tbtnview'><FaEye />&ensp;View</Button>
                                            <Button className='users_tbtndelt'><FaTrash />&ensp;Delete</Button>
                                        </Grid>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Container>

            {/************* Modal *************/}
            {/************* Add Modal *************/}
            <div>
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
                                        value={prefixadd}
                                        onChange={handleChange1}
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
                                        value={firstnameadd}
                                        onChange={handleChange2}
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
                                        value={lastnameadd}
                                        label="Last Name"
                                        type="text"
                                        onChange={handleChange3}
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item md={6} sm={12} xs={12}>
                                <FormControl size="small" fullWidth>
                                    <InputLabel id="demo-select-small">Email </InputLabel>
                                    <OutlinedInput
                                        labelId="demo-select-small"
                                        id="demo-select-small"
                                        value={emailadd}
                                        label="Email"
                                        type="email"
                                        onChange={handleChange4}
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item md={6} sm={12} xs={12}>
                                <FormControl size="small" fullWidth>
                                    <InputLabel id="demo-select-small">Contact Number </InputLabel>
                                    <OutlinedInput
                                        labelId="demo-select-small"
                                        id="demo-select-small"
                                        value={contactadd}
                                        label="Contact Number"
                                        type="number"
                                        onChange={handleChange5}
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
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item md={6} sm={12} xs={12}>
                                <FormControl size="small" fullWidth>
                                    <InputLabel id="demo-select-small">Sales Commission Percentage (%)</InputLabel>
                                    <OutlinedInput
                                        labelId="demo-select-small"
                                        id="demo-select-small"
                                        value={salescomnadd}
                                        label="Sales Commission Percentage (%)"
                                        type="number"
                                        onChange={handleChange6}
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
            </div>

            {/************* Edit Modal *************/}
            <div>
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
                                        value={prefixedit}
                                        onChange={handleChange7}
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
                                        value={firstnameedit}
                                        onChange={handleChange8}
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
                                        value={lastnameedit}
                                        label="Last Name"
                                        type="text"
                                        onChange={handleChange9}
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item md={6} sm={12} xs={12}>
                                <FormControl size="small" fullWidth>
                                    <InputLabel id="demo-select-small">Email </InputLabel>
                                    <OutlinedInput
                                        labelId="demo-select-small"
                                        id="demo-select-small"
                                        value={emailedit}
                                        label="Email"
                                        type="email"
                                        onChange={handleChange10}
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item md={6} sm={12} xs={12}>
                                <FormControl size="small" fullWidth>
                                    <InputLabel id="demo-select-small">Contact Number </InputLabel>
                                    <OutlinedInput
                                        labelId="demo-select-small"
                                        id="demo-select-small"
                                        value={contactedit}
                                        label="Contact Number"
                                        type="number"
                                        onChange={handleChange11}
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
                                        // sx={{border:'1px solid #b97df0 !important', padding:'10px'}}
                                        className='sample'
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item md={6} sm={12} xs={12}>
                                <FormControl size="small" fullWidth>
                                    <InputLabel id="demo-select-small">Sales Commission Percentage (%)</InputLabel>
                                    <OutlinedInput
                                        labelId="demo-select-small"
                                        id="demo-select-small"
                                        value={salescomnedit}
                                        label="Sales Commission Percentage (%)"
                                        type="number"
                                        onChange={handleChange12}
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
            </div>
        </Box>
    );
}

export default Salescomn;