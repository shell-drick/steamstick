import React from 'react'
import {Container, FormWrap, TextWrapper,  FormContent, AboutText,FormH1 } from './serverElements.js';
import Status from './serverInfo.js';

const ServerStation = () => {
  return (
    <>
    <Container>
        <FormWrap>
                <FormContent>
                    <TextWrapper>
                        <AboutText>
                        </AboutText> 
                        </TextWrapper>
                      <Status />
                    </FormContent>
                </FormWrap>
            </Container>

    </>
   
  );
};

export default ServerStation;
