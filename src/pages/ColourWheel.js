import React from 'react';
import '../App.css';
import CircleImages from "../components/CircleImages";
import Navbar from "../components/NavbarMobile";
import NavbarWide from "../components/NavbarWide";
class ColourWheel extends React.Component {
    render() {

        return (
            <div style={{display: 'column', justifyContent: 'center', alignItems: 'flex-start'}}>
                <NavbarWide page={"colour"}/>
                <Navbar page={"colour"}/>
                <CircleImages />
            </div>
        );
    }
}

export default ColourWheel
