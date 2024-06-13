declare module '*.css' {
  const value: { [className: string]: string };
  export default value;
}

declare module '*.scss' {
  const value: { [className: string]: string };
  export default value;
}
