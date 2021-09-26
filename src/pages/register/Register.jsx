import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './register.css'
class Register extends Component {
    render() {
        return (
            <div className="register">
                <span className="register__title">Register</span>
                <form className="register__form">
                    <label bel>User name</label>
                    <input type="text" className="register__input" placeholder="Enter your user name" />
                    <label bel>Email</label>
                    <input type="email" className="register__input" placeholder="Enter your email" />
                    <label>Password</label>
                    <input type="password" className="register__input" placeholder="Enter your password" />
                    <button className="register__btn">Register</button>
                </form>
                    <button className="register__btn--login">
                        <Link to="/login" className="link">Login</Link>
                    </button>
            </div>
        );
    }
}

export default Register;