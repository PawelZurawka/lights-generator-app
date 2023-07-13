import './App.css';
import { Counter } from './components/Counter';
import { Text } from './components/Text';
import { SingleLight } from './components/SingleLight';

function App() {
  return (
    <div>
      <nav className="nav">
        <Text>0 bulbs</Text>
        <Counter
          count={0}
          text={'rows'}
        />
        <Counter
          count={0}
          text={'columns'}
        />
      </nav>
      <div>
        <SingleLight />
      </div>
    </div>
  );
}

export default App;
