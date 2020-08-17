import React from 'react';
import styled from 'styled-components/native';
import { View } from 'react-native';

const Input = styled.TextInput`
    background: #FFFFFF;
    border: 1px solid #DFE2E7;
    border-radius: 8px;
    height: 55px;
    font-size: 16px;
    padding-left: 10px;
    margin-bottom: 20px;
    font-family: Poppins_300Light;
`;

interface props {
    placeholder : string
}
export default function TextInput(props : props){
    const { placeholder } = props;
    return(
        <View>
            <Input placeholder={placeholder} placeholderTextColor={"#9097A5"}/>
        </View>
    );
}