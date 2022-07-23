import styled from 'styled-components';
import { Text } from '../components/pdText';
import AddNewCardForm from './AddNewCard';

export const Header = (props: any) => {
    return (
        <StyledHeader {...props}>
            <div>
                <Text logoText alignLeft>The Planday Challange</Text>
            </div>
            <StyledActions>
                <AddNewCardForm />
                {props.children}
            </StyledActions>
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

export const StyledActions = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    height: 80px;
    margin: 10px 0;
    justify-content: space-between;
`;