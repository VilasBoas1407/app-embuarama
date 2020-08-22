import styled from 'styled-components/native';
import {heightPercentageToDP} from '../../../utils/PixelRatio';

export const Container = styled.View`
    position: absolute;
    margin-top: ${heightPercentageToDP('25')}%;
    width:100%;  
    background-color: #fff;
    height: 100%;
    align-items: stretch;
    flex-direction: row; 
`;