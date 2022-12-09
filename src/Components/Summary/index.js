import React from 'react';
import {Container, FormWrap, TextWrapper,  FormContent, AboutText } from './summaryElements.js';
import SumInfo from './sumInfo.js';

const SumContent = () => {

    return (
        <>
            <Container>
                <FormWrap>
                    <FormContent>
                        <TextWrapper>
                            <AboutText>
                               Project Summary
                            </AboutText> 
                        </TextWrapper>
                      <SumInfo/>
                    </FormContent>
                </FormWrap>
            </Container>

        </>

    );
};

export default SumContent;