import Header from './components/Header';
import './styles/header.css';
import Score from './components/Score';

function App() {
  const [score, setScore] = useState(0);
  const [attempts, setAttempts] = useState(0);
  
   return (
    <>
    <div className="App">
      <Header />
      <main>
        <h1>Welcome to the Memory Card Game!</h1>
        <Score score={score} attempts={attempts} />
        <GameBoard setScore={setScore} setAttempts={setAttempts} />
      </main>
    </div>
    </>
  );
}

export default App;
