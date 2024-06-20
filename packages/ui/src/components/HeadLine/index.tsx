type HeadLineProps = {
  children: React.ReactNode;
  className?: string;
};

export const HeadLine5 = ({ children, ...props }: HeadLineProps): JSX.Element => {
  return <div className={`text-headline5 md:text-4xl ${props.className}`}>{children}</div>;
};

export const HeadLine3 = ({ children, ...props }: HeadLineProps): JSX.Element => {
  return <div className={`text-headline3 md:text-4xl ${props.className}`}>{children}</div>;
};
