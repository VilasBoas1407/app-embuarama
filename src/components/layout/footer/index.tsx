import React, { Component } from 'react';
import { View } from 'react-native';
import { Container, Content, Footer, FooterTab, Button, Text } from 'native-base';
import { Ionicons } from '@expo/vector-icons';

export default function FooterTabs(){
    return (
      <Container>
        <Content />
        <Footer>
          <FooterTab style={{backgroundColor: '#FFFFFF'}}>
            <Button>
                <View style={{borderRadius: 50, borderColor: '#000', borderWidth: 1, paddingLeft: 5, paddingRight: 5}}>
                    <Ionicons name="md-arrow-back" size={32} color="black" />
                </View>
            </Button>
            <Button>
                <Ionicons name="md-home" size={32} color="black" />
            </Button>
            <Button>
                <Ionicons name="md-cog" size={32} color="black" />
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
