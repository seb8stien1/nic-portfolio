import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import logo from "../resources/pen.png"
import {Link} from "react-router-dom";
import instagram from "../resources/instagram.png"


const pages = ['Portfolio', 'Color-Wheel', 'About Me'];


function Navbar2() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };


    return (
        <AppBar position="static" style={{backgroundColor: 'white', width:'100%', marginTop:'5vh'}} elevation={1}>
                <Toolbar disableGutters>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            style={{color: 'black'}}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center" style={{color: 'black'}}>{page}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>

                    <Box sx={{ display: { xs: 'none', md: 'flex' } }} style={{position:'absolute', left:'1.5vw'}}>

                        <Button sx={{ my: 2, color: 'black', display: 'block', paddingSide:'10vw'}}>
                            <Typography style={{ fontSize: '20px' }}>
                                Portfolio
                            </Typography>
                        </Button>

                        <Link to={"/colour-wheel"} style={{textDecoration: 'none', color: 'inherit', marginSide:'1vw'}}>
                            <Button sx={{ my: 2, color: 'black', display: 'block' }}>
                                <Typography style={{ fontSize: '20px' }}>
                                    Colour Wheel
                                </Typography>
                            </Button>
                        </Link>
                        <Link to={"/about"} style={{textDecoration: 'none', color: 'inherit', marginSide:'1vw'}}>
                            <Button sx={{ my: 2, color: 'black', display: 'block' }}>
                                <Typography style={{ fontSize: '20px' }}>
                                    About
                                </Typography>
                            </Button>
                        </Link>
                    </Box>

                    <Box style={{position:'absolute', left:'50%', transform: 'translateX(-50%)',marginTop:'3vh'}}>
                        <Link to="/">
                            <img alt="Pen Product" src={logo} style={{height:"11.5vh"}}/>
                        </Link>
                    </Box>

                    <Box style={{position:'absolute', right:'1.5vw'}}>
                        <Link to={"https://www.instagram.com/penproduct/"} style={{textDecoration: 'none', color: 'inherit'}}>
                            <img src={instagram} alt="instagram" style={{height:'5vh'}} />
                        </Link>
                    </Box>
                </Toolbar>
        </AppBar>
    );
}
export default Navbar2;