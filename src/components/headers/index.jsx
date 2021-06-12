import React from 'react'
import { Button, IconButton } from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import "./header.scss"

function Header() {
    return (
        <div className="header">
            <a href="index.html" className='header__logo'>E-COM</a>
            <h2 className='header__title'>My First E-Commerce</h2>
            <div className="header-icons">
                <div className='header__cart'>
                    <span className="header__badge">0</span>
                    <IconButton>
                        <ShoppingCart style={{ color: "white" }} />
                    </IconButton>
                </div>
                <Button style={{ color: "#aaa" }}>
                    Sing Up
                </Button>
            </div>
        </div>
    )
}

export default Header