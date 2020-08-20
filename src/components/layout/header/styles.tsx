import styled  from 'styled-components/native';

export const Container = styled.View`
    background-color:#FFF;
    padding-top: 4%;
    padding-bottom: 2%;
    flex-direction: row; 
    display: flex;
    box-shadow: 10px 2px 2px #E3E3E3;
`;

export const TitleBold = styled.Text`
    margin-top: 12%;
    margin-left: 5%;
    font-family: OpenSans_700Bold;
    font-size : 18px;
    color: #1D293F;
`;

export const Title = styled.Text`
    margin-top: 2%;
    margin-left: 5%;
    font-family: OpenSans_400Regular;
    font-size : 18px;
    color: #1D293F;
`;

export const ImageDiv = styled.View`
    padding-top: 2%;
    padding-left: 13%;
    margin-left: 5%;
`;