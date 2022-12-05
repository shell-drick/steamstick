import styled from 'styled-components';
import { Link } from 'react-router-dom';

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

export const FormH1 = styled.h1`
    margin-bottom: 16px;
    margin-top: -36px;
    font-size: 28px;
    line-height: 1.1;
    font-weight: 600;
    justify-self: center;
    color: ${({ lightText }) => (lightText ? '#3C403D' : '#3C403D')};
    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`;

export const Form = styled.form`
    background: #AAAAAA;
    max-width: 800px;
    height: 300px;
    width: 100%;
    z-index: 1;
    align-items: center;
    display: grid;
    margin: 0 auto;
    padding: 80px 32px;
    border-radius: 4px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);
    @media screen and (max-width: 480px) {
        padding: 32px 32px;
    }
`;

export const FormContent = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media screen and (max-width: 480px) {
        padding: 10px; 
    }
`;

export const Icon = styled(Link)`
    margin-left: 32px;
    margin-top: 32px;
    text-decoration: none;
    color: #3C403D;
    font-weight: 700;
    font-size: 32px;
    @media screen and (max-width: 480px) {
        margin-left: 16px;
        margin-top: 8px;
    }
`;


export const AboutText = styled.h1`
    font-size: 27px;
    line-height: 1.1;
    font-weight: 540;
    color: ${({ lightText }) => (lightText ? '#3C403D' : '#3C403D')};
    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`;

export const TextWrapper = styled.div`
    max-width: 800px;
    padding-top: 0;
    padding-bottom: 60px;
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