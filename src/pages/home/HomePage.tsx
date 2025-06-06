import { Typography } from '@mui/material';
import { MomentView } from '../../components/shared/MomentView';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {
  getMomentsList,
  selectFavoriteListLength,
} from '../../features/moments/momentsListSlice';
import { AppDispatch } from '../../store';
import { favCounts } from '../../components/shared/MomentView';
export default function Home() {
  // const favCounts = useSelector(selectFavoriteListLength); // Assuming you have a selector to get the favorite count from the Redux store
  const dispatch: AppDispatch = useDispatch();
  useEffect(() => {
    dispatch(getMomentsList());
  }, []);
  return (
    <>
      <span>{favCounts}</span>
      <Typography variant='h3'>Family moments</Typography>
      <MomentView />
    </>
  );
}
