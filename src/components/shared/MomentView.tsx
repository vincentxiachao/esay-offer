import { IconButton, ImageListItem } from '@mui/material';
import ImageList from '@mui/material/ImageList';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { Iimage } from '../../interfaces/image';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from '@mui/material';
import { Suspense, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectMomentsList,
  toggleFavorite,
} from '../../features/moments/momentsListSlice';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { AppDispatch } from '../../store';
export function MomentView() {
  const images: Iimage[] = useSelector(selectMomentsList);
  const [openedItem, setOpenedItem] = useState({
    title: '',
    time: '',
    url: '',
  });
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const dispatch = useDispatch<AppDispatch>();
  function handleImageClick(item: Iimage) {
    setOpen(true);
    setOpenedItem({ title: item.title, time: item.time, url: item.url });
  }
  function handleToggleFavorite(item: Iimage) {
    const params = { id: item.id, isFavorite: !item.isFavorite };
    dispatch(toggleFavorite(params));
  }
  return (
    <>
      <ImageList cols={3}>
        {images.map((item: Iimage) => (
          <ImageListItem key={item.id} sx={{ cursor: 'pointer' }}>
            <img
              src={`${item.url}`}
              alt={item.title}
              loading='lazy'
              onClick={() => handleImageClick(item)}
            />
            <ImageListItemBar
              title={item.title}
              subtitle={item.time}
              actionIcon={
                <IconButton
                  sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                  aria-label={`info about ${item.title}`}
                  onClick={() => handleToggleFavorite(item)}
                >
                  {item.isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                </IconButton>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
      <Dialog
        open={open}
        onClose={handleClose}
        sx={{ width: '100vw', height: '100vh' }}
      >
        <DialogTitle title={openedItem.title}>{openedItem.title}</DialogTitle>
        <DialogContent>
          <img
            src={openedItem.url}
            alt='Full size view'
            style={{ width: '100%', height: 'auto' }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>关闭</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
