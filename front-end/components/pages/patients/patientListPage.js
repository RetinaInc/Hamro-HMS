import React from 'react';

export default class PatientListPage extends React.Component {

    componentDidMount() {
        $('#dataTables-example').DataTable({
            responsive: true
        });
    }

    render() {
        return <div>
            <div className="row">
                <div className="col-lg-12">
                    <h3 className="page-header">Patients</h3>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            DataTables Advanced Tables
                        </div>
                        <div className="panel-body">
                            <table width="100%" className="table table-striped table-bordered table-hover"
                                   id="dataTables-example">
                                <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Name</th>
                                    <th>Gender</th>
                                    <th>Address</th>
                                    <th>Contact</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr className="odd gradeX">
                                    <td>ST1000</td>
                                    <td>Sanish Maharjan</td>
                                    <td>M</td>
                                    <td>Panga, Kirtipur</td>
                                    <td className="center">9841115968</td>
                                    <td className="center">Admitted</td>
                                    <td className="center">
                                        &nbsp;
                                        <a href="#/patients/form">Edit</a>
                                        &nbsp; | &nbsp;
                                        <a href="#/patients/checkin">Check-In</a>
                                    </td>
                                </tr>
                                <tr className="odd gradeX">
                                    <td>ST1000</td>
                                    <td>Sanish Maharjan</td>
                                    <td>M</td>
                                    <td>Panga, Kirtipur</td>
                                    <td className="center">9841115968</td>
                                    <td className="center">Admitted</td>
                                    <td className="center"></td>
                                </tr>
                                <tr className="odd gradeX">
                                    <td>ST1000</td>
                                    <td>Sanish Maharjan</td>
                                    <td>M</td>
                                    <td>Panga, Kirtipur</td>
                                    <td className="center">9841115968</td>
                                    <td className="center">Admitted</td>
                                    <td className="center"></td>
                                </tr>
                                <tr className="odd gradeX">
                                    <td>ST1000</td>
                                    <td>Sanish Maharjan</td>
                                    <td>M</td>
                                    <td>Panga, Kirtipur</td>
                                    <td className="center">9841115968</td>
                                    <td className="center">Admitted</td>
                                    <td className="center"></td>
                                </tr>
                                <tr className="odd gradeX">
                                    <td>ST1000</td>
                                    <td>Sanish Maharjan</td>
                                    <td>M</td>
                                    <td>Panga, Kirtipur</td>
                                    <td className="center">9841115968</td>
                                    <td className="center">Admitted</td>
                                    <td className="center"></td>
                                </tr>
                                <tr className="odd gradeX">
                                    <td>ST1000</td>
                                    <td>Sanish Maharjan</td>
                                    <td>M</td>
                                    <td>Panga, Kirtipur</td>
                                    <td className="center">9841115968</td>
                                    <td className="center">Admitted</td>
                                    <td className="center"></td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>;
    }

}