import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { Container,View } from './styles';


import Header from '../../../components/layout/header';
import Input from '../../../components/input/text';
import ButtonGrey from '../../../components/input/buttons/grey';
export default function Login(){

    const navigation = useNavigation();

    function handleNavigateToHome(){
        navigation.navigate('Home');
    }

    return (
        <Container>

            <Header />

            <View>

                <Input text={'Usuário'} onChange={''} type={'text'}/>   
                <Input text={'Senha'} onChange={''} type={'password'}/>             
                <ButtonGrey text={'Concluir'} onPress={''}/>

            </View>

        </Container>
    );
}