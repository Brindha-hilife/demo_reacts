export const StockStyle = {
    container : {
        backgroundColor: 'rgb(255, 255, 255)',
        color: 'rgb(97, 97, 97)',
        // transition: 'boxShadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
        borderRadius: '12px',
        overflow: 'hidden',
        // border: '1px solid rgba(144, 202, 249, 0.46)',
        boxShadow: 'none !important',
        height: 'max-content',
        padding:'30px',
        '& .MuiOutlinedInput-notchedOutline': {
            border: '1px solid #b97df0',
        },
    },
    spanIcons : {
        fontSize: '16px', 
        paddingTop: '10px !important', 
        paddingLeft: '11px',
        paddingRight: '1px',
        margin: 'auto', 
        border: '1px solid #b97df0', 
        width: '45px !important', 
        height: '40px', 
        borderRadius: '2px', 
        backgroundColor: 'white', 
        color: '#7009ab' ,
    },
    tableHead : {
        backgroundColor:"#f9f9f9 !important",
        color:'#525f7f !important',
        fontWeight:'bold !important',
        fontSize:'15px',
    },
    textInput : {
        padding: '20px',
        '& .MuiOutlinedInput-notchedOutline': {
            border: '1px solid #b97df0',
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
modalsavebtn:{
    backgroundColor: '#7009AB !important',
    color: 'white',
    marginRight: '5px !important',
    height: '40px !important',
    padding: '10px !important',
    fontWeight: '600 !important',
    borderRadius: '7px !important',
    float: 'right !important',
    border: '0px !important',
    '&:hover' : {
        backgroundColor: '#a958d8!important',
        border: '1px solid #7009AB !important',
        color: 'white',
    },
},
    exportBtnText:{
        borderRadius:" 3px !important",
        padding: "0",
        border:"1px solid #ddd !important",
        backgroundColor:" rgb(245 243 246) !important",
        color:" #7009AB !important",
        margin:"1px",
        textTransform:'Capitalize',
    },
    modalclosebtn:{
        borderRadius:" 2px !important",
        border:"1px solid #ddd !important",
        backgroundColor: "#f4f4f4 !important",
        color:" #444 !important",
       
    },
    tablecontainer:{
        boxShadow:'none !important',
        justifyContent: 'center',
        textAlign: 'center',
    },
    ImportContainer:{

        backgroundColor: 'rgb(255, 255, 255)',
        color: 'rgb(97, 97, 97)',
        transition: 'boxShadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
        borderRadius: '12px',
        overflow: 'hidden',
        border: '1px solid rgba(144, 202, 249, 0.46)',
        height: 'max-content',
        padding:'30px',

    },
    importheadtext:{
        fontSize:'20px !important',
        color: 'rgb(94, 53, 177) !important',
    },
    importsubheadtext:{
        margin:'0',
    },
    importTabledata:{
        fontSize: '14px',
        color: '#0b1e4c !important',
    },
    importTableBoldText:{
        fontSize: 'small',
        fontWeight: 'bolder',
    },
    ImporTHeaderText:{
        fontFamily:" 'Source Sans Pro','Helvetica Neue',Helvetica,Arial,sans-serif",
        fontSize: '23px !important',
        fontWeight: '400',
        color: 'rgb(94, 53, 177) !important',
        marginLeft:'15px',
    },
}