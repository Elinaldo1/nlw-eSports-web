interface TitleButton{
  title: string;
}

const Button = (props: TitleButton) => (
  <button>{props.title}</button>
)

function App() {

  return (
    <>
      <h1>Hello NLW</h1>
      <Button title="ok1" />
      <Button title="ok2" />
      <Button title="ok3" />
    </>
  );
}

export default App
