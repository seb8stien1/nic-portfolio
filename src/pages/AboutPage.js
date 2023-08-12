import React from 'react';
import '../App.css';
import Navbar from "../components/NavbarMobile";
import Box from "@mui/material/Box";
import {Typography} from "@mui/material";
import NavbarWide from "../components/NavbarWide";

class AboutPage extends React.Component {
    render() {

        return (
            <div>
                <NavbarWide page={'about'}/>
                <Navbar page={'about'}/>
                <Box sx={{display: {xs:"none", lg: "flex"}}} style={{ height: "75vh"}}>
                    <img src={require("../resources/about/about1.jpg")} alt={"nic"} height="100%"
                         style={{borderRadius:"2%", marginLeft:"2vw", marginTop: "3vh"}}/>
                    <Box>
                    <Typography
                        style={{marginLeft: "2vw", marginRight: "2vw", position: "relative", top: "50%",
                            transform: "translateY(-50%)", fontFamily:"Garamond", fontSize:"20px"}}
                    >
                            Nicolas Cantin is a Chilean-Canadian portrait and concert photographer based in Montreal.
                            His work aims to capture and explore various aspects of the human experience such as passions
                            and identity, as well as to document the world around him using his camera shooting both film and digital to bring his vision
                            to life. Nicolas is interested in creating art capable of trandscending an aesthetic and that
                            can have a lasting impact on his audience.
                        <br/><br/>
                        <Typography style={{fontFamily: 'Garamond bold', fontSize:"20px"}}>
                            Contact: penproduct1@gmail.com
                        </Typography>
                    </Typography>
                    </Box>
                </Box>
                <Box sx={{display: {xs:"grid", lg: "none"}}} style={{marginBottom:"2vh", marginTop:"2vh", height: "75vh"}}>
                    <img src={require("../resources/about/about1.jpg")} alt={"nic2"} width="300px"
                         style={{position: "relative", left:"50%", transform:"translateX(-50%)", borderRadius:"2%"}}/>
                    <Typography style={{marginLeft: "2vw", marginRight: "2vw", fontFamily:"Garamond", marginTop: "3vh"}}>
                        Nicolas Cantin is a Chilean-Canadian portrait and concert photographer based in Montreal.
                        His work aims to capture and explore various aspects of the human experience such as passions
                        and identity, as well as to document the world around him using his camera shooting both film and digital to bring his vision
                        to life. Nicolas is interested in creating art capable of trandscending an aesthetic and that
                        can have a lasting impact on his audience.
                        <br/><br/>
                        Contact: penproduct1@gmail.com
                    </Typography>
                </Box>
            </div>
        )
    };
};

export default AboutPage;
