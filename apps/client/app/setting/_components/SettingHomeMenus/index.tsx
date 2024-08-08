'use client';

import { SubTitle2 } from '@ui/src/components/Text';
import { Dialog } from '@ui/src/Dialog';
import Icon from '@ui/src/Icon';
import Link from 'next/link';

const MENUS_LINK = [
  {
    name: '결혼예정일 관리',
    link: '/setting/weddingInfo',
  },
  {
    name: '결혼 예산 관리',
    link: '/budget/list',
  },
  {
    name: '멤버 관리',
    link: '/setting/member',
  },
] as const;

export const SettingHomeMenus = () => {
  return (
    <>
      <div>
        {MENUS_LINK.map((menu) => (
          <Link href={menu.link} key={menu.name}>
            <div className="py-12 flex justify-between items-center">
              <SubTitle2>{menu.name}</SubTitle2>
              <Icon name="arrow-right" size={16} />
            </div>
          </Link>
        ))}
      </div>
      <Dialog
        onSubmit={() => {}}
        submitText="확인"
        submitType="confirm"
        subtitle={`탈퇴 후에는 입력된 정보가 모두 삭제되며\n복구가 불가능합니다.`}
        title="정말 탈퇴하시겠습니까?"
      >
        <button className="py-12 w-full flex justify-between items-center" type="button">
          <SubTitle2>탈퇴하기</SubTitle2>
          <Icon name="arrow-right" size={16} />
        </button>
      </Dialog>
    </>
  );
};
