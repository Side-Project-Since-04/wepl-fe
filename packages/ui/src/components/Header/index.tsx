// src/Header.tsx
import React from 'react';

interface HeaderProps {
  left?: React.ReactNode;
  center?: React.ReactNode;
  right?: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({ left, center, right }) => {
  return (
    <div className="flex justify-between items-center py-[15px] h-[56px]">
      <div className="w-1/3 flex justify-start items-center">{left || <div className="" />}</div>
      <div className="w-1/3 flex justify-center items-center">{center || <div className="" />}</div>
      <div className="w-1/3 flex justify-end items-center">{right || <div className="" />}</div>
    </div>
  );
};

export default Header;
