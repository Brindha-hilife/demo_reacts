import Cardbg from '../images/dashboardbg/drk-pur-bg.png';
import Cardbgo from '../images/dashboardbg/lig-pur-bg.png';
import Cardbgt from '../images/dashboardbg/mid-blue-bg.png';
import Cardbgth from '../images/dashboardbg/dark-blue-bg.png';
import Cardbgfo from '../images/dashboardbg/lig-blue-bg.png';


export const dashboardstyle = {
    grid: {
        flexGrow: 1,
        padding: '30px',
        marginLeft: '10px',
        marginRight: '10px',
    },
    headlocation:{
        display: 'flex',
    }, 
    container:{
      height: '180px',
      transition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
      border: 'none rgba(144, 202, 249, 0.46)',
      backgroundImage: `url(${Cardbg})`,
      backgroundSize: 'cover !important',
      color: 'white',
      fontSize: '15px',
      borderRadius: '13px',
      fontWeight: '800',
      overflow: 'hidden',
      position: 'relative',
      '&:hover':{
          backgroundColor: 'rgb(94, 53, 177)',
          boxShadow: '10px 10px #d8d3d3',
      },
      '@media (max-width: 780px)' : {
          fontSize: '10px',
      }
    },
      containerOne:{
        height: '180px',
        transition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
        border: 'none rgba(144, 202, 249, 0.46)',
        backgroundImage: `url(${Cardbgo})`,
        backgroundSize: 'cover !important',
        color: 'white',
        fontSize: '15px',
        borderRadius: '13px',
        fontWeight: '800',
        overflow: 'hidden',
        position: 'relative',
        '&:hover':{
            backgroundColor: 'rgb(94, 53, 177)',
            boxShadow: '10px 10px #d8d3d3',
        },
        '@media (max-width: 780px)' : {
            fontSize: '10px',
          }
      },
      containerTwo:{
        height: '180px',
        transition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
        border: 'none rgba(144, 202, 249, 0.46)',
        backgroundImage: `url(${Cardbgt})`,
        backgroundSize: 'cover !important',
        color: 'white',
        fontSize: '15px',
        borderRadius: '13px',
        fontWeight: '800',
        overflow: 'hidden',
        position: 'relative',
        '&:hover':{
            backgroundColor: 'rgb(94, 53, 177)',
            boxShadow: '10px 10px #d8d3d3',
        },
        '@media (max-width: 780px)' : {
            fontSize: '10px',
          }
      },
      containerThree:{
        height: '180px',
        transition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
        border: 'none rgba(144, 202, 249, 0.46)',
        backgroundImage: `url(${Cardbgth})`,
        backgroundSize: 'cover !important',
        color: 'white',
        fontSize: '15px',
        borderRadius: '13px',
        fontWeight: '800',
        overflow: 'hidden',
        position: 'relative',
        '&:hover':{
            backgroundColor: 'rgb(94, 53, 177)',
            boxShadow: '10px 10px #d8d3d3',
        },
        '@media (max-width: 780px)' : {
            fontSize: '10px',
          }
      },
      containerFour:{
        height: '180px',
        transition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
        border: 'none rgba(144, 202, 249, 0.46)',
        backgroundImage: `url(${Cardbgfo})`,
        backgroundSize: 'cover !important',
        color: 'white',
        fontSize: '15px',
        borderRadius: '13px',
        fontWeight: '800',
        overflow: 'hidden',
        position: 'relative',
        '&:hover':{
            backgroundColor: 'rgb(94, 53, 177)',
            boxShadow: '10px 10px #d8d3d3',
        },
        '@media (max-width: 780px)' : {
            fontSize: '10px',
          }
      },
      conetntbox:{
        height: '20%',
        margin: '15px 20px',
        justifyContent: 'space-around',
      },
      contentboxicon:{
        marginTop: '2px'
      }

}
