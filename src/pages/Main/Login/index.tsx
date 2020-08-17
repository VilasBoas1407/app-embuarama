import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { Container } from './styles';


export default function Login(){

    const navigation = useNavigation();

    function handleNavigateToHome(){
        navigation.navigate('Home');
    }
  

    return (
        <Container>
           
        </Container>

    );
}