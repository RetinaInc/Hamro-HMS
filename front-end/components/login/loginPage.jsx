import React from 'react';
import PropTypes from 'prop-types';

export default class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };

        this.emailFieldChange = this.emailFieldChange.bind(this);
    }

    emailFieldChange() {
        this.setState({
            email: this.emailField.value
        });
    }

    passwordFieldChange() {
        this.setState({
            password: this.passwordField.value
        });
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-4 col-md-offset-4">
                    <div className="login-panel panel panel-default">
                        <div className="panel-heading">
                            <h3 className="panel-title">Please Sign In</h3>
                        </div>
                        <div className="panel-body">
                            <form role="form">
                                <fieldset>
                                    <div className="form-group">
                                        <input
                                            className="form-control"
                                            placeholder="E-mail"
                                            name="email"
                                            type="email"
                                            autoFocus={true}
                                            value={this.state.email}
                                            ref={(emailField) => {
                                                this.emailField = emailField;
                                            }}
                                            onChange={this.emailFieldChange}
                                            required={true}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input
                                            className="form-control"
                                            placeholder="Password"
                                            name="password"
                                            ref={(passwordField) => {
                                                this.passwordField = passwordField;
                                            }}
                                            type="password"
                                            value={this.state.password}
                                            required={true}
                                        />
                                    </div>

                                    <input
                                        type="submit"
                                        value="Login"
                                        name="login"
                                        id="login-bth"
                                        className="btn btn-lg btn-success btn-block"
                                    />
                                </fieldset>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
