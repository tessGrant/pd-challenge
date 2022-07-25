import Button from '@material-ui/core/Button';
import {useState} from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { deleteCardMutation } from 'src/utils/api/fetchServices';
import styled from 'styled-components';
import {Text} from '../components/pdText';
import { PDCard } from '../utils/types';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';


export const Card = (props: PDCard | any ) => {
    const [open, setOpen] = useState(false);
    const queryClient = useQueryClient();

    const deleteHandler = useMutation((id: any) => deleteCardMutation(id), {
        onSuccess: () => {
          queryClient.invalidateQueries(["cards"]);
        }
      });
    const deleteCardFunc = () => {
        setTimeout(() => {
            deleteHandler.mutate(props.item.id);
        }, 500);
        handleClose();
    }
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
   return  (
        <StyledCard>
            <StyledImgWrraper>
                <StyledDelete>
                    <IconButton color="secondary" aria-label="delete" onClick={handleClickOpen}>
                        <DeleteIcon fontSize="medium" />
                    </IconButton>
                    <Dialog maxWidth="md" open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                        <DialogTitle id="form-dialog-title">Are you sure you wanna delete that card???</DialogTitle>
                        <DialogContent>
                        <Button onClick={() => handleClose()}>Cancel</Button>
                        <Button onClick={() => deleteCardFunc()}>Delete</Button>
                        </DialogContent>
                    </Dialog>
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