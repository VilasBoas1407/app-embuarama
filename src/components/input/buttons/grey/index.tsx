import React from 'react';
import styled from 'styled-components/native';
import { widthPercentageToDP }  from '../../../../utils/PixelRatio';

interface Iprops {
    text : string
    onPress : any
}

const Button = styled.TouchableOpacity`
    background: #1D293F;
    border-radius: 7.50685px;
    height: 56px;
    width: 100%;
`;

const Text = styled.Text`
    font-family: OpenSans_700Bold;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 24px;
    text-align: center;
    color: #FFFFFF;
    padding-top: 16px;
`;

const View = styled.View`
    margin-left: ${widthPercentageToDP('2')};
    margin-right: ${widthPercentageToDP('2')};
    margin-top: ${widthPercentageToDP('2')}
`;

export default function ButtonGrey(props : Iprops){
    const { onPress,text} = props;

    return(

        <View>
           <Button onPress={onPress}>
                <Text>{text}</Text>
           </Button >
        </View>

    );
}

