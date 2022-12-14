import React, { useState } from 'react';
import { userStyle } from '../../PageStyle';
import {
    Box, Grid, FormControl, InputLabel, OutlinedInput, Select, MenuItem,
    Typography, Autocomplete, TextField, FormGroup, FormControlLabel, Checkbox,
    Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button,
    Dialog, DialogTitle, DialogContent, DialogActions, IconButton, InputAdornment, Tooltip
} from '@mui/material';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import MUIEditor, { MUIEditorState } from "react-mui-draft-wysiwyg";
import { FaPlus } from "react-icons/fa";
import { FcInfo } from "react-icons/fc";
import { StyledTableRow, StyledTableCell} from '../../Table';


function Draftsearchmod() {


    // ****** Sales Modal Textfield ****** //
    // ****** Add Modal ****** //
    const [draftsearchmod, setDraftSearchmod] = useState(false);

    const draftPlusOpen = () => {
        setDraftSearchmod(true);
    };
    const draftPlusClose = () => {
        setDraftSearchmod(false);
    };


    // Text Editor
    const [editorState, setEditorState] = useState(
        MUIEditorState.createEmpty(),
    )
    const onChange = newState => {
        setEditorState(newState)
    }

    //Text field
    const [draftSearch, setDraftSearch] = useState({
        draftSearchname: "", draftSearchsku: "", draftSearchbarcode: "", draftSearchunit: "",
        draftSearchbrand: "", draftSearchcategory: "", draftSearchsubcat: "", draftSearchbusinessloc: "",
        draftSearchalert: "", draftSearchapplicable: "", draftSearchsellingtax: "", draftSearchproducttype: "",
        draftSearchexc: "", draftSearchinc: "", draftSearchmarg: "", draftSearchexctax: "", draftSearchinctax: "",

    });

    // ****** Multi Select ****** //
    const top100Films = [
        { title: 'xxxx' },
        { title: 'yyyy' },
        { title: 'zzzz' },
        { title: 'aaaa' },
        { title: 'ssss' },
        { title: 'xxxx' },
        { title: 'dddd' },
    ];



    return (
        <Box>
            <Box>
                <Grid sx={userStyle.spanIcons} ><AddCircleOutlineOutlinedIcon onClick={draftPlusOpen} /></Grid>
            </Box>

            <form action=''>
                <Dialog
                    onClose={draftPlusClose}
                    aria-labelledby="customized-dialog-title1"
                    open={draftsearchmod}
                    maxWidth="lg"
                >
                    <DialogTitle id="customized-dialog-title1" onClose={draftPlusClose}>
                        Add new product
                    </DialogTitle>
                    <DialogContent dividers>
                        <Box sx={userStyle.container}>
                            <Grid container spacing={2}>
                                <Grid item md={4} sm={6} xs={12}>
                                    <FormControl size="small" fullWidth >
                                        <InputLabel htmlFor="component-outlined" >Product Name *</InputLabel>
                                        <OutlinedInput
                                            id="component-outlined"
                                            value={draftSearch.draftSearchname}
                                            onChange={(e) => { setDraftSearch({ ...draftSearch, DraftSearchname: e.target.value }) }}
                                            label="Product Name *"
                                        />
                                    </FormControl>
                                </Grid>
                                <Grid item md={4} sm={6} xs={12}>
                                    <FormControl variant="outlined" size="small" fullWidth>
                                        <InputLabel htmlFor="outlined-adornment-password">SKU *</InputLabel>
                                        <OutlinedInput
                                            id="outlined-adornment-password"
                                            endAdornment={
                                                // <Tooltip classes={{ arrow: classes.arrow, tooltip: classes.tooltip }} arrow title='"Unique product id or Stock Keeping Unit Keep it blank to automatically generate sku.You can modify sku prefix in Business settings.' placement="top">
                                                    <InputAdornment position="end">
                                                        <IconButton
                                                            aria-label="toggle password visibility"
                                                            edge="end"
                                                            value={draftSearch.draftSearchsku}
                                                            onChange={(e) => { setDraftSearch({ ...draftSearch, DraftSearchsku: e.target.value }) }}
                                                        >
                                                            <FcInfo />
                                                        </IconButton>
                                                    </InputAdornment>
                                                // </Tooltip>
                                            }
                                            label="SKU *"
                                        />
                                    </FormControl>
                                </Grid>
                                <Grid item md={4} sm={6} xs={12}>
                                    <FormControl size="small" fullWidth>
                                        <InputLabel id="demo-select-small">Barcode type</InputLabel>
                                        <Select
                                            labelId="demo-select-small"
                                            id="demo-select-small"
                                            value={draftSearch.draftSearchbarcode}
                                            onChange={(e) => { setDraftSearch({ ...draftSearch, DraftSearchbarcode: e.target.value }) }}
                                            label="Barcode type"
                                        >
                                            <MenuItem value="">
                                                Code 128 (C128)
                                            </MenuItem>
                                            <MenuItem value={1}>Code 39 (C39)</MenuItem>
                                            <MenuItem value={2}>EAN-13</MenuItem>
                                            <MenuItem value={3}>EAN-8</MenuItem>
                                            <MenuItem value={4}>UPC-A</MenuItem>
                                            <MenuItem value={5}>UPC-E</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item md={4} sm={6} xs={12}>
                                    <FormControl size="small" fullWidth sx={{ display: 'flex' }}>
                                        <InputLabel id="demo-select-small">Unit *</InputLabel>
                                        <Select
                                            labelId="demo-select-small"
                                            id="demo-select-small"
                                            value={draftSearch.draftSearchunit}
                                            onChange={(e) => { setDraftSearch({ ...draftSearch, DraftSearchunit: e.target.value }) }} label="Unit *"
                                            fullWidth
                                        >
                                            <MenuItem value="">
                                                <em>Please Select</em>
                                            </MenuItem>
                                            <MenuItem value={1}>yyy</MenuItem>
                                            <MenuItem value={2}>xxx</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item md={4} sm={6} xs={12}>
                                    <FormControl size="small" fullWidth sx={{ display: 'flex' }}>
                                        <InputLabel id="demo-select-small">Brand</InputLabel>
                                        <Select
                                            labelId="demo-select-small"
                                            id="demo-select-small"
                                            value={draftSearch.draftSearchbrand}
                                            onChange={(e) => { setDraftSearch({ ...draftSearch, DraftSearchbrand: e.target.value }) }} label="Brand"
                                            fullWidth
                                        >
                                            <MenuItem value="">
                                                <em>Please Select</em>
                                            </MenuItem>
                                            <MenuItem value={1}>yyy</MenuItem>
                                            <MenuItem value={2}>xxx</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item md={4} sm={6} xs={12}></Grid>
                                <Grid item md={4} sm={6} xs={12}>
                                    <FormControl size="small" fullWidth>
                                        <InputLabel id="demo-select-small">Category</InputLabel>
                                        <Select
                                            labelId="demo-select-small"
                                            id="demo-select-small"
                                            value={draftSearch.draftSearchcategory}
                                            onChange={(e) => { setDraftSearch({ ...draftSearch, DraftSearchcategory: e.target.value }) }} label="Category"
                                        >
                                            <MenuItem value="">
                                                <em>Please Select</em>
                                            </MenuItem>
                                            <MenuItem value={1}>yyy</MenuItem>
                                            <MenuItem value={2}>xxx</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item md={4} sm={6} xs={12}>
                                    <FormControl size="small" fullWidth>
                                        <InputLabel id="demo-select-small">Sub Category</InputLabel>
                                        <Select
                                            labelId="demo-select-small"
                                            id="demo-select-small"
                                            value={draftSearch.draftSearchsubcat}
                                            onChange={(e) => { setDraftSearch({ ...draftSearch, DraftSearchsubcat: e.target.value }) }}
                                            label="Sub Category"
                                        >
                                            <MenuItem value="">
                                                <em>Please Select</em>
                                            </MenuItem>
                                            <MenuItem value={1}>yyy</MenuItem>
                                            <MenuItem value={2}>xxx</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item md={4} sm={6} xs={12}>
                                    <FormGroup>
                                        <span><FormControlLabel control={<Checkbox defaultChecked />} label="Manage Stock" />
                                            {/* <Tooltip classes={{ arrow: classes.arrow, tooltip: classes.tooltip }} arrow title="Enable or disable stock management for a product. Stock Management should be disable mostly for services. Example: Hair-Cutting, Repairing, etc." placement="top"> */}
                                                <IconButton>
                                                    <FcInfo />
                                                </IconButton>
                                            {/* </Tooltip> */}
                                        </span>
                                    </FormGroup>
                                </Grid>
                                <Grid item md={4} sm={6} xs={12}>
                                    <FormControl size="small" fullWidth >
                                        <InputLabel htmlFor="component-outlined" >Alert quantity</InputLabel>
                                        <OutlinedInput
                                            id="component-outlined"
                                            value={draftSearch.draftSearchname}
                                            onChange={(e) => { setDraftSearch({ ...draftSearch, DraftSearchname: e.target.value }) }}
                                            label="Alert quantity"
                                        />
                                    </FormControl>
                                </Grid>
                                <Grid item md={4} sm={6} xs={12}>
                                    <FormControl size="small" fullWidth>
                                        <Autocomplete
                                            multiple
                                            id="tags-outlined"
                                            options={top100Films}
                                            getOptionLabel={(option) => option.title}
                                            filterSelectedOptions
                                            renderInput={(params) => (
                                                <TextField
                                                    {...params}
                                                    label="Business Location"
                                                    placeholder="Favorites"
                                                />
                                            )}
                                            size="small" fullWidth
                                        />
                                    </FormControl>
                                </Grid>
                                <Grid item md={4} sm={6} xs={12}>
                                    <FormControl size="small" fullWidth >
                                        <InputLabel htmlFor="component-outlined" >Weight</InputLabel>
                                        <OutlinedInput
                                            id="component-outlined"
                                            value={draftSearch.draftSearchname}
                                            onChange={(e) => { setDraftSearch({ ...draftSearch, DraftSearchname: e.target.value }) }}
                                            label="Weight"
                                        />
                                    </FormControl>
                                </Grid>
                                <Grid item md={8} sm={12} xs={12}>
                                    <MUIEditor editorState={editorState} onChange={onChange} />
                                </Grid>
                                <Grid item md={4} sm={6} xs={12}></Grid>
                                <Grid item md={4} sm={12} xs={12}>
                                    <FormControl size="small" fullWidth>
                                        <InputLabel id="demo-select-small">Applicable Tax</InputLabel>
                                        <Select
                                            labelId="demo-select-small"
                                            id="demo-select-small"
                                            value={draftSearch.draftSearchapplicable}
                                            onChange={(e) => { setDraftSearch({ ...draftSearch, DraftSearchapplicable: e.target.value }) }}
                                            label="Applicable Tax"
                                        >
                                            <MenuItem value="">
                                                <em>None</em>
                                            </MenuItem>
                                            <MenuItem value={1}>yyy</MenuItem>
                                            <MenuItem value={2}>xxx</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item md={4} sm={12} xs={12}>
                                    <FormControl size="small" fullWidth>
                                        <InputLabel id="demo-select-small">Selling Price Tax Type *</InputLabel>
                                        <Select
                                            labelId="demo-select-small"
                                            id="demo-select-small"
                                            value={draftSearch.draftSearchsellingtax}
                                            onChange={(e) => { setDraftSearch({ ...draftSearch, DraftSearchsellingtax: e.target.value }) }}
                                            label="Selling Price Tax Type"
                                        >
                                            <MenuItem value="">
                                                Exclusive
                                            </MenuItem>
                                            <MenuItem value={1}>Inclusive</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item md={4} sm={12} xs={12}>
                                    <FormGroup>
                                        <span><FormControlLabel control={<Checkbox defaultChecked />} label="Enable Product description,  IMEI or Serial Number" />
                                            {/* <Tooltip classes={{ arrow: classes.arrow, tooltip: classes.tooltip }} arrow title="Enable or disable adding product description, IMEI or Serial number while selling products in POS screen"> */}
                                                <IconButton>
                                                    <FcInfo />
                                                </IconButton>
                                            {/* </Tooltip> */}
                                        </span>
                                    </FormGroup>
                                </Grid>
                                <Grid item md={4} sm={12} xs={12}>
                                    <FormGroup>
                                        <span><FormControlLabel control={<Checkbox defaultChecked />} label="Not for selling" />
                                            {/* <Tooltip classes={{ arrow: classes.arrow, tooltip: classes.tooltip }} arrow title="If Checked, product will not be displayed in sales screen for selling purposes"> */}
                                                <IconButton>
                                                    <FcInfo />
                                                </IconButton>
                                            {/* </Tooltip> */}
                                        </span>
                                    </FormGroup>
                                </Grid>
                                <Grid item md={8} sm={6} xs={12}></Grid>
                                <Grid item md={3} sm={6} xs={12}>
                                    <FormControl size="small" fullWidth >
                                        <InputLabel htmlFor="component-outlined" >Custom Field 1</InputLabel>
                                        <OutlinedInput
                                            id="component-outlined"
                                            value={draftSearch.draftSearchname}
                                            onChange={(e) => { setDraftSearch({ ...draftSearch, DraftSearchname: e.target.value }) }}
                                            label="Custom Field 1"
                                        />
                                    </FormControl>
                                </Grid>
                                <Grid item md={3} sm={6} xs={12}>
                                    <FormControl size="small" fullWidth >
                                        <InputLabel htmlFor="component-outlined" >Custom Field 2</InputLabel>
                                        <OutlinedInput
                                            id="component-outlined"
                                            value={draftSearch.draftSearchname}
                                            onChange={(e) => { setDraftSearch({ ...draftSearch, DraftSearchname: e.target.value }) }}
                                            label="Custom Field 2"
                                        />
                                    </FormControl>
                                </Grid>
                                <Grid item md={3} sm={6} xs={12}>
                                    <FormControl size="small" fullWidth >
                                        <InputLabel htmlFor="component-outlined" >Custom Field 3</InputLabel>
                                        <OutlinedInput
                                            id="component-outlined"
                                            value={draftSearch.draftSearchname}
                                            onChange={(e) => { setDraftSearch({ ...draftSearch, DraftSearchname: e.target.value }) }}
                                            label="Custom Field 3"
                                        />
                                    </FormControl>
                                </Grid>
                                <Grid item md={3} sm={6} xs={12}>
                                    <FormControl size="small" fullWidth >
                                        <InputLabel htmlFor="component-outlined" >Custom Field 4</InputLabel>
                                        <OutlinedInput
                                            id="component-outlined"
                                            value={draftSearch.draftSearchname}
                                            onChange={(e) => { setDraftSearch({ ...draftSearch, DraftSearchname: e.target.value }) }}
                                            label="Custom Field 4"
                                        />
                                    </FormControl>
                                </Grid>
                                <Grid item md={12} sm={12} xs={12} >
                                    <TableContainer component={Paper} fullWidth>
                                        <Table aria-label="simple table " sx={{ borderBlock: '1px solid #b97fd0' }} fullWidth>
                                            <TableHead fullWidth>
                                                <StyledTableRow fullWidth>
                                                    <StyledTableCell align="center" colSpan={2} fullWidth>Default Purchase Price</StyledTableCell>
                                                    <StyledTableCell align="center" fullWidth>x Margin (%)
                                                        {/* <Tooltip classes={{ arrow: classes.arrow, tooltip: classes.tooltip }} arrow sx={{ zIndex: '1' }} title="Single product: Product with no variations.
                                                    Variable product: Product with variations such as size, color etc.
                                                    Combo product: A combination of multiple products, also called bundle product" placement="top"> */}
                                                            <IconButton>
                                                                <FcInfo />
                                                            </IconButton>
                                                        {/* </Tooltip> */}
                                                    </StyledTableCell>
                                                    <StyledTableCell align="center" fullWidth>Default Selling Price</StyledTableCell>
                                                </StyledTableRow>
                                            </TableHead>
                                            <TableBody fullWidth>
                                                <StyledTableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }} fullWidth>
                                                    <StyledTableCell component="th" scope="row" fullWidth>
                                                        <FormControl size="small" fullWidth>
                                                            <InputLabel htmlFor="component-outlined">Exc. tax *</InputLabel>
                                                            <OutlinedInput
                                                                id="component-outlined"
                                                                value={draftSearch.draftSearchexc}
                                                                onChange={(e) => { setDraftSearch({ ...draftSearch, DraftSearchexc: e.target.value }) }}
                                                                label="Exc. tax *"
                                                            />
                                                        </FormControl>
                                                    </StyledTableCell>
                                                    <StyledTableCell align="center" fullWidth>
                                                        <FormControl size="small" fullWidth>
                                                            <InputLabel htmlFor="component-outlined">Inc. tax *</InputLabel>
                                                            <OutlinedInput
                                                                id="component-outlined"
                                                                value={draftSearch.draftSearchinc}
                                                                onChange={(e) => { setDraftSearch({ ...draftSearch, DraftSearchinc: e.target.value }) }}
                                                                label="Inc. tax *"
                                                            />
                                                        </FormControl>
                                                    </StyledTableCell>
                                                    <StyledTableCell align="center" fullWidth>
                                                        <FormControl size="small" fullWidth>
                                                            <InputLabel htmlFor="component-outlined"></InputLabel>
                                                            <OutlinedInput
                                                                id="component-outlined"
                                                                value={draftSearch.draftSearchmarg}
                                                                onChange={(e) => { setDraftSearch({ ...draftSearch, DraftSearchmarg: e.target.value }) }}
                                                                label="Marg"
                                                            />
                                                        </FormControl>
                                                    </StyledTableCell>
                                                    <StyledTableCell align="center" fullWidth>
                                                        <FormControl size="small" fullWidth>
                                                            <InputLabel htmlFor="component-outlined">Exc. tax *</InputLabel>
                                                            <OutlinedInput
                                                                id="component-outlined"
                                                                value={draftSearch.draftSearchexctax}
                                                                onChange={(e) => { setDraftSearch({ ...draftSearch, DraftSearchexctax: e.target.value }) }}
                                                                label="Exc. tax *"
                                                            />
                                                        </FormControl>
                                                        <FormControl size="small" fullWidth>
                                                            <InputLabel htmlFor="component-outlined">Inc. tax *</InputLabel>
                                                            <OutlinedInput
                                                                id="component-outlined"
                                                                value={draftSearch.draftSearchinctax}
                                                                onChange={(e) => { setDraftSearch({ ...draftSearch, DraftSearchinctax: e.target.value }) }}
                                                                label="Inc. tax *"
                                                            />
                                                        </FormControl>
                                                    </StyledTableCell>
                                                </StyledTableRow>
                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                </Grid>   <br />
                                <Grid item md={12} sm={12} xs={12} >
                                    <Typography variant='h6' sx={{ color: '#7009ab', }}>Add Opening Stock</Typography><br />
                                    <TableContainer component={Paper} fullWidth>
                                        <Table aria-label="simple table " sx={{ borderBlock: '1px solid #b97fd0' }} fullWidth>
                                            <TableHead fullWidth >
                                                <StyledTableRow fullWidth>
                                                    <StyledTableCell align="center" fullWidth>Location</StyledTableCell>
                                                    <StyledTableCell align="center" fullWidth>Quantity</StyledTableCell>
                                                    <StyledTableCell align="center" fullWidth>Unit Cost (Before Tax)</StyledTableCell>
                                                    <StyledTableCell align="center" fullWidth>Subtotal (Before Tax)</StyledTableCell>
                                                </StyledTableRow>
                                            </TableHead>
                                            <TableBody fullWidth>
                                                <StyledTableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }} fullWidth>
                                                    <StyledTableCell component="th" scope="row" fullWidth>xxxx</StyledTableCell>
                                                    <StyledTableCell align="center" fullWidth>
                                                        <FormControl size="small" fullWidth>
                                                            <OutlinedInput
                                                                id="component-outlined"
                                                                // value={draftSearch.draftSearchmarg}
                                                                // onChange={(e) => { setDraftSearch({ ...DraftSearch, draftSearchmarg: e.target.value }) }}
                                                                label="0"
                                                            />
                                                        </FormControl>
                                                    </StyledTableCell>
                                                    <StyledTableCell align="center" fullWidth>
                                                        <FormControl size="small" fullWidth>
                                                            <OutlinedInput
                                                                id="component-outlined"
                                                                // value={draftSearch.draftSearchmarg}
                                                                // onChange={(e) => { setDraftSearch({ ...DraftSearch, draftSearchmarg: e.target.value }) }}
                                                                label="0"
                                                            />
                                                        </FormControl>
                                                    </StyledTableCell>
                                                    <StyledTableCell align="center">0</StyledTableCell>
                                                </StyledTableRow>
                                                <StyledTableRow>
                                                    <StyledTableCell component="th" scope="row" fullWidth>yyyy</StyledTableCell>
                                                    <StyledTableCell align="center" fullWidth>
                                                        <FormControl size="small" fullWidth>
                                                            <OutlinedInput
                                                                id="component-outlined"
                                                                // value={draftSearch.draftSearchmarg}
                                                                // onChange={(e) => { setDraftSearch({ ...DraftSearch, draftSearchmarg: e.target.value }) }}
                                                                label="0"
                                                            />
                                                        </FormControl>
                                                    </StyledTableCell>
                                                    <StyledTableCell align="center" fullWidth>
                                                        <FormControl size="small" fullWidth>
                                                            <OutlinedInput
                                                                id="component-outlined"
                                                                // value={draftSearch.draftSearchmarg}
                                                                // onChange={(e) => { setDraftSearch({ ...DraftSearch, draftSearchmarg: e.target.value }) }}
                                                                label="0"
                                                            />
                                                        </FormControl>
                                                    </StyledTableCell>
                                                    <StyledTableCell align="center">0</StyledTableCell>
                                                </StyledTableRow>
                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                </Grid>
                            </Grid>
                        </Box>
                    </DialogContent>
                    <DialogActions>
                        <Button autoFocus variant='contained' color="success">Save </Button>
                        <Button onClick={draftPlusClose} variant='contained' color="error">Close</Button>
                    </DialogActions>
                </Dialog>
            </form>
        </Box>
    );
}

export default Draftsearchmod;