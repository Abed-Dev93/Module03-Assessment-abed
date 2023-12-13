import './App.css'
import AppRoutes from '../src/routes/AppRoutes'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './layouts/Navbar'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <AppRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
