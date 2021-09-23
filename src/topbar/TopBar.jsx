import React, { Component } from 'react';
import './topbar.css'
class TopBar extends Component {
    render() {
        return (
            <div className="top">
                <div className="top__left">
                    <i className="top__icon fab fa-facebook-square"></i>
                    <i className="top__icon fab fa-twitter-square"></i>
                    <i className="top__icon fab fa-pinterest-square"></i>
                    <i className="top__icon fab fa-instagram-square"></i>
                </div>
                <div className="top__center">
                    <ul className="top__list">
                        <li className="top__list--item">HOME</li>
                        <li className="top__list--item">ABOUT</li>
                        <li className="top__list--item">CONTACT</li>
                        <li className="top__list--item">WRITE</li>
                        <li className="top__list--item">LOGOUT</li>
                    </ul>
                </div>
                <div className="top__right">
                    <img src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="top__img" />
                    <i className="top__search--icon fas fa-search"></i>
                </div>
            </div>
        );
    }
}

export default TopBar;