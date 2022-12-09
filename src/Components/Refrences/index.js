import React from 'react';
import {Container, FormWrap, TextWrapper,  FormContent, AboutText,FormH1 } from './refrenceElements.js';
import RefInfo from './refrenceInfo.js';

const RefContent = () => {

    return (
        <>
            <Container>
                <FormWrap>
                    <FormContent>
                        <TextWrapper>
                            <AboutText>
                               Documentation Refrences
                            </AboutText> 
                        </TextWrapper>
                      <RefInfo/>
                    </FormContent>
                </FormWrap>
            </Container>

        </>

    );
};

export default RefContent;