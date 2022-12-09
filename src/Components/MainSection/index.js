<<<<<<< HEAD
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
                            </AboutText> 
                        </TextWrapper>
                      <MainText />
                    </FormContent>
                </FormWrap>
            </Container>

        </>

    );
};

=======
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

>>>>>>> af85549bd44c765ced4c669df58fc242424297b2
export default HomePage;