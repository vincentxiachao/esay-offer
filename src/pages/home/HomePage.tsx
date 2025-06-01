import { Typography } from '@mui/material';
import { MomentView } from '../../components/shared/MomentView';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getMomentsList } from '../../features/moments/momentsListSlice';
import { AppDispatch } from '../../store';

export function Home() {
  const dispatch: AppDispatch = useDispatch();
  useEffect(() => {
    dispatch(getMomentsList());
  }, []);
  return (
    <>
      <Typography variant='h3'>Family moments</Typography>
      <MomentView />
    </>
  );
}
