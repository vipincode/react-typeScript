interface colorProps {
  color: string;
}

// Using this react dont know it it is a compoent
export const Child = ({ color }: colorProps) => {
  return (
    <div>
      <h1>Hello! My colorid {color}</h1>
    </div>
  );
};

// this is better approach and have upside and benefits
// this is have some additional properties, like `propType, contentType, display name etc.`
// to get those just use `ChildAsFC.displayName`
// FC stands for function compoenet
export const ChildAsFC: React.FC<colorProps> = ({ color }) => {
  return (
    <div>
      <h1>Hello! My colorid {color}</h1>
    </div>
  );
};

// Note thse are ether approach you can use any as per need.
