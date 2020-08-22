import React from 'react';
import {Text} from 'react-native';
import { Container } from './style';
import { useNavigation } from '@react-navigation/native';

export default function Footer(){

    const navigation = useNavigation();

    return(
        <Container>
            <Text>Teste</Text>
        </Container>
    );
}