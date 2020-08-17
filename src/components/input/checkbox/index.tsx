import React from 'react';
import styled from 'styled-components/native';
import { CheckBox } from 'react-native';

interface checkbox {
    label : string,
    state : boolean
}

const View = styled.View`
    padding-top: 5px;
    padding-bottom: 5px;
`;

const Label = styled.Text`
    font-family: Poppins_300Light
    font-size: 12px;
    line-height: 18px;
    position:absolute;
    margin-top: 3%;
    margin-left:10%;
`;
export default function Checkbox(props : checkbox){
    const { label } =  props;
    return(
        <View>
            <CheckBox/>
            <Label>{label}</Label>
        </View>
    );
}