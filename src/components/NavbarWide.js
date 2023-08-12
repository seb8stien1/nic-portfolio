import React from "react";
import '../App.css';
import {AppBar, Button, Menu, MenuItem, Toolbar, Typography} from "@mui/material";
import Box from "@mui/material/Box";
import {Link} from "react-router-dom";
import logo from "../resources/pen.png";
import InstagramIcon from "@mui/icons-material/Instagram";

const NavbarWide = (props) => {

    const [dropDown, setDropDown] = React.useState(null);
    const handleClick = (event) => {
        if (dropDown === null) {
            setDropDown(event.currentTarget);
        }
        else {
            setDropDown(null);
        }
    };

    return (
        <AppBar position="sticky" sx={{display: {xs:"none", lg:"inline"}}} elevation={0} >
            <Toolbar disableGutters style={{backgroundColor: "white"}}>
                <Box style={{position: 'absolute', left: '1.5vw'}} >
                    <Button style={{background:"transparent"}} disableRipple onClick={handleClick}>
                        <Typography
                            style={{fontSize: '20px', fontFamily:"Couture", color: "black"}}
                            sx={ props.page === "portrait" || props.page === "cuba" || props.page === "concert"
                                    ? {textDecoration: 'underline', textDecorationThickness: "3px"} : {} }
                        >
                            Portfolio
                        </Typography>
                    </Button>
                    <Menu anchorEl={dropDown} open={Boolean(dropDown)} onClose={handleClick} >
                        <Link to={'/portrait'} style={{textDecoration: 'none'}}>
                            <MenuItem style={{background:"transparent"}} disableRipple onClick={handleClick}>
                                <Typography
                                    style={{fontSize: '20px', fontFamily:"Couture", color: "black"}}
                                    sx={props.page === "portrait" ? {textDecoration: 'underline', textDecorationThickness: "3px"} : {} }
                                >
                                    Portrait
                                </Typography>
                            </MenuItem>
                        </Link>
                        <Link to={'/concert'} style={{textDecoration: 'none'}}>
                            <MenuItem style={{background:"transparent"}} disableRipple onClick={handleClick}>
                                <Typography
                                    style={{fontSize: '20px', fontFamily:"Couture", color: "black"}}
                                    sx={ props.page === "concert" ? {textDecoration: 'underline', textDecorationThickness: "3px"} : {} }
                                >
                                    Concert
                                </Typography>
                            </MenuItem>
                        </Link>
                        <Link to={'/cuba'} style={{textDecoration: 'none'}}>
                            <MenuItem style={{background:"transparent"}} disableRipple onClick={handleClick}>
                                <Typography
                                    style={{fontSize: '20px', fontFamily:"Couture", color: "black"}}
                                    sx={ props.page === "cuba" ? {textDecoration: 'underline', textDecorationThickness: "3px"} : {} }
                                >
                                    Cuba
                                </Typography>
                            </MenuItem>
                        </Link>
                    </Menu>
                    <Link to={"/colour-wheel"} >
                        <Button style={{background:"transparent", marginLeft: "2vw"}} disableRipple>
                            <Typography
                                style={{fontSize: '20px', fontFamily:"Couture", color: "black"}}
                                sx={ props.page === "colour" ? {textDecoration: 'underline', textDecorationThickness: "3px"} : {} }
                            >
                                Colour Wheel
                            </Typography>
                        </Button>
                    </Link>
                    <Link to={"/about"}>
                        <Button style={{background:"transparent", marginLeft: "2vw"}} disableRipple>
                            <Typography
                                style={{fontSize: '20px', fontFamily:"Couture", color: "black"}}
                                sx={ props.page === "about" ? {textDecoration: 'underline', textDecorationThickness: "3px"} : {} }
                            >
                                About
                            </Typography>
                        </Button>
                    </Link>
                </Box>
                <Box style={{position: 'relative', left: '50%', transform: "translateX(-50%)", marginTop: "2vh", marginBottom: "1vh"}}>
                    <Link to="/">
                        <img alt="Pen Product" src={logo} style={{height: "12vh", width: "16vh", userSelect: "none"}}/>
                    </Link>
                </Box>
                <Box style={{position: 'absolute', right: '1.5vw'}}>
                    <Link to={"https://www.instagram.com/penproduct/"} >
                        <InstagramIcon style={{transform: "scale(1.2)", color: "black"}}/>
                    </Link>
                </Box>
            </Toolbar>
        </AppBar>
    )};

export default NavbarWide;
