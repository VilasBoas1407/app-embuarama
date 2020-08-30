import React, { useState }  from 'react';
import {View} from 'react-native';

import {Container} from '../../theme/LayoutStyles';
import Header from '../../components/layout/header';
import Input from '../../components/input/text';
import Button from '../../components/input/buttons/grey';
import Error from '../../components/layout/modal/error';
import Sucess from '../../components/layout/modal/sucess';

import {Title,Text, Divider} from './styles'

import api from '../../services/api';

export default function ForgotPassword(){
    const [email, setEmail] = useState('');
    const [codigo,setCodigo] = useState('');
    const [senha, setSenha] = useState('');
    
    const [form,setForm] = useState({
        showEmail : false,
        showCodigo : true,
        showSenha : false
    });
    const [modal,setModal] = useState({
        loadingSucess : false,
        loadingError: false,
        errorMessage: '',
        sucessMessage: ''
    });

    function openModalSucess(msg : string){
        setModal({
            ...modal,
            loadingSucess : !modal.loadingSucess,
            sucessMessage : msg
        });
    }

    function openModalError(msg : string){
        setModal({
            ...modal,
            loadingError : !modal.loadingError,
            errorMessage : msg
        });
    }

    async function SendEmail(){

        await api.request({
            method: 'GET',
            url: `/user/recovery`,
            params :{
                DS_EMAIL : email
            },
        }).then(function(response){
            if(response.data.valid === true){
                
                setForm({
                    ...form,
                    showCodigo: true,
                    showEmail: false
                });

                openModalSucess(response.data.message);
            }
            else{
                openModalError(response.data.message);
            }
        }).catch(function(err){
            openModalError('Ocorreu um erro interno, favor contactar o administrador!');
        });
    }
    
    async function ValidToken(){
        await api.request({
            method: 'GET',
            url: `/user/ValidToken`,
            params :{
                DS_EMAIL : email,
                DS_TOKEN_RECOVERY : codigo
            },
        }).then(function(response){
            if(response.data.valid === true){
                
                setForm({
                    showCodigo: false,
                    showEmail: false,
                    showSenha : true
                });
            }
            else{
                openModalError('O token digitado inválido!');
            }
        }).catch(function(err){
            openModalError('Ocorreu um erro interno, favor contactar o administrador!');
        });
    }

    return(
        <Container>
            <Header/>

            <Title>Redefinir Senha</Title>
            <Divider/>

            {
                form.showEmail === true ?
                    <View>
                        <Text>Por favor insira o e-mail utilizado no cadastro</Text>
                        <Input text={'E-mail'} onChangeText={setEmail} type={'Text'} value={email} />
                        <Button text={'Enviar'} visible={true} onPress={SendEmail}/>
                    </View>   :
                null
            }
            {
                form.showCodigo === true ?
                <View>
                    <Text>Por favor, insira código enviado por e-mail</Text>
                    <Input text={'Código'} onChangeText={setCodigo} type={'Text'} value={codigo} />
                    <Button text={'Validar'} visible={true} onPress={ValidToken}/>
                    <Button text={'Enviar Novamente'} visible={true} onPress={SendEmail}/>
                </View>   :
                null
            }
            {
                form.showSenha === true ?
                <View>
                    <Text>Por favor, insira a nova senha</Text>
                    <Input text={'Senha'} onChangeText={setEmail} type={'Text'} value={email} />
                    <Button text={'Salvar'} visible={true} onPress={SendEmail}/>
                </View>   :
                null
            }

            <Sucess loading={modal.loadingSucess} message={modal.sucessMessage} onPress={openModalSucess}/>
            <Error loading={modal.loadingError} message={modal.errorMessage} onPress={openModalError}/>  
        </Container>
    )
}