import React, { useState } from 'react';
import {
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
  TextField,
  Box,
} from '@mui/material';

const steps = ['Role Selection', 'Basic Info', 'Set Password', 'Confirmation'];

export default function RegisterPage() {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const getStepContent = (step: number) => {
    switch (step) {
      case 1:
        return (
          <>
            <TextField
              label='用户名'
              name='username'
              value={formData.username}
              onChange={handleChange}
              fullWidth
              margin='normal'
            />
            <TextField
              label='邮箱'
              name='email'
              type='email'
              value={formData.email}
              onChange={handleChange}
              fullWidth
              margin='normal'
            />
          </>
        );
      case 2:
        return (
          <>
            <TextField
              label='密码'
              name='password'
              type='password'
              value={formData.password}
              onChange={handleChange}
              fullWidth
              margin='normal'
            />
            <TextField
              label='确认密码'
              name='confirmPassword'
              type='password'
              value={formData.confirmPassword}
              onChange={handleChange}
              fullWidth
              margin='normal'
            />
          </>
        );
      case 3:
        return (
          <Typography>
            用户名: {formData.username} <br />
            邮箱: {formData.email} <br />
            请确认以上信息是否正确。
          </Typography>
        );
      default:
        return '未知步骤';
    }
  };

  return (
    <main>
      <Typography variant='h4' gutterBottom>
        注册页面
      </Typography>
      <Stepper activeStep={activeStep}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Box sx={{ mt: 2 }}>
        {activeStep === steps.length ? (
          <Typography>Register Successfully！</Typography>
        ) : (
          <>
            {getStepContent(activeStep)}
            <Box className='flex justify-end !mt-2'>
              {activeStep > 0 && (
                <Button onClick={handleBack} sx={{ mr: 1 }}>
                  上一步
                </Button>
              )}
              <Button
                variant='contained'
                onClick={handleNext}
                disabled={activeStep === steps.length - 1}
              >
                {activeStep === steps.length - 1 ? 'Submit' : 'Next'}
              </Button>
            </Box>
          </>
        )}
      </Box>
    </main>
  );
}
