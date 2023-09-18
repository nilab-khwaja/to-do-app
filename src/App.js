import { Route, Routes } from 'react-router-dom';
import './App.css';
import TodoWrapper from './component/TodoWrapper';
import Home from './component/Home';
import Navbar from './component/Navbar';

function App() {
  return (
    <div className="App">
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/app" element={<TodoWrapper />} />
        </Routes>
      </>
    </div>
  );
}

export default App;
