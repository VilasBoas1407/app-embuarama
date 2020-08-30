import React from 'react';

import { View, Label, Input } from './styles';

interface Iprops {
    text : string
    onChangeText : any
    type : string
    value : string
}

export default function TextInput(props : Iprops){
    const { onChangeText,text, type,value } = props;
    let pass = false;

    if(type === 'password')
        pass = true;
    return(
        <View>
            <Label>{text}</Label>
            <Input onChangeText={onChangeText} secureTextEntry={pass} value={value}/>
        </View>
    );
}


/*
 Type => Pode ser text, password
*/