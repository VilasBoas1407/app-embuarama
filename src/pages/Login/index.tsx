import React, { useState  } from 'react';
import {AsyncStorage} from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { withFormik } from 'formik';
import * as Yup from 'yup';

import { Container,View,TouchableOpacity,Text,Erro } from './styles';
import Header from '../../components/layout/header';
import Input from '../../components/input/text';
import ButtonGrey from '../../components/input/buttons/grey';
import Checkbox from '../../components/input/checkbox';

import api from '../../services/api';

import Sucess from '../../components/layout/modal/sucess';
import Error from '../../components/layout/modal/error';


function Login(props: any){

    const navigation = useNavigation();
    
    const [loading,setLoading] = useState(false);
    const [sucess,setSucess] = useState('');
    const [erro,setErro] = useState('');
    const [loadingError, setLoadingError] = useState(false);

    function handleNavigationToForgotPass(){
        navigation.navigate('ForgotPassword');
    }

    async function handleNavigateToHome(){

        const { DS_LOGIN, DS_SENHA } = props.values;

        await api.request({   
            method: 'GET',
            url: `/user`,
            params: {
                ds_login: DS_LOGIN,
                ds_senha : DS_SENHA
            },
          
          }).then(async function(response){

                if(response.data.valid){
                  const userData = response.data.userData;

                    await AsyncStorage.setItem('userData',JSON.stringify(userData));

                    if(userData.FL_EMPRESA === true || userData.FL_ADMINISTRADOR === true)
                        navigation.navigate('HomeAdmin');
                    else
                        navigation.navigate('Home');
                }
                else{
                    openModalError(response.data.message)
                }

          }).catch(function(err){});

    }

    function openModal(msg : string){
        setSucess(msg);
        setLoading(!loading);
    }

    function openModalError(msg : string){
        setErro(msg);
        setLoadingError(!loadingError);
    }

    return (
        <Container>

            <Header /> 

            <View>

                <Input 
                    text={'Usuário'} 
                    onChangeText={(text : string) => props.setFieldValue('DS_LOGIN', text)} 
                    type={'text'} 
                    value={props.values.DS_LOGIN}
                />   
                { props.errors.DS_LOGIN && <Erro>{props.errors.DS_LOGIN}</Erro> }
                <Input 
                    text={'Senha'} 
                    onChangeText={(text : string) => props.setFieldValue('DS_SENHA', text)} 
                    type={'password'} 
                    value={props.values.DS_SENHA}
                />     
                { props.errors.DS_SENHA && <Erro>{props.errors.DS_SENHA}</Erro> }
                <Checkbox label={'Permanecer logado'} />
                <TouchableOpacity onPress={handleNavigationToForgotPass}>
                    <Text>Esqueci minha senha</Text>
                </TouchableOpacity>
                <ButtonGrey text={'Logar'} onPress={handleNavigateToHome} visible={true}/>

                <Sucess loading={loading} message={sucess} onPress={openModal}/>
                <Error loading={loadingError} message={erro} onPress={openModalError}/>
            </View>

        </Container>
    );
}

export default withFormik({
    mapPropsToValues: () => ({
        DS_LOGIN : '',
        DS_SENHA : ''
    }),

    validationSchema: Yup.object().shape({
        DS_LOGIN : Yup.string()
        .required('O campo login é obrigatório'),
        DS_SENHA: Yup.string()
        .required('O campo senha é obrigatório')
    }),

    handleSubmit: (values) => {}
})(Login);