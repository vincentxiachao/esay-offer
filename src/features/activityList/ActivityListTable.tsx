import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../store';
import { getActivityList, selectActivityList } from './activityListSlice';
import { useEffect } from 'react';
import { Paper } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useDebounce } from '../../utils/hooks/useDebounce';
export function ActivityListTable({
  handleSelectedRows,
}: ActivityListTableProps) {
  const dispatch: AppDispatch = useDispatch();
  const debounceFn = useDebounce(() => {
    dispatch(getActivityList());
  }, 0);
  useEffect(() => {
    debounceFn();
  }, []);
  const activityList = useSelector(selectActivityList);
  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 70, flex: 0 },
    { field: 'title', headerName: 'Title', width: 130, flex: 1 },
    { field: 'time', headerName: 'Time', width: 130, flex: 1 },
    {
      field: 'paticipants',
      headerName: 'Paticipants',
      description: 'Who is attending',
      sortable: false,
      flex: 1,
      width: 160,
      valueGetter: (value: string[], row) =>
        value.map((paticipant) => paticipant).join(', '), // Assuming each participant has firstName and lastName properties in the dat
    },
  ];
  const paginationModel = { page: 0, pageSize: 5 };
  return (
    <Paper sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={activityList}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        sx={{ border: 0 }}
      />
    </Paper>
  );
}
type ActivityListTableProps = {
  handleSelectedRows: (selectedRows: any[]) => void;
};
