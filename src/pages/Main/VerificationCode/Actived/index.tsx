import React from 'react';

import { Container,Image,Title,Text,Button, ButtonText } from './styles';



export default function Sucess(){

    return(
       <Container>
           <Title>Código de verificação</Title>
           <Text> Foi enviado um código de verificação para (**) **** - **** </Text>
           <Button> 
               <ButtonText>Próximo</ButtonText>
           </Button>
       </Container> 
    )
}