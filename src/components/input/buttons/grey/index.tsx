import React from 'react';
interface Iprops {
    text : string
    onPress : any,
    visible?: boolean
}

import { View, Button,Text } from './styles';

export default function ButtonGrey(props : Iprops){
    const { onPress,text, visible} = props;
    
    return(
        (visible === true) ? 
        (
            <View>
                <Button onPress={onPress}>
                     <Text>{text}</Text>
                </Button >
            </View>
        )
        : 
        null

    );
}

