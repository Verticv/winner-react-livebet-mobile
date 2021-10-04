/* eslint-disable react/react-in-jsx-scope */
import './App.css';
import LiveCard from './components/LiveCard';
import NavBar from './components/NavBar';
function App() {
  return (
    <div>
      <NavBar />
      <div>Header</div>
      <div>
        <div>Second Header</div>
        <LiveCard/>
        <LiveCard/>
        <LiveCard/>
      </div>
      <div>
        <div>Third Header</div>
        <LiveCard/>
        <LiveCard/>
        <LiveCard/>
      </div>
      <div>Footer</div>
    </div>
  );
}

export default App;
