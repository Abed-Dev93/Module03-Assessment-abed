import './App.css'
import Navbar from './layouts/Navbar'

function App() {

  const isOnDashboard = false

  return (
    <div className="App">
        <Navbar isOnDashboard={isOnDashboard} />
    </div>
  );
}

export default App;
