import React from 'react'

import { FormH1,  ContentDiv} from './summaryElements.js';


const SumInfo = () => {
    

    
        return (<>
                    <ContentDiv>
                            <FormH1>
                                -The Stack of this app is mostly JS based.
                            </FormH1>
                            <FormH1>
                                -We are serving this website that will contact an API that is running in the background of a gcp server 
                            </FormH1>
                            <FormH1>
                               -Then the expressJS API is then going to contact the docker API and then create a steam server
                            </FormH1>
                            <FormH1>
                               -The server is deployed depending on a game id and if it allows a remote log-in so it can interface with the image we are making our container out of
                            </FormH1>
                    </ContentDiv>
                </>
            )
    
}

export default SumInfo;