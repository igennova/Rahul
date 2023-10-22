import React from 'react';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { NavLink } from 'react-router-dom';
const Sidebar1=()=>{
    return(

<Sidebar>
  <Menu>
   
    <MenuItem component={<NavLink to="/"/>}> Home </MenuItem>
    <MenuItem component={<NavLink to="/teer"/>}> Calendar </MenuItem>
    <SubMenu label="Charts">
      <MenuItem component={<NavLink to="/tender"/>}> Tender </MenuItem>
      <MenuItem component={<NavLink to="/tender"/>}> Line charts </MenuItem>
    </SubMenu>
  </Menu>
</Sidebar>)}
export default Sidebar1