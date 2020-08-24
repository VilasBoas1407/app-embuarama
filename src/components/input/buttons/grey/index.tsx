import React from 'react';

interface Iprops {
    text : string
    onPress : any
}

import { View, Button,Text } from './styles';
export default function ButtonGrey(props : Iprops){
    const { onPress,text} = props;
    console.log(onPress);
    return(

        <View>
           <Button onPress={onPress}>
                <Text>{text}</Text>
           </Button >
        </View>

    );
}

