import React, { useState } from 'react';
import { Box, Button, TextField, Dialog, DialogTitle, DialogContent, DialogActions, Tooltip, IconButton, Zoom, Checkbox, Grid, MenuItem, FormGroup, FormControlLabel } from '@mui/material';
import { FcInfo } from 'react-icons/fc';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import { userStyle } from '../../PageStyle';
import CloseIcon from '@mui/icons-material/Close';

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

function Unitcreate() {
  const [hidden, setHidden] = useState(true);

  //Add modal
  const [openAdd, setOpenAdd] = useState(false);
  const openAddMod = () => {
    setOpenAdd(true);
  };
  const closeAddMod = () => {
    setOpenAdd(false);
  };

  // ******** Text field ******** //
  const [unitAdd, setUnitAdd] = useState({
    unitAddName: "", unitAddShortName: "", unitAddAllowDecimal: "", unitAddAddCheckbox: "", unitAddTimesBaseUnit: "", unitAddSelectBaseUnit: ""
  });

  return (
    <Box>
      <Button sx={userStyle.buttonadd} onClick={openAddMod}>ADD</Button>

      <BootstrapDialog PaperProps={{
        style: {
          borderRadius: "10px"
        }
      }}
        onClose={closeAddMod}
        open={openAdd}
        TransitionComponent={Transition}
        keepMounted
        aria-describedby="alert-dialog-slide-description"
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={closeAddMod}>
          Add Unit
        </BootstrapDialogTitle>
        <DialogContent dividers sx={userStyle.container}>
          <Box
            component="form"
            sx={{
              '& .MuiTextField-root': { m: 1, maxWidth: '95%', minWidth: '95%', width: '400px' },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              required
              id="outlined-required"
              label="Name:"
              size="small"
              value={unitAdd.unitAddName}
              onChange={(e) => { setUnitAdd({ ...unitAdd, unitAddName: e.target.value }) }}
            />
            <TextField
              required
              id="outlined-required"
              label="Short Name *"
              size="small"
              value={unitAdd.unitAddShortName}
              onChange={(e) => { setUnitAdd({ ...unitAdd, unitAddShortName: e.target.value }) }}
            />
            <TextField
              required
              id="outlined-select-currency"
              select
              label="Allow Decimal"
              size="small"
              value={unitAdd.unitAddAllowDecimal}
              onChange={(e) => { setUnitAdd({ ...unitAdd, unitAddAllowDecimal: e.target.value }) }}
            >
              <MenuItem value={1}> Please Select</MenuItem>
              <MenuItem value={2}> Yes</MenuItem>
              <MenuItem value={3}> No</MenuItem>

            </TextField>
            <FormGroup>
              <span ><FormControlLabel onClick={() => setHidden(s => !s)} control={<Checkbox />}
                value={unitAdd.unitAddAddCheckbox}
                onChange={(e) => { setUnitAdd({ ...unitAdd, unitAddAddCheckbox: e.target.value }) }}
                label="Add as multiple of other unit " />
                <Tooltip title="Define this unit at the multiple of other units Ex: 1 dozen = 12 pieces" arrow>
                  <IconButton>
                    <FcInfo />
                  </IconButton>
                </Tooltip>
              </span>
            </FormGroup><br />
            {!hidden ?
              <Grid container spacing={2}>
                <Grid item xs={2}><br />
                  <label htmlFor="">1 Unit :</label>
                </Grid>
                <Grid item xs={5}>
                  <TextField
                    required
                    id="outlined-required"
                    label="Short name:"
                    size="small"
                    value={unitAdd.unitAddTimesBaseUnit}
                    onChange={(e) => { setUnitAdd({ ...unitAdd, unitAddTimesBaseUnit: e.target.value }) }}
                  />
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    required
                    id=""
                    select
                    label="Select base unit"
                    size="small"
                    value={unitAdd.unitAddSelectBaseUnit}
                    onChange={(e) => { setUnitAdd({ ...unitAdd, unitAddSelectBaseUnit: e.target.value }) }}
                  >
                    <MenuItem value={1}>Select base unit</MenuItem>
                    <MenuItem value={2}>Pieces (Pc(s))</MenuItem>
                  </TextField>
                </Grid>
              </Grid>
              : null}
          </Box>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" color="success" autoFocus>Save</Button>
          <Button variant="contained" color="error" autoFocus onClick={closeAddMod}>Close</Button>
        </DialogActions>
      </BootstrapDialog>
    </Box>
  );
}

export default Unitcreate;