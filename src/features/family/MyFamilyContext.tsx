import React from 'react';
import { createContext, useReducer } from 'react';

type FamilyMember = { id?: number; name: string; age: number };
type FamilyState = { familyMembers: FamilyMember[] };
type FamilyAction = {
  type: 'ADD_FAMILY_MEMBER' | 'DELETE_FAMILY_MEMBER' | 'UPDATE_FAMILY_MEMBER';
  payload: FamilyMember;
};
const createFamilyReducer = (state: FamilyState, action: FamilyAction) => {
  switch (action.type) {
    case 'ADD_FAMILY_MEMBER': {
      return {
        ...state,
        familyMembers: [...state.familyMembers, action.payload],
      };
    }
    case 'DELETE_FAMILY_MEMBER': {
      return {
        ...state,
        familyMembers: state.familyMembers.filter(
          (member) => member.id !== action.payload.id
        ),
      };
    }

    case 'UPDATE_FAMILY_MEMBER': {
      return {
        ...state,
        familyMembers: state.familyMembers.map((member) =>
          member.id === action.payload.id ? action.payload : member
        ),
      };
    }
    default: {
      return state;
    }
  }
};
const MyFamilyContext = createContext<{
  state: FamilyState;
  dispatch: React.Dispatch<FamilyAction>;
}>({
  state: { familyMembers: [] },
  dispatch: () => {},
});

export const MyFamilyProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const initialState = { familyMembers: [] };
  const [state, dispatch] = useReducer(createFamilyReducer, initialState);
  return (
    <MyFamilyContext.Provider value={{ state, dispatch }}>
      {children}
    </MyFamilyContext.Provider>
  );
};
export { MyFamilyContext };
