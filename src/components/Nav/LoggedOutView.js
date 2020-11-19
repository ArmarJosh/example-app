import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import { Menu, MenuItem, Button } from "@material-ui/core";

const LoggedOutView = (props) => {
    const [matches, setMatches] = useState(true);
    const [anchorEl, setAnchorEl] = useState(null);

    useEffect(() => {
        let mediaMatch = (e) => setMatches(e.matches);
        window.matchMedia("(min-width: 768px)").addListener(mediaMatch);
        console.log("resolution: ", matches);
    }, []);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    if (!props.currentUser) {
        if (matches === false) {
            return (
                <div style={{ margin: "auto", float: "right" }}>
                    <Button
                        style={{ fontSize: "20px" }}
                        color="primary"
                        startIcon={<MenuIcon />}
                        aria-controls="simple-menu"
                        aria-haspopup="true"
                        onClick={handleClick}>
                        Menu
                    </Button>
                    <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                        style={{ marginTop: "2em" }}
                        anchorOrigin={{
                            // vertical: "bottom",
                            horizontal: "center",
                        }}
                        transformOrigin={{
                            vertical: "top",
                            horizontal: "center",
                        }}
                        {...props}>
                        <Link to="/">
                            <MenuItem
                                onClick={handleClose}
                                style={{
                                    width: "300px",
                                }}>
                                Home
                            </MenuItem>
                        </Link>
                        <Link to="/login">
                            <MenuItem onClick={handleClose}>Sign in</MenuItem>
                        </Link>
                        <Link to="/register">
                            <MenuItem onClick={handleClose}>Sign up</MenuItem>
                        </Link>
                    </Menu>
                </div>
            );
        } else {
            return (
                <ul className="nav navbar-nav pull-xs-right">
                    <li className="nav-item">
                        <Link to="/" className={"nav-link"}>
                            Home
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link to="/login" className="nav-link">
                            Sign in
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link to="/register" className="nav-link">
                            Sign up
                        </Link>
                    </li>
                </ul>
            );
        }
    }
    return null;
};

export default LoggedOutView;
