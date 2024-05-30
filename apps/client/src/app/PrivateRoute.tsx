import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';

const withAuth = (Component: React.FC) => {
  const { status } = useSession();

  if (status === 'unauthenticated') {
    // redirect to login page
    redirect('/');
  } else {
    return (props: any) => {
      return <Component {...props} />;
    };
  }
};
export default withAuth;
