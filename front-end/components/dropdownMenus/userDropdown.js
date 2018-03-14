import React from 'react';

export default class UserDropDown extends React.Component {
    render() {
        return (
            <ul className="dropdown-menu dropdown-user">
                <li>
                    <a href="#">
                        <i className="fa fa-user fa-fw" /> User Profile
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i className="fa fa-gear fa-fw" /> Settings
                    </a>
                </li>
                <li className="divider" />
                <li>
                    <a href="/auth#/logout">
                        <i className="fa fa-sign-out fa-fw" /> Logout
                    </a>
                </li>
            </ul>
        );
    }
}
