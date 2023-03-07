import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import { useNavigate } from 'react-router-dom';

export default function MenuPopupState() {
    const nav=useNavigate()
    const handle=()=>{
        nav('/authentication/sign-in')
    }
    const handle2=()=>{
        nav('/sign-in')
    }
  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
          <Button variant="contained" {...bindTrigger(popupState)}>
            Dashboard
          </Button>
          <Menu {...bindMenu(popupState)}>
            <MenuItem onClick={handle}>student login</MenuItem>
            <MenuItem onClick={handle2}>owner login</MenuItem>
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
}