import React from "react";
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <Sidebar>
                <Menu
                    menuItemStyles={{
                        button: {
                            // the active class will be added automatically by react router
                            // so we can use it to style the active menu item
                            [`&.active`]: {
                                backgroundColor: '#13395e',
                                color: '#b6c8d9',
                            },
                        },
                    }}
                >
                    <MenuItem><h1>Pen Product</h1></MenuItem>
                    <MenuItem component={<Link to="/" />}> Home</MenuItem>
                    <MenuItem component={<Link to="/second" />}> Second Page</MenuItem>
                </Menu>
            </Sidebar>

        </>
    );
};

export default Navbar;
