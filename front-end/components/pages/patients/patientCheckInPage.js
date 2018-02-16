import React from 'react';

export default class PatientCheckInPage extends React.Component {
    style = {
        textarea: {
            resize: 'none'
        },
        startVisitDropDown: {
            width: 200,
            display: 'inline'
        }
    };

    render() {
        return <div>
            <div className="row">
                <div className="col-lg-12">
                    <h3 className="page-header">Check-In Patient</h3>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <form role="form">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                Patient Information
                            </div>
                            <div className="panel-body">
                                <div className="row">
                                    <div className="col-lg-4">
                                        <div className="form-group">
                                            <label>Patient Identifier: ST10000</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-4">
                                        <div className="form-group">
                                            <label>Name: Sanish Maharjan</label>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="form-group">
                                            <label>Gender: Male</label>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="form-group">
                                            <label>Age: 29 years</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-4">
                                        <div className="form-group">
                                            <label>Address: Panga, Kirtipur</label>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="form-group">
                                            <label>Contact Number: 9841115968</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Primary Diagnosis:</label>
                                            <ul>
                                                <li>Diagnosis1, diagnosis2 (4/22/2017)</li>
                                                <li>Diagnosis 3 (5/22/2017)</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="panel-heading">
                                Check-In Details
                            </div>
                            <div className="panel-body">
                                <div className="row">
                                    <div className="col-lg-4">
                                        <div className="form-group">
                                            <label>Check In</label>
                                            <div className="input-group">
                                                <input type="text" className="form-control"/>
                                                <span className="input-group-addon">
                                                <i className="fa fa-calendar"></i>
                                            </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="form-group">
                                            <label>Visit Type</label>
                                            <select className="form-control">
                                                <option>OPD Visit</option>
                                                <option>IPD Visit</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="form-group">
                                            <label>Location</label>
                                            <select className="form-control">
                                                <option>General Checkup</option>
                                                <option>IPD Followup</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-4">
                                        <div className="form-group">
                                            <label>Examiner</label>
                                            <input className="form-control"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="form-group">
                                            <label>Refer BY</label>
                                            <input className="form-control"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="form-group">
                                            <label>Refer Date</label>
                                            <div className="input-group">
                                                <input type="text" className="form-control"/>
                                                <span className="input-group-addon">
                                                <i className="fa fa-calendar"></i>
                                            </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-8">
                                        <div className="form-group">
                                            <label>Reason for Visit</label>
                                            <textarea rows="5" className="form-control" style={this.style.textarea}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="panel-body">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <select className="form-control" style={this.style.startVisitDropDown}>
                                                    <option>Start IPD Visit</option>
                                                    <option>Start OPD Visit</option>
                                                    <option>Start Special OPD Visit</option>
                                                    <option>Start Pharmacy Visit</option>
                                                    <option>Start Lab Visit</option>
                                                    <option>Start Emergency Visit</option>
                                                </select>
                                                &nbsp;
                                                <button type="button" className="btn btn-default">Cancel</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>;
    }
}