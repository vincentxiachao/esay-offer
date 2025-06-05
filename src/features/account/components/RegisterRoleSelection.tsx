import { Card, Typography, SvgIcon } from '@mui/material';
import SupervisorAccountOutlinedIcon from '@mui/icons-material/SupervisorAccountOutlined';
import ChildCareOutlinedIcon from '@mui/icons-material/ChildCareOutlined';
import RealEstateAgentOutlinedIcon from '@mui/icons-material/RealEstateAgentOutlined';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../../store';
import { selectRole } from '../registerSlice';
import { selectSelectedRole } from '../registerSlice';
export const RegisterRoleSelection = () => {
  const cards = [
    { role: 'Parent', icon: SupervisorAccountOutlinedIcon },
    { role: 'Child', icon: ChildCareOutlinedIcon },
    { role: 'Organizer', icon: RealEstateAgentOutlinedIcon },
  ];
  const selectedRole = useSelector(selectSelectedRole);
  const dispatch = useDispatch<AppDispatch>();
  const handleSelectRole = (role: string) => {
    dispatch(selectRole(role));
  };
  return (
    <>
      <main className='flex-1 flex flex-row items-center justify-between'>
        {cards.map((card, index) => (
          <Card
            key={card.role}
            onClick={() => {
              handleSelectRole(card.role);
            }}
            className={`w-70 p-6 flex items-center border-b-6 justify-center flex-col cursor-pointer hover:border-b-amber-600 ${card.role === selectedRole ? 'border-b-amber-600' : ''}`}
          >
            <div className='rounded-full border-2 h-16 w-16  flex items-center justify-center'>
              <SvgIcon component={card.icon} fontSize='large' />
            </div>
            <Typography variant='h5' className='mb-4'>
              {card.role}
            </Typography>
          </Card>
        ))}
      </main>
    </>
  );
};
