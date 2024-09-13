import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './Login';
import Home from './Home';
import RagistrationForm from './RagistrationForm';


function App() {
  return (
    
     <div className="App">
      <Routes>
        <Route path="/" element={<Login />}>
        </Route>
        <Route path="/RagistationForm" element={<RagistrationForm />}>
        </Route>


      </Routes>
     </div>
  );
}

export default App;
