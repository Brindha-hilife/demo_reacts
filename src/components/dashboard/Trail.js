import React, { useEffect } from 'react';

const Trail = ({open,setOpen,drawerHandle}) => {
    // useEffect(()=> {
    //     console.log(props);
    // },[])
    
  return (
    <div>
        {/* <Trail open={open} setOpen={setOpen} drawerHandle = {handleDrawerClose}/> */}
        <p>Trail {open}</p>
        <button type="button" onClick={() => setOpen(true)}>Button 1</button>
        <button type="button" onClick={() => drawerHandle(false)}>Button 2</button>
    </div>
  )
}

export default Trail;


