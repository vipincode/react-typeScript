type NameTagsProps = {
  name: string;
};

// const PropType = ({ name }: NameTagsProps) => {
//   return (
//     <main>
//       <header>
//         <h1>Hello</h1>
//         <p>My Name Is</p>
//       </header>
//       <section className="display-name">
//         <p>{name}</p>
//       </section>
//       <footer />
//     </main>
//   );
// };

// use if you want to use `props type`
// const PropType = (props: NameTagsProps) => {
//   return (
//     <main>
//       <header>
//         <h1>Hello</h1>
//         <p>My Name Is</p>
//       </header>
//       <section className="display-name">
//         <p>{props.name}</p>
//       </section>
//       <footer />
//     </main>
//   );
// };

// use if you want to use `inlime`
const PropType = (props: { name: string }) => {
  return (
    <main>
      <header>
        <h1>Hello</h1>
        <p>My Name Is</p>
      </header>
      <section className="display-name">
        <p>{props.name}</p>
      </section>
      <footer />
    </main>
  );
};

const Application = () => <PropType name="Vipin Singh" />;

export default Application;
