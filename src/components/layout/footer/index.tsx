import React, { Component } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, TouchableOpacity } from 'react-native';
import { Container, Content, Footer, FooterTab, Button, Text } from 'native-base';
import { Ionicons } from '@expo/vector-icons';

interface Iprops{
    page : string,
}
export default function FooterTabs(props : Iprops){

    const { page } = props;

    const navigation = useNavigation();

    function goBack(){
        navigation.navigate(page);
    }

    function goConfig(){

    }

    function goHome(){

    }

    return (
      <Container>
        <Content />
        <Footer>
          <FooterTab style={{backgroundColor: '#FFFFFF', borderTopWidth:1}}>

            <Button>
                <TouchableOpacity onPress={goBack}>
                    <View style={{borderRadius: 50, borderColor: '#000', borderWidth: 1, paddingLeft: 5, paddingRight: 5}}>
                        <Ionicons name="md-arrow-back" size={32} color="black" />
                    </View>
                </TouchableOpacity>
            </Button>

            <Button>
                <TouchableOpacity>
                    <Ionicons name="md-home" size={32} color="black" />
                </TouchableOpacity>
            </Button>

            <Button>
                 <TouchableOpacity>
                    <Ionicons name="md-cog" size={32} color="black" />
                </TouchableOpacity>
            </Button>

          </FooterTab>
        </Footer>
      </Container>
    );
  }
