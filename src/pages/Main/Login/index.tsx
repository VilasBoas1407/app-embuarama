import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { Container } from './styles';

import Header from '../../../components/layout/header';

export default function Login(){

    const navigation = useNavigation();

    function handleNavigateToHome(){
        navigation.navigate('Home');
    }
  

    return (
        <Container>
           <Header />
        </Container>

    );
}