import React from 'react';

export default class LabTestListPage extends React.Component {
    render() {
        return (
            <div className="panel-body">
                <table width="100%" className="table table-striped table-bordered table-hover" id="dataTables-example">
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Item</th>
                            <th>Request By</th>
                            <th>Status</th>
                            <th>Result</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="odd gradeX">
                            <td>4/22/2017</td>
                            <td>Agranulocyte Count (Blood)</td>
                            <td>Dr. Surendra Shaky</td>
                            <td>Progress</td>
                            <td>-</td>
                            <td className="center">
                                <a href="#">View Details</a>
                            </td>
                        </tr>
                        <tr className="odd gradeX">
                            <td>4/22/2017</td>
                            <td>Agranulocyte Count (Blood)</td>
                            <td>Blood Group</td>
                            <td>Completed</td>
                            <td>AB+</td>
                            <td className="center">
                                <a href="#">View Details</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}
