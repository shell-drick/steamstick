import React from 'react';
import {Container, FormWrap, TextWrapper,  FormContent, AboutText,FormH1 } from './mainElements.js';
import MainText from './mainInfo.js';

const HomePage = () => {

    return (
        <>
            <Container>
                <FormWrap>
                    <FormContent>
                        <TextWrapper>
                            <AboutText>
                                Project Overview
                            </AboutText> 
                        </TextWrapper>
                      <MainText />
                    </FormContent>
                </FormWrap>
            </Container>

        </>

    );
};

export default HomePage;