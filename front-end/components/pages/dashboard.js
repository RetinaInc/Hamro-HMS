import React from 'react';

export default class Dashboard extends React.Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-lg-12">
                        <h3 className="page-header">Dashboard</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-3 col-md-6">
                        <div className="panel panel-primary">
                            <div className="panel-heading">
                                <div className="row">
                                    <div className="col-xs-3">
                                        <i className="fa fa-users fa-5x" />
                                    </div>
                                    <div className="col-xs-9 text-right">
                                        <div className="huge">26</div>
                                        <div>Users</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <div className="panel panel-green">
                            <div className="panel-heading">
                                <div className="row">
                                    <div className="col-xs-3">
                                        <i className="fa fa-bed fa-5x" />
                                    </div>
                                    <div className="col-xs-9 text-right">
                                        <div className="huge">12</div>
                                        <div>IPD Patients</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <div className="panel panel-yellow">
                            <div className="panel-heading">
                                <div className="row">
                                    <div className="col-xs-3">
                                        <i className="fa fa-shopping-cart fa-5x" />
                                    </div>
                                    <div className="col-xs-9 text-right">
                                        <div className="huge">124</div>
                                        <div>New Orders!</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <div className="panel panel-red">
                            <div className="panel-heading">
                                <div className="row">
                                    <div className="col-xs-3">
                                        <i className="fa fa-support fa-5x" />
                                    </div>
                                    <div className="col-xs-9 text-right">
                                        <div className="huge">13</div>
                                        <div>Support Tickets!</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
