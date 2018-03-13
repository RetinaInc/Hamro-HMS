import React from 'react';

import UserDropDown from 'components/dropdownMenus/userDropdown';

export default class TopRightNavBar extends React.Component {
    render() {
        return (
            <ul className="nav navbar-top-links navbar-right">
                <li className="dropdown">
                    <a className="dropdown-toggle" data-toggle="dropdown" href="#">
                        <i className="fa fa-user fa-fw" /> <i className="fa fa-caret-down" />
                    </a>
                    <UserDropDown />
                </li>
            </ul>
        );
    }
}
