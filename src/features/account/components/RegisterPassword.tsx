import { Box, IconButton, SvgIcon, TextField, Typography } from '@mui/material';
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
import { computed, signal, useSignal } from '@preact/signals-react';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

export const RegisterPassword = () => {
  const confirmPasswordVisible = useSignal(false);
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
  const getConfirmPasswordVisibleIcon = computed(() => {
    return confirmPasswordVisible.value ? (
      <VisibilityIcon />
    ) : (
      <VisibilityOffIcon />
    );
  });
  useEffect(() => {
    setInvalidPassword(!!password && password.length < 8);
    setNotMatch(password !== confirmPassword);
  }, [password, confirmPassword]);
  const [passwordVisible, setPasswordVisible] = useState(false); // State to track password visibility
  // const handConfirmPasswordVisible = (e) => {
  //   e.preventDefault();
  //   console.log('old' + confirmPasswordVisible.value);
  //   confirmPasswordVisible.value = !confirmPasswordVisible.value;
  //   console.log('new' + confirmPasswordVisible.value);
  // };

  const toggleConfirmPasswordVisible = () => {
    confirmPasswordVisible.value = !confirmPasswordVisible.value;
    console.log('new' + confirmPasswordVisible.value);
  };
  return (
    <>
      <h1>{confirmPasswordVisible.value}</h1>
      <main className='flex h-full flex-col content-center justify-center'>
        <Box className='flex flex-row items-center'>
          <TextField
            label={t('password')}
            name='password'
            type={passwordVisible ? 'text' : 'password'}
            value={password}
            onChange={(e) => handleFillPassword(e.target.value)}
            className='mb-4 w-1/2'
            margin='normal'
            error={invalidPassword}
            variant='standard'
            helperText={
              invalidPassword ? 'Password must be at least 8 characters' : ''
            }
          />
          <SvgIcon
            sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
            className='cursor-pointer'
            aria-label={`password visibility, ${passwordVisible ? 'hide password' : 'show password'}`}
            onClick={() => setPasswordVisible(!passwordVisible)}
          >
            {passwordVisible ? <VisibilityOffIcon /> : <VisibilityIcon />}
          </SvgIcon>
        </Box>
        <Box className='flex flex-row items-center'>
          <TextField
            label={t('confirmPassword')}
            name='confirmPassword'
            type='password'
            value={confirmPassword}
            onChange={(e) => handleFillConfirmPassword(e.target.value)}
            className='mb-4 w-1/2'
            margin='normal'
            variant='standard'
            error={notMatch}
            helperText={notMatch ? 'Passwords do not match' : ''}
          />
        </Box>
      </main>
      <span onClick={toggleConfirmPasswordVisible}>
        {getConfirmPasswordVisibleIcon.value}
      </span>
    </>
  );
};
