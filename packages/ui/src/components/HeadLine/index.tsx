type HeadLineProps = {
  children: React.ReactNode;
  className?: string;
};

export const HeadLine6 = ({ children, ...props }: HeadLineProps): JSX.Element => {
  return <div className={`text-headline6 ${props.className}`}>{children}</div>;
};

export const HeadLine5 = ({ children, ...props }: HeadLineProps): JSX.Element => {
  return <div className={`text-headline5 ${props.className}`}>{children}</div>;
};

export const HeadLine4 = ({ children, ...props }: HeadLineProps): JSX.Element => {
  return <div className={`text-headline4 ${props.className}`}>{children}</div>;
};

export const HeadLine3 = ({ children, ...props }: HeadLineProps): JSX.Element => {
  return <div className={`text-headline3 ${props.className}`}>{children}</div>;
};
