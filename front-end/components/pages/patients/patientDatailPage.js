import React from 'react';

export default class PatientDetailPage extends React.Component {
    render() {
        return <div>
            <div className="row">
                <div className="col-lg-12">
                    <h3 className="page-header">Patient Details</h3>
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
                                Patient Medical Record
                            </div>
                            <div className="panel-body">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label>Primary Diagnosis:</label>
                                            <ul>
                                                <li>Congenital Heart Defects, Celiac Disease (2017-01-05)</li>
                                                <li>Premature Infant (2017-02-10)</li>
                                            </ul>
                                        </div>
                                        <div className="form-group">
                                            <label>Plan:</label>
                                            <ul>
                                                <li>Teeth Extraction (4/22/2017)</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label>Habits:</label>
                                            <ul>
                                                <li>Smokes, Drink Alkohol</li>
                                            </ul>
                                        </div>
                                        <div className="form-group">
                                            <label>Allergies:</label>
                                            <ul>
                                                <li>Perfume, Hot peppers</li>
                                            </ul>
                                        </div>
                                        <div className="form-group">
                                            <label>Chonic Disease:</label>
                                            <ul>
                                                <li>Kidney failure</li>
                                                <li>Asthma</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="panel-heading">
                                Other Information
                            </div>
                            <div className="panel-body">
                                <ul className="nav nav-tabs">
                                    <li className="active">
                                        <a href="#history" data-toggle="tab">Visit History</a>
                                    </li>
                                    <li>
                                        <a href="#medication" data-toggle="tab">Medication</a>
                                    </li>
                                    <li>
                                        <a href="#radiology" data-toggle="tab">Radiology</a>
                                    </li>
                                    <li>
                                        <a href="#lab" data-toggle="tab">Lab</a>
                                    </li>
                                    <li>
                                        <a href="#plan" data-toggle="tab">Plan</a>
                                    </li>
                                </ul>

                                <div className="tab-content">
                                    <div className="tab-pane fade in active" id="history">
                                        Visit History
                                    </div>
                                    <div className="tab-pane fade" id="medication">
                                        Medication
                                    </div>
                                    <div className="tab-pane fade" id="radiology">
                                        Radiology
                                    </div>
                                    <div className="tab-pane fade" id="lab">
                                        Lab
                                    </div>
                                    <div className="tab-pane fade" id="plan">
                                        Plan
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