import React from 'react';
import styled from 'styled-components/native';
import { Icon } from 'react-native-elements';

const Input = styled.TextInput`
    font-size: 16px;
    padding-left: 10px;
    font-family: Poppins_300Light;
    position:absolute;
    border:none;
    width:80%;
    z-index:0;
    height: 55px;
`;
const View = styled.View`
    background: #FFFFFF;
    border: 1px solid #DFE2E7;
    border-radius: 8px;
    height: 55px;
    margin-bottom: 10px;
`;

interface props {
    placeholder : string
}
export default function PassInput(props : props){
    const { placeholder } = props;
    return(
        <View>
            <Input placeholder={placeholder} placeholderTextColor={"#9097A5"} secureTextEntry={true}/>

        </View>
    );
}