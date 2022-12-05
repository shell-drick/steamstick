import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ConsoleContentPane = styled.div`
    min-height: 70vh;
    align-self: center;
    width: 100%;
    height: 100%;
    margin: 10px 0 0 0;
    padding: 10px 20px 20px 10; 
    border-width: 1.5px;
    border-color: #c0bab2;
    border-style: solid;
    border-radius: 5px;
`;

export const ContainerStatusLight = styled.div`
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    margin-right: 10px;
`;

export const ContainerStatusLabel = styled.p`
    color: #010416;
    display: inline;
`

export const ContainerStatusBox = styled.div`
    margin: 5px;
    border-width: 1px;
    border-color: inherit;
    border-style: inherit;
    display: inline-block;
    padding: 2px 5px;
`

export const ConsoleBox = styled.div`
    width: auto;
    height: 100%;
    margin: 0 5%;
    min-height: 25em;
    max-height: 25em;
    border: inherit;
    border-radius: inherit;
    background-color: black;
    overflow-y: auto;
    display: flex;
    flex-direction: column-reverse;
`

export const ConsoleTextContainer = styled.ul`
    padding: 0;
    list-style: none;
    margin: 0;
`

export const ConsoleTextLine = styled.p`
    margin: 5px;
    background-color: inherit;
    color: white;
    width: auto;
    display: block;
`;

export const StartServerButton = styled.button`

`