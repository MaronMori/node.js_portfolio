"use client"

import MenuIcon from '@mui/icons-material/Menu';
import {IconButton, Menu, MenuItem} from "@mui/material";
import {useState} from "react";

export const HeaderMenu = () =>  {
    const [ anchorEl, setAnchorRl ] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (e) => {
        setAnchorRl(e.currentTarget);
    };
    const handleClose = () => {
        setAnchorRl(null)
    }
    const options = [
        "Home",
        "Project",
        "Background",
        "Contact"
    ]

    return (
        <header className={"fixed w-full z-20"} style={{ backgroundColor: "#79C4F2"}}>
            <nav className={""}>
                <div className={"md:hidden"}>
                    <IconButton className={"ml-2"} size={"large"} aria-label={"menu"} aria-controls={open ? 'long-menu' : undefined}
                                aria-expanded={open ? 'true' : undefined}
                                aria-haspopup="true"
                                onClick={handleClick}>
                        <MenuIcon />
                    </IconButton>
                    <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
                        {options.map((option) => (
                            <MenuItem key={option} onClick={handleClose}>
                                <a href={"#" + option.toLowerCase()}>
                                    {option}
                                </a>
                            </MenuItem>
                        ))}
                    </Menu>
                </div>
                <ul className={"hidden md:flex justify-between py-3 pr-20 "} style={{ paddingLeft: "50%"}}>
                    {options.map((option) => (
                        <li className={"header-items"} key={option}>
                            <a className={"relative header-menu"} href={"#" + option.toLowerCase()}>{option}</a>
                        </li>
                    ))}
                </ul>
            </nav>
            <style jsx>
                {`
                .header-items:hover {
                  opacity: 0.7;
                }
                .header-menu {
                  font-size: large;
                }
                .header-menu::after {
                  position: absolute;
                  left: 0;
                  content: "";
                  width: 100%;
                  height: 2px;
                  background: #000000;
                  bottom: -6px;
                  opacity: 0;
                  visibility: hidden;
                  transition: 0.3s;
                }
                .header-menu:hover::after{
                  visibility: visible;
                  bottom: -2px;
                  opacity: 1;
                }
                `}
            </style>
        </header>
    );
}
