import React from 'react';
import styled from 'styled-components';
import { PdGrid } from '../components/pdGrid';
import { PdText } from '../components/pdText';
import { PdCard } from './CardComponent';

export const PdContainer = () => {
    return (
        <StyledContainer>
            <PdText logoText centered>The Planday Challange</PdText>
            <PdGrid>
                <PdCard></PdCard>
                <PdCard></PdCard>
                <PdCard></PdCard>
                <PdCard></PdCard>
                <PdCard></PdCard>
                <PdCard></PdCard>
                <PdCard></PdCard>
                <PdCard></PdCard>
                <PdCard></PdCard>
            </PdGrid>
        </StyledContainer>
    );
}

const StyledContainer = styled.div`
    margin: 30px auto;
    height: calc(100vh-30px);
    width: 1024px;
    padding-bottom: 30px;
`