import './App.css';
import { Counter } from './components/Counter';
import { Text } from './components/Text';
import { SingleLight } from './components/SingleLight';
import { Grid } from './components/Grid';
import { useState } from 'react';

function App() {
  const [rows, setRows] = useState(0);
  const [columns, setColumns] = useState(0);

  const handleIncrementRow = () => {
    setRows(rows + 1);
  };

  const handleDecrementRow = () => {
    if (rows <= 0) {
      return;
    }
    setRows(rows - 1);
  };

  const handleIncrementColumn = () => {
    if (columns >= 9) {
      return;
    }
    setColumns(columns + 1);
  };

  const handleDecrementColumn = () => {
    if (columns <= 0) {
      return;
    }
    setColumns(columns - 1);
  };

  const totalLights = rows * columns;

  const lights = Array.from({ length: totalLights });

  return (
    <div>
      <nav className="nav">
        <Text>{totalLights} bulbs</Text>
        <Counter
          onIncrement={handleIncrementRow}
          onDecrement={handleDecrementRow}
          count={rows}
          text={'rows'}
        />
        <Counter
          onIncrement={handleIncrementColumn}
          onDecrement={handleDecrementColumn}
          count={columns}
          text={'columns'}
        />
      </nav>
      <Grid columns={columns}>
        {lights.map((value, i) => {
          return <SingleLight key={i} />;
        })}
      </Grid>
    </div>
  );
}

export default App;
