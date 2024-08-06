'use client';

import { SubTitle2, TextBody2 } from '@ui/src/components/Text';
import Image from 'next/image';
import type { DialogProps } from '@ui/src/Dialog';
import { Dialog } from '@ui/src/Dialog';
import { useState } from 'react';
import BackHeader from '@/src/shared/components/BackHeader';
import { WeplButton } from '@/src/shared/components/Button/WeplButton';
import { classNames, cn } from '@/src/shared/ui/utils';

const SettingMemberPage = () => {
  return (
    <main>
      <BackHeader center="멤버 관리" className="border-b-[1px] border-gray-100" />

      <section className="mt-32 flex flex-col items-center">
        <Image alt="커플" height={68} src="/setting/couple.png" width={120} />
        <TextBody2 className="mt-16 text-gray-500 text-center leading-22">
          예비부부가 함께 결혼을 준비할 수 있어요.
          <br />
          짝꿍과 함께 결혼 일정과 예산을 관리해보세요.
        </TextBody2>
      </section>

      <section className={`my-32 ${classNames.pagePadding}`}>
        <div className="bg-gray-50 h-62 p-16 flex justify-between items-center">
          <SubTitle2>홍길동</SubTitle2>
          <WeplButton className="bg-primary-400 hover:bg-primary-600 py-4 px-10 h-30 text-neutral-white" size="sm">
            이름변경
          </WeplButton>
        </div>
        <div className="mt-12 h-62 p-16 bg-gray-50 flex justify-between items-center">
          <SubTitle2>{false ? <span>홍길동 짝꿍</span> : <span className="text-gray-400">짝꿍</span>}</SubTitle2>

          {false ? (
            <WeplButton className="py-4 px-10 h-30 bg-primary-400 hover:bg-primary-600 text-neutral-white" size="sm">
              초대하기
            </WeplButton>
          ) : (
            <Dialog
              onSubmit={() => {}}
              submitText="확인"
              submitType="confirm"
              subtitle={`기존에 입력된 정보는 모든 멤버가\n확인할 수 있으나 더 이상 동기화되지 않습니다`}
              title="$홍길동 짝꿍$과 연결이 끊어집니다."
            >
              <WeplButton
                className="py-4 px-10 h-30 bg-gray-50 hover:bg-gray-100 border-[1px] border-gray-200 text-gray-400"
                size="sm"
              >
                연결끊기
              </WeplButton>
            </Dialog>
          )}
        </div>
      </section>
    </main>
  );
};

export default SettingMemberPage;
