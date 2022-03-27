interface colorProps {
  color: string;
}

export const Child = ({ color }: colorProps) => {
  return (
    <div>
      <h1>Hello! My colorid {color}</h1>
    </div>
  );
};
