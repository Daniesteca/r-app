import logo from './logo.svg';
import './App.css';

//importamos los componentes
import CompShowProds from './prod/ShowProds';
import CompCreateProd from './prod/CreateProds';
import CompEditProd from './prod/EditProds';

//importamos el router
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<CompShowProds/>} />
          <Route path='/create' element={<CompCreateProd/>} />
          <Route path='/edit/:id' element={<CompEditProd/>} />
        </Routes>
      
      </BrowserRouter>
      
    </div>
  );
}

export default App;
