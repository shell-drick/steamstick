import React from 'react'
import { ConsoleContentPane, ConsoleBox, ConsoleTextContainer, ConsoleTextLine, ContainerStatusBox, ContainerStatusLabel, ContainerStatusLight } from './dashboardElements.js';

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




export default ServerDashboard;