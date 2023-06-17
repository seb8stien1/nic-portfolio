import React from "react";
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import {Link} from "react-router-dom";
import '../App.css';

const Navbar = () => {
    return (
        <>
            <Sidebar>
                <Menu>
                    <h1>Pen Product</h1>
                    <MenuItem component={<Link to="/" />}> Home</MenuItem>
                    <MenuItem component={<Link to="/second" />}> Second Page</MenuItem>
                </Menu>
            </Sidebar>

        </>
    );
};

export default Navbar;
