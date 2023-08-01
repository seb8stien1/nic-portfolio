import * as React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import logo from "../resources/pen.png"
import {Link} from "react-router-dom";
import instagram from "../resources/instagram.png"
import {List, ListItem, ListItemButton, Dialog, Button, Typography, IconButton, Toolbar, Box, AppBar} from "@mui/material";

function Navbar2() {
    const [open, setOpen] = React.useState(false);

    return (
        <AppBar position="static" style={{backgroundColor: 'white', width: '100%', marginTop: '5vh'}} elevation={0}>
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
                        <MenuIcon/>
                    </IconButton>
                    <Dialog
                        open={open}
                        onClose={() => setOpen(false)}
                        slotProps={{backdrop: {style: {backgroundColor: 'rgba(255,255,255,1)'}}}}
                    >
                        <Box style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <List sx={{pt: 0}}>
                                <ListItem disableGutters>
                                    <ListItemButton sx={{color: 'black', display: 'block'}}>
                                        <Typography>
                                            Portfolio
                                        </Typography>
                                    </ListItemButton>
                                </ListItem>
                                <ListItem disableGutters>
                                    <ListItemButton>
                                        <Link to={"/colour-wheel"} style={{textDecoration: 'none'}}>
                                            <Typography sx={{color: 'black', display: 'block'}}>
                                                Colour Wheel
                                            </Typography>

                                        </Link>
                                    </ListItemButton>
                                </ListItem>
                                <ListItem disableGutters>
                                    <ListItemButton>
                                        <Link to={"/about"} style={{textDecoration: 'none'}}>
                                            <Typography sx={{color: 'black', display: 'block'}}>
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

                <Box style={{position: 'absolute', left: '50%', transform: 'translateX(-50%)', marginTop: '3vh'}}>
                    <Link to="/">
                        <img alt="Pen Product" src={logo} style={{height: "11.5vh"}}/>
                    </Link>
                </Box>

                <Box style={{position: 'absolute', right: '1.5vw'}}>
                    <Link to={"https://www.instagram.com/penproduct/"}
                          style={{textDecoration: 'none', color: 'inherit'}}>
                        <img src={instagram} alt="instagram" style={{height: '5vh'}}/>
                    </Link>
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar2;