interface colorProps {
  color: string;
  onClick: () => void;
}

// By this approach you can not directly receive children
// to getting this need to pass children inside interface, ant give some type right there
export const Child = ({ color, onClick }: colorProps) => {
  return (
    <div>
      <h1>Hello! My colorid {color}</h1>
      <button onClick={onClick}>Click me</button>
    </div>
  );
};
// This is receive an children by default
// you can receve that children like this
export const ChildAsFC: React.FC<colorProps> = ({
  color,
  onClick,
  children,
}) => {
  return (
    <div>
      <h1>Hello! My colorid {color}</h1>
      {/* Now use that children here */}
      <p>{children}</p>
      <button onClick={onClick}>Click me</button>
    </div>
  );
};
