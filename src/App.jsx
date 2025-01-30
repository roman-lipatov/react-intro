import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header name="Vlada" day="Monday" number={42} />
      <Footer />
    </div>
  );
}

export default App;
