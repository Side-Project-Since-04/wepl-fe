'use client';

import { useSuspenseGetClassifications } from '@/src/features/category/queries';
import type { ClassificationType } from '@/src/features/category/types';
import { DetailClassificationItem } from '../DetailClassificationItem';

export const DetailClassifications = () => {
  const { data } = useSuspenseGetClassifications();

  return (
    <div className="mt-32">
      {data.content.map((classification: ClassificationType) => (
        <DetailClassificationItem classification={classification} key={classification.name} />
      ))}
    </div>
  );
};
