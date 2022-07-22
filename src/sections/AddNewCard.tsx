import {useState} from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { PDCard } from 'src/utils/types';
import { useMutation, useQueryClient } from 'react-query';
import { addNewCardMutation } from 'src/utils/api/fetchServices';
import { useFormik } from 'formik';

import TextField from '@material-ui/core/TextField';
import { SizedBox } from 'src/components/sizebox';

export default function AddNewCardForm() {
  const [open, setOpen] = useState(false);
  const addNewCardObj: PDCard = {
    id: "",
    title: "",
    description: "",
    imagePath: "",
  };

  const initialValues: PDCard = addNewCardObj;

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const queryClient = useQueryClient();

  const addNewCardHandler = useMutation((newCard: PDCard) => addNewCardMutation(newCard), {
    onSuccess: () => {
      queryClient.invalidateQueries(["cards"]);
    }
  });

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: (values: PDCard) => {
      setTimeout(() => {
        addNewCardHandler.mutate(values);
      }, 500);
      handleClose();
    },
  });

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Add New Card
      </Button>
      <Dialog maxWidth="md" open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Add new Card here:</DialogTitle>
        <DialogContent>
          <form onSubmit={formik.handleSubmit}>
              <TextField
                fullWidth
                id="title"
                name="title"
                label="Title"
                type="text"
                value={formik.values.title}
                onChange={formik.handleChange}
              />
              <SizedBox height={20} />
              <TextField
                fullWidth
                id="description"
                name="description"
                label="Description"
                type="text"
                value={formik.values.description}
                onChange={formik.handleChange}
              />
              <TextField
                fullWidth
                id="imagePath"
                name="imagePath"
                label="Image url:"
                type="text"
                value={formik.values.imagePath}
                onChange={formik.handleChange}
              />
              <SizedBox height={20} />
              <Button color="primary" variant="contained" type="submit">Submit new Card</Button>
              <SizedBox height={20} />
            </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}