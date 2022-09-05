export const contactstyle = {
    container: {
        backgroundColor: 'rgb(255, 255, 255)',
        color: 'rgb(97, 97, 97)',
        // transition: 'boxShadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
        borderRadius: '12px',
        overflow: 'hidden',
        // border: '1px solid rgba(144, 202, 249, 0.46)',
        height: 'max-content',
        padding:'30px',
    },
    filtercontainer:{
        backgroundColor: 'rgb(255, 255, 255)',
        color: 'rgb(97, 97, 97)',
        transition: 'none !important',
        borderRadius: '12px !important',
        overflow: 'hidden',
        border: 'none !important',
        boxShadow: 'none !important',
        padding:'15px',
        height: 'max-content',
        '& .MuiButtonBase-root-MuiAccordionSummary-root':{
            padding: 0,
        }
    },
    boxheadertxt:{
        fontFamily: "'Source Sans Pro',sans-serif",
        fontSize: "18px",
        margin: "0",
        lineHeight: "1",
        color:" #32325d !important",
    },
    ButtonAdd: {
        backgroundColor: '#7009AB !important',
        color: 'white !important',
        marginRight: '5px !important',
        height: '40px !important',
        padding: '10px !important',
        fontReight: '600 !important',
        borderRadius: '7px !important',
        float: 'right !important',
        border: '0px !important',
        '&:hover': {
            backgroundColor: '#9f3ed7 !important',
        }
    },
    button_grp: {
        backgroundColor:" rgb(245 243 246) !important",
        color: '#7009AB !important',
        borderColor: '#ddd !important',
        margin: '1px !important',
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'center',
        fontSize: '12px !important',
    },
    container_more: {
        marginTop: '20px',
        marginBottom: '20px',
        justifyContent: 'center'
    },
    grid_icons: {
        fontSize: '24px',
        paddingLeft: '4px',
        paddingRight: '6px',
        paddingTop: '4px',
        margin: 'auto',
        border: '1px solid #B97DF0',
        width: '33px',
        height: '41px',
        borderRadius: '2px',
        backgroundColor: '#fff',
        color: '#7009AB',
    },
    table_grid: {
        marginTop: '20px',
        marginBottom: '20px',
        justifyContent: 'center'
    },
    adddialogue:{
        '& .MuiOutlinedInput-notchedOutline': {
            border: '1px solid #B97DF0',
        },

        '& .MuiDialog-container': {
            '& .MuiPaper-root': {
                width: '100%',
                maxWidth: '950px',
                minHeight: '450px',

            },
        },
    },
    UnitHeaderText:{
        fontFamily:"'Source Sans Pro','Helvetica Neue',Helvetica,Arial,sans-serif",
        fontSize: "23px",
        fontWeight: "400",
        margin:"10px 0px 10px 0px",
        color: 'rgb(94, 53, 177) !important',
    },
    UnitSubHeaderText:{
        fontSize: "15px",
        display: "inline-block",
        paddingLeft: "4px",
        fontWeight: "300",
        lineHeight: "1",
        color: 'rgb(94, 53, 177) !important',
    },
}







