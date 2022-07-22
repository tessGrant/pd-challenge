import React from 'react';
import styled from 'styled-components';

interface IProps {
    children: any;
}

export const PdGrid = (props: IProps) => <StyledGrid {...props}>{props.children}</StyledGrid>;

const StyledGrid = styled.div<IProps>`
    display: flex;
    flex: 1;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    align-content: center;
    padding-bottom: 40px;
    border-bottom: 1px solid #000;
`;