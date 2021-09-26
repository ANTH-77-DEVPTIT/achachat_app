import React, { Component } from 'react';
import Header from '../../components/header/Header';
import Posts from '../../components/posts/Posts';
import Sidebar from '../../components/sidebar/Sidebar';
import './home.css'
class Home extends Component {
    render() {
        return (
            <>
                <Header/>
                <div className="home">
                    <Posts/>
                    <Sidebar/>    
                </div>
            </>
        );
    }
}

export default Home;