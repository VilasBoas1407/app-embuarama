import styled from 'styled-components/native';
import {heightPercentageToDP}  from '../../utils/PixelRatio';

export const Container = styled.View`
    padding-top:5%;
    padding-right:5%;
    padding-left: 5%;
    padding-bottom: 5%;
    background-color: #FFF;
    display: flex;
    justify-content: center;
`;

export const View = styled.View`
    padding-top: ${heightPercentageToDP('2')}%;
    display: flex;
`;

export const TouchableOpacity = styled.TouchableOpacity`

`;

export const Text = styled.Text`
    font-family: OpenSans_400Regular;
    font-size: 16px;
    text-align: center;
    color: #000000;
    margin-top: ${heightPercentageToDP('1')}%;
    margin-bottom: ${heightPercentageToDP('1')}%;
`;

export const Erro = styled.Text`
    color: #FF0000;
    font-weight: bold;
    font-size: 12px;
    padding-bottom: 5px;
`;