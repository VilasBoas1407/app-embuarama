import React from 'react';
import { Icon } from 'react-native-elements';

import { Container,Button,LogoAsIcon } from './style';
import { useNavigation } from '@react-navigation/native';

const logo = require('../../../assets/icons/logo_icon.png');

interface props {
    selected : string
}
export default function MenuBar(props: props){

    const navigation = useNavigation();

    const color = 'background: rgba(37, 152, 139, 0.22)';
    const { selected } = props;

    function handleNavigateToAccount(){
        navigation.navigate('Profile');
    }
  
    function handleNavigateToHome(){
        navigation.navigate('Home');
    }

    function handleNavigateToReportHistory(){
        navigation.navigate('History');
    }

    return(
        <Container>
            <Button
                style={selected === 'Home' ? {
                    backgroundColor : color
                }: null}
                onPress={handleNavigateToHome}
            >
                <Icon
                    name='home'
                    type='font-awesome'
                    color='#9097A5'
                />
            </Button>
            <Button
                    style={selected === 'Search' ? {
                        backgroundColor : color
                    }: null}
            >
                <Icon
                    name='search'
                    type='font-awesome'
                    color='#9097A5'
                />
            </Button>
            <Button
                    style={selected === 'Logo' ? {
                        backgroundColor : color
                    }: null}
            >
                <LogoAsIcon source={logo} />
            </Button>
            <Button
                    style={selected === 'List' ? {
                        backgroundColor : color
                    }: null}
                    onPress={handleNavigateToReportHistory}
            >
                <Icon
                    name='list'
                    type='font-awesome'
                    color='#9097A5'
                />
            </Button>
            <Button
                    style={selected === 'Account' ? {
                        backgroundColor : color
                    }: null}
                    onPress={handleNavigateToAccount}
            >
                <Icon
                    name='user-o'
                    type='font-awesome'
                    color='#9097A5'
                />
            </Button>

        </Container>
    );
}