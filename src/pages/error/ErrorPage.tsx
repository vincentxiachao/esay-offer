import React from 'react';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { Box, Typography, IconButton, Paper } from '@mui/material';
import { useTheme } from '@mui/material/styles';

export function ErrorPage() {
  const theme = useTheme();
  return (
    <>
      {' '}
      <IconButton
        disabled
        sx={{
          backgroundColor: theme.palette.error.main,
          '& .MuiSvgIcon-root': { color: 'white', fontSize: '4rem' },
        }}
      >
        <ErrorOutlineIcon />
      </IconButton>
      <Typography variant='h3' component='h1' color='error.main'>
        出错啦！
      </Typography>
      <Typography variant='body1' align='center'>
        很抱歉，您访问的页面出现了错误。请稍后重试或联系管理员。
      </Typography>
    </>
  );
}
