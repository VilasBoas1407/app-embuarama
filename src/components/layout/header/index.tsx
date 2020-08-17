import React from 'react';

import { Text } from 'react-native';

import { Icon } from 'react-native-elements';
import { User,UserName,CountReport,BorderUser, Container,Notifications } from './styles';

const userPic = require('../../../assets/imgs/user.png');
export default function Header(){

    return (
        <Container>
            <BorderUser>
                <User source={userPic} />
            </BorderUser>
                <UserName>Olá, Jorge Silva</UserName>
                <CountReport>50 denuncias realizadas</CountReport>
                <Notifications>
                    <Icon
                        name='bell'
                        type='font-awesome'
                        color='#16807E'
                        size={20}
                    />
            </Notifications>
        </Container>
    );
}