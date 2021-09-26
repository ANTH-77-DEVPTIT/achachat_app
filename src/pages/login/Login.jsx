import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './login.css'
class Login extends Component {
    render() {
        return (
            <div className="login">
                <span className="login__title">Login</span>
                <form className="login__form">
                    <label>Email</label>
                    <input type="email" className="login__input" placeholder="Enter your email" />
                    <label>Password</label>
                    <input type="password" className="login__input" placeholder="Enter your password" />
                    <button className="login__btn">Login</button>
                </form>
                    <button className="login__btn--register">
                        <Link to="/register" className="link">Register</Link>
                    </button>
            </div>
        );
    }
}

export default Login;