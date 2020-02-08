import React, { Fragment } from 'react'
import { withRouter, Link } from 'react-router-dom'
import './header.css'
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';
import logo from '../../images/logo-home.png'

const Header = (props) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = event => {
        setAnchorEl(event.currentTarget);
      };
    
    const handleClose = () => {
        setAnchorEl(null);
    };

    const goToProfile = () => {
        handleClose()
        props.history.push('/profile')
    }

    const logout = () => {
        handleClose()
        props.logout()
    }

    return(
        <div className="container-header">
            <img src={logo}/>
            <Button 
                aria-controls="fade-menu" 
                aria-haspopup="true" 
                onClick={handleClick}
                className="menu-header"
                color='primary'
                variant="contained">
                Options
            </Button>
            <Menu
                id="fade-menu"
                anchorEl={anchorEl}
                keepMounted
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}>
                <MenuItem onClick={goToProfile}>Profile</MenuItem>
                <MenuItem onClick={logout}>Logout</MenuItem>
            </Menu>
        </div> 
    )
}

export default withRouter(Header)