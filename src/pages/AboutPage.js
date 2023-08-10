import React from 'react';
import '../App.css';
import Navbar from "../components/Navbar2";
import Box from "@mui/material/Box";
import {Typography} from "@mui/material";

class AboutPage extends React.Component {
    render() {

        return (
            <div>
                <Navbar page={'about'}/>
                <Box sx={{display: {xs:"none", md: "flex"}}} style={{marginTop: "8vh", height: "80vh"}}>
                    <img src={require("../resources/about/about1.jpg")} alt={"nic"} height="100%"
                         style={{borderRadius:"2%", marginLeft:"2vw"}}/>
                    <Box style={{height:"80vh"}}>
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
                <Box sx={{display: {xs:"grid", md: "none"}}} style={{marginTop: "5vh", marginBottom:"2vh"}}>
                    <img src={require("../resources/about/about1.jpg")} alt={"nic2"} width="320px"
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
