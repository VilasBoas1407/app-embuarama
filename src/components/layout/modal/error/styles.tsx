import styled from 'styled-components/native';

export const Background = styled.View`
  background-color: #ADADAD;
  height: 100%;
  width: 100%;
  opacity: 0.7;
`;

export const View = styled.View`
  border-radius: 5;
  align-items: center;
  justify-content: center;
  position: absolute;
  margin-top: 50%;
  margin-left: 10%;
  background-color: #F4F4F4;
  width: 80%;
`;
 
export const Text = styled.Text`
  font-weight: bold;
  opacity: 1.0;
  font-size: 20px;
`;

export const Img = styled.Image`
    height: 110px;
    width: 120px;
    margin-top:10px;
    margin-bottom: 15px;
`;

export const Button = styled.TouchableOpacity`
    border-radius: 7.50685px;
    height: 56px;
    width: 100%;
`;

export const TextBtn = styled.Text`
    font-family: OpenSans_700Bold;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    color: #000;
    padding-top: 16px;
`;
