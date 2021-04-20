import Button from './Button'
import './App.css';

function App() {
  return (
    <main>
      <div className="btn_groups">
        <Button>Default Button</Button>
        <Button color="red">Red Button</Button>
        <Button color="black">Black Button</Button>
        <Button type="white_back">Default Button</Button>
        <Button color="red" type="white_back">Red Button</Button>
        <Button color="black" type="white_back">Black Button</Button>
      </div>
    </main>
  );
}

export default App;
