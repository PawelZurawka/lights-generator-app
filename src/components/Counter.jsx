import { Text } from './Text';
import { IconIncrement } from './icons/IconIncrement';
import { IconDecrement } from './icons/IconDecrement';
import { useState } from 'react';

import styles from './Counter.module.css';

export const Counter = props => {
  const [value, setValue] = useState(0);

  const handleIncrement = () => {
    setValue(value + 1);
  };

  const handleDecrement = () => {
    if (value <= 0) {
      return;
    }
    setValue(value - 1);
  };

  return (
    <div className={styles.wrapper}>
      <Text>
        {value} {props.text}
      </Text>
      <nav>
        <IconDecrement onClick={handleDecrement} />
        <IconIncrement onClick={handleIncrement} />
      </nav>
    </div>
  );
};
