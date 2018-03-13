import React from 'react';
import {Link} from 'react-router-dom';

import SideNavBar from 'components/navigations/sideNavBar';
import TopRightNavBar from 'components/navigations/topRightNavBar';

export default class TopNavBar extends React.Component {
    style = {
        topNav: {
            marginBottom: 0
        }
    };

    render() {
        return (
            <nav className="navbar navbar-default navbar-static-top" role="navigation" style={this.style.topNav}>
                <div className="navbar-header">
                    <button
                        type="button"
                        className="navbar-toggle"
                        data-toggle="collapse"
                        data-target=".navbar-collapse">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar" />
                        <span className="icon-bar" />
                        <span className="icon-bar" />
                    </button>
                    <Link to="/" className="navbar-brand">
                        Hamro HMS
                    </Link>
                </div>
                <TopRightNavBar />
                <SideNavBar />
            </nav>
        );
    }
}
