import React, { Component } from 'react';
import Header from '../../header/Header';
import Posts from '../../posts/Posts';
import Sidebar from '../../sidebar/Sidebar';
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