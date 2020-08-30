import styled from 'styled-components/native';
import {heightPercentageToDP,widthPercentageToDP}  from '../../utils/PixelRatio';

export const Title = styled.Text`
    font-size: 24px;
    align-items: center;
    font-family: OpenSans_400Regular;
    margin-left: ${widthPercentageToDP('6')}%;
    padding-top: 10px;
`;

export const Text = styled.Text`
    font-size: 18px;
    align-items: center;
    font-family: OpenSans_400Regular;
    padding-top: 10px;
    margin-bottom: 30px;
`;

export const Divider = styled.View`
    border: 1px;
    width: ${widthPercentageToDP('25')}%;
    padding-left : ${widthPercentageToDP('1')}%;
    padding-right: ${widthPercentageToDP('1')}%;
    margin-top : ${heightPercentageToDP('1')}%;
    margin-bottom : ${heightPercentageToDP('1')}%;

`;