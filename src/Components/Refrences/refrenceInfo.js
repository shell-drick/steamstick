import React from 'react'

import { FormH1,  ContentDiv} from './refrenceElements.js';


const RefInfo = () => {
    

    
        return (<>
                    <ContentDiv>
                            <FormH1>
                                React Documentation: https://reactjs.org/docs/getting-started.html
                            </FormH1>
                            <FormH1>
                                ExpressJS Documentation: https://expressjs.com/
                            </FormH1>
                            <FormH1>
                               CSS Reference: https://www.w3schools.com/css/default.asp
                            </FormH1>
                            <FormH1>
                               Docker API Documentation: https://docs.docker.com/engine/api/
                            </FormH1>
                    </ContentDiv>
                </>
            )
    
}

export default RefInfo;