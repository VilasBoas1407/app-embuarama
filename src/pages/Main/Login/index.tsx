import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { Container,View,TouchableOpacity,Text } from './styles';
import Header from '../../../components/layout/header';
import Input from '../../../components/input/text';
import ButtonGrey from '../../../components/input/buttons/grey';
import Checkbox from '../../../components/input/checkbox';

import api from '../../../services/api';

export default function Login(){

    const navigation = useNavigation();

    function handleNavigationToRegister(){
        navigation.navigate('Register');
    }
    function handleNavigateToHome(){
        // console.log('Chegou')
        // api.request({   
        //     method: 'GET',
        //     url: `/user`,
        //     params: {
        //         ds_login: "ds_email",
        //         ds_senha : "ds_senha"
        //     },
          
        //   }).then(function(response){
        //       console.log("Response")
        //       console.log(response)
        //   }).catch(function(err){
        //       console.log(err)
        //   });
        navigation.navigate('Home');

    }

    return (
        <Container>

            <Header /> 

            <View>

                <Input text={'Usuário'} onChange={''} type={'text'}/>   
                <Input text={'Senha'} onChange={''} type={'password'}/>     
                <Checkbox label={'Permanecer logado'} />
                <TouchableOpacity onPress={handleNavigationToRegister}>
                    <Text>Esqueci minha senha</Text>
                </TouchableOpacity>
                <ButtonGrey text={'Logar'} onPress={handleNavigateToHome}/>

            </View>

        </Container>
    );
}