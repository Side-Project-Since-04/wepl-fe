'use client';

import { useSuspenseGetClassifications } from '@/src/features/category/queries';
import { DetailClassificationItem } from '../DetailClassificationItem';
import { ClassificationType } from '@/src/features/category/types';

export const DetailClassifications = () => {
  const { data } = useSuspenseGetClassifications();

  return (
    <div className="mt-32">
      {data.content.map((classification: ClassificationType) => (
        <DetailClassificationItem key={classification.name} classification={classification} />
      ))}
    </div>
  );
};
