import styled  from 'styled-components/native';

export const BorderUser = styled.View`
    border: 1px solid #A9BBC9;
    width: 60px;
    height: 60px;
    border-radius: 50px;
    margin-left: 5%;
`;

export const User = styled.Image`
    margin-top: 7%;
    margin-left: 7%;
    width: 50px;
    height: 50px;
    border-radius: 50px;
`;

export const Container = styled.View`
    background-color:#FFF;
    padding-top: 10%;
    padding-bottom: 2%;
    flex-direction: row; 
`;

export const UserName = styled.Text`
    padding-left: 28px;
    color: #000;
    font-family: Roboto_700Bold;
    font-size: 18px;
    padding-top:8px;
`;

export const CountReport = styled.Text`
    font-family: Roboto_300Light;
    font-size: 12px;
    color: #576E82;
    position: absolute;
    margin-top: 18%;
    margin-left: 27%;
`;

export const Notifications = styled.View`
    padding-top: 10%;
    margin-left: 23%;
    margin-top: 10px;
    border-color: #16807E;
    width: 40px;
    height: 40px;
    border-radius: 50px;
    border-width: 2;
    padding-top: 8px;
`;