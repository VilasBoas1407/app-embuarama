import React, {useEffect,useState} from 'react';
import { KeyboardAvoidingView, Platform, SafeAreaView, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { useNavigation } from '@react-navigation/native';
import { Container,View,Erro } from './styles';
import { withFormik } from 'formik';
import * as Yup from 'yup';

import Header from '../../../components/layout/header';
import Input from '../../../components/input/text';
import ButtonGrey from '../../../components/input/buttons/grey';
import ButtonDefault from '../../../components/input/buttons/default';
import Sucess from '../../../components/layout/modal/sucess';
import Error from '../../../components/layout/modal/error';

import api from '../../../services/api';

function RegisterUser(props : any){

const [userData,setUserData] = useState({
    DS_TOKEN_EMPRESA : ''
});

const [modalSucess,setModalSucess] = useState({
    loading : false,
    message: ''
});


const [modalError,setModalError] = useState({
    loading : false,
    message: ''
});
const navigation = useNavigation();

function handleNavigateToHome(){
    navigation.navigate('HomeAdmin');
}

async function Register(){

    let values = props.values;
    values.DS_TOKEN_EMPRESA = userData.DS_TOKEN_EMPRESA;
    api.request({   
        method: 'POST',
        url: `/user/register`,
        data: values 
      }).then(function(response){

          if(response.data.valid){
            setModalSucess({
                loading: true,
                message: response.data.message
            });
          }
          else{
            setModalError({
                loading: true,
                message: response.data.message
            });
          }

      }).catch(function(err){
      });

}

useEffect(() => {
        
    async function loadUser(){
        let userData = await AsyncStorage.getItem('userData');
        const user = userData != null ? JSON.parse(userData) : null;
        setUserData(user);
    }

    loadUser();
},[]);
return(
    <View>
        <SafeAreaView>
            <ScrollView>
                <KeyboardAvoidingView
                    behavior={Platform.OS == "ios" ? "padding" : "padding"}
                >
                    <Container>
                    <Header />
                        <View>
                            <Input 
                                text={'Nome'} 
                                onChangeText={(text: string) => props.setFieldValue('DS_NOME', text)}
                                type={'text'} value={props.values.DS_NOME}
                            />   
                            { props.errors.DS_NOME && <Erro>{props.errors.DS_NOME}</Erro> }
                            <Input 
                                text={'E-mail'} 
                                onChangeText={(text: string) => props.setFieldValue('DS_EMAIL', text)} 
                                type={'text'} 
                                value={props.values.DS_EMAIL}
                            />   
                            { props.errors.DS_EMAIL && <Erro>{props.errors.DS_EMAIL}</Erro> }
                            <Input 
                                text={'Login'} 
                                onChangeText={(text: string) => props.setFieldValue('DS_LOGIN', text)} 
                                type={'text'} 
                                value={props.values.DS_LOGIN}
                            />   
                            { props.errors.DS_LOGIN && <Erro>{props.errors.DS_LOGIN}</Erro> }
                            <Input 
                                text={'Senha'} 
                                onChangeText={(text: string) => props.setFieldValue('DS_SENHA', text)} 
                                type={'password'} 
                                value={props.values.DS_SENHA}
                            />   
                            { props.errors.DS_SENHA && <Erro>{props.errors.DS_SENHA}</Erro> }
                            <Input 
                                text={'DDD'} 
                                onChangeText={(text: string) => props.setFieldValue('NR_DDD', text)} 
                                type={'text'} 
                                value={props.values.NR_DDD}
                            />   
                            { props.errors.NR_DDD && <Erro>{props.errors.NR_DDD}</Erro> }
                            <Input 
                                text={'Telefone'} 
                                onChangeText={(text: string) => props.setFieldValue('NR_TELEFONE', text)} 
                                type={'text'} 
                                value={props.values.NR_TELEFONE}
                            />   
                            { props.errors.NR_TELEFONE && <Erro>{props.errors.NR_TELEFONE}</Erro> }
                            <Input 
                                text={'Função'} 
                                onChangeText={(text: string) => props.setFieldValue('DS_FUNCAO', text)} 
                                type={'text'} 
                                value={props.values.DS_FUNCAO}
                            />   
                            { props.errors.DS_FUNCAO && <Erro>{props.errors.DS_FUNCAO}</Erro> }

                            <ButtonGrey text={'Cadastrar'} onPress={Register} visible={true}/>
                            <ButtonDefault text={'Voltar'} onPress={handleNavigateToHome}/>
                        </View>
                    </Container>
                    <Sucess loading={modalSucess.loading} message={modalSucess.message} onPress={handleNavigateToHome}/>
                    <Error  loading={modalError.loading} message={modalError.message} onPress={handleNavigateToHome} />
                </KeyboardAvoidingView>
            </ScrollView>
        </SafeAreaView>
    </View>
  );
}

export default withFormik({

  mapPropsToValues: () => ({  
      DS_NOME : '',
      DS_EMAIL : '',
      DS_LOGIN : '',
      DS_SENHA : '',
      FL_EMPRESA : 0,
      FL_ADMINISTRADOR: 0,
      NR_DDD: '',
      NR_TELEFONE : '',
      DS_FUNCAO: '',
      DS_TOKEN_EMPRESA : ''
  }),

  validationSchema: Yup.object().shape({

    DS_NOME : Yup.string()
    .required('Preencha o campo de nome'),
    DS_EMAIL: Yup.string()
      .email('Digite um e-mail válido')
      .required('Preencha o campo de e-mail'),
    DS_SENHA: Yup.string()
      .min(6, 'A senha deve ter no mínimo 6 caracteres')
      .required('Preencha o campo de senha'),
    DS_LOGIN: Yup.string()
      .min(6, 'O login deve ter no mínimo 6 caracteres')
      .required('Preencha o campo de login'),
    NR_DDD: Yup.string()
    .min(2, 'Digite um DDD Válido')
    .max(2,'Digite um DDD Válido')
    .required('Preencha o campo de DDD'),
    NR_TELEFONE: Yup.string()
    .min(8, 'Digite um telefone Válido')
    .max(9,'Digite um telefone Válido')
    .required('Preencha o campo de telefone'),
    DS_FUNCAO: Yup.string()
    .required('Preencha o campo de função')

  }),

  handleSubmit: (values) => {
  },
})(RegisterUser);
  