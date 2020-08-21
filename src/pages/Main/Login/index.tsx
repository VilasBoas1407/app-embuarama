import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { Container,View,TouchableOpacity,Text } from './styles';


import Header from '../../../components/layout/header';
import Input from '../../../components/input/text';
import ButtonGrey from '../../../components/input/buttons/grey';
import Checkbox from '../../../components/input/checkbox';

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
                <Checkbox label={'Permanecer logado'} />
                <TouchableOpacity>
                    <Text>Esqueci minha senha</Text>
                </TouchableOpacity>
                <ButtonGrey text={'Logar'} onPress={handleNavigateToHome}/>

            </View>

        </Container>
    );
}