import { BrowserRouter as Router, Routes} from 'react-router-dom';
import Nav from './nav/Nav'
function App() {
  return (
    <div className="App">
      <Nav/>
      <Router>

        <Routes>

        </Routes>
      </Router>
    </div>
  );
}

export default App;
