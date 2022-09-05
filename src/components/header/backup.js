import React, { useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
// icons
import FenceOutlinedIcon from '@mui/icons-material/FenceOutlined';
import GroupOutlined from '@mui/icons-material/GroupOutlined';
import ContactsOutlined from '@mui/icons-material/ContactsOutlined';
import CategoryOutlined from '@mui/icons-material/CategoryOutlined';
import CloudUploadOutlined from '@mui/icons-material/CloudUploadOutlined';
import CloudDownloadOutlined from '@mui/icons-material/CloudDownloadOutlined';
import LocalShippingOutlined from '@mui/icons-material/LocalShippingOutlined';
import AssessmentOutlined from '@mui/icons-material/AssessmentOutlined';
import SettingsOutlined from '@mui/icons-material/SettingsOutlined';
import DoDisturbOnOutlined from '@mui/icons-material/DoDisturbOnOutlined';
import HorizontalSplitOutlined from '@mui/icons-material/HorizontalSplitOutlined'; 
import FiberManualRecord from '@mui/icons-material/FiberManualRecord';
import ArrowDropDown from '@mui/icons-material/ArrowDropDown';
import { Link } from 'react-router-dom';
import { sidebarstyle } from './Style';

const Sidebarlist = ({open}) => {
  const [user, setUser] = useState(false);
  const [contact, setContact] = useState(false);
  const [product, setProduct] = useState(false);
  const [purchase, setPurchase] = useState(false);
  const [sell, setSell] = useState(false);
  const [stockTransfer, setStockTransfer] = useState(false);
  const [stockAdjustment, setStockAdjustment] = useState(false);
  const [expenses, setExpenses] = useState(false);
  const [report, setReport] = useState(false);
  const [setting, setSetting] = useState(false);
  // const [listChild, setListChild] = useState(false);
  return (
    <>
      <List sx={sidebarstyle.sidebarlist}>
        <ListItem  disablePadding sx={{ display: 'block' }}>
          <Link to="/dashboard" style={{color: 'rgb(97, 97, 97)', textDecoration: 'none'}}>
            <ListItemButton sx={{ minHeight: 48,justifyContent: open ? 'initial' : 'center', px: 2.5,}}>
              <ListItemIcon sx={{minWidth: 0,justifyContent: 'center'}} ><FenceOutlinedIcon /></ListItemIcon>
              <ListItemText>Home</ListItemText>
          </ListItemButton>
          </Link>
        </ListItem>
        <ListItem  disablePadding sx={{ display: 'block' }}>
          <ListItemButton sx={{ minHeight: 48,justifyContent: open ? 'initial' : 'center', px: 2.5,}} onMouseOver={ () => setUser(s=>!s) }>
            <ListItemIcon sx={{minWidth: 0,justifyContent: 'center',}} ><GroupOutlined /></ListItemIcon>
            <ListItemText>User Management</ListItemText>
            <ListItemIcon><ArrowDropDown /></ListItemIcon>
          </ListItemButton>
          {/* Inner user management list */}
          { !user ? null : (
                <List sx={sidebarstyle.sidebarinnerlist}>
                  <ListItem  disablePadding sx={{ display: 'block', }}>
                    <Link to="/user/userlist" style={{color: 'rgb(172 163 163)', textDecoration: 'none'}}>
                      <ListItemButton sx={{ minHeight: 48,justifyContent: open ? 'initial' : 'center', px: 2.5,}}>
                        <ListItemIcon sx={{minWidth: 0,justifyContent: 'center',}} ><FiberManualRecord /></ListItemIcon>
                        <ListItemText>Users</ListItemText>
                      </ListItemButton>
                      </Link>
                  </ListItem>
                  <ListItem  disablePadding sx={{ display: 'block' }}>
                    <Link to="/user/rolelist" style={{color: 'rgb(172 163 163)', textDecoration: 'none'}}>
                      <ListItemButton sx={{ minHeight: 48,justifyContent: open ? 'initial' : 'center', px: 2.5,}}>
                        <ListItemIcon sx={{minWidth: 0,justifyContent: 'center',}} ><FiberManualRecord /></ListItemIcon>
                        <ListItemText>Roles</ListItemText>
                      </ListItemButton>
                      </Link>
                  </ListItem>
                  <ListItem  disablePadding sx={{ display: 'block' }}>
                    <Link to="/user/saleslist" style={{color: 'rgb(172 163 163)', textDecoration: 'none'}}>
                      <ListItemButton sx={{ minHeight: 48,justifyContent: open ? 'initial' : 'center', px: 2.5,}}>
                        <ListItemIcon sx={{minWidth: 0,justifyContent: 'center',}} ><FiberManualRecord /></ListItemIcon>
                        <ListItemText>Sales Commission Agent</ListItemText>
                      </ListItemButton>
                    </Link>
                  </ListItem>
                </List>
              ) }
        </ListItem>
        <ListItem  disablePadding sx={{ display: 'block' }}>
          <ListItemButton sx={{ minHeight: 48,justifyContent: open ? 'initial' : 'center', px: 2.5,}} onMouseOver={ () => setContact(s=>!s) }>
            <ListItemIcon sx={{minWidth: 0,justifyContent: 'center',}} ><ContactsOutlined /></ListItemIcon>
            <ListItemText>Contacts</ListItemText>
            <ListItemIcon><ArrowDropDown /></ListItemIcon>
          </ListItemButton>
            {/* Inner user management list */}
            { !contact ? null : (
                <List sx={sidebarstyle.sidebarinnerlist}>
                  <ListItem  disablePadding sx={{ display: 'block' }}>
                    <Link to="/contact/Supplierlist" style={{color: 'rgb(172 163 163)', textDecoration: 'none'}}>
                      <ListItemButton sx={{ minHeight: 48,justifyContent: open ? 'initial' : 'center', px: 2.5,}}>
                        <ListItemIcon sx={{minWidth: 0,justifyContent: 'center',}} ><FiberManualRecord /></ListItemIcon>
                        <ListItemText>Suppliers</ListItemText>
                      </ListItemButton>
                      </Link>
                  </ListItem>
                  <ListItem  disablePadding sx={{ display: 'block' }}>
                    <ListItemButton sx={{ minHeight: 48,justifyContent: open ? 'initial' : 'center', px: 2.5,}}>
                      <ListItemIcon sx={{minWidth: 0,justifyContent: 'center',}} ><FiberManualRecord /></ListItemIcon>
                      <ListItemText><Link to="/contact/customerlist" style={{color: 'rgb(172 163 163)', textDecoration: 'none'}}>Customers</Link></ListItemText>
                    </ListItemButton>
                  </ListItem>
                  <ListItem  disablePadding sx={{ display: 'block' }}>
                    <ListItemButton sx={{ minHeight: 48,justifyContent: open ? 'initial' : 'center', px: 2.5,}}>
                      <ListItemIcon sx={{minWidth: 0,justifyContent: 'center',}} ><FiberManualRecord /></ListItemIcon>
                      <ListItemText><Link to="/contact/customergrouplist" style={{color: 'rgb(172 163 163)', textDecoration: 'none'}}>Customer Group</Link></ListItemText>
                    </ListItemButton>
                  </ListItem>
                  <ListItem  disablePadding sx={{ display: 'block' }}>
                    <ListItemButton sx={{ minHeight: 48,justifyContent: open ? 'initial' : 'center', px: 2.5,}}>
                      <ListItemIcon sx={{minWidth: 0,justifyContent: 'center',}} ><FiberManualRecord /></ListItemIcon>
                      <ListItemText><Link to="/contact/customerimport" style={{color: 'rgb(172 163 163)', textDecoration: 'none'}}>Import Contact</Link></ListItemText>
                    </ListItemButton>
                  </ListItem>
                </List>
              ) }
        </ListItem>
        <ListItem  disablePadding sx={{ display: 'block' }}>
          <ListItemButton sx={{ minHeight: 48,justifyContent: open ? 'initial' : 'center', px: 2.5,}} onMouseOver={ () => setProduct(s=>!s) }>
            <ListItemIcon sx={{minWidth: 0,justifyContent: 'center',}} ><CategoryOutlined /></ListItemIcon>
            <ListItemText>Products</ListItemText>
            <ListItemIcon><ArrowDropDown /></ListItemIcon>
          </ListItemButton>
            {/* Inner user management list */}
            { !product ? null : (
                <List sx={sidebarstyle.sidebarinnerlist}>
                  <ListItem  disablePadding sx={{ display: 'block' }}>
                    <ListItemButton sx={{ minHeight: 48,justifyContent: open ? 'initial' : 'center', px: 2.5,}}>
                      <ListItemIcon sx={{minWidth: 0,justifyContent: 'center',}} ><FiberManualRecord /></ListItemIcon>
                      <ListItemText><Link to="/product/productlist" style={{color: 'rgb(172 163 163)', textDecoration: 'none'}}>List products</Link></ListItemText>
                    </ListItemButton>
                  </ListItem>
                  <ListItem  disablePadding sx={{ display: 'block' }}>
                    <ListItemButton sx={{ minHeight: 48,justifyContent: open ? 'initial' : 'center', px: 2.5,}}>
                      <ListItemIcon sx={{minWidth: 0,justifyContent: 'center',}} ><FiberManualRecord /></ListItemIcon>
                      <ListItemText><Link to="/product/productcreate" style={{color: 'rgb(172 163 163)', textDecoration: 'none'}}>Add Products</Link></ListItemText>
                    </ListItemButton>
                  </ListItem>
                  <ListItem  disablePadding sx={{ display: 'block' }}>
                    <ListItemButton sx={{ minHeight: 48,justifyContent: open ? 'initial' : 'center', px: 2.5,}}>
                      <ListItemIcon sx={{minWidth: 0,justifyContent: 'center',}} ><FiberManualRecord /></ListItemIcon>
                      <ListItemText><Link to="/product/printlabel" style={{color: 'rgb(172 163 163)', textDecoration: 'none'}}>Print Labels</Link></ListItemText>
                    </ListItemButton>
                  </ListItem>
                  <ListItem  disablePadding sx={{ display: 'block' }}>
                    <ListItemButton sx={{ minHeight: 48,justifyContent: open ? 'initial' : 'center', px: 2.5,}}>
                      <ListItemIcon sx={{minWidth: 0,justifyContent: 'center',}} ><FiberManualRecord /></ListItemIcon>
                      <ListItemText><Link to="/product/variationslist" style={{color: 'rgb(172 163 163)', textDecoration: 'none'}}>Variations</Link></ListItemText>
                    </ListItemButton>
                  </ListItem>
                  <ListItem  disablePadding sx={{ display: 'block' }}>
                    <ListItemButton sx={{ minHeight: 48,justifyContent: open ? 'initial' : 'center', px: 2.5,}}>
                      <ListItemIcon sx={{minWidth: 0,justifyContent: 'center',}} ><FiberManualRecord /></ListItemIcon>
                      <ListItemText><Link to="/product/importproducts" style={{color: 'rgb(172 163 163)', textDecoration: 'none'}}>Import Products</Link></ListItemText>
                    </ListItemButton>
                  </ListItem>
                  <ListItem  disablePadding sx={{ display: 'block' }}>
                    <ListItemButton sx={{ minHeight: 48,justifyContent: open ? 'initial' : 'center', px: 2.5,}}>
                      <ListItemIcon sx={{minWidth: 0,justifyContent: 'center',}} ><FiberManualRecord /></ListItemIcon>
                      <ListItemText><Link to="/product/importopeningstock" style={{color: 'rgb(172 163 163)', textDecoration: 'none'}}>Import Opening Stock</Link></ListItemText>
                    </ListItemButton>
                  </ListItem>
                  <ListItem  disablePadding sx={{ display: 'block' }}>
                    <ListItemButton sx={{ minHeight: 48,justifyContent: open ? 'initial' : 'center', px: 2.5,}}>
                      <ListItemIcon sx={{minWidth: 0,justifyContent: 'center',}} ><FiberManualRecord /></ListItemIcon>
                      <ListItemText><Link to="/product/sellinggroup" style={{color: 'rgb(172 163 163)', textDecoration: 'none'}}>Selling Price Group</Link></ListItemText>
                    </ListItemButton>
                  </ListItem>
                  <ListItem  disablePadding sx={{ display: 'block' }}>
                    <ListItemButton sx={{ minHeight: 48,justifyContent: open ? 'initial' : 'center', px: 2.5,}}>
                      <ListItemIcon sx={{minWidth: 0,justifyContent: 'center',}} ><FiberManualRecord /></ListItemIcon>
                      <ListItemText><Link to="/product/unitslist" style={{color: 'rgb(172 163 163)', textDecoration: 'none'}}>Units</Link></ListItemText>
                    </ListItemButton>
                  </ListItem>
                  <ListItem  disablePadding sx={{ display: 'block' }}>
                    <ListItemButton sx={{ minHeight: 48,justifyContent: open ? 'initial' : 'center', px: 2.5,}}>
                      <ListItemIcon sx={{minWidth: 0,justifyContent: 'center',}} ><FiberManualRecord /></ListItemIcon>
                      <ListItemText><Link to="/product/categorylist" style={{color: 'rgb(172 163 163)', textDecoration: 'none'}}>Categories</Link></ListItemText>
                    </ListItemButton>
                  </ListItem>
                  <ListItem  disablePadding sx={{ display: 'block' }}>
                    <ListItemButton sx={{ minHeight: 48,justifyContent: open ? 'initial' : 'center', px: 2.5,}}>
                      <ListItemIcon sx={{minWidth: 0,justifyContent: 'center',}} ><FiberManualRecord /></ListItemIcon>
                      <ListItemText><Link to="/product/brandlist" style={{color: 'rgb(172 163 163)', textDecoration: 'none'}}>Brands</Link></ListItemText>
                    </ListItemButton>
                  </ListItem>
                  <ListItem  disablePadding sx={{ display: 'block' }}>
                    <ListItemButton sx={{ minHeight: 48,justifyContent: open ? 'initial' : 'center', px: 2.5,}}>
                      <ListItemIcon sx={{minWidth: 0,justifyContent: 'center',}} ><FiberManualRecord /></ListItemIcon>
                      <ListItemText><Link to="/product/warrentieslist" style={{color: 'rgb(172 163 163)', textDecoration: 'none'}}>Warrenties</Link></ListItemText>
                    </ListItemButton>
                  </ListItem>
                </List>
              ) }
        </ListItem>
        <ListItem  disablePadding sx={{ display: 'block' }}>
          <ListItemButton sx={{ minHeight: 48,justifyContent: open ? 'initial' : 'center', px: 2.5,}} onMouseOver={ () => setPurchase(s=>!s) }>
            <ListItemIcon sx={{minWidth: 0,justifyContent: 'center',}} ><CloudUploadOutlined /></ListItemIcon>
            <ListItemText>Purchase</ListItemText>
            <ListItemIcon><ArrowDropDown /></ListItemIcon>
          </ListItemButton>
            {/* Inner user management list */}
            { !purchase ? null : (
                <List sx={sidebarstyle.sidebarinnerlist}>
                  <ListItem  disablePadding sx={{ display: 'block' }}>
                    <Link to="/purchase/purchaselist" style={{color: 'rgb(172 163 163)', textDecoration: 'none'}}>
                      <ListItemButton sx={{ minHeight: 48,justifyContent: open ? 'initial' : 'center', px: 2.5,}}>
                        <ListItemIcon sx={{minWidth: 0,justifyContent: 'center',}} ><FiberManualRecord /></ListItemIcon>
                        <ListItemText>List Purchase</ListItemText>
                      </ListItemButton>
                    </Link>
                  </ListItem>
                  <ListItem  disablePadding sx={{ display: 'block' }}>
                    <Link to="/purchase/purchasecreate" style={{color: 'rgb(172 163 163)', textDecoration: 'none'}}>
                      <ListItemButton sx={{ minHeight: 48,justifyContent: open ? 'initial' : 'center', px: 2.5,}}>
                        <ListItemIcon sx={{minWidth: 0,justifyContent: 'center',}} ><FiberManualRecord /></ListItemIcon>
                        <ListItemText>Add Purchase</ListItemText>
                      </ListItemButton>
                    </Link>
                  </ListItem>
                  <ListItem  disablePadding sx={{ display: 'block' }}>
                    <Link to="/purchase/purchasereturnlist" style={{color: 'rgb(172 163 163)', textDecoration: 'none'}}>
                      <ListItemButton sx={{ minHeight: 48,justifyContent: open ? 'initial' : 'center', px: 2.5,}}>
                        <ListItemIcon sx={{minWidth: 0,justifyContent: 'center',}} ><FiberManualRecord /></ListItemIcon>
                        <ListItemText>List Purchase Return</ListItemText>
                      </ListItemButton>
                    </Link>
                  </ListItem>
                </List>
              ) }
        </ListItem>
        <ListItem  disablePadding sx={{ display: 'block' }}>
          <ListItemButton sx={{ minHeight: 48,justifyContent: open ? 'initial' : 'center', px: 2.5,}}  onMouseOver={ () => setSell(s=>!s) }>
            <ListItemIcon sx={{minWidth: 0,justifyContent: 'center',}} ><CloudDownloadOutlined /></ListItemIcon>
            <ListItemText>Sell</ListItemText>
            <ListItemIcon><ArrowDropDown /></ListItemIcon>
          </ListItemButton>
            {/* Inner user management list */}
            { !sell ? null : (
                <List sx={sidebarstyle.sidebarinnerlist}>
                  <ListItem  disablePadding sx={{ display: 'block' }}>
                    <ListItemButton sx={{ minHeight: 48,justifyContent: open ? 'initial' : 'center', px: 2.5,}}>
                      <ListItemIcon sx={{minWidth: 0,justifyContent: 'center',}} ><FiberManualRecord /></ListItemIcon>
                      <ListItemText><Link to="/sell/saleslist" style={{color: 'rgb(172 163 163)', textDecoration: 'none'}}>All Sales</Link></ListItemText>
                    </ListItemButton>
                  </ListItem>
                  <ListItem  disablePadding sx={{ display: 'block' }}>
                    <ListItemButton sx={{ minHeight: 48,justifyContent: open ? 'initial' : 'center', px: 2.5,}}>
                      <ListItemIcon sx={{minWidth: 0,justifyContent: 'center',}} ><FiberManualRecord /></ListItemIcon>
                      <ListItemText><Link to="/sell/salescreate" style={{color: 'rgb(172 163 163)', textDecoration: 'none'}}>Add Sales</Link></ListItemText>
                    </ListItemButton>
                  </ListItem>
                  <ListItem  disablePadding sx={{ display: 'block' }}>
                    <ListItemButton sx={{ minHeight: 48,justifyContent: open ? 'initial' : 'center', px: 2.5,}}>
                      <ListItemIcon sx={{minWidth: 0,justifyContent: 'center',}} ><FiberManualRecord /></ListItemIcon>
                      <ListItemText><Link to="/sell/poslist" style={{color: 'rgb(172 163 163)', textDecoration: 'none'}}>List POS</Link></ListItemText>
                    </ListItemButton>
                  </ListItem>
                  <ListItem  disablePadding sx={{ display: 'block' }}>
                    <ListItemButton sx={{ minHeight: 48,justifyContent: open ? 'initial' : 'center', px: 2.5,}}>
                      <ListItemIcon sx={{minWidth: 0,justifyContent: 'center',}} ><FiberManualRecord /></ListItemIcon>
                      <ListItemText><Link to="/sell/poscreate" style={{color: 'rgb(172 163 163)', textDecoration: 'none'}}>POS</Link></ListItemText>
                    </ListItemButton>
                  </ListItem>
                  <ListItem  disablePadding sx={{ display: 'block' }}>
                    <ListItemButton sx={{ minHeight: 48,justifyContent: open ? 'initial' : 'center', px: 2.5,}}>
                      <ListItemIcon sx={{minWidth: 0,justifyContent: 'center',}} ><FiberManualRecord /></ListItemIcon>
                      <ListItemText><Link to="/sell/draftcreate" style={{color: 'rgb(172 163 163)', textDecoration: 'none'}}>Add Drafts</Link></ListItemText>
                    </ListItemButton>
                  </ListItem>
                  <ListItem  disablePadding sx={{ display: 'block' }}>
                    <ListItemButton sx={{ minHeight: 48,justifyContent: open ? 'initial' : 'center', px: 2.5,}}>
                      <ListItemIcon sx={{minWidth: 0,justifyContent: 'center',}} ><FiberManualRecord /></ListItemIcon>
                      <ListItemText><Link to="/sell/draftlist" style={{color: 'rgb(172 163 163)', textDecoration: 'none'}}>List Drafts</Link></ListItemText>
                    </ListItemButton>
                  </ListItem>
                  <ListItem  disablePadding sx={{ display: 'block' }}>
                    <ListItemButton sx={{ minHeight: 48,justifyContent: open ? 'initial' : 'center', px: 2.5,}}>
                      <ListItemIcon sx={{minWidth: 0,justifyContent: 'center',}} ><FiberManualRecord /></ListItemIcon>
                      <ListItemText><Link to="/sell/quotationcreate" style={{color: 'rgb(172 163 163)', textDecoration: 'none'}}>Add Quotation</Link></ListItemText>
                    </ListItemButton>
                  </ListItem>
                  <ListItem  disablePadding sx={{ display: 'block' }}>
                    <ListItemButton sx={{ minHeight: 48,justifyContent: open ? 'initial' : 'center', px: 2.5,}}>
                      <ListItemIcon sx={{minWidth: 0,justifyContent: 'center',}} ><FiberManualRecord /></ListItemIcon>
                      <ListItemText><Link to="/sell/quotationlist" style={{color: 'rgb(172 163 163)', textDecoration: 'none'}}>List Quotation</Link></ListItemText>
                    </ListItemButton>
                  </ListItem>
                  <ListItem  disablePadding sx={{ display: 'block' }}>
                    <ListItemButton sx={{ minHeight: 48,justifyContent: open ? 'initial' : 'center', px: 2.5,}}>
                      <ListItemIcon sx={{minWidth: 0,justifyContent: 'center',}} ><FiberManualRecord /></ListItemIcon>
                      <ListItemText><Link to="/sell/sellreturn" style={{color: 'rgb(172 163 163)', textDecoration: 'none'}}>List Sell Returns</Link></ListItemText>
                    </ListItemButton>
                  </ListItem>
                  <ListItem  disablePadding sx={{ display: 'block' }}>
                    <ListItemButton sx={{ minHeight: 48,justifyContent: open ? 'initial' : 'center', px: 2.5,}}>
                      <ListItemIcon sx={{minWidth: 0,justifyContent: 'center',}} ><FiberManualRecord /></ListItemIcon>
                      <ListItemText><Link to="/sell/shipmentslist" style={{color: 'rgb(172 163 163)', textDecoration: 'none'}}>Shipments</Link></ListItemText>
                    </ListItemButton>
                  </ListItem>
                  <ListItem  disablePadding sx={{ display: 'block' }}>
                    <ListItemButton sx={{ minHeight: 48,justifyContent: open ? 'initial' : 'center', px: 2.5,}}>
                      <ListItemIcon sx={{minWidth: 0,justifyContent: 'center',}} ><FiberManualRecord /></ListItemIcon>
                      <ListItemText><Link to="/sell/discountlist" style={{color: 'rgb(172 163 163)', textDecoration: 'none'}}>Discounts</Link></ListItemText>
                    </ListItemButton>
                  </ListItem>
                  <ListItem  disablePadding sx={{ display: 'block' }}>
                    <ListItemButton sx={{ minHeight: 48,justifyContent: open ? 'initial' : 'center', px: 2.5,}}>
                      <ListItemIcon sx={{minWidth: 0,justifyContent: 'center',}} ><FiberManualRecord /></ListItemIcon>
                      <ListItemText><Link to="/sell/subscriptionlist" style={{color: 'rgb(172 163 163)', textDecoration: 'none'}}>Subscriptions</Link></ListItemText>
                    </ListItemButton>
                  </ListItem>
                  <ListItem  disablePadding sx={{ display: 'block' }}>
                    <ListItemButton sx={{ minHeight: 48,justifyContent: open ? 'initial' : 'center', px: 2.5,}}>
                      <ListItemIcon sx={{minWidth: 0,justifyContent: 'center',}} ><FiberManualRecord /></ListItemIcon>
                      <ListItemText><Link to="/sell/impotsell" style={{color: 'rgb(172 163 163)', textDecoration: 'none'}}>Import Sales</Link></ListItemText>
                    </ListItemButton>
                  </ListItem>
                </List>
              ) }
        </ListItem>
        <ListItem  disablePadding sx={{ display: 'block' }}>
          <ListItemButton sx={{ minHeight: 48,justifyContent: open ? 'initial' : 'center', px: 2.5,}} onMouseOver={ () => setStockTransfer(s=>!s) }>
            <ListItemIcon sx={{minWidth: 0,justifyContent: 'center',}} ><LocalShippingOutlined /></ListItemIcon>
            <ListItemText>Stock Transfer</ListItemText>
            <ListItemIcon><ArrowDropDown /></ListItemIcon>
          </ListItemButton>
            {/* Inner user management list */}
            { !stockTransfer ? null : (
                <List sx={sidebarstyle.sidebarinnerlist}>
                  <ListItem  disablePadding sx={{ display: 'block' }}>
                    <ListItemButton sx={{ minHeight: 48,justifyContent: open ? 'initial' : 'center', px: 2.5,}}>
                      <ListItemIcon sx={{minWidth: 0,justifyContent: 'center',}} ><FiberManualRecord /></ListItemIcon>
                      <ListItemText><Link to="/stock/transferlist" style={{color: 'rgb(172 163 163)', textDecoration: 'none'}}>List Stock Transfer</Link></ListItemText>
                    </ListItemButton>
                  </ListItem>
                  <ListItem  disablePadding sx={{ display: 'block' }}>
                    <ListItemButton sx={{ minHeight: 48,justifyContent: open ? 'initial' : 'center', px: 2.5,}}>
                      <ListItemIcon sx={{minWidth: 0,justifyContent: 'center',}} ><FiberManualRecord /></ListItemIcon>
                      <ListItemText><Link to="/stock/transfercreate" style={{color: 'rgb(172 163 163)', textDecoration: 'none'}}>Add Stock Transfer</Link></ListItemText>
                    </ListItemButton>
                  </ListItem>
                </List>
              ) }
        </ListItem>
        <ListItem  disablePadding sx={{ display: 'block' }}>
          <ListItemButton sx={{ minHeight: 48,justifyContent: open ? 'initial' : 'center', px: 2.5,}} onMouseOver={ () => setStockAdjustment(s=>!s) }>
            <ListItemIcon sx={{minWidth: 0,justifyContent: 'center',}} ><HorizontalSplitOutlined /></ListItemIcon>
            <ListItemText>Stock Adjustment</ListItemText>
            <ListItemIcon><ArrowDropDown /></ListItemIcon>
          </ListItemButton>
            {/* Inner user management list */}
            { !stockAdjustment ? null : (
                <List sx={sidebarstyle.sidebarinnerlist}>
                  <ListItem  disablePadding sx={{ display: 'block' }}>
                    <Link to="/stock/adjustlist" style={{color: 'rgb(207 201 201)', textDecoration: 'none'}}>
                      <ListItemButton sx={{ minHeight: 48,justifyContent: open ? 'initial' : 'center', px: 2.5,}}>
                        <ListItemIcon sx={{minWidth: 0,justifyContent: 'center',}} ><FiberManualRecord /></ListItemIcon>
                        <ListItemText sx={{color: 'rgb(207 201 201)',}}>List Stock Adjustment</ListItemText>
                      </ListItemButton >
                    </Link>
                  </ListItem>
                  <ListItem  disablePadding sx={{ display: 'block' }}>
                    <Link to="/stock/adjustcreate" style={{color: 'rgb(207 201 201)', textDecoration: 'none'}}>
                      <ListItemButton sx={{ minHeight: 48,justifyContent: open ? 'initial' : 'center', px: 2.5,}}>
                        <ListItemIcon sx={{minWidth: 0,justifyContent: 'center',}} ><FiberManualRecord /></ListItemIcon>
                        <ListItemText>Add Stock Adjustment</ListItemText>
                      </ListItemButton>
                    </Link>
                  </ListItem>
                </List>
              ) }
        </ListItem>
        <ListItem  disablePadding sx={{ display: 'block' }}>
          <ListItemButton sx={{ minHeight: 48,justifyContent: open ? 'initial' : 'center', px: 2.5,}} onMouseOver={ () => setExpenses(s=>!s) }>
            <ListItemIcon sx={{minWidth: 0,justifyContent: 'center',}} ><DoDisturbOnOutlined /></ListItemIcon>
            <ListItemText>Expenses</ListItemText>
            <ListItemIcon><ArrowDropDown /></ListItemIcon>
          </ListItemButton>
            {/* Inner user management list */}
            { !expenses ? null : (
                <List sx={sidebarstyle.sidebarinnerlist}>
                  <ListItem  disablePadding sx={{ display: 'block' }}>
                    <Link to="/expense/expenselist" style={{color: 'rgb(172 163 163)', textDecoration: 'none'}}>
                      <ListItemButton sx={{ minHeight: 48,justifyContent: open ? 'initial' : 'center', px: 2.5,}}>
                        <ListItemIcon sx={{minWidth: 0,justifyContent: 'center',}} ><FiberManualRecord /></ListItemIcon>
                        <ListItemText>List Expenses</ListItemText>
                      </ListItemButton>
                    </Link>
                  </ListItem>
                  <ListItem  disablePadding sx={{ display: 'block' }}>
                    <Link to="/expense/expensecreate" style={{color: 'rgb(172 163 163)', textDecoration: 'none'}}>
                      <ListItemButton sx={{ minHeight: 48,justifyContent: open ? 'initial' : 'center', px: 2.5,}}>
                       <ListItemIcon sx={{minWidth: 0,justifyContent: 'center',}} ><FiberManualRecord /></ListItemIcon>
                       <ListItemText>Add Expenses</ListItemText>
                      </ListItemButton>
                    </Link>
                  </ListItem>
                  <ListItem  disablePadding sx={{ display: 'block' }}>
                    <Link to="/expense/expensecategorylist" style={{color: 'rgb(172 163 163)', textDecoration: 'none'}}>
                      <ListItemButton sx={{ minHeight: 48,justifyContent: open ? 'initial' : 'center', px: 2.5,}}>
                        <ListItemIcon sx={{minWidth: 0,justifyContent: 'center',}} ><FiberManualRecord /></ListItemIcon>
                        <ListItemText>Expenses Categories</ListItemText>
                      </ListItemButton>
                    </Link>
                  </ListItem>
                </List>
              ) }
        </ListItem>
        <ListItem  disablePadding sx={{ display: 'block' }}>
          <ListItemButton sx={{ minHeight: 48,justifyContent: open ? 'initial' : 'center', px: 2.5,}} onMouseOver={ () => setReport(s=>!s) }>
            <ListItemIcon sx={{minWidth: 0,justifyContent: 'center',}} ><AssessmentOutlined /></ListItemIcon>
            <ListItemText>Report</ListItemText>
            <ListItemIcon><ArrowDropDown /></ListItemIcon>
          </ListItemButton>
            {/* Inner user management list */}
            { !report ? null : (
                <List sx={sidebarstyle.sidebarinnerlist}>
                  <ListItem  disablePadding sx={{ display: 'block' }}>
                    <Link to="/report/profitloselist" style={{color: 'rgb(172 163 163)', textDecoration: 'none'}}>
                      <ListItemButton sx={{ minHeight: 48,justifyContent: open ? 'initial' : 'center', px: 2.5,}}>
                        <ListItemIcon sx={{minWidth: 0,justifyContent: 'center',}} ><FiberManualRecord /></ListItemIcon>
                        <ListItemText>Profit / Loss Report</ListItemText>
                      </ListItemButton>
                    </Link>
                  </ListItem>
                  <ListItem  disablePadding sx={{ display: 'block' }}>
                    <Link to="/report/productselllist" style={{color: 'rgb(172 163 163)', textDecoration: 'none'}}>
                      <ListItemButton sx={{ minHeight: 48,justifyContent: open ? 'initial' : 'center', px: 2.5,}}>
                        <ListItemIcon sx={{minWidth: 0,justifyContent: 'center',}} ><FiberManualRecord /></ListItemIcon>
                        <ListItemText>Product Sell Report</ListItemText>
                      </ListItemButton>
                    </Link>
                  </ListItem>
                  <ListItem  disablePadding sx={{ display: 'block' }}>
                    <Link to="/report/servicestafflist" style={{color: 'rgb(172 163 163)', textDecoration: 'none'}}>
                      <ListItemButton sx={{ minHeight: 48,justifyContent: open ? 'initial' : 'center', px: 2.5,}}>
                        <ListItemIcon sx={{minWidth: 0,justifyContent: 'center',}} ><FiberManualRecord /></ListItemIcon>
                        <ListItemText>Service Staff Report</ListItemText>
                      </ListItemButton>
                    </Link>
                  </ListItem>
                  <ListItem  disablePadding sx={{ display: 'block' }}>
                    <ListItemButton sx={{ minHeight: 48,justifyContent: open ? 'initial' : 'center', px: 2.5,}}>
                      <ListItemIcon sx={{minWidth: 0,justifyContent: 'center',}} ><FiberManualRecord /></ListItemIcon>
                      <ListItemText><Link to="/report/salesRepresentative" style={{color: 'rgb(172 163 163)', textDecoration: 'none'}}>Sales Representative Report</Link></ListItemText>
                    </ListItemButton>
                  </ListItem>
                  <ListItem  disablePadding sx={{ display: 'block' }}>
                    <ListItemButton sx={{ minHeight: 48,justifyContent: open ? 'initial' : 'center', px: 2.5,}}>
                      <ListItemIcon sx={{minWidth: 0,justifyContent: 'center',}} ><FiberManualRecord /></ListItemIcon>
                      <ListItemText><Link to="/" style={{color: 'rgb(172 163 163)', textDecoration: 'none'}}>Expenses Report</Link></ListItemText>
                    </ListItemButton>
                  </ListItem>
                  <ListItem  disablePadding sx={{ display: 'block' }}>
                    <ListItemButton sx={{ minHeight: 48,justifyContent: open ? 'initial' : 'center', px: 2.5,}}>
                      <ListItemIcon sx={{minWidth: 0,justifyContent: 'center',}} ><FiberManualRecord /></ListItemIcon>
                      <ListItemText><Link to="/" style={{color: 'rgb(172 163 163)', textDecoration: 'none'}}>Sell Payment Report</Link></ListItemText>
                    </ListItemButton>
                  </ListItem>
                  <ListItem  disablePadding sx={{ display: 'block' }}>
                    <ListItemButton sx={{ minHeight: 48,justifyContent: open ? 'initial' : 'center', px: 2.5,}}>
                      <ListItemIcon sx={{minWidth: 0,justifyContent: 'center',}} ><FiberManualRecord /></ListItemIcon>
                      <ListItemText><Link to="/" style={{color: 'rgb(172 163 163)', textDecoration: 'none'}}>Purchases Payment Report</Link></ListItemText>
                    </ListItemButton>
                  </ListItem>
                  <ListItem  disablePadding sx={{ display: 'block' }}>
                    <ListItemButton sx={{ minHeight: 48,justifyContent: open ? 'initial' : 'center', px: 2.5,}}>
                      <ListItemIcon sx={{minWidth: 0,justifyContent: 'center',}} ><FiberManualRecord /></ListItemIcon>
                      <ListItemText><Link to="/" style={{color: 'rgb(172 163 163)', textDecoration: 'none'}}>Product Purchase Report</Link></ListItemText>
                    </ListItemButton>
                  </ListItem>
                  <ListItem  disablePadding sx={{ display: 'block' }}>
                    <ListItemButton sx={{ minHeight: 48,justifyContent: open ? 'initial' : 'center', px: 2.5,}}>
                      <ListItemIcon sx={{minWidth: 0,justifyContent: 'center',}} ><FiberManualRecord /></ListItemIcon>
                      <ListItemText><Link to="/" style={{color: 'rgb(172 163 163)', textDecoration: 'none'}}>Item Report</Link></ListItemText>
                    </ListItemButton>
                  </ListItem>
                  <ListItem  disablePadding sx={{ display: 'block' }}>
                    <ListItemButton sx={{ minHeight: 48,justifyContent: open ? 'initial' : 'center', px: 2.5,}}>
                      <ListItemIcon sx={{minWidth: 0,justifyContent: 'center',}} ><FiberManualRecord /></ListItemIcon>
                      <ListItemText><Link to="/" style={{color: 'rgb(172 163 163)', textDecoration: 'none'}}>Trending Products</Link></ListItemText>
                    </ListItemButton>
                  </ListItem>
                  <ListItem  disablePadding sx={{ display: 'block' }}>
                    <ListItemButton sx={{ minHeight: 48,justifyContent: open ? 'initial' : 'center', px: 2.5,}}>
                      <ListItemIcon sx={{minWidth: 0,justifyContent: 'center',}} ><FiberManualRecord /></ListItemIcon>
                      <ListItemText><Link to="/" style={{color: 'rgb(172 163 163)', textDecoration: 'none'}}>Stock Adjustment Report</Link></ListItemText>
                    </ListItemButton>
                  </ListItem>
                  <ListItem  disablePadding sx={{ display: 'block' }}>
                    <ListItemButton sx={{ minHeight: 48,justifyContent: open ? 'initial' : 'center', px: 2.5,}}>
                      <ListItemIcon sx={{minWidth: 0,justifyContent: 'center',}} ><FiberManualRecord /></ListItemIcon>
                      <ListItemText><Link to="/" style={{color: 'rgb(172 163 163)', textDecoration: 'none'}}>Stock Report</Link></ListItemText>
                    </ListItemButton>
                  </ListItem>
                  <ListItem  disablePadding sx={{ display: 'block' }}>
                    <ListItemButton sx={{ minHeight: 48,justifyContent: open ? 'initial' : 'center', px: 2.5,}}>
                      <ListItemIcon sx={{minWidth: 0,justifyContent: 'center',}} ><FiberManualRecord /></ListItemIcon>
                      <ListItemText><Link to="/" style={{color: 'rgb(172 163 163)', textDecoration: 'none'}}>Customer Group Report</Link></ListItemText>
                    </ListItemButton>
                  </ListItem>
                  <ListItem  disablePadding sx={{ display: 'block' }}>
                    <ListItemButton sx={{ minHeight: 48,justifyContent: open ? 'initial' : 'center', px: 2.5,}}>
                      <ListItemIcon sx={{minWidth: 0,justifyContent: 'center',}} ><FiberManualRecord /></ListItemIcon>
                      <ListItemText><Link to="/" style={{color: 'rgb(172 163 163)', textDecoration: 'none'}}>Supplier and Customer Report</Link></ListItemText>
                    </ListItemButton>
                  </ListItem>
                  <ListItem  disablePadding sx={{ display: 'block' }}>
                    <ListItemButton sx={{ minHeight: 48,justifyContent: open ? 'initial' : 'center', px: 2.5,}}>
                      <ListItemIcon sx={{minWidth: 0,justifyContent: 'center',}} ><FiberManualRecord /></ListItemIcon>
                      <ListItemText><Link to="/" style={{color: 'rgb(172 163 163)', textDecoration: 'none'}}>Tax Report</Link></ListItemText>
                    </ListItemButton>
                  </ListItem>
                </List>
              ) }
        </ListItem>
        <ListItem  disablePadding sx={{ display: 'block' }}>
          <ListItemButton sx={{ minHeight: 48,justifyContent: open ? 'initial' : 'center', px: 2.5,}} onMouseOver={ () => setSetting(s=>!s) }>
            <ListItemIcon sx={{minWidth: 0,justifyContent: 'center',}} ><SettingsOutlined /></ListItemIcon>
            <ListItemText>Settings</ListItemText>
            <ListItemIcon><ArrowDropDown /></ListItemIcon>
          </ListItemButton>
            {/* Inner user management list */}
            { !setting ? null : (
                <List sx={sidebarstyle.sidebarinnerlist}>
                  <ListItem  disablePadding sx={{ display: 'block' }}>
                    <ListItemButton sx={{ minHeight: 48,justifyContent: open ? 'initial' : 'center', px: 2.5,}}>
                      <ListItemIcon sx={{minWidth: 0,justifyContent: 'center',}} ><FiberManualRecord /></ListItemIcon>
                      <ListItemText><Link to="/" style={{color: 'rgb(172 163 163)', textDecoration: 'none'}}>Business Settings</Link></ListItemText>
                    </ListItemButton>
                  </ListItem>
                  <ListItem  disablePadding sx={{ display: 'block' }}>
                    <ListItemButton sx={{ minHeight: 48,justifyContent: open ? 'initial' : 'center', px: 2.5,}}>
                      <ListItemIcon sx={{minWidth: 0,justifyContent: 'center',}} ><FiberManualRecord /></ListItemIcon>
                      <ListItemText><Link to="/settings/location/list" style={{color: 'rgb(172 163 163)', textDecoration: 'none'}}>Business Location</Link></ListItemText>
                    </ListItemButton>
                  </ListItem>
                  <ListItem  disablePadding sx={{ display: 'block' }}>
                    <ListItemButton sx={{ minHeight: 48,justifyContent: open ? 'initial' : 'center', px: 2.5,}}>
                      <ListItemIcon sx={{minWidth: 0,justifyContent: 'center',}} ><FiberManualRecord /></ListItemIcon>
                      <ListItemText><Link to="/" style={{color: 'rgb(172 163 163)', textDecoration: 'none'}}>invoice Setting</Link></ListItemText>
                    </ListItemButton>
                  </ListItem>
                  <ListItem  disablePadding sx={{ display: 'block' }}>
                    <ListItemButton sx={{ minHeight: 48,justifyContent: open ? 'initial' : 'center', px: 2.5,}}>
                      <ListItemIcon sx={{minWidth: 0,justifyContent: 'center',}} ><FiberManualRecord /></ListItemIcon>
                      <ListItemText><Link to="/" style={{color: 'rgb(172 163 163)', textDecoration: 'none'}}>Barcode Setting</Link></ListItemText>
                    </ListItemButton>
                  </ListItem>
                  <ListItem  disablePadding sx={{ display: 'block' }}>
                    <ListItemButton sx={{ minHeight: 48,justifyContent: open ? 'initial' : 'center', px: 2.5,}}>
                      <ListItemIcon sx={{minWidth: 0,justifyContent: 'center',}} ><FiberManualRecord /></ListItemIcon>
                      <ListItemText><Link to="/" style={{color: 'rgb(172 163 163)', textDecoration: 'none'}}>Tax Rates</Link></ListItemText>
                    </ListItemButton>
                  </ListItem>
                  <ListItem  disablePadding sx={{ display: 'block' }}>
                    <ListItemButton sx={{ minHeight: 48,justifyContent: open ? 'initial' : 'center', px: 2.5,}}>
                      <ListItemIcon sx={{minWidth: 0,justifyContent: 'center',}} ><FiberManualRecord /></ListItemIcon>
                      <ListItemText><Link to="/" style={{color: 'rgb(172 163 163)', textDecoration: 'none'}}>Payment Integration</Link></ListItemText>
                    </ListItemButton>
                  </ListItem>
                </List>
              ) }
        </ListItem>
      </List>
    </>
  )
}

export default Sidebarlist;


{/* <List >
          {SidebarItems.map((item, index) => (
            <ListItem key={item.id} disablePadding sx={{ display: 'block' }} 
            // onClick={() => navigate(item.route)}
            >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
                onClick={()=> setListChild(!listChild)}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                    color: 'rgb(94, 53, 177)',
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.label} sx={{ marginLeft: '-10px', opacity: open ? 1 : 0 }} />
              </ListItemButton>
              { item.children && listChild ?  (
                 <>
                  <List sx={{ 
                    color: '#797676', 
                    paddingTop: 0, 
                    paddingBottom: 0,
                    margin:'0px !important',
                    }}>
                    {item.children.map((child, index) => (
                      <ListItem key={child.id} disablePadding sx={{ display: 'block', marginLeft: '10px', marginRight: '10px',
                      '&:hover':{
                        color: 'white',
                        backgroundColor: 'rgb(94, 53, 177)',
                        fontSize: '15px !important',
                        borderRadius: '15px',
                        marginRight: '10px',
                      } 
                      }}>
                        <ListItemButton 
                        sx={{
                          minHeight: 48,
                          justifyContent: open ? 'initial' : 'center',
                          px: 2.5,
                        }}
                        >
                          <ListItemIcon sx={{ color: 'rgb(94, 53, 177)', fontWeight: 200 }}>{child.icon}</ListItemIcon>
                          <ListItemText primary={child.label} sx={{ marginLeft: '-25px', fontSize: '16px', opacity: open ? 1 : 0 }}/>
                        </ListItemButton>
                      </ListItem>
                    ))}
                  </List>
                 </>

                ) : null}
            </ListItem>
          ))}
        </List> */}