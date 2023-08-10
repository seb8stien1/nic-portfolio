import React from 'react';
import '../App.css';
import CircleImages from "../components/CircleImages";
import Navbar from "../components/Navbar2";
class ColourWheel extends React.Component {
    render() {

        return (
            <div>
                <Navbar page={"colour"}/>
                <CircleImages />
            </div>
        );
    }
}

export default ColourWheel
