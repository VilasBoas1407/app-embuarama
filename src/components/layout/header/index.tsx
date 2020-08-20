import React from 'react';
import { Text,Image,View } from 'react-native';

import { Icon } from 'react-native-elements';
import { 
    Container,
    Title,TitleBold,
    ImageDiv
 } from './styles';

const logo = require('../../../assets/img/logo.png');

export default function Header(){

    return (
        <Container>

            <ImageDiv>
                <Image source={logo} height={200} width={150} />
            </ImageDiv>

            <View> 
                <TitleBold>EMBUARAMA</TitleBold>               
                <Title>CONSULTORIA</Title>
            </View>
        </Container>
    );
}