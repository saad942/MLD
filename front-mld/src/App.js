import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './nav/Nav';
import Home from './home/Home';
import Depose from './depose/Depose';

function App() {
  return (
    <div className="App">
      <Nav />
      <Router>
        <Routes>
        <Route path="/depose" element={<Depose />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
