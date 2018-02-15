import React from 'react';
import {Route} from 'react-router-dom';

import PatientListPage from 'components/pages/patients/patientListPage';
import PatientAddEditPage from 'components/pages/patients/patientAddEditPage';

export default class PatientPageWrapper extends React.Component{
    render(){
        return <div>
            <Route exact={true} path={this.props.match.url} component={PatientListPage}/>
            <Route exact={true} path={`${this.props.match.url}/list`} component={PatientListPage}/>
            <Route exact={true} path={`${this.props.match.url}/form`} component={PatientAddEditPage}/>
        </div>
    }
}