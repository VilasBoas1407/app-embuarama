import React from 'react';
import {SafeAreaView} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Header from '../../../components/layout/header';
import Footer from '../../../components/layout/footer';
import Button from '../../../components/input/buttons/grey';

import {Container} from './styles';

export default function Home(){

    
    const navigation = useNavigation();

    function goRegisterCompany(){
        navigation.navigate('Register');
    }

    return (
        <>
            <Container>
                <Header />
            </Container>

            <SafeAreaView>    
                <Container>
                   <Button text={'Cadastrar Empresa'} onPress={goRegisterCompany}/>
                   <Button text={'Visualizar Empresas '} onPress={''}/>                   
                   <Button text={'Cadastrar Usuário'} onPress={''}/>
                </Container>
            </SafeAreaView>
            <Footer page={'Login'}/>
        </>
    );
}