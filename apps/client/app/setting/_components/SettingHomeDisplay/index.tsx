import { SubTitle2, TextBody2 } from '@ui/src/components/Text';
import Image from 'next/image';
import { cn } from '@/src/shared/ui/utils';
import { WeplButton } from '@/src/shared/components/Button/WeplButton';

export const SettingHomeDisplay = () => {
  return (
    <>
      <div className="bg-gray-50 p-16">
        <TextBody2 className="text-gray-500 text-13">웨플에서 결혼 준비와 관리까지</TextBody2>
        {false ? (
          <SubTitle2 className="mt-4">결혼식 미정</SubTitle2>
        ) : (
          <SubTitle2 className="mt-4">
            결혼까지 <span className="text-auxiliary-red">D-365</span> 남았습니다.
          </SubTitle2>
        )}
      </div>

      <div className="bg-gray-50 mt-12 p-16 flex justify-between items-center">
        <span className="flex items-center gap-4">
          <SubTitle2>홍길동</SubTitle2>
          <Image alt="하트" height={20} src="/setting/heart.png" width={20} />
          <SubTitle2>{true ? <span>홍길동</span> : <span className="text-gray-400">짝꿍</span>}</SubTitle2>
        </span>
        <span>
          <WeplButton
            className={cn(
              'bg-primary-400 hover:bg-primary-500 px-10 py-4 rounded-6 h-30 text-button-md text-neutral-white',
              {
                'bg-gray-200 hover:bg-gray-200': false, // disabled
              },
            )}
            size="sm"
          >
            초대하기
          </WeplButton>
        </span>
      </div>
    </>
  );
};
