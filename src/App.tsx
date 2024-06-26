import React from 'react';
import ChartComponent from './components/ChartComponent';
import './styles.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Charting Application</h1>
      <ChartComponent />
    </div>
  );
};

export default App;
