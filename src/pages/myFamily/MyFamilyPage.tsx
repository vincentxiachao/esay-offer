import { MyFamilyProvider } from '@features/family/MyFamilyContext';
import { AddFamilyMember } from '@features/family/AddFamilyMember';
import { FamilyMemberList } from '@features/family/FamilyMemberList';
export default function MyFamilyPage() {
  return (
    <MyFamilyProvider>
      <FamilyMemberList />
      <AddFamilyMember />
    </MyFamilyProvider>
  );
}
