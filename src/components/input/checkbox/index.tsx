import React from 'react';
import styled from 'styled-components/native';
import { CheckBox } from 'react-native';
import {heightPercentageToDP, widthPercentageToDP} from '../../../utils/PixelRatio';

interface checkbox {
    label : string
}

const View = styled.View`
    padding-top: 5px;
    padding-bottom: 5px;
`;

const Label = styled.Text`
    font-family: OpenSans_400Regular
    font-size: 18px;
    line-height: 18px;
    position:absolute;
    margin-top: ${heightPercentageToDP('1')}%;
    margin-bottom: ${heightPercentageToDP('1')}%;
    margin-left:${widthPercentageToDP('3')}%;
`;

export default function Checkbox(props : checkbox){
    const { label } =  props;
    return(
        <View>
            <CheckBox style={{ width : 75 , height: 50 ,borderColor: '#9097A5'}}/>
            <Label>{label}</Label>
        </View>
    );
}