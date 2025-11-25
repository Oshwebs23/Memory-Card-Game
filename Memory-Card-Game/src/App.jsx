import Header from './components/Header';
import './styles/header.css';
import Card from './components/Card';
import { useState } from 'react';


function App() {
  const [flipped, setFlipped] = useState(false);
  const testCard = { id: 1, src: 'data:image/svg+xml;utf8,' + encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" width="150" height="150">
      <rect width="100%" height="100%" fill="#ddd"/>
      <text x="50%" y="50%" font-size="14" fill="#333" dominant-baseline="middle" text-anchor="middle">placeholder</text>
    </svg> `) }; /* placeholder image for card */

  const handleChoice = (card) => {
    console.log('handleChoice:', card);
    setFlipped(true);
  };

  return (
    <div className="App">
      <Header />
      <main>
        <h1>Manual Card test</h1>
        <Card card={testCard} handleChoice={handleChoice} flipped={flipped} />
        <div style={{ marginTop: 12 }}>
          <button onClick={() => setFlipped(false)}>Reset</button>
        </div>
      </main>
    </div>
  );
}

export default App;
