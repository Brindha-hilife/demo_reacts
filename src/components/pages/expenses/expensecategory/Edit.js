import React, { useState } from 'react';
import { Box, Grid, FormControl, InputLabel, OutlinedInput, Button, Dialog, DialogTitle, DialogContent, DialogActions,  } from '@mui/material';
import { expStyle } from '../Expensestyle';
import { FaEdit } from 'react-icons/fa';

function Expcategoryadd() {

    // ****** Sales Modal Textfield ****** //
    // ****** Add Modal ****** //
    const [categorymodedit, setCategorymodedit] = useState(false);

    const openEdit = () => {
        setCategorymodedit(true);
    };
    const closeEdit = () => {
        setCategorymodedit(false);
    };

    const [cateEditForm, setCateEditForm] = useState({
        cateEditFormName: "", cateEditFormCode: "",
    });

    return (
        <Box>
            <Box>
                <Button sx={expStyle.buttonEdit} onClick={openEdit} ><FaEdit />&ensp;Edit</Button>
            </Box>
            <form action=''>
                <Dialog
                    onClose={closeEdit}
                    aria-labelledby="customized-dialog-title1"
                    open={categorymodedit}
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
                    <DialogTitle id="customized-dialog-title1" onClose={closeEdit}>
                        Edit Expense Category
                    </DialogTitle>
                    <DialogContent dividers>
                        <Grid container spacing={3}>
                            <Grid item md={12} sm={12} xs={12}>
                                <FormControl size="small" fullWidth>
                                    <InputLabel htmlFor="component-outlined">Category name *</InputLabel>
                                    <OutlinedInput
                                        id="component-outlined"
                                        value={cateEditForm.cateEditFormName}
                                        onChange={(e) => { setCateEditForm({ ...cateEditForm, CateEditFormName: e.target.value }) }}
                                        label="Category name *"
                                        type="text"
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item md={12} sm={12} xs={12}>
                                <FormControl size="small" fullWidth>
                                    <InputLabel htmlFor="component-outlined">Category Code</InputLabel>
                                    <OutlinedInput
                                        id="component-outlined"
                                        value={cateEditForm.cateEditFormCode}
                                        onChange={(e) => { setCateEditForm({ ...cateEditForm, CateEditFormCode: e.target.value }) }}
                                        label="Category Code"
                                        type="text"
                                    />
                                </FormControl>
                            </Grid>
                        </Grid>
                    </DialogContent>
                    <DialogActions>
                        <Button autoFocus variant='contained' color="success">
                            Save
                        </Button>
                        <Button onClick={closeEdit} variant='contained' color="error">Close</Button>
                    </DialogActions>
                </Dialog>
            </form>
        </Box>
    );
}

export default Expcategoryadd;