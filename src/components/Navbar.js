import React from "react";
import {Sidebar, Menu, MenuItem, SubMenu} from 'react-pro-sidebar';
import {Link} from "react-router-dom";
import '../App.css';

const Navbar = () => {
    return (
        <>
            <Sidebar >
                <Menu
                    menuItemStyles={{
                        button: {
                            // the active class will be added automatically by react router
                            // so we can use it to style the active menu item
                            fontSize:'30px',
                            textAlign:'left'
                        },
                    }}>
                    <MenuItem component={<Link to="/" />}>Home</MenuItem>
                    <SubMenu label="Portfolio">
                        <MenuItem component={<Link to="/portrait" /> }>Portrait</MenuItem>
                        <MenuItem component={<Link to="/concert" /> }>Concert</MenuItem>
                        <MenuItem component={<Link to="/lifestyle"/>}>Lifestyle</MenuItem>
                    </SubMenu>
                    <MenuItem component={<Link to="/colour-wheel" />}> Colour Wheel</MenuItem>
                    <MenuItem component={<Link to="/about" />}> About</MenuItem>
                </Menu>
            </Sidebar>
        </>
    );
};

export default Navbar;
