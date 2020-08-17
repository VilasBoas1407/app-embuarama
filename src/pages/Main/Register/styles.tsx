import styled from 'styled-components/native';

export const Container = styled.View`
    padding-top:5%;
    padding-right:5%;
    padding-left: 5%;
    padding-bottom: 5%;
    background-color: #FFF;
`;

export const Title = styled.Text`
    font-family: Fahkwang_700Bold;
    font-size: 24px;
    line-height: 50px;  
    color: #25988B;
    padding-left:1%;
    padding-bottom:10px;

`;

export const Label = styled.Text`
    font-family: Poppins_300Light;
    font-size: 16px;
    line-height: 26px;  
    color: #1D293F;
    padding-left:5px;
    padding-bottom:10px;
`;

export const Head = styled.View`
    margin-left:10%;
    margin-top: 15px;
`;

export const Icon = styled.Image`
    width: 30px;
    height:30px;
    padding-right: 5px;
`;

export const Button = styled.TouchableOpacity`
    width:100%;
    height: 55px;
    background: #16807E;
    border-radius: 8px;
`;

export const ButtonText = styled.Text`
    line-height: 26px;
    text-align: center;
    color: #FFFFFF;
    font-family: Poppins_500Medium;
    padding-top:16px;
`;

export const ViewRegister = styled.TouchableOpacity`
    padding-top: 5%;
    margin-left: 16%;
`;

export const LinkRegister = styled.Text`
    color: #25988B;
    font-family: Poppins_300Light;
    font-size: 16px;
    line-height: 26px;
    position:absolute;
    padding-top:18px;
    padding-left:150px;
`;