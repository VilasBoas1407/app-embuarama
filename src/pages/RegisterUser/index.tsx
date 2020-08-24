import React from 'react';
import { KeyboardAvoidingView, Platform, SafeAreaView, ScrollView   } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Container,View } from './styles';


import Header from '../../components/layout/header';
import Input from '../../components/input/text';
import ButtonGrey from '../../components/input/buttons/grey';
import ButtonDefault from '../../components/input/buttons/default';

export default function Login(){

    const navigation = useNavigation();

    function handleNavigateToHome(){
        navigation.navigate('Login');
    }

    return (
        <SafeAreaView>
            <ScrollView>
                <KeyboardAvoidingView
                    behavior={Platform.OS == "ios" ? "padding" : "height"}
                >
                    <Container>
                    <Header />
                        <View>

                            <Input text={'Nome'} onChange={''} type={'text'}/>   
                            <Input text={'Telefone'} onChange={''} type={'text'}/>      
                            <Input text={'E-mail'} onChange={''} type={'text'}/>   
                            <Input text={'Senha'} onChange={''} type={'password'}/>   
                            <Input text={'Confirmar Senha'} onChange={''} type={'password'}/>         
                            <Input text={'Token da Empresa'} onChange={''} type={'text'}/>
                            
                            <ButtonGrey text={'Cadastrar'} onPress={''}/>
                            <ButtonDefault text={'Voltar'} onPress={handleNavigateToHome}/>
                        </View>
                    </Container>
                </KeyboardAvoidingView>
            </ScrollView>
        </SafeAreaView>
    );
}