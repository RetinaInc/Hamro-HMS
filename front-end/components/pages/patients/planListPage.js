import React from 'react';

export default class PlanListPage extends React.Component {
    render() {
        return <div className="panel-body">
            <table width="100%" className="table table-striped table-bordered table-hover"
                   id="dataTables-example">
                <thead>
                <tr>
                    <th>Date</th>
                    <th>Surgery Plan</th>
                    <th>Plan Date</th>
                    <th>Plan By</th>
                    <th>Status</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                <tr className="odd gradeX">
                    <td>4/22/2017</td>
                    <td>Teeth Extraction</td>
                    <td>5/22/2017</td>
                    <td>Dr. Surendra Shaky</td>
                    <td>Planed</td>
                    <td className="center"><a href="#">View Details</a></td>
                </tr>
                <tr className="odd gradeX">
                    <td>4/22/2017</td>
                    <td>Teeth Extraction</td>
                    <td>3/22/2017</td>
                    <td>Dr. Surendra Shaky</td>
                    <td>Completed</td>
                    <td className="center"><a href="#">View Details</a></td>
                </tr>
                </tbody>
            </table>
        </div>
    }
}