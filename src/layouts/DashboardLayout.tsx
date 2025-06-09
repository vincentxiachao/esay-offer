import { AccountHeader } from '@features/account/components/AcountHeader';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { PageContainer } from '@toolpad/core/PageContainer';
import { Outlet } from 'react-router';
export default function Layout() {
  return (
    <DashboardLayout slots={{ toolbarAccount: AccountHeader }}>
      <PageContainer>
        <main className='h-full'>
          <Outlet />
        </main>
      </PageContainer>
    </DashboardLayout>
  );
}
