import React from 'react';
import '../App.css';
import CircleImages from "../components/CircleImages";
import Navbar from "../components/Navbar";
import pen from '../resources/pen.png';

class ColourWheel extends React.Component {
    render() {

        return (
            <div className="App" >
                <Navbar/>
                <div className="content">
                    <div className="App-header">
                        <img src={pen} alt={"Pen Signature"} style={{height:'100%', width:'auto'}}/>
                    </div>
                    <div style={{marginTop:"8%"}}/>
                    <CircleImages/>
                </div>
            </div>
        );
    }
}

export default ColourWheel
