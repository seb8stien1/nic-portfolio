import React from 'react';
import '../App.css';
import CircleImages from "../components/CircleImages";
import Navbar from "../components/Navbar";

class HomePage extends React.Component {
    render() {

        return (
            <div className="App">
                <Navbar/>
                <CircleImages/>
            </div>
        );
    }
}

export default HomePage
