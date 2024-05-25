import { ReactNode } from 'react';
import React from 'react';
export function Text({ title }: { title: string }): React.ReactElement {
  return <div>{title}</div>;
}
