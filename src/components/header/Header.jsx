import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import "./header.css";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Fade from "@material-ui/core/Fade";
import logo from "../../images/logo-home.png";

const Header = props => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const goToProfile = () => {
    handleClose();
    props.history.push("/profile");
  };

  const logout = () => {
    handleClose();
    props.logout();
  };

  return (
    <div className="container-header">
      <img src={logo} alt="logo" />
      {props.showOptions ? (
        <div>
          <Button
            aria-controls="fade-menu"
            aria-haspopup="true"
            onClick={handleClick}
            className="menu-header"
            color="primary"
            variant="contained"
          >
            Options
          </Button>
          <Menu
            id="fade-menu"
            anchorEl={anchorEl}
            keepMounted
            open={open}
            onClose={handleClose}
            TransitionComponent={Fade}
          >
            <MenuItem onClick={goToProfile}>Profile</MenuItem>
            <MenuItem onClick={logout}>Logout</MenuItem>
          </Menu>
        </div>
      ) : (
        <Button
          aria-controls="fade-menu"
          aria-haspopup="true"
          className="menu-header"
          color="primary"
          variant="contained"
          onClick={() => props.history.push("/landing")}
        >
          Return
        </Button>
      )}
    </div>
  );
};

Header.propTypes = {
  showOptions: PropTypes.bool
};

export default withRouter(Header);
