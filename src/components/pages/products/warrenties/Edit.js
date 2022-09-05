import React, { useState } from 'react';
import { Box, Button, Grid, MenuItem, TextField, Dialog, DialogTitle, DialogContent, DialogActions, IconButton, Zoom } from '@mui/material';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import { userStyle } from '../../PageStyle';
import CloseIcon from '@mui/icons-material/Close';
import { FaEdit } from 'react-icons/fa';


// Dialog THEME
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

// ZOOM ANIMATION
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Zoom timeout={500} ref={ref} {...props} />;
});


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

//modal
BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};


function Warrentyedit() {

  //Add modal
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  // ******** Text field ******** //
  const [warrantyEdit, setWarrantyEdit] = useState({
    warrantyEditName: "", warrantyEditDescription: "", warrantyEditDuration: "", warrantyEditDurSelect: "",
  });


  return (
    <Box>
      <Button sx={userStyle.buttonedit} onClick={handleClickOpen}><FaEdit />&ensp;Edit</Button>

      <BootstrapDialog PaperProps={{
        style: {
          borderRadius: "10px"
        }
      }}
        onClose={handleClose}
        open={open}
        TransitionComponent={Transition}
        keepMounted
        aria-describedby="alert-dialog-slide-description"
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          Edit Warranty
        </BootstrapDialogTitle>
        <DialogContent dividers sx={userStyle.container}>
          <Box
            component="form"
            sx={{ '& .MuiTextField-root': { m: 1, maxWidth: '95%', minWidth: '95%', width: '400px' }, }}
            noValidate
            autoComplete="off"
          >
            <TextField
              required
              id="outlined-required"
              label="Name"
              size="small"
              value={warrantyEdit.warrantyEditName}
              onChange={(e) => { setWarrantyEdit({ ...warrantyEdit, warrantyEditName: e.target.value }) }}
            />
            <TextField
              placeholder="Description"
              label="Description"
              multiline
              rows={2}
              maxRows={4}
              value={warrantyEdit.warrantyEditDescription}
              onChange={(e) => { setWarrantyEdit({ ...warrantyEdit, warrantyEditDescription: e.target.value }) }}
            />
            <br />
            <Grid container spacing={0}>
              <Grid item xs={5}>
                <TextField
                  placeholder="Duration"
                  label="Duration *"
                  value={warrantyEdit.warrantyEditDuration}
                  onChange={(e) => { setWarrantyEdit({ ...warrantyEdit, warrantyEditDuration: e.target.value }) }}
                />
              </Grid>
              <Grid item xs={7}>
                <TextField
                  required
                  id="outlined-select-currency"
                  select
                  label="Please Select"
                  value={warrantyEdit.warrantyEditDurSelect}
                  onChange={(e) => { setWarrantyEdit({ ...warrantyEdit, warrantyEditDurSelect: e.target.value }) }}
                >
                  <MenuItem value={1}>Please Select</MenuItem>
                  <MenuItem value={1}>Days</MenuItem>
                  <MenuItem value={1}>Months</MenuItem>
                  <MenuItem value={1}>Years</MenuItem>
                </TextField>
              </Grid>
            </Grid>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" color="success" autoFocus>Save</Button>
          <Button variant="contained" color="error" autoFocus onClick={handleClose}>Close</Button>
        </DialogActions>
      </BootstrapDialog>
    </Box>
  );
}

export default Warrentyedit;