import React, {useState, useEffect} from 'react';
import {SafeAreaView} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { useNavigation } from '@react-navigation/native';

import Header from '../../../components/layout/header';
import Footer from '../../../components/layout/footer';
import Button from '../../../components/input/buttons/grey';

import {Container} from './styles';

export default function Home(){

    const [userData,setUserData] = useState({});
    const [screen,setScreen]= useState({
        show_empresa : false,
        show_admin: false
    });
    const navigation = useNavigation();

    function goRegisterCompany(){
        navigation.navigate('Register');
    }

    useEffect(() => {
        
        async function loadUser(){
            let userData = await AsyncStorage.getItem('userData');
            const user = userData != null ? JSON.parse(userData) : null;
            setUserData(user);

            if(user.FL_EMPRESA === true){
                setScreen({
                    show_empresa: true,
                    show_admin: false
                });
            }
            else{
                setScreen({
                    show_empresa: true,
                    show_admin: true
                });
            }
        }

        loadUser();
    },[]);

    return (
        <>
            <Container>
                <Header />
            </Container>

            <SafeAreaView>    
                <Container>
                   <Button text={'Cadastrar Empresa'} onPress={goRegisterCompany} visible={screen.show_admin}/>
                   <Button text={'Visualizar Empresas '} onPress={''} visible={screen.show_admin}/>                   
                   <Button text={'Cadastrar Usuário'} onPress={''} visible={screen.show_empresa}/>
                </Container>
            </SafeAreaView>
            <Footer page={'Login'}/>
        </>
    );
}