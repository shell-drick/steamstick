import React, {useState, useEffect} from 'react';
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks} from './NavbarElements';


const Navbar = () => {

    return(
        <>
            <Nav >
                <NavbarContainer>
                    <NavLogo to='/' >
                        SteamStick
                    </NavLogo>
                    <MobileIcon >
                        
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="Summary" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Summary</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="Bio" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Bio</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="ServerDeploy" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Server Deploy</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="Refrences" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Refrences</NavLinks>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    );
};

export default Navbar