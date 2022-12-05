import React from 'react';
import {Container, FormWrap, TextWrapper,  FormContent, AboutText } from './backElements.js';
import BackInfo from './backInfo.js';

const BackContent = () => {

    return (
        <>
            <Container>
                <FormWrap>
                    <FormContent>
                        <TextWrapper>
                            <AboutText>
                               Group Responsibilities
                            </AboutText> 
                        </TextWrapper>
                      <BackInfo/>
                    </FormContent>
                </FormWrap>
            </Container>

        </>

    );
};

export default BackContent;