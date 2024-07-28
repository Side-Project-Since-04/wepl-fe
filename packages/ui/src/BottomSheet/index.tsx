'use client';

import { useEffect } from 'react';
import { HeadLine6 } from '../components/HeadLine';
import Icon from '../Icon';

interface BottomSheetProps {
  isOpen: boolean;
  title: string;
  menus: React.ReactNode;
  onClose: () => void;
}

export const BottomSheet = ({ isOpen, title, menus, onClose }: BottomSheetProps) => {
  useEffect(() => {
    window.document.body.style.overflow = 'hidden';

    return () => {
      window.document.body.style.overflow = '';
    };
  }, []);

  return (
    isOpen && (
      <div className="bg-[#000]/40 fixed top-0 left-0 w-full min-h-screen">
        <div className="bg-neutral-white pb-40 absolute bottom-0 left-0 rounded-t-10 w-full">
          <div className="py-20 px-24 border-b-[1px] border-gray-100 flex justify-between items-center">
            <HeadLine6>{title}</HeadLine6>
            <button onClick={onClose}>
              <Icon name="close" size={24} />
            </button>
          </div>
          {menus && menus}
        </div>
      </div>
    )
  );
};

export default BottomSheet;
