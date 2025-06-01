import React, { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // 这里可以添加登录逻辑，例如调用 API
    console.log('登录信息:', { username, password });
  };
  const { t } = useTranslation();
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      }}
    >
      <Typography variant='h4' gutterBottom>
        登录
      </Typography>
      <TextField
        label={`${t('username')}`}
        variant='outlined'
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        margin='normal'
      />
      <TextField
        label='密码'
        variant='outlined'
        type='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        margin='normal'
      />
      <Button
        variant='contained'
        color='primary'
        onClick={handleLogin}
        sx={{ mt: 2 }}
      >
        登录
      </Button>
    </Box>
  );
}
