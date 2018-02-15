import React from 'react';

export default class NavBar extends React.Component {

    style = {
        topNav: {
            marginBottom: 0
        }
    };

    render() {
        return <nav className="navbar navbar-default navbar-static-top" role="navigation" style={this.style.topNav}>
            <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand" href="index.html">
                    Hamro HMS
                </a>
            </div>
            <ul className="nav navbar-top-links navbar-right">
                <li className="dropdown">
                    <a className="dropdown-toggle" data-toggle="dropdown" href="#">
                        <i className="fa fa-user fa-fw"></i> <i className="fa fa-caret-down"></i>
                    </a>
                    <ul className="dropdown-menu dropdown-user">
                        <li><a href="#"><i className="fa fa-user fa-fw"></i> User Profile</a>
                        </li>
                        <li><a href="#"><i className="fa fa-gear fa-fw"></i> Settings</a>
                        </li>
                        <li className="divider"></li>
                        <li><a href="login.html"><i className="fa fa-sign-out fa-fw"></i> Logout</a>
                        </li>
                    </ul>
                </li>
            </ul>

            <div className="navbar-default sidebar" role="navigation">
                <div className="sidebar-nav navbar-collapse">
                    <ul className="nav" id="side-menu">
                        <li>
                            <a href="index.html"><i className="fa fa-dashboard fa-fw"></i> Dashboard</a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fa fa-bar-chart-o fa-fw"></i> Patients<span className="fa arrow"></span>
                            </a>
                            <ul className="nav nav-second-level">
                                <li>
                                    <a href="#/patients/list">List</a>
                                </li>
                                <li>
                                    <a href="#/patients/form">Add New</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    }
}