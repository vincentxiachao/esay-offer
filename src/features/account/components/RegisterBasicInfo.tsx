import { TextField, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../../store';
import { fillBasicInfo, selectBasicInfo } from '../registerSlice';

export const RegisterBasicInfo = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [nickName, setNickName] = useState('');
  const [invalidEmail, setInvalidEmail] = useState(false); // [invalidEmail, setInvalidEmail] = useState(false) [invalidEmail, setInvalidEmail] = useState(false) [invalidEmail, setInvalidEmail]
  const [emailTouched, setEmailTouched] = useState(false);
  const basicInfo = useSelector(selectBasicInfo);
  const dispatch = useDispatch<AppDispatch>();
  const handleRequiredFullFilled = () => {
    dispatch(fillBasicInfo({ username, email, nickName }));
  };
  useEffect(() => {
    if (username && email && !invalidEmail) {
      handleRequiredFullFilled();
    }
  }, [username, email, invalidEmail]);

  useEffect(() => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const invalid = !emailRegex.test(email);
    setInvalidEmail(invalid);
  }, [email]);
  const { t } = useTranslation();
  return (
    <>
      <main className='flex h-full flex-col content-center justify-center'>
        <TextField
          label={t('username')}
          name='username'
          className='mb-4 w-1/2'
          value={basicInfo.username}
          onChange={(e) => setUsername(e.target.value)}
          margin='normal'
          required={true}
          variant='standard'
        />
        <TextField
          label='E-mail'
          className='mb-4 w-1/2'
          name='email'
          type='email'
          value={basicInfo.email}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={(e) => setEmailTouched(true)}
          margin='normal'
          variant='standard'
          required={true}
          error={invalidEmail && emailTouched}
        />
      </main>
    </>
  );
};
