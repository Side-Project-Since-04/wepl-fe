// src/Header.tsx
import React from 'react';

interface HeaderProps {
  left?: React.ReactNode;
  center?: React.ReactNode;
  right?: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({ left, center, right }) => {
  return (
    <header className="flex justify-between items-center p-4 bg-gray-100 h-16">
      <div className="flex-1 flex justify-start items-center">{left || <div />}</div>
      <div className="flex-4 flex justify-center items-center">{center || <div />}</div>
      <div className="flex-1 flex justify-end items-center">{right || <div />}</div>
    </header>
  );
};

export default Header;
