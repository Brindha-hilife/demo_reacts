import React from 'react';
import {Box} from "@mui/material";
import { DatePicker } from 'rsuite';
import $ from "jquery";
import "rsuite/dist/rsuite.css";
function dateTimePicker(){
    return(
        <DatePicker
           format="dd/MM/yyyy HH:mm"
           calendarDefaultDate={new Date()}
           ranges={[ { label: 'Now', value: new Date() } ]}
           placeholder=""
           defaultValue={new Date()}
           size="md"
           style={{border: '1px solid #B97DF0', borderRadius: 7}}
        />
    );
}
export default dateTimePicker;