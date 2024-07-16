type TextProps = {
  children: React.ReactNode;
  className?: string;
};

export const TextBody1 = ({ children, className }: TextProps): JSX.Element => {
  return <div className={`text-body1 ${className}`}>{children}</div>;
};

export const TextBody2 = ({ children, className }: TextProps): JSX.Element => {
  return <div className={`text-body2 ${className}`}>{children}</div>;
};

export const SubTitle1 = ({ children, className }: TextProps): JSX.Element => {
  return <div className={`text-sub-title1 font-normal ${className}`}>{children}</div>;
};

export const SubTitle2 = ({ children, className }: TextProps): JSX.Element => {
  return <div className={`text-sub-title1 font-normal ${className}`}>{children}</div>;
};
