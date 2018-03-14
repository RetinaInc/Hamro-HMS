import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import UrlHelper from 'utilities/urlHelper';
export default class LoginPage extends React.Component {
    constructor(props, context) {
        super(props);
        this.state = {
            userName: '',
            password: '',
            isLogin: false,
            disableSubmit: false
        };

        this.urlHelper = new UrlHelper();
        this.store = context.store;
        this.userNameFieldChange = this.userNameFieldChange.bind(this);
        this.passwordFieldChange = this.passwordFieldChange.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
    }

    async componentWillMount() {
        let self = this;
        try {
            let response = await axios.get(this.urlHelper.apiBaseUrl() + '/authentication');
            if (response.data.isLogin) {
                this.setState({
                    isLogin: response.data.isLogin
                });
            }
        } catch (error) {
            self.store.notify('error', error.message);
        }
    }

    shouldComponentUpdate(nextProps, nextState){
        if(nextState.isLogin){
            window.location = '/clinical';
        }

        return true;
    }

    userNameFieldChange() {
        this.setState({
            userName: this.userNameField.value
        });
    }

    passwordFieldChange() {
        this.setState({
            password: this.passwordField.value
        });
    }

    async submitHandler(event) {
        let self = this;
        event.preventDefault();
        this.setState({
            disableSubmit: true
        });

        try {
            let parameters = {
                userName: this.state.userName,
                password: this.state.password
            };

            let response = await axios({
                method: 'post',
                url: this.urlHelper.apiBaseUrl() + '/authentication',
                headers: {'Content-Type': 'application/json'},
                data: parameters
            });

            self.setState({
                disableSubmit: false,
                isLogin: response.data.isLogin
            });
        } catch (errorResponse) {
            this.setState({
                disableSubmit: false
            });

            let error = errorResponse.response ? errorResponse.response.data : errorResponse;
            self.store.notify('error', error.message);
        }

    }

    render() {
        return <div className="row">
            <div className="col-md-4 col-md-offset-4">
                <div className="login-panel panel panel-default">
                    <div className="panel-heading">
                        <h3 className="panel-title">Please Sign In</h3>
                    </div>
                    <div className="panel-body">
                        <form id="login-form" onSubmit={this.submitHandler}>
                            <fieldset>
                                <div className="form-group">
                                    <input
                                        className="form-control"
                                        placeholder="userName"
                                        name="userName"
                                        type="text"
                                        autoFocus={true}
                                        value={this.state.userName}
                                        ref={(userNameField) => {
                                            this.userNameField = userNameField;
                                        }}
                                        onChange={this.userNameFieldChange}
                                        required={true}
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="password"
                                        value={this.state.password}
                                        className="form-control"
                                        placeholder="Password"
                                        name="password"
                                        ref={(passwordField) => {
                                            this.passwordField = passwordField;
                                        }}
                                        onChange={this.passwordFieldChange}
                                        required={true}
                                    />
                                </div>

                                <input
                                    type="submit"
                                    value="Login"
                                    name="login"
                                    id="login-bth"
                                    disabled={this.state.disableSubmit}
                                    className="btn btn-lg btn-success btn-block"
                                />
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>;
    }
}

LoginPage.contextTypes = {
    store: PropTypes.object
};