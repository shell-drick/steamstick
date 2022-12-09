import React from 'react'

import { FormH1,  ContentDiv} from './backElements.js';

const BackInfo = () => {
    

    
        return (<>
                    <ContentDiv>
                            <FormH1>
                                -Initially we were wanting to create a game server that was versatile.
                            </FormH1>
                            <FormH1>
                                -We came across a docker image that allows image containerization via a game ID.
                            </FormH1>
                            <FormH1>
                                -Then we were inspired to grab the logs and info from the container itself to create a status screen.
                            </FormH1>
                            <FormH1>
                                -An instant steam server instance with all the important details, kinda like steam on a stick...
                            </FormH1>
                            <FormH1>
                                -And so SteamStick was born.
                            </FormH1>
                    </ContentDiv>
                </>
            )
    
}

export default BackInfo;