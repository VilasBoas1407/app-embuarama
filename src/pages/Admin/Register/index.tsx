import React from 'react';
import { KeyboardAvoidingView, Platform, SafeAreaView, ScrollView,Text   } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Container,View,Erro } from './styles';
import { withFormik } from 'formik';
import * as Yup from 'yup';

import Header from '../../../components/layout/header';
import Footer from '../../../components/layout/footer';
import Input from '../../../components/input/text';
import ButtonGrey from '../../../components/input/buttons/grey';
import ButtonDefault from '../../../components/input/buttons/default';
    
function Form(props : any){
    
const navigation = useNavigation();

function handleNavigateToHome(){
    navigation.navigate('HomeAdmin');
}

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
                                text={'Nome Empresa'} 
                                onChangeText={(text: string) => props.setFieldValue('DS_NOME_EMPRESA', text)}
                                type={'text'} value={props.values.DS_NOME_EMPRESA}
                            />   
                            { props.errors.DS_NOME_EMPRESA && <Erro>{props.errors.DS_NOME_EMPRESA}</Erro> }
                            <Input 
                                text={'CNPJ'} 
                                onChangeText={(text: string) => props.setFieldValue('NR_CNPJ', text)} 
                                type={'text'} 
                                value={props.values.NR_CNPJ}
                            />   
                            { props.errors.NR_CNPJ && <Erro>{props.errors.NR_CNPJ}</Erro> }
                            <Input 
                                text={'Nome Responsável'} 
                                onChangeText={(text: string) => props.setFieldValue('DS_NOME_RESPONSAVEL', text)} 
                                type={'text'} 
                                value={props.values.DS_NOME_RESPONSAVEL}
                            />   
                            { props.errors.DS_NOME_RESPONSAVEL && <Erro>{props.errors.DS_NOME_RESPONSAVEL}</Erro> }
                            <Input 
                                text={'E-mail'} 
                                onChangeText={(text: string) => props.setFieldValue('DS_EMAIL_EMPRESA', text)} 
                                type={'text'} 
                                value={props.values.DS_EMAIL_EMPRESA}
                            />   
                            { props.errors.DS_EMAIL_EMPRESA && <Erro>{props.errors.DS_EMAIL_EMPRESA}</Erro> }
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
                            <ButtonGrey text={'Cadastrar'} onPress={props.handleSubmit} />
                            <ButtonDefault text={'Voltar'} onPress={handleNavigateToHome}/>
                        </View>
                    </Container>
                </KeyboardAvoidingView>
            </ScrollView>
        </SafeAreaView>
    </View>
  );
}

export default withFormik({

  mapPropsToValues: () => ({  
      DS_NOME_EMPRESA : '',
      NR_CNPJ : '',
      DS_NOME_RESPONSAVEL : '',
      DS_EMAIL_EMPRESA : '',
      DS_LOGIN : '',
      DS_SENHA : '',
      FL_EMPRESA : 1
  }),

  validationSchema: Yup.object().shape({
    DS_NOME_EMPRESA : Yup.string()
    .required('Preencha o campo de nome empresa'),
    DS_NOME_RESPONSAVEL: Yup.string()
    .required('Preencha o campo de nome responsável'),
    DS_EMAIL_EMPRESA: Yup.string()
      .email('Digite um e-mail válido')
      .required('Preencha o campo de e-mail'),
    DS_SENHA: Yup.string()
      .min(6, 'A senha deve ter no mínimo 6 caracteres')
      .required('Preencha o campo de senha'),
    DS_LOGIN: Yup.string()
      .min(6, 'O login deve ter no mínimo 6 caracteres')
      .required('Preencha o campo de login'),
    NR_CNPJ: Yup.string()
      .min(13, 'Digite um CNPJ Válido')
      .max(14,'Digite um CNPJ Válido')
      .required('Preencha o campo de CNPJ'),
  }),

  handleSubmit: (values) => {
    
  },
})(Form);
  