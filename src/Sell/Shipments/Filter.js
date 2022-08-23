import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import { Box, Typography, Grid, FormControl, InputLabel, Select, MenuItem, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { sellStyle } from '../Sellstyle';
import { FaFilter } from "react-icons/fa";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";


function Shipmentfilter() {

    // Filter Textarea
    const [shipmentForm, setShipmentForm] = useState({
        shipmentFormBusinessLoc: "", shipmentFormCustomer: "", shipmentFormUser: "", shipmentFormPayStatus: "",
        shipmentFormShipStatus: "",
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
            <Accordion  expanded={expanded === "panel1"} onChange={filterPanel("panel1")}>
                <AccordionSummary
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography sx={sellStyle.filterHead}><FaFilter sx={{p:0}}/> Filter</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Grid container spacing={2}>
                        <Grid item md={3} sm={12} xs={12}>
                        <FormControl size="small" fullWidth>
                                <InputLabel id="demo-select-small">Business Location</InputLabel>
                                <Select
                                    labelId="demo-select-small"
                                    id="demo-select-small"
                                    value={shipmentForm.shipmentFormBusinessLoc}
                                    onChange={(e) => { setShipmentForm({ ...shipmentForm, ShipmentFormBusinessLoc: e.target.value }) }}
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
                                    value={shipmentForm.shipmentFormCustomer}
                                    onChange={(e) => { setShipmentForm({ ...shipmentForm, ShipmentFormCustomer: e.target.value }) }}
                                    label="Customer"
                                >
                                    <MenuItem value="">All </MenuItem> 
                                    <MenuItem value={1}>xxx</MenuItem>
                                    <MenuItem value={2}>yyy</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item md={3} sm={12} xs={12}>
                            
                        </Grid>
                        <Grid item md={3} sm={12} xs={12}>
                        <FormControl size="small" fullWidth>
                                <InputLabel id="demo-select-small">User</InputLabel>
                                <Select
                                    labelId="demo-select-small"
                                    id="demo-select-small"
                                    value={shipmentForm.shipmentFormUser}
                                    onChange={(e) => { setShipmentForm({ ...shipmentForm, ShipmentFormUser: e.target.value }) }}
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
                                <InputLabel id="demo-select-small">Payment Status</InputLabel>
                                <Select
                                    labelId="demo-select-small"
                                    id="demo-select-small"
                                    value={shipmentForm.shipmentFormPayStatus}
                                    onChange={(e) => { setShipmentForm({ ...shipmentForm, ShipmentFormPayStatus: e.target.value }) }}
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
                                <InputLabel id="demo-select-small">Shipping Status</InputLabel>
                                <Select
                                    labelId="demo-select-small"
                                    id="demo-select-small"
                                    value={shipmentForm.shipmentFormShipStatus}
                                    onChange={(e) => { setShipmentForm({ ...shipmentForm, ShipmentFormShipStatus: e.target.value }) }}
                                    label="Shipping Status"
                                >
                                    <MenuItem value="">All </MenuItem> 
                                    <MenuItem value={1}>xxx</MenuItem>
                                    <MenuItem value={2}>yyy</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                    </Grid>
                </AccordionDetails>
            </Accordion>
        </Box>
    );
}

export default Shipmentfilter;