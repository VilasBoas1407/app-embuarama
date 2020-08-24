import styled from 'styled-components/native';
import { widthPercentageToDP }  from '../../../../utils/PixelRatio';

export const Button = styled.TouchableOpacity`
    background: #1D293F;
    border-radius: 7.50685px;
    height: 56px;
    width: 100%;
`;

export const Text = styled.Text`
    font-family: OpenSans_700Bold;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 24px;
    text-align: center;
    color: #FFFFFF;
    padding-top: 16px;
`;

export  const View = styled.View`
    margin-left: ${widthPercentageToDP('2')};
    margin-right: ${widthPercentageToDP('2')};
    margin-top: ${widthPercentageToDP('2')}
`;
