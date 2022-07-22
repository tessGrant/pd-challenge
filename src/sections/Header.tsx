import styled from 'styled-components';
import { Text } from '../components/pdText';
import AddNewCardForm from './AddNewCard';

export const Header = () => {
    return (
        <StyledHeader>
            <div>
                <Text logoText alignLeft>The Planday Challange</Text>
            </div>
            <div><AddNewCardForm /></div>
        </StyledHeader>
    );
}

export const StyledHeader = styled.div`
    height: 130px;
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
`; 