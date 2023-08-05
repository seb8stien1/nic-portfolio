import React from 'react';
import '../App.css';
import CircleImages from "../components/CircleImages";
import Navbar from "../components/Navbar2";
import Box from '@mui/material/Box';
class ColourWheel extends React.Component {
    render() {

        return (
            <div>
                <Navbar/>
                <div className="content">
                    <Box sx={{display: {xs: 'flex', md:'none'}}} style={{position: 'absolute', left: '50vw', top:'50vh', transform: 'translate(-50%, -50%)'}}>
                        <CircleImages imageSize={"27vw"} elementHeight={"90vw"} elementWidth={"90vw"}/>
                    </Box>
                    <Box sx={{display: {xs: 'none', md:'flex'}}} style={{position: 'absolute', left: '50%', transform: 'translateX(-50%)', marginTop:"10vh"}}>
                        <CircleImages  imageSize={"12vw"} elementHeight={"70vh"} elementWidth={"39vw"}/>
                    </Box>

                </div>
            </div>
        );
    }
}

export default ColourWheel
