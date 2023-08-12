import React from 'react';
import '../App.css';
import CircleImages from "../components/CircleImages";
import Navbar from "../components/NavbarMobile";
import NavbarWide from "../components/NavbarWide";
class ColourWheel extends React.Component {
    render() {

        return (
            <div>
                <NavbarWide page={"colour"}/>
                <Navbar page={"colour"}/>
                <CircleImages />
                <div style={{position: "fixed", zIndex:-1, bottom: 0, left:0, backgroundColor:"white", width:"100vw", height: "100vh"}} />
            </div>
        );
    }
}

export default ColourWheel
