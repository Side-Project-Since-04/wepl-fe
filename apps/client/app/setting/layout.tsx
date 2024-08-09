import AsyncBoundary from '@/src/shared/components/AsyncBoundary';
import LoadingAnimation from '@/src/shared/components/Loading';

const SettingLayout = ({ children }: { children: React.ReactNode }) => {
  return <AsyncBoundary SuspenseFallback={<LoadingAnimation />}>{children}</AsyncBoundary>;
};
export default SettingLayout;
