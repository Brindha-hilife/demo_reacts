export const PurchaseStyle = {
    container: {
        backgroundColor: 'rgb(255, 255, 255)',
        color: 'rgb(97, 97, 97)',
        transition: 'boxShadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
        borderRadius: '12px',
        overflow: 'hidden',
        border: '1px solid rgba(144, 202, 249, 0.46)',
        height: 'max-content',
        padding:'30px',
        // margin: '0px 20px',
    },
    filtercontainer:{
        backgroundColor: 'rgb(255, 255, 255)',
        color: 'rgb(97, 97, 97)',
        transition: 'none !important',
        borderRadius: '12px',
        overflow: 'hidden',
        border: 'none !important',
        padding:'15px',
        boxShadow: 'none !important',
         height: 'max-content',
         '& .MuiAccordion-root':{
            boxShadow: 'none !important',
         },
         '& .MuiOutlinedInput-notchedOutline': {
            border: '1px solid #B97DF0 !important',
        },
        //  margin: '0px 20px',
    },
    button_add: {
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
    button_grp : {
        backgroundColor: 'rgb(245 243 246) !important',
        color: '#7009AB !important',
        borderColor: '#ddd !important',
        margin: '1px !important',
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'center',
        fontSize: '12px !important',
    },
    button_edit : {
        backgroundColor: '#1572e8 !important',
        borderColor: '#1367d1 !important',
        color: '#fff !important',
        margin: '1px !important',
        marginRight: '5px !important',
        alignItems: 'center !important',
        textAlign: 'center !important',
        justifyContent: 'center !important',
        height: '30px !important',
        fontSize: '12px !important',
        fontWeight: '750 !important',
    },
    button_view : {
        background: '#11cdef !important',
        borderColor: '#0fb9d8 !important',
        color: '#fff !important',
        margin: '1px !important',
        marginRight: '5px !important',
        alignItems: 'center !important',
        textAlign: 'center !important',
        justifyContent: 'center !important',
        height: '30px !important',
        fontSize: '12px !important',
        fontWeight: '750 !important',
    },
    button_delete : {
        background: '#f5365c !important',
        borderColor: '#f41e48 !important',
        color: '#fff !important',
        margin: '1px !important',
        marginRight: '5px !important',
        alignItems: 'center !important',
        textAlign: 'center !important',
        justifyContent: 'center !important',
        height: '30px !important',
        fontSize: '12px !important',
        fontWeight: '750 !important',
    },
    grid_container:{
        justifyContent:'center',
    },
    UnitHeaderText:{
         fontFamily:"'Source Sans Pro','Helvetica Neue',Helvetica,Arial,sans-serif",
        fontSize: "23px",
        fontWeight: "400",
        margin:"10px 0px 10px 0px",
        color: 'rgb(94, 53, 177) !important',
    },
    tablecontainer:{
        border:'none',
        boxShadow:'none',
        '& .MuiTable-root':{
            marginTop: '20px !important',
        }
    }
}