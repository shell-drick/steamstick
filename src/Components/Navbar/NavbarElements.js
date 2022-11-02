import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'



export const Nav = styled.nav`
    background: ${({ scrollNav }) => (scrollNav ? '#B1A6A4' : '#B1A6A4')};
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.1rem;
    position: sticky;
    top: 0;
    z-index: 10;
    
    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`;

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 120px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
`;

export const NavLogo = styled(LinkR)`
    color: #3C403D ;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.7rem;
    display: flex;
    align-items: center;
    margin-left: 24px;
    margin-top: 0px;
    font-weight: bold;
    text-decoration: none;
    font-family: 'Averia Serif Libre', cursive;
`;

export const MobileIcon = styled.div`
    display: none;
    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #3C403D;
    }
`;

