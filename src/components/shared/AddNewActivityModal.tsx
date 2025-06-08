import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from '@mui/material';
import { forwardRef, useImperativeHandle, useRef, useState } from 'react';
import { AppDispatch } from '../../store';
import { useDispatch } from 'react-redux';
import { manageActivity } from '../../features/activityList/activityListSlice';

const AddNewActivityModal = forwardRef<{ handleOpen: () => void }>(
  (props, ref) => {
    const style = {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: 800,
      height: 600,
      bgcolor: 'background.paper',
      border: '2px solid #000',
      boxShadow: 24,
      p: 4,
    };
    const dispatch = useDispatch<AppDispatch>();
    const [open, setOpen] = useState(false);
    const formRef = useRef(null);
    useImperativeHandle(ref, () => ({ handleOpen: () => setOpen(true) }));
    const handleClose = () => {
      setOpen(false);
    };
    const handleOpen = () => {
      setOpen(true);
    };

    const handleSave = (formData: any) => {
      const title = formData.get('title');
      const date = formData.get('date');
      const time = formData.get('time');
      dispatch(
        manageActivity({
          type: 'add',
          newActivity: {
            id: Date.now().toString(),
            title: title,
            time: date + time,
          },
        })
      );
      handleClose();
    };
    return (
      <div>
        <Dialog open={open} disableEscapeKeyDown={false}>
          <DialogTitle>Add new activity</DialogTitle>
          <form action={handleSave} ref={formRef}>
            <DialogContent>
              <DialogContentText>
                To subscribe to this website, please enter your email address
                here. We will send updates occasionally.
              </DialogContentText>
              <TextField
                autoFocus
                required
                margin='dense'
                id='title'
                name='title'
                label='Activity title'
                type='text'
                fullWidth
                variant='standard'
              />
              <div className='flex flex-row w-full'>
                <TextField
                  className='max-w-20 !mr-3.5'
                  autoFocus
                  required
                  margin='dense'
                  id='time'
                  name='time'
                  type='time'
                  fullWidth
                  variant='standard'
                />
                <TextField
                  className='max-w-30'
                  autoFocus
                  required
                  margin='dense'
                  id='date'
                  name='date'
                  type='date'
                  fullWidth
                  placeholder='yyyy-mm-dd'
                  variant='standard'
                />
              </div>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button variant='contained' type='submit'>
                Save
              </Button>
            </DialogActions>
          </form>
        </Dialog>
      </div>
    );
  }
);

export default AddNewActivityModal;
