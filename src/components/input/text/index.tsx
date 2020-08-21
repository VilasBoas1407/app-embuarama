import React, { ChangeEvent } from 'react';
import styled from 'styled-components/native';

const Input = styled.TextInput`
    background: #FFFFFF;
    border: 2px solid #1D293F;
    border-radius: 8px;
    height: 55px;
    font-size: 16px;
    padding-left: 10px;
    margin-bottom: 20px;
`;

const Label = styled.Text`
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

const View = styled.View`
    margin-top: 2%;
    margin-bottom: 2%;
`;
interface Iprops {
    text : string
    onChange : any
    type : string
}

export default function TextInput(props : Iprops){
    const { onChange,text, type } = props;
    let pass = false;

    if(type === 'password')
        pass = true;
    return(
        <View>
            <Label>{text}</Label>
            <Input onChange={onChange} secureTextEntry={pass}/>
        </View>
    );
}