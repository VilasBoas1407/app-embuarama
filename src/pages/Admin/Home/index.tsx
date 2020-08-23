import React from 'react';
import {SafeAreaView, Text} from 'react-native';

import Header from '../../../components/layout/header';
import Footer from '../../../components/layout/footer';
import Button from '../../../components/input/buttons/grey';

import {Container} from './styles';

export default function Home(){

    return (
        <>
            <Container>
                <Header />
            </Container>

            <SafeAreaView>    
                <Container>
                   <Button text={'Cadastrar Empresa'} onPress={''}/>
                   <Button text={'Visualizar Empresas '} onPress={''}/>                   
                   <Button text={'Cadastrar Usuário'} onPress={''}/>
                </Container>
            </SafeAreaView>
            <Footer page={'Login'}/>
        </>
    );
}