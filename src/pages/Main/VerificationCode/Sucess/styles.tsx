import styled from 'styled-components/native';

export const Container = styled.View`
    padding-top:5%;
    padding-right:5%;
    padding-left: 5%;
    padding-bottom: 5%;
    background-color: #FFF;
`;

export const Image = styled.Image`
    width: 145px;
    margin-left:30%;
    margin-top:40%;
    margin-bottom: 5%;
`;

export const Title = styled.Text`
    font-family: Poppins_500Medium;
    font-size: 20px;
    line-height: 30px;
    text-align: center;
    padding-top: 10%;
    padding-bottom: 10%;
`;

export const Text = styled.Text`
    font-family: Poppins_300Light;
    font-size: 15px;
    line-height: 22px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #9097A5;
`;

export const Button = styled.TouchableOpacity`
    margin-top: 15%;
    width:100%;
    height: 55px;
    background: #25988B;
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.05);
    border-radius: 25px;
`;
export const ButtonText = styled.Text`
    line-height: 26px;
    text-align: center;
    color: #FFFFFF;
    font-family: Poppins_500Medium;
    padding-top:16px;
`;