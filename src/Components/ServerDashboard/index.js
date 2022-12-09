import { faP, faPause, faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react'
import { ConsoleContentPane, ConsoleBox, ConsoleTextContainer, ConsoleTextLine, ContainerStatusLabel, ContainerStatusLight} from './dashboardElements.js';
import ServerOptions from '../../resources/games.json';


const ServerDashboard = () => {
    const [ status, setStatus ] = useState(false);
    const [ buttonIcon, setButtonIcon ] = useState(faPlay);
    const [ statusLabel, setStatusLabel ] = useState("Stopped");
    const [ selectedServer, setSelectedServer ] = useState(ServerOptions[0].Name);
    const [ statusColor, setStatusColor ] = useState("red");
    const [ consoleDisplay, setConsoleDisplay ] = useState([{ data: "" }]);

    const listItems = ServerOptions.map((server) => 
        <option label={server.Name}></option>
    )

    function handleFormSubmit(e) {
        e.preventDefault();
        if (!status) {
            const serverId = selectedServer.Id;
            fetch(`http://localhost:5000/container/start/${serverId}`);
        } else {
            fetch('http://localhost:5000/container/stop');
        }
    }
    
    useEffect(() => {
        const interval = setInterval(() => fetch("http://localhost:5000/container/status")
        .then((resp) => resp.json())
        .then((respJson) => {
                    switch (respJson.status) {
                        case "online":
                            setStatus(true);
                            setButtonIcon(faPause);
                            setStatusLabel("Running");
                            setStatusColor("green");
                            break;
                        case "offline":
                            setStatus(false);
                            setButtonIcon(faPlay);
                            setStatusLabel("Stopped");
                            setStatusColor("red");
                            break;
                        case "starting":
                            setStatus(true);
                            setButtonIcon(faPause);
                            setStatusLabel("Starting");
                            setStatusColor("yellow");
                            break;
                        default:
                            break;
                    }
                }).catch(() => { return }), 1000);
        return () => clearInterval(interval);
    }, [status, statusColor, statusLabel])

    useEffect(() => {
            const interval = setInterval(() => {
                fetch('http://localhost:5000/container/console').then((resp) => resp.json()).then((data) => {
                setConsoleDisplay(data);
            }).catch(() => { return } )}, 1000);
            return () => clearInterval(interval);
    }, [consoleDisplay])

    return (
        <>
            <ConsoleContentPane>
                <div>
                    <form onSubmit={handleFormSubmit} action="">
                        <select name='select' onChange={(e) => setSelectedServer(ServerOptions[e.target.selectedIndex])}>
                            {listItems}             
                        </select> 
                        <button type="submit" name="submit">
                            <FontAwesomeIcon icon={buttonIcon} />
                        </button>
                    </form>
                        <ContainerStatusLight id="ContainerStatusLight" style={{backgroundColor: statusColor}}/>
                        <ContainerStatusLabel id="ContainerStatusLabel">{statusLabel}</ContainerStatusLabel>
                </div>
                <ConsoleBox>
                    <ConsoleTextContainer>
                        {mapConsoleDisplay(consoleDisplay)}
                    </ConsoleTextContainer>
                </ConsoleBox>
            </ConsoleContentPane>
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

function mapConsoleDisplay(data) {
    if (data.length > 1) {
        return data.map((e) => ConsoleLine(e.data)) 
    } else {
        return ConsoleLine("Container is stopped...");
    }
}

export default ServerDashboard;