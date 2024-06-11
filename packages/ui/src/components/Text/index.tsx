type TextProps = {
  children: React.ReactNode;
  className?: string;
};

export const TextBody1 = ({ children, className }: TextProps): JSX.Element => {
  return <div className={`text-body1 text-gray-500 ${className}`}>{children}</div>;
};

export const TextBody2 = ({ children, className }: TextProps): JSX.Element => {
  return <div className={`text-body2 text-gray-500 ${className}`}>{children}</div>;
};
