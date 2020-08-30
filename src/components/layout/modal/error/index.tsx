import React from 'react';
import { Modal } from 'react-native';
import {  Background,View, Text, Button, TextBtn } from './styles';

interface Iprops{
    loading : boolean,
    message : string,
    onPress : any
}

export default function Sucess(props : Iprops){

    const { loading,message, onPress } = props;

    return(
        <Modal
            transparent={true}
            animationType={'none'}
            visible={loading}
        >
            <Background />
                <View>
                    <Text style={{color:'red',fontWeight:'bold'}}>Atenção!</Text>
                    <Text style={{paddingBottom:10,paddingTop:10,marginLeft: 25}}>{message}</Text>

                    <Button onPress={onPress}>
                        <TextBtn>Fechar</TextBtn>
                    </Button>
                </View>
        </Modal>
    );
}