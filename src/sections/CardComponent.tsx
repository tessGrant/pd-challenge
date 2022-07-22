import React from 'react';
import styled from 'styled-components';
import {Text} from '../components/pdText';
import { PDCard } from '../utils/types';

export const Card = (props: PDCard | any ) => {
   return  (
        <StyledCard>
            <StyledImgWrraper>
                <StyledImage src={props.item.imagePath} alt={props.item.title} />
            </StyledImgWrraper>
            <StyledTextBox>
                <Text titleText strong alignLeft>{props.item.title}</Text>
                <Text bodyText alignLeft>{props.item.description}</Text>
            </StyledTextBox>
         </StyledCard>)
}

const StyledCard = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    width: 200px;
    height: 200px;
    border: 1px solid red;
    border-radius: 15px;
    margin-top: 40px;
    overflow: hidden;
`;

const StyledImgWrraper = styled.div`
    width: 100%;
    height: 120px;
    background-color: #000;
`;

const StyledImage = styled.img`
    margin: auto;
    display: block;
    width: auto;
    height: 120px;
    max-height: 100%;
`;

const StyledTextBox = styled.div`
    width: 100%;
    padding: 10px;
`