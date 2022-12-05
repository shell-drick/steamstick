import React from 'react'
import {Container, FormWrap, TextWrapper,  FormContent, AboutText } from './serverElements.js';
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
