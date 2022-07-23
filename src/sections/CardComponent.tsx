import Button from '@material-ui/core/Button';
import { useMutation } from 'react-query';
import { deleteCardMutation } from 'src/utils/api/fetchServices';
import styled from 'styled-components';
import {Text} from '../components/pdText';
import { PDCard } from '../utils/types';
import DeleteCard from './DeleteCardModal';

export const Card = (props: PDCard | any ) => {
   return  (
        <StyledCard>
            <StyledImgWrraper>
                <StyledDelete>
                    <DeleteCard id={props.item.id} />
                </StyledDelete>
                <StyledImage src={props.item.imagePath} alt={props.item.title} />
            </StyledImgWrraper>
            <StyledTextBox>
                <Text titleText strong alignLeft>{props.item.title}</Text>
                <Text bodyText alignLeft>{props.item.description}</Text>
            </StyledTextBox>
         </StyledCard>)
}

const StyledCard = styled.div`
    position: relative;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    width: 200px;
    height: 200px;
    border: 1px solid #BBCBD3;
    border-radius: 15px;
    margin-bottom: 40px;
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
`;

const StyledDelete = styled.div`
    position: absolute;
    right: 0px;
    top: 0px;
    z-index: 1000;
`;