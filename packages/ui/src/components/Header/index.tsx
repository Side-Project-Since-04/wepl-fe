// src/Header.tsx
import React from 'react';

export interface HeaderProps {
  left?: React.ReactNode | React.JSX.Element;
  center?: React.ReactNode | React.JSX.Element;
  right?: React.ReactNode | React.JSX.Element;
  className?: string;
}

export const Header: React.FC<HeaderProps> = ({ left, center, right, ...props }) => {
  return (
    <header className={`flex justify-between items-center py-[15px] h-[56px] ${props.className}`}>
      <div className="w-1/3 flex justify-start items-center">{left || <div className="" />}</div>
      <div className="w-1/3 flex justify-center items-center text-sub-title1">{center || <div className="" />}</div>
      <div className="w-1/3 flex justify-end items-center">{right || <div className="" />}</div>
    </header>
  );
};
