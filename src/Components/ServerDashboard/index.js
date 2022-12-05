import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react'
import { ConsoleContentPane, ConsoleBox, ConsoleTextContainer, ConsoleTextLine, ContainerStatusBox, ContainerStatusLabel, ContainerStatusLight, StartServerButton} from './dashboardElements.js';
// import getContainerStatus from '../../runContainer';

const ServerDashboard = () => {
  return (
    <>
            <ConsoleContentPane>
                <ContainerShortStatus />
                <StartContainerBtn />
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

function ConsoleLine(content) {
    return (
        <>
            <li>
                <ConsoleTextLine>
                    { content }
                </ConsoleTextLine>     
            </li> 
        </>
    )
}

function sendStartServerCommand() {
    fetch(`http://localhost:5000/container/start/232250`);
}

export function StartContainerBtn() {
  return (
    <StartServerButton onClick={sendStartServerCommand}>
        <FontAwesomeIcon icon={faPlay}></FontAwesomeIcon>
    </StartServerButton>
  )
}


const ContainerConsole = () => {
    const [ consoleDisplay, setConsoleDisplay ] = useState([""]);

    useEffect(() => {
        fetch('http://localhost:5000/container/console').then((resp) => resp.json()).then((data) => {
            console.log(`data: ${data}`)
            console.log(`data.data: ${data.data}`);
            setConsoleDisplay(data);
        });
    }, [])

    return (
        <>
            <ConsoleBox>
                <ConsoleTextContainer>
                    {consoleDisplay.map((e) => ConsoleLine(e.data)) }
                </ConsoleTextContainer>
            </ConsoleBox>
        </>
    )
}

export default ServerDashboard;