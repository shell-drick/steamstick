<<<<<<< HEAD
import React, { Component } from 'react'

import { FormH1,  Form, EmailRow, ButtonLink} from './mainElements.js';


export const MainText = () => {
    

    {
        return (<>
                    <Form >
                            <FormH1>Steam Stick</FormH1>
                    </Form>
                </>
            )
    }
}

=======
import React from 'react'

import { FormH1,  ContentDiv} from './mainElements.js';


const MainText = () => {
    

    {
        return (<>
                    <ContentDiv>
                            <FormH1>
                                -Welcome to SteamStick, this service will help create any steam server of your choosing that allows remote log-in.
                            </FormH1>
                            <FormH1>
                                -It will create a docker container that is hosted on the IP address of this microinstace.
                            </FormH1>
                    </ContentDiv>
                </>
            )
    }
}

>>>>>>> af85549bd44c765ced4c669df58fc242424297b2
export default MainText;