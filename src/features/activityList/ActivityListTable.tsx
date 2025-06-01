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
    {
      field: 'id',
      headerName: 'ID',
      width: 70,
      flex: 0,
      sortComparator: (a, b) => {
        return parseInt(a) - parseInt(b);
      },
    },
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
        value ? value.map((paticipant) => paticipant).join(', ') : '',
    },
  ];
  const paginationModel = { page: 0, pageSize: 5 };
  return (
    <Paper className='h-full'>
      <DataGrid
        rows={activityList}
        columns={columns}
        onRowSelectionModelChange={(newRowSelectionModel) => {
          handleSelectedRows([...newRowSelectionModel.ids]);
        }}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10, 20]}
        checkboxSelection
        sx={{ border: 0 }}
      />
    </Paper>
  );
}
type ActivityListTableProps = {
  handleSelectedRows: (selectedRows: any[]) => void;
};
