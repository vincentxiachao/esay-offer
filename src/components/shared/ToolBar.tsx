import { Box, Card, TextField } from '@mui/material';
import Button from '@mui/material/Button';
import SvgIcon from '@mui/material/SvgIcon';

export default function ToolBar({ buttonConfigs }: ToolBarProps) {
  return (
    <Box className='flex flex-row items-center justify-between'>
      <div>
        {buttonConfigs.map((item) => (
          <Button
            key={item.id}
            variant={item.variant}
            onClick={item.onClick}
            size={item.size}
            className={item.className}
            disabled={item.disabled}
          >
            {item.icon ? <SvgIcon>{item.icon}</SvgIcon> : null}
            {item.name}
          </Button>
        ))}
      </div>

      <TextField size='small' label='Search' variant='outlined' type='search' />
    </Box>
  );
}
export type ToolBarProps = {
  buttonConfigs: {
    id: string;
    name: string;
    label: string;
    variant?: 'contained' | 'outlined' | 'text';
    icon?: any;
    className?: string;
    disabled?: boolean;
    size?: 'small' | 'medium' | 'large';
    onClick?: () => any;
  }[];
};
// type Button = {
//   id: string;
//   name: string;
//   variant?: 'contained' | 'outlined' | 'text';
// };
