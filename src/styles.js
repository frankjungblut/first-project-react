import styled from 'styled-components'
import Background from './assets/background.svg'

export const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    background-image: url("${Background}");
    background-size: cover;
    gap: 40px;
`;

export const H1 = styled.h1`
    color: #FFF;
    text-align: center;
    font-size: 34px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-bottom: 80px;
`;

export const Image = styled.img`
    margin-top: 30px;
`;

export const ContainerItems = styled.div`
    padding: 50px 36px;
    display: flex;
    flex-direction: column;  
    border-radius: 61px 61px 0px 0px;
    background: linear-gradient(157deg, rgba(255, 255, 255, 0.60) 0.84%, rgba(255, 255, 255, 0.60) 0.85%, rgba(255, 255, 255, 0.15) 100%); 
`;

export const InputLabel = styled.p`
    color: #EEE;
    font-size: 18px;
    font-style: normal;
    font-weight: bold;
    line-height: 22px; 
    letter-spacing: -0.408px;
    padding-left: 25px;
`;

export const Input = styled.input`
    border-radius: 14px;
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    border: none;
    width: 342px;
    height: 58px;
    outline: none;
    padding-left: 25px;
    color: #FFF;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-bottom: 56px;
`;

export const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    width: 342px;
    height: 74px;
    flex-shrink: 0;
    border-radius: 14px;
    background: var(--Templates-5-Color-1, rgba(0, 0, 0, 0.80));
    border: none;
    cursor: pointer;
    color: #FFF;
    font-size: 17px;
    font-style: normal;
    font-weight: 700;
    line-height: 28px; 

    &:hover{
        opacity: 0.8;
    }
    &:active{
        opacity: 0.5;
    }
`;

export const User = styled.li `
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 20px;
    
    border-radius: 14px;
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    border: none;
    width: 342px;
    height: 58px;
    outline: none;

    p{
        color: #FFFFFF;
        font-size: 20px;
        font-style: normal;
        font-weight: normal;
        line-height: 28px;
    }

    button{
        border: none;
        cursor: pointer;
        background: none;
    }
`;