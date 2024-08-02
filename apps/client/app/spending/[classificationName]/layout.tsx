// app/layout.tsx
import { redirect } from 'next/navigation';
import AsyncBoundary from '@/src/shared/components/AsyncBoundary';
import LoadingAnimation from '@/src/shared/components/Loading';
import { CLASSIFICATION_NAME_GUIDES } from '@/src/features/category/constants';

 const Layout = ({
  params,
  children,
} : {
  params: { classificationName: string };
  children: React.ReactNode;
})  => {

  const categoryName = CLASSIFICATION_NAME_GUIDES[params.classificationName.toUpperCase()] ;
  if (!categoryName) redirect('/home');

  return (
    <AsyncBoundary SuspenseFallback={<LoadingAnimation />}>{children}</AsyncBoundary>
  );
}
export default Layout