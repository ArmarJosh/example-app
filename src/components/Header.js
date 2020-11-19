import React from "react";
import { Link } from "react-router-dom";
import { LoggedInView, LoggedOutView } from "./Nav";

class Header extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <nav className="navbar navbar-light">
                <div className="container">
                    <Link to="/" className="navbar-brand">
                        {this.props.appName.toLowerCase()}
                    </Link>

                    <LoggedOutView currentUser={this.props.currentUser} />

                    <LoggedInView currentUser={this.props.currentUser} />
                </div>
            </nav>
        );
    }
}

export default Header;
