import logo from './logo.svg';
import CadastroEndereco from './pages/CadastroEndereco';
import './global.css'
import { router } from './routes';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import EditEndereco from './pages/EditEndereço';
import { DataProvider } from './context/dataContext';
import Map from './pages/Map';

function App() {
  return (
    <DataProvider>
    <BrowserRouter>

      <Routes>
        <Route path='/cadastro' element={<CadastroEndereco/>}/>
        <Route path='/edit' element={<EditEndereco/>}/>
        <Route path='/map' element={<Map/>}/>
      </Routes>
    </BrowserRouter>
    </DataProvider>
  );
}

export default App;
