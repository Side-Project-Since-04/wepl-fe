'use client';

import { SpendingHeader } from '@/src/widgets/spending/common/SpendingHeader';
import { Button } from '@ui/src/Button';
import { SubTitle2 } from '@ui/src/components/Text';
import { ConfirmDialog } from '@ui/src/Dialog';
import { Input } from '@ui/src/Input';
import { useToast } from '@ui/src/Toast';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';

const SmallCategoryEditPage = () => {
  const router = useRouter();
  const { toast } = useToast();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const categoryName = searchParams?.get('categoryName') || '';
  const [category, setCategory] = useState(categoryName);

  const prevPathname = pathname?.replace(/\/edit/, '') || '';

  const handleEdit = () => {
    toast({ variant: 'success', title: '카테고리 수정이 완료되었습니다!', duration: 1500 });
    // API

    router.replace(prevPathname);
  };

  const handleDelete = () => {
    toast({ variant: 'success', title: '카테고리 삭제가 완료되었습니다!', duration: 1500 });
    // API

    router.replace(prevPathname);
  };

  return (
    <main>
      <SpendingHeader disabled={!category} title="카테고리명 수정" text="수정" onClickText={handleEdit} />
      <div className="px-20 my-24">
        <div className="flex-1 pl-[16px] flex flex-col justify-end">
          <SubTitle2 className="text-gray-500 font-normal mb-8">
            카테고리명 <span className="text-destructive"> *</span>
          </SubTitle2>
          <Input
            className="bg-gray-50 pl-[14px] h-[50px]"
            defaultValue={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>
      </div>
      <div className="text-center">
        <ConfirmDialog
          onSubmit={handleDelete}
          title={`해당 카테고리 전체 내역을\n삭제하시겠습니까?`}
          subtitle="삭제후에는 복구가 불가능합니다."
          submitText="삭제"
        >
          <Button variant={'ghost'} className="text-gray-500 underline decoration-gray-500">
            카테고리 전체 삭제
          </Button>
        </ConfirmDialog>
      </div>
    </main>
  );
};

export default SmallCategoryEditPage;
