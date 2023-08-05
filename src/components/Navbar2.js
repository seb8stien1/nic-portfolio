import * as React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import logo from "../resources/pen.png"
import {Link} from "react-router-dom";
import instagram from "../resources/instagram.png"
import {
    List,
    ListItem,
    ListItemButton,
    Dialog,
    Button,
    Typography,
    IconButton,
    Toolbar,
    Box,
    AppBar
} from "@mui/material";

function Navbar2() {
    const [open, setOpen] = React.useState(false);

    return (
        <AppBar position="static" style={{backgroundColor: 'white', width: '100%', marginTop: '3vh'}} elevation={0}>
            <Toolbar disableGutters>

                <Box sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}>
                    <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={() => setOpen(true)}
                        style={{color: 'black'}}
                    >
                        <MenuIcon style={{transform: "scale(1.2)"}}/>
                    </IconButton>
                    <Dialog
                        open={open}
                        onClose={() => setOpen(false)}

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
                        <Toolbar disableGutters style={{width:"100%", paddingTop: "3vh"}}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={() => setOpen(false)}
                                style={{color: 'black'}}
                            >
                                <CloseIcon style={{transform: "scale(1.2)"}}/>
                            </IconButton>
                            <Box sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}
                                 style={{position: 'absolute', left: '50%', transform: 'translateX(-50%)'}}>
                                <Link to="/">
                                    <img alt="Pen Product" src={logo} style={{height: "7vh", width: "13vh"}}/>
                                </Link>
                            </Box>

                            <Box style={{position: 'absolute', right: '1.5vw'}}>
                                <Link to={"https://www.instagram.com/penproduct/"}
                                      style={{textDecoration: 'none', color: 'inherit'}}>
                                    <img src={instagram} alt="instagram" style={{height: '4vh'}}/>
                                </Link>
                            </Box>
                        </Toolbar>
                        <Box style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            position: 'absolute',
                            top: "50%",
                            left: "50%",
                            transform: 'translate(-50%, -50%)',
                        }}>
                            <List sx={{pt: 0}}>
                                <ListItem disableGutters>
                                    <ListItemButton sx={{color: 'black', display: 'block'}}>
                                        <Typography style={{fontSize: '28px'}} >
                                            Portfolio
                                        </Typography>
                                    </ListItemButton>
                                </ListItem>
                                <ListItem disableGutters>
                                    <ListItemButton>
                                        <Link to={"/colour-wheel"} style={{textDecoration: 'none'}}>
                                            <Typography sx={{color: 'black', display: 'block'}} style={{fontSize: '28px'}}>
                                                Colour Wheel
                                            </Typography>

                                        </Link>
                                    </ListItemButton>
                                </ListItem>
                                <ListItem disableGutters>
                                    <ListItemButton>
                                        <Link to={"/about"} style={{textDecoration: 'none'}}>
                                            <Typography sx={{color: 'black', display: 'block'}} style={{fontSize: '28px'}}>
                                                About
                                            </Typography>
                                        </Link>
                                    </ListItemButton>
                                </ListItem>
                            </List>
                        </Box>

                    </Dialog>
                </Box>

                <Box sx={{display: {xs: 'none', md: 'flex'}}} style={{position: 'absolute', left: '1.5vw'}}>

                    <Button sx={{my: 2, mx: 2, color: 'black', display: 'block', paddingSide: '10vw'}}>
                        <Typography style={{fontSize: '20px'}}>
                            Portfolio
                        </Typography>
                    </Button>

                    <Link to={"/colour-wheel"} style={{textDecoration: 'none', color: 'inherit'}}>
                        <Button sx={{my: 2, mx: 2, color: 'black', display: 'block'}}>
                            <Typography style={{fontSize: '20px'}}>
                                Colour Wheel
                            </Typography>
                        </Button>
                    </Link>
                    <Link to={"/about"} style={{textDecoration: 'none', color: 'inherit'}}>
                        <Button sx={{my: 2, mx: 2, color: 'black', display: 'block'}}>
                            <Typography style={{fontSize: '20px'}}>
                                About
                            </Typography>
                        </Button>
                    </Link>
                </Box>

                <Box sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}
                     style={{position: 'absolute', left: '50%', transform: 'translateX(-50%)'}}>
                    <Link to="/">
                        <img alt="Pen Product" src={logo} style={{height: "7vh", width: "13vh"}}/>
                    </Link>
                </Box>

                <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}
                     style={{position: 'absolute', left: '50%', transform: 'translateX(-50%)', marginTop: "3vh"}}>
                    <Link to="/">
                        <img alt="Pen Product" src={logo} style={{height: "12vh", width: "16vh"}}/>
                    </Link>
                </Box>

                <Box style={{position: 'absolute', right: '1.5vw'}}>
                    <Link to={"https://www.instagram.com/penproduct/"}
                          style={{textDecoration: 'none', color: 'inherit'}}>
                        <img src={instagram} alt="instagram" style={{height: '4vh'}}/>
                    </Link>
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar2;