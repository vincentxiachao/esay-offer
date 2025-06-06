import { Box, TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../../store';
import {
  checkDuplicateRegisterInfo,
  fillBasicInfo,
  selectBasicInfo,
  selectDuplicateBasicInfo,
} from '../registerSlice';
import { usePreventDefault } from '../../../utils/hooks/usePreventDefault';

export const RegisterBasicInfo = () => {
  useEffect(() => {
    setInvalidEmail(!validateEmail(email));
  }, []);
  const username = useSelector(selectBasicInfo).username;
  const email = useSelector(selectBasicInfo).email;
  const isDuplicateUsername = useSelector(selectDuplicateBasicInfo);
  const [invalidEmail, setInvalidEmail] = useState(false);
  const [emailTouched, setEmailTouched] = useState(false);
  const [usernameTouched, setUsernameTouched] = useState(false);
  const basicInfo = useSelector(selectBasicInfo);
  const dispatch = useDispatch<AppDispatch>();

  const onUserNameChange = usePreventDefault(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      dispatch(fillBasicInfo({ ...basicInfo, username: e.target.value }));
    }
  );
  const onEmailChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    e.preventDefault();
    e.stopPropagation();
    setEmailTouched(true);
    setInvalidEmail(!validateEmail(e.target.value));
    dispatch(fillBasicInfo({ ...basicInfo, email: e.target.value }));
  };

  const { t } = useTranslation();
  const onUsernameBlur = () => {
    setUsernameTouched(true);
    dispatch(checkDuplicateRegisterInfo());
  };
  const onEmailBlur = () => {
    setEmailTouched(true);
    setInvalidEmail(!validateEmail(email));
    dispatch(checkDuplicateRegisterInfo());
  };
  function validateEmail(email: string) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  }
  return (
    <>
      <main className='flex h-full flex-col content-center justify-center'>
        <Box className='flex flex-cols'>
          <TextField
            label={t('username')}
            name='username'
            className='mb-4 w-1/2'
            value={username}
            onChange={(e) => onUserNameChange(e)}
            onBlur={() => onUsernameBlur()}
            margin='normal'
            variant='standard'
            required
            error={(isDuplicateUsername || username === '') && usernameTouched}
            helperText={isDuplicateUsername ? t('duplicateUsername') : ''}
          />
        </Box>

        <TextField
          label='E-mail'
          className='mb-4 w-1/2'
          name='email'
          type='email'
          value={email}
          onChange={(e) => onEmailChange(e)}
          onBlur={() => onEmailBlur()}
          margin='normal'
          required
          variant='standard'
          error={invalidEmail && emailTouched}
        />
      </main>
    </>
  );
};
