import { ChildAsFC } from './Child';

export const Parent = () => {
  return (
    <div>
      {/* `Hello, every one this is Vipin Singh` this text is children props, and it rceive bt children */}
      <ChildAsFC color="Red" onClick={() => console.log('Clicked!')}>
        Hello, every one this is Vipin Singh
      </ChildAsFC>
    </div>
  );
};
