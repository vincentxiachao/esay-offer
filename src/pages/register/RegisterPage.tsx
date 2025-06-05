import React, { useEffect, useState } from 'react';
import {
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
  TextField,
  Box,
} from '@mui/material';
import { RegisterRoleSelection } from '../../features/account/components/RegisterRoleSelection';
import { useDispatch, useSelector } from 'react-redux';
import {
  registerNewUser,
  selectAllRrequiredBasicInfoFilled,
  selectIsPasswordValid,
  selectIsRoleSelected,
} from '../../features/account/registerSlice';
import { RegisterBasicInfo } from '../../features/account/components/RegisterBasicInfo';
import { RegisterPassword } from '../../features/account/components/RegisterPassword';
import { RegisterConfirm } from '../../features/account/components/RegisterConfirm';
import { useDebounce } from '../../utils/hooks/useDebounce';
import { AppDispatch } from '../../store';

const steps = ['Role Selection', 'Basic Info', 'Set Password', 'Confirmation'];
export default function RegisterPage() {
  const isRoleSelected: boolean = useSelector(selectIsRoleSelected);
  const isBasicInfoFilled = useSelector(selectAllRrequiredBasicInfoFilled);
  const isPasswordFilled = useSelector(selectIsPasswordValid);
  const [disableNext, setDisableNext] = useState(true);
  const [activeStep, setActiveStep] = useState(0);
  const dispatch = useDispatch<AppDispatch>();
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const handleSubmit = () => {
    dispatch(registerNewUser());
  };

  const debounceSubmit = useDebounce(handleSubmit, 500);
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const getStepTitle = (step: number) => {
    switch (step) {
      case 0:
        return 'Tell us about yourself ';
      case 1:
        return 'More information about yourself';
      case 2:
        return 'Set Password';
      case 3:
        return 'Confirmation';
      default:
        return 'Unknown step';
    }
  };

  const getStepContent = (step: number) => {
    switch (step) {
      case 0:
        return <RegisterRoleSelection />;
      case 1:
        return <RegisterBasicInfo />;
      case 2:
        return <RegisterPassword />;
      case 3:
        return <RegisterConfirm />;
      default:
        return '未知步骤';
    }
  };
  useEffect(() => {
    if (
      (isRoleSelected && activeStep === 0) ||
      (isBasicInfoFilled && activeStep === 1) ||
      (isPasswordFilled && activeStep === 2) ||
      activeStep === 3
    ) {
      setDisableNext(false);
    } else {
      setDisableNext(true);
    }
  }, [isRoleSelected, isBasicInfoFilled, isPasswordFilled, activeStep]);
  return (
    <main className='flex h-8/12 flex-col'>
      <Typography variant='h2' className='mb-4 flex items-end justify-between'>
        {getStepTitle(activeStep)}
      </Typography>
      <Box className='!mb-2 flex-1 flex flex-col'>
        {activeStep === steps.length ? (
          <Typography>Register Successfully!</Typography>
        ) : (
          <>
            {getStepContent(activeStep)}
            <Stepper activeStep={activeStep}>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
            <Box className='flex justify-end !mt-2 flex-0'>
              {activeStep > 0 && (
                <Button onClick={handleBack} sx={{ mr: 1 }}>
                  Previous
                </Button>
              )}
              <Button
                variant='contained'
                onClick={activeStep === 3 ? handleSubmit : handleNext}
                disabled={disableNext}
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
