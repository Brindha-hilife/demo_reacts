import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import { Box, Grid, Button, Dialog, DialogTitle, DialogContent, DialogActions, IconButton, Typography, FormControl, InputLabel, OutlinedInput, Select, MenuItem, } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { FaExternalLinkAlt } from 'react-icons/fa';

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

function Poslinkmod() {

    const [posLinkMod, setPosLinkMod] = useState(false);

    const posLinkModOpen = () => {
        setPosLinkMod(true);
    };
    const posLinkModClose = () => {
        setPosLinkMod(false);
    };

    return (
        <Box>
            <FaExternalLinkAlt onClick={posLinkModOpen} />
            <BootstrapDialog
                onClose={posLinkModClose}
                aria-labelledby="customized-dialog-title"
                open={posLinkMod}
            >
                <BootstrapDialogTitle id="customized-dialog-title" onClose={posLinkModClose}>
                    Subscribe
                </BootstrapDialogTitle>
                <DialogContent dividers>
                    <Box>
                        <from action=''>
                            <Grid container spacing={3}>
                                <Grid item xs={12} sm={12} md={6} >
                                    <Grid sx={{ display: 'flex' }}  >
                                        <Grid sx={{ width: '210px' }}>
                                            <FormControl size="small" fullWidth >
                                                <InputLabel id="demo-select-small">Subscriptin Interval *</InputLabel>
                                                <OutlinedInput
                                                    id="component-outlined"
                                                    // value={posAdd.posAddbrand}
                                                    // onChange={(e) => { setPosAdd({ ...posAdd, PosAddbrand: e.target.value }) }}
                                                    type="search"
                                                    label="Subscriptin Interval *"
                                                />
                                            </FormControl>
                                        </Grid>
                                        <FormControl size="small" fullWidth sx={{ display: 'flex' }}>
                                            <InputLabel id="demo-select-small">Please Select</InputLabel>
                                            <Select
                                                labelId="demo-select-small"
                                                id="demo-select-small"
                                                label="Please Select"
                                                // value={posCus.posCusPayTerm}
                                                // onChange={(event) => { setPosCus({ ...posCus, posCusPayTerm: event.target.value }) }}
                                                fullWidth
                                            >
                                                <MenuItem value="">
                                                    <em>Please Select</em>
                                                </MenuItem>
                                                <MenuItem value={1}>month</MenuItem>
                                                <MenuItem value={2}>Days</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                </Grid>
                                <Grid item md={6} sm={12} xs={12}>
                                    <FormControl size="small" fullWidth >
                                        <InputLabel id="demo-select-small">No. of Repetitions</InputLabel>
                                        <OutlinedInput
                                            id="component-outlined"
                                            // value={posAdd.posAddbrand}
                                            // onChange={(e) => { setPosAdd({ ...posAdd, PosAddbrand: e.target.value }) }}
                                            type="search"
                                            label="No. of Repetitions"
                                        />
                                    </FormControl>
                                    <Typography varient="body2" sx={{ mt: '5px' }}>If blank invoice will be generated infinite times</Typography>
                                </Grid>
                            </Grid>
                        </from>
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button variant='contained' color='error' autoFocus onClick={posLinkModClose}>
                        Close
                    </Button>
                </DialogActions>
            </BootstrapDialog>
        </Box>
    );
}

export default Poslinkmod;