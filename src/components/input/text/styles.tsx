import styled from 'styled-components/native';
import {heightPercentageToDP}  from '../../../utils/PixelRatio';

export const Input = styled.TextInput`
    background: #FFFFFF;
    border: 2px solid #1D293F;
    border-radius: 8px;
    height: 55px;
    font-size: 16px;
    padding-left: 10px;
    margin-bottom: 15px;
`;

export const Label = styled.Text`
    font-family: Raleway_400Regular;
    font-style: normal;
    font-weight: bold;
    font-size: 21px;
    line-height: 21px;
    display: flex;
    align-items: center;
    color: #693A0E;
    margin-bottom: 2%;
`;

export const View = styled.View`
    margin-top: ${heightPercentageToDP('0.1')}%;
    margin-bottom: ${heightPercentageToDP('0.1')}%;
`;