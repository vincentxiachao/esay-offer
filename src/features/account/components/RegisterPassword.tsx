import { TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import {
  fillPassword,
  fillConfirmPassword,
  selectPassword,
  selectConfirmPassword,
} from '../registerSlice';
import { AppDispatch } from '../../../store';

export const RegisterPassword = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch<AppDispatch>();
  const password = useSelector(selectPassword);
  const confirmPassword = useSelector(selectConfirmPassword);
  const [invalidPassword, setInvalidPassword] = useState(false);
  const [notMatch, setNotMatch] = useState(false);
  const handleFillPassword = (password: string) => {
    dispatch(fillPassword({ password }));
  };
  const handleFillConfirmPassword = (confirmPassword: string) => {
    dispatch(fillConfirmPassword({ confirmPassword }));
  };
  useEffect(() => {
    setInvalidPassword(!!password && password.length < 8);
    setNotMatch(password !== confirmPassword);
  }, [password, confirmPassword]);

  return (
    <>
      <main className='flex h-full flex-col content-center justify-center'>
        <TextField
          label={t('password')}
          name='password'
          type='password'
          value={password}
          onChange={(e) => handleFillPassword(e.target.value)}
          className='mb-4 w-1/2'
          margin='normal'
          error={invalidPassword}
          helperText={
            invalidPassword ? 'Password must be at least 8 characters' : ''
          }
        />
        <TextField
          label={t('confirmPassword')}
          name='confirmPassword'
          type='password'
          value={confirmPassword}
          onChange={(e) => handleFillConfirmPassword(e.target.value)}
          className='mb-4 w-1/2'
          margin='normal'
          error={notMatch}
          helperText={notMatch ? 'Passwords do not match' : ''}
        />
      </main>
    </>
  );
};
