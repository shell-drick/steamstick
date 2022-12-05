import React from 'react';
import {Container, FormWrap, TextWrapper,  FormContent, AboutText } from './bioElements.js';
import BioInfo from './bioInfo.js';

const BioContent = () => {

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
                      <BioInfo/>
                    </FormContent>
                </FormWrap>
            </Container>

        </>

    );
};

export default BioContent;