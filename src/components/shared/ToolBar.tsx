import Button from '@mui/material/Button';
import SvgIcon from '@mui/material/SvgIcon';

export default function ToolBar({ buttonConfigs }: ToolBarProps) {
  return (
    <main>
      {buttonConfigs.map((item) => (
        <Button key={item.id} variant={item.variant} onClick={item.onClick}>
          <SvgIcon>{item.icon}</SvgIcon>
          {item.name}
        </Button>
      ))}
    </main>
  );
}
type ToolBarProps = {
  buttonConfigs: {
    id: string;
    name: string;
    label: string;
    variant?: 'contained' | 'outlined' | 'text';
    icon?: any;
    onClick?: () => any;
  }[];
};
type Button = {
  id: string;
  name: string;
  variant?: 'contained' | 'outlined' | 'text';
};
