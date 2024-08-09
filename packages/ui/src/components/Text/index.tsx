interface TextProps {
  children: React.ReactNode;
  className?: string;
}

export function TextBody1({ children, className }: TextProps): JSX.Element {
  return <div className={`text-body1 ${className}`}>{children}</div>;
}

export function TextBody2({ children, className }: TextProps): JSX.Element {
  return <div className={`text-body2 ${className}`}>{children}</div>;
}

export function SubTitle1({ children, className }: TextProps): JSX.Element {
  return <div className={`text-sub-title1 ${className}`}>{children}</div>;
}

export function SubTitle2({ children, className }: TextProps): JSX.Element {
  return <div className={`text-sub-title2 ${className}`}>{children}</div>;
}

export function SubTitle3({ children, className }: TextProps): JSX.Element {
  return <div className={`text-sub-title3 ${className}`}>{children}</div>;
}
