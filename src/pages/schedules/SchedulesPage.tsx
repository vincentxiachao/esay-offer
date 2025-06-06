import Card from '@mui/material/Card';
import ToolBar, { ToolBarProps } from '../../components/shared/ToolBar';
import { ActivityListTable } from '../../features/activityList/ActivityListTable';
import { useEffect, useRef, useState } from 'react';
import { Checkbox, FormControlLabel, FormGroup, Switch } from '@mui/material';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store';
import { manageActivity } from '../../features/activityList/activityListSlice';
import AddNewActivityModal from '../../components/shared/AddNewActivityModal';
export function SchedulesPage() {
  const [selectedActivityIds, setSelectedActivityIds] = useState<string[]>([]); // [selectedRw, setSelectedRw] = useState<number[]>([]

  const dispatch = useDispatch<AppDispatch>();
  const dialogRef = useRef<AddNewActivityModalRef | null>(null);
  const handleAddNewActivity = () => {
    if (dialogRef.current) {
      dialogRef.current.handleOpen();
    }
  };
  const buttons = [
    {
      id: 'delete',
      label: 'Delete',
      name: 'Delete',
      variant: 'text',
      size: 'small',
      className: '!mr-2',
      disabled: selectedActivityIds.length === 0,
      onClick: () => {
        dispatch(
          manageActivity({
            type: 'delete',
            selectedIds: selectedActivityIds,
          })
        );
      },
    },
    {
      id: 'edit',
      name: 'Edit',
      label: 'Edit',
      variant: 'text',
      size: 'small',
      className: '!mr-2',
      disabled: selectedActivityIds.length !== 1,
      onClick: () => console.log('Edit clicked'),
    },
    {
      id: 'add',
      name: 'Add',
      className: '!mr-2',
      label: 'Add',
      variant: 'text',
      size: 'small',
      onClick: () => handleAddNewActivity(),
    },
  ];

  return (
    <main>
      <ToolBar buttonConfigs={buttons} />
      <ActivityListTable handleSelectedRows={setSelectedActivityIds} />
      <AddNewActivityModal ref={dialogRef} />
    </main>
  );
}
interface AddNewActivityModalRef {
  handleOpen: () => void;
}
