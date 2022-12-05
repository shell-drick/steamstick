import React, { useState } from 'react'
import { ConsoleContentPane, ConsoleBox, ConsoleTextContainer, ConsoleTextLine, ContainerStatusBox, ContainerStatusLabel, ContainerStatusLight } from './dashboardElements.js';
// import getContainerStatus from '../../runContainer';

const ServerDashboard = () => {
  return (
    <>
            <ConsoleContentPane>
                <ContainerShortStatus />
                <ContainerConsole />
            </ConsoleContentPane> 
    </>
  );
};

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

const ContainerConsole = () => {
    const [ consoleDisplay, setConsoleDisplay ] = React.useState([]);

    for (var i=0; i<25; i++) {
        consoleDisplay.push(`hello world ${i}`);
    }



    return (
        <>
            <ConsoleBox>
                <ConsoleTextContainer>
                    {/* { consoleDisplay.map((l) => <ConsoleTextLine readOnly>{l}</ConsoleTextLine>)} */}
                    {}
                </ConsoleTextContainer>
            </ConsoleBox>
        </>
    )
}

export default ServerDashboard;