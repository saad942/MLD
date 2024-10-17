import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './nav/Nav';
import Home from './home/Home';
import Depose from './depose/Depose';
import Client from './client/Client';

function App() {
  return (
    <div className="App">
      <Nav />
      <Router>
        <Routes>
        <Route path="/depose" element={<Depose />} />
          <Route path="/" element={<Home />} />
          <Route path='/clien' element={<Client/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
