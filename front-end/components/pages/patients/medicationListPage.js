import React from 'react';

export default class MedicationListPage extends React.Component {
    render() {
        return <div className="panel-body">
            <table width="100%" className="table table-striped table-bordered table-hover"
                   id="dataTables-example">
                <thead>
                <tr>
                    <th>Date</th>
                    <th>Medicine</th>
                    <th>prescriber</th>
                    <th>Start Date</th>
                    <th>Status</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                <tr className="odd gradeX">
                    <td>4/22/2017</td>
                    <td>Paracetamol 4.5 Litre (Syrup)</td>
                    <td>Dr. Surendra Shaky</td>
                    <td>4/22/2017</td>
                    <td>Progess</td>
                    <td className="center"><a href="#">Stop</a></td>
                </tr>
                <tr className="odd gradeX">
                    <td>4/22/2017</td>
                    <td>Ipratropium Bromide Respirator</td>
                    <td>Dr. Surendra Shaky</td>
                    <td>4/22/2017</td>
                    <td>Progess</td>
                    <td className="center"><a href="#">Stop</a></td>
                </tr>
                </tbody>
            </table>
        </div>
    }
}