import Values from 'values.js';
import ColorList from './ColorList';
import Form from './Form';
import { useState } from 'react';

const App = () => {
  const [colors, setColors] = useState(new Values('#f15025').all(10));
  return (
    <main>
      <Form />
      <ColorList colors={colors} />
    </main>
  );
};
export default App;
