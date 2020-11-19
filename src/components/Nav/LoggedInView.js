import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import { Menu, MenuItem, Button } from "@material-ui/core";

const LoggedInView = (props) => {
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

    if (props.currentUser) {
        if (matches === false) {
            return (
                <div
                    style={{
                        margin: "auto",
                        float: "right",
                    }}>
                    <Button
                        color="primary"
                        style={{ fontSize: "20px" }}
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
                            //  vertical: "bottom",
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
                                style={{ width: "300px" }}>
                                Home
                            </MenuItem>
                        </Link>
                        <Link to="/editor">
                            <MenuItem onClick={handleClose}>
                                <i className="ion-compose"></i>&nbsp;New Post
                            </MenuItem>
                        </Link>
                        <Link to="/settings">
                            <MenuItem onClick={handleClose}>
                                <i className="ion-gear-a"></i>&nbsp;Settings
                            </MenuItem>
                        </Link>
                        <Link to={`/@${props.currentUser.username}`}>
                            <MenuItem onClick={handleClose}>
                                {" "}
                                <img
                                    src={props.currentUser.image}
                                    className="user-pic"
                                    alt={props.currentUser.username}
                                />
                                {props.currentUser.username}
                            </MenuItem>
                        </Link>
                    </Menu>
                </div>
            );
        } else {
            return (
                <ul className="nav navbar-nav pull-xs-right">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">
                            Home
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link to="/editor" className="nav-link">
                            <i className="ion-compose"></i>&nbsp;New Post
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link to="/settings" className="nav-link">
                            <i className="ion-gear-a"></i>&nbsp;Settings
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link
                            to={`/@${props.currentUser.username}`}
                            className="nav-link">
                            <img
                                src={props.currentUser.image}
                                className="user-pic"
                                alt={props.currentUser.username}
                            />
                            {props.currentUser.username}
                        </Link>
                    </li>
                </ul>
            );
        }
    }

    return null;
};

export default LoggedInView;
