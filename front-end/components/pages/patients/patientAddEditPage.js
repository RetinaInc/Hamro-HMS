import React from 'react';

export default class PatientAddEditPage extends React.Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-lg-12">
                        <h3 className="page-header">Add Patient</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <form role="form">
                            <div className="panel panel-default">
                                <div className="panel-heading">Patient Information</div>
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
                                                <label>First Name</label>
                                                <input className="form-control" />
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="form-group">
                                                <label>Middle Name</label>
                                                <input className="form-control" />
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="form-group">
                                                <label>Last Name</label>
                                                <input className="form-control" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-lg-4">
                                            <div className="form-group">
                                                <label>Gender</label>
                                                <select className="form-control">
                                                    <option>Male</option>
                                                    <option>Female</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="form-group">
                                                <label>Birth Of Date</label>
                                                <div className="input-group">
                                                    <input type="text" className="form-control" />
                                                    <span className="input-group-addon">
                                                        <i className="fa fa-calendar" />
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="form-group">
                                                <label>Age</label>
                                                <input type="number" className="form-control" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="panel-heading">Address Information</div>
                                <div className="panel-body">
                                    <div className="row">
                                        <div className="col-lg-4">
                                            <div className="form-group">
                                                <label>Address</label>
                                                <input className="form-control" />
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="form-group">
                                                <label>MVC / DVC</label>
                                                <input className="form-control" />
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="form-group">
                                                <label>District</label>
                                                <input className="form-control" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-4">
                                            <div className="form-group">
                                                <label>Zone</label>
                                                <input className="form-control" />
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="form-group">
                                                <label>Country</label>
                                                <input className="form-control" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-4">
                                            <div className="form-group">
                                                <label>Type</label>
                                                <select className="form-control">
                                                    <option>Permanent</option>
                                                    <option>Temporary</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="panel-heading">Contact Information</div>
                                <div className="panel-body">
                                    <div className="row">
                                        <div className="col-lg-4">
                                            <div className="form-group">
                                                <label>Contact Number</label>
                                                <input className="form-control" />
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="form-group">
                                                <label>Type</label>
                                                <select className="form-control">
                                                    <option>Mobile</option>
                                                    <option>Home</option>
                                                    <option>Office</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-4">
                                            <div className="form-group">
                                                <label>Email</label>
                                                <input className="form-control" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="panel-heading">Other Information</div>
                                <div className="panel-body">
                                    <div className="row">
                                        <div className="col-lg-4">
                                            <div className="form-group">
                                                <label>Patient Type</label>
                                                <select className="form-control">
                                                    <option>Charity</option>
                                                    <option>Private</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="form-group">
                                                <label>Education</label>
                                                <select className="form-control">
                                                    <option>Bachelor</option>
                                                    <option>SLC</option>
                                                    <option>Master</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="form-group">
                                                <label>Occupation</label>
                                                <select className="form-control">
                                                    <option>Business</option>
                                                    <option>Teacher</option>
                                                    <option>Engineer</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-4">
                                            <div className="form-group">
                                                <label>Religion</label>
                                                <select className="form-control">
                                                    <option>Hindu</option>
                                                    <option>Muslim</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="form-group">
                                                <label>Identification</label>
                                                <input className="form-control" />
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="form-group">
                                                <label>Identification Type</label>
                                                <select className="form-control">
                                                    <option />
                                                    <option>National Identification</option>
                                                    <option>Driving License</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="panel-heading">Guardian Information</div>
                                <div className="panel-body">
                                    <div className="row">
                                        <div className="col-lg-4">
                                            <div className="form-group">
                                                <label>First Name</label>
                                                <input className="form-control" />
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="form-group">
                                                <label>Middle Name</label>
                                                <input className="form-control" />
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="form-group">
                                                <label>Last Name</label>
                                                <input className="form-control" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-lg-4">
                                            <div className="form-group">
                                                <label>Relationship</label>
                                                <select className="form-control">
                                                    <option />
                                                    <option>Father</option>
                                                    <option>Mother</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="form-group">
                                                <label>Gender</label>
                                                <select className="form-control">
                                                    <option>Male</option>
                                                    <option>Female</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="form-group">
                                                <label>Contact Number</label>
                                                <div className="input-group">
                                                    <input type="text" className="form-control" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="panel-body">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <button type="submit" className="btn btn-default">
                                                Save
                                            </button>
                                            <button type="button" className="btn btn-default">
                                                Cancel
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
