import {useState} from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useMutation } from 'react-query';
import { deleteCardMutation } from 'src/utils/api/fetchServices';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

export default function DeleteCard(id: any) {
  const [open, setOpen] = useState(false);

  const deleteHandler = useMutation((id: any) => deleteCardMutation(id));
  const deleteCardFunc = (id: any) => {
      deleteHandler.mutate(id);
  }
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <IconButton color="secondary" aria-label="delete" onClick={handleClickOpen}>
        <DeleteIcon fontSize="medium" />
        </IconButton>
      <Dialog maxWidth="md" open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Are you sure you wanna delete that card???</DialogTitle>
        <DialogContent>
        <Button onClick={() => handleClose()}>Cancel</Button>
        <Button onClick={() => deleteCardFunc(id)}>Delete</Button>
        </DialogContent>
      </Dialog>
    </div>
  );
}