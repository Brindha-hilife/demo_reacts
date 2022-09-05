import React, { useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { SidebarItems } from './SidebarListItem';
import { useParams, useNavigate } from "react-router-dom";

const Sidebarlist = ({open}) => {
  const navigate = useNavigate();
  const [sidebarList, setSidebarList] = useState({user:"",contact:"",product:"",
  purchase:"",sell:"",stockTransfer:"",stockAdjustment:"",expenses:"",report:"",setting:""});
  const [selectedList, setSelectedList] = useState("");
  const [closeList,setCloseList] = useState(false);
  return (
    <>
     <List >
          {SidebarItems.map((item, index) => (
            <ListItem key={item.id} disablePadding sx={{ display: 'block' }} 
            onClick={() => navigate(item.route)}
            >
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                  }}
                  onClick={(e) =>{ 
                    setSelectedList(item.label)
                    setCloseList(!closeList)
                  }}
                >
                  <ListItemIcon sx={{ minWidth: 0,mr: open ? 3 : 'auto',justifyContent: 'center', color: 'rgb(94, 53, 177)',}}>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText primary={item.label} sx={{ marginLeft: '-10px', opacity: open ? 1 : 0 }} />
                  <ListItemIcon sx={{marginLeft: '10px',}}>{item.arrow}</ListItemIcon>
                </ListItemButton>
              { item.children && item.label == selectedList && closeList  ?  (
                 <>
                  <List sx={{ 
                    color: '#797676', 
                    paddingTop: 0, 
                    paddingBottom: 0,
                    margin:'0px !important',
                    }}>
                    {item.children.map((child, index) => (
                      <ListItem key={child.id} disablePadding 
                      onClick={() => navigate(child.route)}
                      >
                        <ListItemButton 
                        sx={{
                          minHeight: 48,
                          justifyContent: open ? 'initial' : 'center',
                          px: 2.5,
                        }}
                        >
                          <ListItemIcon >{child.icon}</ListItemIcon>
                          <ListItemText primary={child.label} sx={{ marginLeft: '-25px', fontSize: '16px', opacity: open ? 1 : 0 }}/>
                        </ListItemButton>
                      </ListItem>
                    ))}
                  </List>
                 </>

                ) : null}
            </ListItem>
          ))}
        </List> 
    </>
  )
}

export default Sidebarlist;