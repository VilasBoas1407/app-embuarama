import styled from 'styled-components/native';

export const Container = styled.View`
    position:absolute;
    margin-top:170%;
    width:100%;   
    background-color: #fff;
    height: 20%;
    display: flex;
    align-items: stretch;
    flex-direction: row; 
`;


export const Button = styled.TouchableOpacity`
    height: 40px;
    width: 40px;
    border-radius: 13px;
    padding-top: 5px;
    margin-top:4%;
    margin-left:5%;
    margin-right: 5%;
`;

export const LogoAsIcon = styled.Image`
    width: 30px;
    height:30px;
    margin-left: 5px;
`;