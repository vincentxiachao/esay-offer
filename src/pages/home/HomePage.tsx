import { Typography } from '@mui/material';
import { MomentView } from '../../components/shared/MomentView';
import { useDispatch } from 'react-redux';
import React from 'react';
import { getMomentsList } from '../../features/moments/momentsListSlice';
import { AppDispatch } from '../../store';

export function Home() {
  const dispatch: AppDispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getMomentsList());
  }, []);
  return (
    <>
      <Typography variant='h3'>Family moments</Typography>
      <MomentView />
    </>
  );
}
