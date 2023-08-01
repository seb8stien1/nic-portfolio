import React from 'react';
import '../App.css';
import CircleImages from "../components/CircleImages";
import Navbar from "../components/Navbar2";

class ColourWheel extends React.Component {
    render() {

        return (
            <div>
                <Navbar/>
                <div className="content">
                    <div style={{marginTop:"8%"}}/>
                    <CircleImages/>
                </div>
            </div>
        );
    }
}

export default ColourWheel
