import React from "react";
import styled from "styled-components";

const ContentPane = styled.div`
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


// Container Status

const ContainerStatusLight = styled.div`
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    margin-right: 10px;
`

const ContainerStatusLabel = styled.p`
    color: #010416;
    display: inline;
`

const ContainerStatusBox = styled.div`
    margin: 5px;
    border-width: 1px;
    border-color: inherit;
    border-style: inherit;
    display: inline-block;
    padding: 2px 5px;
`

const ContainerShortStatus = () => {
    const [ containerStatus, setContainerStatus ] = React.useState(0);    

    return (
        <>

                <ContainerStatusBox>
                    <ContainerStatusLight id="ContainerStatusLight" style={{ "backgroundColor": ((containerStatus===1) ? "green" : "red")}}/>
                    <ContainerStatusLabel id="ContainerStatusLabel">{ (containerStatus===1) ? "Running" : "Stopped"}</ContainerStatusLabel>
                </ContainerStatusBox>
        </>
    )
}

// console output
const ConsoleBox = styled.div`
    width: auto;
    height: 100%;
    padding: 0 5%;
    padding: 5px;
    margin: 0 5%;
    min-height: 25em;
    border: inherit;
    border-radius: inherit;
    background-color: black;
`

const ConsoleTextContainer = styled.ul`

`

const ConsoleTextLine = styled.textarea`
    margin: 0;
    padding: 1px 2.5;
    background-color: inherit;
    color: white;

`

const ContainerConsole = () => {
    return (
        <>
            <ConsoleBox>
                <ConsoleTextContainer>
                    <ConsoleTextLine>hello world</ConsoleTextLine>
                </ConsoleTextContainer>
            </ConsoleBox>
        </>
    )
}



const TestPage = () => {
    return (
        <>
            <ContentPane>
                <ContainerShortStatus />
                <ContainerConsole />
            </ContentPane> 
        </>
    )
}

export default TestPage;