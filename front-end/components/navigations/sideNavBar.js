import React from 'react';
import {Link} from 'react-router-dom';

export default class SideNavBar extends React.Component {
    render() {
        return <div className="navbar-default sidebar" role="navigation">
            <div className="sidebar-nav navbar-collapse">
                <ul className="nav" id="side-menu">
                    <li>
                        <Link to="/">
                            <i className="fa fa-dashboard fa-fw"></i> Dashboard
                        </Link>
                    </li>
                    <li>
                        <Link to="javascript:void(0)">
                            <i className="fa fa-bar-chart-o fa-fw"></i> Patients<span className="fa arrow"></span>
                        </Link>
                        <ul className="nav nav-second-level">
                            <li>
                                <Link to="/patients/list">
                                    List
                                </Link>
                            </li>
                            <li>
                                <Link to="/patients/form">
                                    Add New
                                </Link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>;
    }
}