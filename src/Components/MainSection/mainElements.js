import styled from 'styled-components';


export const Container = styled.div`
    min-height: 692px;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    z-index: 0;
    overflow: hidden;
    background: #DDDDDD;
`;

export const FormWrap = styled.div`
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
`;

export const NameRow = styled.div`
    display: flex;
    flex-direction: row;
`;

export const EmailRow = styled.div`
    display: flex;
    flex-direction: row;
`;

export const FormH1 = styled.li`
    display: block;
    right: 20px;
    bottom: 20px;
    font-size: 28px; 
    line-height: 1.1;
    font-weight: 600;
    
`;

export const ContentDiv = styled.div`
    background: #AAAAAA;
    max-width: 900px;
    height: 60%;
    width: 100%;
    z-index: 1;
    display: grid;
    margin: 0 auto;
    padding: 1px;
    border-radius: 4px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

`;

export const FormContent = styled.div`
    height: 70%;
    display: flex;
    flex-direction: column;
    justify-content: center
`;




export const AboutText = styled.h1`
    font-size: 27px;
    line-height: 1.1;
    font-weight: 600;
`;

export const TextWrapper = styled.div`
    max-width: 800px;
    padding-top: 0;
    align-self: center;
`;

export const ImgWrap = styled.div`
    max-width: 400px;
    height: 100%;
    align-self: center;
`;

export const Img = styled.img`
    max-width: 100%;
`;

export const Text = styled.h1`
    text-align: left;
    margin-top: 24px;
    color: #3C403D;
    font-size: 20px;
`;

export const Header = styled.h1`
    text-align: center;
    margin-top: 24px;
    color: #3C403D;
    font-size: 20px;
`;

export const ButtonLink = styled.button` 
    background-color: #4CAF50; /* Green */
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
`