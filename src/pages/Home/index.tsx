import React from 'react';
import {SafeAreaView, View} from 'react-native';

import Header from '../../components/layout/header';
import Footer from '../../components/layout/footer';

import {Container} from './styles';

export default function Home(){

    return (
        <SafeAreaView>    
            <Header />
            <Container>
                    
            </Container>
            <Footer/>
        </SafeAreaView>
    );
}