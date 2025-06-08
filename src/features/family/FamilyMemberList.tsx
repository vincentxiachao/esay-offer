import { useContext } from 'react';
import { MyFamilyContext } from './MyFamilyContext';
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from '@mui/material';

export const FamilyMemberList = () => {
  const familyContext = useContext(MyFamilyContext);
  if (!familyContext) {
    throw new Error('familyContext not found');
  }
  const { state: members } = familyContext;
  return (
    <Box className='min-h-5/6'>
      <div className='grid grid-cols-3 gap-2'>
        {members.familyMembers.map((member) => (
          <Card key={member.id} className='w-2xs '>
            <CardActionArea>
              <CardContent sx={{ height: '100%' }}>
                <Typography variant='h5' component='div'>
                  {member.name}
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                  {member.age} years old
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </div>
    </Box>
  );
};
