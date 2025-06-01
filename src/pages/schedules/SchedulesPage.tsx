import Card from '@mui/material/Card';
import ToolBar from '../../components/shared/ToolBar';
import { ActivityListTable } from '../../features/activityList/ActivityListTable';
import { useEffect, useRef, useState } from 'react';
import { Checkbox, FormControlLabel, FormGroup, Switch } from '@mui/material';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store';
import { manageActivity } from '../../features/activityList/activityListSlice';
import AddNewActivityModal from '../../components/shared/AddNewActivityModal';
export function SchedulesPage() {
  const [selectedActivityIds, setSelectedActivityIds] = useState<string[]>([]); // [selectedRw, setSelectedRw] = useState<number[]>([]
  const [openAddModal, setOpenAddModal] = useState(false);
  useEffect(() => {
    console.log(selectedActivityIds); // console.log(selectedRw)
  }, [selectedActivityIds]);
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
      onClick: () => console.log('Edit clicked'),
    },
    {
      id: 'add',
      name: 'Add',
      label: 'Add',
      onClick: () => handleAddNewActivity(),
    },
  ];

  return (
    <main>
      <ToolBar buttonConfigs={buttons} />
      <ActivityListTable handleSelectedRows={setSelectedActivityIds} />
      {/* <FormControlLabel
        labelPlacement={'start'}
        control={<Switch />}
        label='Show my activities only'
      />
      <Card>
        <FormGroup>
          <FormControlLabel control={<Checkbox />} label='Monday' />
          <FormControlLabel control={<Checkbox />} label='Tuesday' />
          <FormControlLabel control={<Checkbox />} label='Wednesday' />
          <FormControlLabel control={<Checkbox />} label='Thursday' />
          <FormControlLabel control={<Checkbox />} label='Friday' />
        </FormGroup>
      </Card> */}
      <AddNewActivityModal ref={dialogRef} />
    </main>
  );
}
interface AddNewActivityModalRef {
  handleOpen: () => void;
}
