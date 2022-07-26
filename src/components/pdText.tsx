import React from 'react';
import styled from 'styled-components';

interface IProps {
    logoText?: boolean;
    titleText?: boolean;
    subTitle?: boolean;
    bodyText?: boolean;
    strong?: boolean;
    alignLeft?: boolean;
    alignRight?: boolean;
    centered?: boolean;
    children: string;
}

export const Text = (props: IProps) => <StyledText {...props}>{props.children}</StyledText>

const StyledText = styled.div<IProps>`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;
    ${props => props.logoText && `
        margin: 0;
        line-height: 1.15;
        font-size: 2.5rem;
        font-family: 'The Nautigal', cursive;
    `};
    ${props => props.centered && `
        justify-content: center;
    `};
    ${props => props.alignLeft && `
       justify-content: flex-start;
    `};
    ${props => props.alignRight && `
        justify-content: flex-end;
    `};
    ${props => props.strong && `
        font-weight: 600;
    `};
    ${props => props.titleText && `
        font-weight: 600;
        font-size: 16px;
    `};
    ${props => props.bodyText && `
        font-size: 14px;
    `};
`;
