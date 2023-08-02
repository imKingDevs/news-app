import React from 'react';
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <>
            <div className="sidebar">
                <div className="menu_nav" id="menu_nav">
                </div>
                <div className="bar_list">
                    <div className="brand">
                        <img src="../logo.png" />
                    </div>
                    <div className="user" id="user">
                        <img src="../Images/user.jpg" />
                    </div>
                    <NavLink activeclassname='active' to='/' className='bar_li' title='Home'>
                        <i className="fa-solid fa-house"></i>
                    </NavLink>
                    <NavLink activeclassname='active' to='/news' className="bar_li" title='News'>
                        <i className="fa-solid fa-newspaper"></i>
                    </NavLink>
                    {/* <NavLink activeclassname='active' to='/about' className="bar_li" title='Message'>
                        <i className="fa-solid fa-messages"></i>
                    </NavLink> */}
                    {/* <NavLink activeclassname='active' to='/about' className="bar_li" title='Tasks'>
                        <i className="fa-solid fa-clipboard-list"></i>
                    </NavLink> */}
                    {/* <NavLink activeclassname='active' to='/about' className="bar_li" title='Wallet'>
                        <i className="fa-solid fa-wallet"></i>
                    </NavLink> */}
                    {/* <NavLink activeclassname='active' to='/about' className="bar_li" title='Favourite'>
                        <i className="fa-solid fa-heart"></i>
                    </NavLink> */}
                    {/* <NavLink activeclassname='active' to='/about' className="bar_li" title='Bookmark'>
                        <i className="fa-solid fa-bookmark"></i>
                    </NavLink> */}
                    {/* <NavLink activeclassname='active' to='/about' className="bar_li" title='Settings'>
                        <i className="fa-solid fa-gear"></i>
                    </NavLink> */}
                    {/* <NavLink activeclassname='active' to='/about' className="bar_li" title='Help'>
                        <i className="fa-solid fa-circle-question"></i>
                    </NavLink> */}
                </div>
            </div>
        </>
    )
}

export default NavBar;