import * as React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import logo from "../resources/pen.png"
import {Link} from "react-router-dom";
import {
    AppBar,
    Box,
    Collapse,
    Dialog,
    IconButton,
    List,
    ListItemButton,
    Toolbar,
    Typography,
} from "@mui/material";
import '../App.css';
import InstagramIcon from '@mui/icons-material/Instagram';


function NavbarMobile(props) {
    const [dialog, setDialog] = React.useState(false);
    const [dropDown, setDropDown] = React.useState(false);
    const handleClick = () => {
        setDialog(!dialog);
    };
    const handleClick2 = (event) => {
        setDropDown(!dropDown);
    };

    return (
        <AppBar position="sticky" sx={{display: {xs:"inline", lg:"none"}}} elevation={0} >
            <Toolbar disableGutters style={{backgroundColor: "white"}}>
                <IconButton style={{position: "absolute", left: '1.5vw', background:"transparent"}} disableRipple onClick={handleClick} >
                    <MenuIcon style={{transform: "scale(1.2)"}}/>
                </IconButton>
                <Dialog
                    open={dialog}
                    onClose={handleClick}
                    PaperProps={{
                        style: {
                            backgroundColor: "transparent",
                            boxShadow: "none",
                            overflow: "hidden",
                        },
                    }}
                    slotProps={{backdrop: {style: {backgroundColor: 'rgba(255,255,255,1)'}}}}
                    fullScreen={true}
                >
                    <Toolbar>
                        <IconButton style={{position: 'absolute', left: '1.5vw'}} onClick={handleClick}>
                            <CloseIcon style={{transform: "scale(1.2)"}}/>
                        </IconButton>
                        <Box style={{position: 'relative', left: '50%', transform: "translateX(-50%)", marginTop: "2vh", marginBottom: "1vh"}}>
                            <Link to="/">
                                <img alt="Pen Product" src={logo} style={{height: "8vh", width: "12vh", userSelect: "none"}}/>
                            </Link>
                        </Box>
                        <Box style={{position: 'absolute', right: '1.5vw'}}>
                            <Link to={"https://www.instagram.com/penproduct/"} style={{textDecoration: 'none'}}>
                                <InstagramIcon style={{transform: "scale(1.2)", color: "black"}}/>
                            </Link>
                        </Box>
                    </Toolbar>
                    <Box style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}>
                        <List style={{width: "80vw"}}>
                            <ListItemButton style={{background:"transparent"}} disableRipple onClick={handleClick2}>
                                <Typography
                                    style={{fontSize: '3.5vh', fontFamily:"Couture", color: "black"}}
                                    sx={ props.page === "portrait" || props.page === "cuba" || props.page === "concert"
                                        ? {textDecoration: 'underline', textDecorationThickness: "3px"} : {} }
                                >
                                    Portfolio
                                </Typography>
                            </ListItemButton>
                            <Collapse in={dropDown} timeout="auto" unmountOnExit>
                                <List>
                                    <Link to={"/portrait"} style={{textDecoration: 'none'}}>
                                        <ListItemButton sx={{pl: 4}} style={{background:"transparent"}} disableRipple>
                                            <Typography
                                                style={{fontSize: '3vh', fontFamily:"Couture", color: "black"}}
                                                sx={props.page === "portrait" ? {textDecoration: 'underline', textDecorationThickness: "3px"} : {} }
                                            >
                                                Portrait
                                            </Typography>
                                        </ListItemButton>
                                    </Link>
                                    <Link to={"/concert"} style={{textDecoration: 'none'}}>
                                        <ListItemButton sx={{pl: 4}} style={{background:"transparent"}} disableRipple>
                                            <Typography
                                                style={{fontSize: '3vh', fontFamily:"Couture", color: "black"}}
                                                sx={props.page === "concert" ? {textDecoration: 'underline', textDecorationThickness: "3px"} : {} }
                                            >
                                                Concert
                                            </Typography>
                                        </ListItemButton>
                                    </Link>
                                    <Link to={"/cuba"} style={{textDecoration: 'none'}}>
                                        <ListItemButton sx={{pl: 4}} style={{background:"transparent"}} disableRipple>
                                            <Typography
                                                style={{fontSize: '3vh', fontFamily:"Couture", color: "black"}}
                                                sx={props.page === "cuba" ? {textDecoration: 'underline', textDecorationThickness: "3px"} : {} }
                                            >
                                                Cuba
                                            </Typography>
                                        </ListItemButton>
                                    </Link>
                                </List>
                            </Collapse>
                            <Link to={"/colour-wheel"} style={{textDecoration: 'none'}}>
                                <ListItemButton style={{background:"transparent"}} disableRipple>
                                    <Typography
                                        style={{fontSize: '3.5vh', fontFamily:"Couture", color: "black"}}
                                        sx={props.page === "colour" ? {textDecoration: 'underline', textDecorationThickness: "3px"} : {} }
                                    >
                                        Colour Wheel
                                    </Typography>
                                </ListItemButton>
                            </Link>
                            <Link to={"/about"} style={{textDecoration: 'none'}}>
                                <ListItemButton style={{background:"transparent"}} disableRipple>
                                    <Typography
                                        style={{fontSize: '3.5vh', fontFamily:"Couture", color: "black"}}
                                        sx={props.page === "about" ? {textDecoration: 'underline', textDecorationThickness: "3px"} : {} }
                                    >
                                        About
                                    </Typography>
                                </ListItemButton>
                            </Link>
                        </List>
                    </Box>
                </Dialog>
                <Box style={{position: 'relative', left: '50%', transform: "translateX(-50%)", marginTop: "2vh", marginBottom: "1vh"}}>
                    <Link to="/">
                        <img alt="Pen Product" src={logo} style={{height: "8vh", width: "12vh", userSelect: "none"}}/>
                    </Link>
                </Box>
                <Box style={{position: 'absolute', right: '1.5vw'}}>
                    <Link to={"https://www.instagram.com/penproduct/"} >
                        <InstagramIcon style={{transform: "scale(1.2)", color: "black"}}/>
                    </Link>
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default NavbarMobile;