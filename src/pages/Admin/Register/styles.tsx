import styled from 'styled-components/native';
import {heightPercentageToDP}  from '../../../utils/PixelRatio';

export const Container = styled.View`
    padding-top:5%;
    padding-right:5%;
    padding-left: 5%;
    padding-bottom: 5%;
    background-color: #FFF;
`;

export const View = styled.View`
    padding-top: ${heightPercentageToDP('0.5')}%;
    padding-bottom: ${heightPercentageToDP('2')}%;
`;

export const Erro = styled.Text`
    color: #FF0000;
    font-weight: bold;
    font-size: 12;
    padding-bottom: 5px;
`;