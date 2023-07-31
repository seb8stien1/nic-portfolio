import React from 'react';
import '../App.css';
import Navbar from "../components/Navbar2";

class HomePage extends React.Component {
    render() {

        return (
            <div className="App">
                <Navbar/>
                <h1>This is the home page</h1>
            </div>
        )
    };
};

export default HomePage;
