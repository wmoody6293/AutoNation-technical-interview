import { useState } from 'react';
import { useData } from './hooks/useData';
import Card from './components/Card';
import './App.css';

function App() {
  const data = useData();

  console.log(data);

  return (
    <main className="app">
      <header className="header">
        <h3>Welcome, Will!</h3>
      </header>
      <section className="content">
        <Card imgURL="string" title="string" />
      </section>
    </main>
  );
}

export default App;
