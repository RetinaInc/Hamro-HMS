import React from 'react';

export default class UserDropDown extends React.Component {
    render() {
        return <ul className="dropdown-menu dropdown-user">
            <li>
                <a href="#"><i className="fa fa-user fa-fw"></i> User Profile</a>
            </li>
            <li>
                <a href="#"><i className="fa fa-gear fa-fw"></i> Settings</a>
            </li>
            <li className="divider"></li>
            <li>
                <a href="login.html"><i className="fa fa-sign-out fa-fw"></i> Logout</a>
            </li>
        </ul>;
    }
}