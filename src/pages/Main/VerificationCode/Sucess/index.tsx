import React from 'react';

import { useNavigation } from '@react-navigation/native';

import { Container,Image,Title,Text,Button, ButtonText } from './styles';


const sucess = require('../../../../assets/imgs/sucess.png');

export default function Sucess(){

    const navigation = useNavigation();

    function handleNavigateToHome(){
        navigation.navigate('Home');
    }
    return(
       <Container>
           <Image source={sucess}/>
           <Title>Parabéns Jorge!</Title>
           <Text>Sua conta foi criada com sucesso, faça suas denuncias </Text>
           <Button onPress={handleNavigateToHome}> 
               <ButtonText>OK</ButtonText>
           </Button>
       </Container> 
    )
}