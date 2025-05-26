import Card from '@mui/material/Card';
import ToolBar from '../../components/shared/ToolBar';
import { ActivityListTable } from '../../features/activityList/ActivityListTable';
import { useEffect, useState } from 'react';
import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  Switch,
  TextField,
} from '@mui/material';
export function SchedulesPage() {
  const [selectedActivityIds, setSelectedActivityIds] = useState<number[]>([]); // [selectedRw, setSelectedRw] = useState<number[]>([]
  useEffect(() => {
    console.log(selectedActivityIds); // console.log(selectedRw)
  }, [selectedActivityIds]);
  const buttons = [
    {
      id: 'delete',
      label: 'Delete',
      name: 'Delete',
      onClick: () => console.log('Delete clicked'),
    },
    {
      id: 'edit',
      name: 'Edit',
      label: 'Edit',
      onClick: () => console.log('Edit clicked'),
    },
    {
      id: 'add',
      name: 'Add',
      label: 'Add',
      onClick: () => console.log('Add clicked'),
    },
  ];
  return (
    <main>
      <ToolBar buttonConfigs={buttons} />
      <ActivityListTable handleSelectedRows={setSelectedActivityIds} />
      <FormControlLabel
        labelPlacement={'start'}
        control={<Switch />}
        label='Show my activities only'
      />
    </main>
  );
}
