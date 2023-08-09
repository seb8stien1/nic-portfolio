import * as React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import logo from "../resources/pen.png"
import {Link} from "react-router-dom";
import instagram from "../resources/instagram.png"
import {
    AppBar,
    Box,
    Button,
    Collapse,
    Dialog,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    Menu,
    MenuItem,
    Toolbar,
    Typography,
} from "@mui/material";
import '../App.css';


function Navbar2() {
    const [open, setOpen] = React.useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const openMenu = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const [anchorEl2, setAnchorEl2] = React.useState(null);
    const openMenu2 = Boolean(anchorEl2);
    const handleClick2 = (event) => {
        setAnchorEl2(!openMenu2);
    };

    return (

        <AppBar position="static" style={{backgroundColor: 'white', width: '100%', marginTop: '3vh'}} elevation={0}>
            <Toolbar disableGutters>

                <Box sx={{flexGrow: 1, display: {xs: 'flex', lg: 'none'}}}>
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
                        <Toolbar disableGutters style={{width: "100%", paddingTop: "3vh"}}>
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
                            <Box sx={{flexGrow: 1, display: {xs: 'flex', lg: 'none'}}}
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
                            <List sx={{pt: 0}} style={{width:"80vw"}}>
                                <ListItem disableGutters>
                                    <ListItemButton sx={{color: 'black', display: 'block'}} onClick={handleClick2}>
                                        <Typography style={{fontSize: '28px', fontFamily:"Couture"}}>
                                            Portfolio
                                        </Typography>
                                    </ListItemButton>
                                </ListItem>
                                <Collapse in={openMenu2} timeout="auto" unmountOnExit>
                                    <List component="div" disablePadding>
                                        <Link to={"/portrait"} style={{textDecoration: 'none'}}>
                                            <ListItemButton sx={{pl: 4}}>
                                                <Typography sx={{color: 'black', display: 'block'}}
                                                            style={{fontSize: '22px', fontFamily:"Couture"}}>
                                                    Portrait
                                                </Typography>
                                            </ListItemButton>
                                        </Link>
                                        <Link to={"/concert"} style={{textDecoration: 'none'}}>
                                            <ListItemButton sx={{pl: 4}}>
                                                <Typography sx={{color: 'black', display: 'block'}}
                                                            style={{fontSize: '22px', fontFamily:"Couture"}}>
                                                    Concert
                                                </Typography>
                                            </ListItemButton>
                                        </Link>
                                        <Link to={"/cuba"} style={{textDecoration: 'none'}}>
                                            <ListItemButton sx={{pl: 4}}>
                                                <Typography sx={{color: 'black', display: 'block'}}
                                                            style={{fontSize: '22px', fontFamily:"Couture"}}>
                                                    Cuba
                                                </Typography>
                                            </ListItemButton>
                                        </Link>
                                    </List>
                                </Collapse>
                                <ListItem disableGutters>
                                    <ListItemButton>
                                        <Link to={"/colour-wheel"} style={{textDecoration: 'none'}}>
                                            <Typography sx={{color: 'black', display: 'block'}}
                                                        style={{fontSize: '28px', fontFamily:"Couture"}}>
                                                Colour Wheel
                                            </Typography>

                                        </Link>
                                    </ListItemButton>
                                </ListItem>
                                <ListItem disableGutters>
                                    <ListItemButton>
                                        <Link to={"/about"} style={{textDecoration: 'none'}}>
                                            <Typography sx={{color: 'black', display: 'block'}}
                                                        style={{fontSize: '28px', fontFamily:"Couture"}}>
                                                About
                                            </Typography>
                                        </Link>
                                    </ListItemButton>
                                </ListItem>
                            </List>
                        </Box>

                    </Dialog>
                    <Box sx={{flexGrow: 1, display: {xs: 'flex', lg: 'none'}}}
                         style={{position: 'absolute', left: '50%', transform: 'translateX(-50%)'}}>
                        <Link to="/">
                            <img alt="Pen Product" src={logo} style={{height: "7vh", width: "13vh"}}/>
                        </Link>
                    </Box>
                </Box>

                <Box sx={{display: {xs: 'none', lg: 'flex'}}} style={{position: 'absolute', left: '1.5vw'}}>

                    <Button sx={{my: 2, mx: 2, color: 'black', display: 'block', paddingSide: '10vw'}}
                            onClick={handleClick}>
                        <Typography style={{fontSize: '20px', fontFamily:"Couture"}}>
                            Portfolio
                        </Typography>
                    </Button>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={openMenu}
                        onClose={handleClose}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                    >
                        <Link to={"/portrait"} style={{textDecoration: 'none', color: 'inherit'}}>
                            <MenuItem onClick={handleClose}>
                                <Button sx={{ mx: 2, color: 'black', display: 'block'}}>
                                    <Typography style={{fontSize: '20px', fontFamily:"Couture"}}>
                                        Portrait
                                    </Typography>
                                </Button>
                            </MenuItem>
                        </Link>
                        <Link to={"/concert"} style={{textDecoration: 'none', color: 'inherit'}}>
                            <MenuItem onClick={handleClose}>
                                <Button sx={{ mx: 2, color: 'black', display: 'block'}}>
                                    <Typography style={{fontSize: '20px', fontFamily:"Couture"}}>
                                        Concert
                                    </Typography>
                                </Button>
                            </MenuItem>
                        </Link>
                        <Link to={"/cuba"} style={{textDecoration: 'none', color: 'inherit'}}>
                            <MenuItem onClick={handleClose}>
                                <Button sx={{ mx: 2, color: 'black', display: 'block'}}>
                                    <Typography style={{fontSize: '20px', fontFamily:"Couture"}}>
                                        cuba
                                    </Typography>
                                </Button>
                            </MenuItem>
                        </Link>
                    </Menu>
                    <Link to={"/colour-wheel"} style={{textDecoration: 'none', color: 'inherit'}}>
                        <Button sx={{my: 2, mx: 2, color: 'black', display: 'block'}}>
                            <Typography style={{fontSize: '20px', fontFamily: "Couture"}}>
                                Colour Wheel
                            </Typography>
                        </Button>
                    </Link>
                    <Link to={"/about"} style={{textDecoration: 'none'}}>
                        <Button sx={{my: 2, mx: 2, color: 'black'}}>
                            <Typography style={{fontSize: '20px', fontFamily:"Couture"}}>
                                About
                            </Typography>
                        </Button>
                    </Link>
                </Box>

                <Box sx={{flexGrow: 1, display: {xs: 'none', lg: 'flex'}}}
                     style={{position: 'absolute', left: '50%', transform: 'translateX(-50%)', marginTop: "3vh"}}>
                    <Link to="/">
                        <img alt="Pen Product" src={logo} style={{height: "12vh", width: "16vh"}}/>
                    </Link>
                </Box>

                <Box style={{position: 'absolute', right: '1.5vw', transform:"translateY(8%)"}}>
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