import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import { Container,View,TouchableOpacity,Text } from './styles';
import Header from '../../components/layout/header';
import Input from '../../components/input/text';
import ButtonGrey from '../../components/input/buttons/grey';
import Checkbox from '../../components/input/checkbox';

import api from '../../services/api';

import Sucess from '../../components/layout/modal/sucess';
import Error from '../../components/layout/modal/error';

export default function Login(){

    const navigation = useNavigation();
    
    const [loading,setLoading] = useState(false);
    const [sucess,setSucess] = useState('');
    const [erro,setErro] = useState('');
    const [loadingError, setLoadingError] = useState(false);

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
        //navigation.navigate('HomeAdmin');

        setLoading(true);

    }

    function openModal(){
        setLoading(!loading);
    }
    
    function openModalError(){
        setLoadingError(!loadingError);
    }

    return (
        <Container>

            <Header /> 

            <View>

                <Input text={'Usuário'} onChangeText={''} type={'text'} value={''}/>   
                <Input text={'Senha'} onChangeText={''} type={'password'} value={''}/>     
                <Checkbox label={'Permanecer logado'} />
                <TouchableOpacity onPress={handleNavigationToRegister}>
                    <Text>Esqueci minha senha</Text>
                </TouchableOpacity>
                <ButtonGrey text={'Logar'} onPress={handleNavigateToHome}/>

                <Sucess loading={loading} message={sucess} onPress={openModal}/>
                <Error loading={loadingError} message={erro} onPress={openModalError}/>
            </View>

        </Container>
    );
}