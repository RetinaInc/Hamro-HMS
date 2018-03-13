import React from 'react';

export default class VisitHistoryPage extends React.Component {
    render() {
        return (
            <div className="panel-body">
                <table width="100%" className="table table-striped table-bordered table-hover" id="dataTables-example">
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Visit Type</th>
                            <th>Description</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="odd gradeX">
                            <td>4/22/2017</td>
                            <td>OPD</td>
                            <td>General checkup</td>
                            <td className="center">
                                <a href="#"> view</a>
                            </td>
                        </tr>
                        <tr className="odd gradeX">
                            <td>4/22/2017</td>
                            <td>OPD</td>
                            <td>General checkup</td>
                            <td className="center">
                                <a href="#"> view</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}
