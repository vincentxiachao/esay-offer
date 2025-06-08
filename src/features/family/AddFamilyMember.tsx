import { useContext, useRef } from 'react';
import { MyFamilyContext } from './MyFamilyContext';
import { Box, Button } from '@mui/material';
import { Form } from 'react-router-dom';

export function AddFamilyMember() {
  const myFamilyContext = useContext(MyFamilyContext);
  const { dispatch } = myFamilyContext;
  const nameRef = useRef(null);
  const ageRef = useRef(null);
  const onSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch({
      type: 'ADD_FAMILY_MEMBER',
      payload: { name: nameRef.current.value, age: ageRef.current.value },
    });
  };
  return (
    <Box>
      <Form>
        <input type='text' name='name' ref={nameRef} required />
        <input type='number' name='age' ref={ageRef} required />

        <Button onClick={(e) => onSubmit}>Add Member</Button>
      </Form>
    </Box>
  );
}
