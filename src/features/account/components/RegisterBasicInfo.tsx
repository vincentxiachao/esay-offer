import { Box, IconButton, SvgIcon, TextField, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../../store';
import { fillBasicInfo, selectBasicInfo } from '../registerSlice';

export const RegisterBasicInfo = () => {
  useEffect(() => {
    setInvalidEmail(!validateEmail(email));
    console.log(validateEmail(email));
  }, []);
  const username = useSelector(selectBasicInfo).username;
  const email = useSelector(selectBasicInfo).email;
  const [nickName, setNickName] = useState('');
  const [invalidEmail, setInvalidEmail] = useState(false);
  const [emailTouched, setEmailTouched] = useState(false);
  const basicInfo = useSelector(selectBasicInfo);
  const dispatch = useDispatch<AppDispatch>();

  const onUserNameChange = (val: string) => {
    dispatch(fillBasicInfo({ ...basicInfo, username: val }));
  };
  const onEmailChange = (val: string) => {
    setEmailTouched(true);
    setInvalidEmail(!validateEmail(val));
    dispatch(fillBasicInfo({ ...basicInfo, email: val }));
  };

  const { t } = useTranslation();

  function validateEmail(email: string) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  }
  return (
    <>
      <main className='flex h-full flex-col content-center justify-center'>
        <TextField
          label={t('username')}
          name='username'
          className='mb-4 w-1/2'
          value={username}
          onChange={(e) => onUserNameChange(e.target.value)}
          margin='normal'
          variant='standard'
        />
        <TextField
          label='E-mail'
          className='mb-4 w-1/2'
          name='email'
          type='email'
          value={email}
          onChange={(e) => onEmailChange(e.target.value)}
          onBlur={(e) => setEmailTouched(true)}
          margin='normal'
          variant='standard'
          error={invalidEmail && emailTouched}
        />
      </main>
    </>
  );
};
