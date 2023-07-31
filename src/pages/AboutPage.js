import React from 'react';
import '../App.css';
import Navbar from "../components/Navbar2";

class AboutPage extends React.Component {
    render() {

        return (
            <div className="App">
                <Navbar/>
                <h1>This is the second page</h1>
            </div>
        )
    };
};

export default AboutPage;
